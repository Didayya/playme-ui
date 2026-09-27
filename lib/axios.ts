/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

import { useRouter } from "next/router";

/**
 * --------------------------------------------------------------------------
 * API CONFIGURATION
 * --------------------------------------------------------------------------
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  console.warn("NEXT_PUBLIC_API_URL is not configured.");
}

/**
 * Main Axios instance used by the application.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10_000,

  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Separate Axios instance for authentication requests.
 *
 * IMPORTANT:
 * We don't use `axiosInstance` for refreshing tokens because it contains
 * the 401 interceptor. If the refresh request itself returns 401, it could
 * recursively attempt to refresh again.
 */
const refreshClient = axios.create({
  baseURL: API_URL,
  timeout: 10_000,

  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * --------------------------------------------------------------------------
 * TOKEN HELPERS
 * --------------------------------------------------------------------------
 *
 * Keeping localStorage access in helper functions makes the authentication
 * logic easier to maintain and avoids directly accessing localStorage
 * throughout the interceptor code.
 */

const getAccessToken = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem("accessToken");
};

const getRefreshToken = (): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return localStorage.getItem("refreshToken");
};

export const saveAccessToken = (token: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem("accessToken", token);
};

export const saveRefreshToken = (token: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem("refreshToken", token);
};

const clearAuthTokens = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

/**
 * --------------------------------------------------------------------------
 * REQUEST INTERCEPTOR
 * --------------------------------------------------------------------------
 *
 * Runs before every API request.
 *
 * Responsibilities:
 * 1. Attach the access token.
 * 2. Attach the user's preferred language.
 */

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessToken();

    /**
     * Attach JWT access token.
     */
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    /**
     * Attach language preference.
     *
     * Falls back to English if no language has been selected.
     */
    const language =
      typeof window !== "undefined"
        ? localStorage.getItem("language") || "en"
        : "en";

    config.headers["Accept-Language"] = language;

    return config;
  },

  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/**
 * --------------------------------------------------------------------------
 * TOKEN REFRESH STATE
 * --------------------------------------------------------------------------
 *
 * Multiple API requests can expire at the same time.
 *
 * Without this mechanism:
 *
 *   Request A -> 401 -> refresh
 *   Request B -> 401 -> refresh
 *   Request C -> 401 -> refresh
 *
 * All three requests could attempt to refresh the token simultaneously.
 *
 * Instead, we keep one refresh request in progress and let the other
 * requests wait for it.
 */

let refreshPromise: Promise<string> | null = null;

/**
 * Refresh the access token.
 *
 * Returns the new access token when successful.
 */
const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = getRefreshToken();

  if (!refreshToken) {
    throw new Error("No refresh token available.");
  }

  /**
   * Use the dedicated refreshClient instead of axiosInstance.
   */
  const { data } = await refreshClient.post("/auth/refresh-token", {
    token: refreshToken,
  });

  const newAccessToken = data.accessToken;

  if (!newAccessToken) {
    throw new Error("Refresh endpoint did not return an access token.");
  }

  /**
   * Persist the new access token.
   */
  saveAccessToken(newAccessToken);

  return newAccessToken;
};

/**
 * --------------------------------------------------------------------------
 * RESPONSE INTERCEPTOR
 * --------------------------------------------------------------------------
 *
 * Handles expired access tokens.
 *
 * Flow:
 *
 *   API request
 *       ↓
 *     401
 *       ↓
 *   refresh token
 *       ↓
 *   new access token
 *       ↓
 *   retry original request
 *
 * If refresh fails:
 *
 *   clear authentication
 *       ↓
 *   redirect to login
 */

axiosInstance.interceptors.response.use(
  /**
   * Successful response.
   */
  (response) => response,

  /**
   * Failed response.
   */
  async (error: AxiosError) => {
    const originalRequest = error.config;

    /**
     * Axios errors don't always contain a response.
     *
     * For example:
     * - Network failure
     * - Timeout
     * - DNS error
     *
     * Therefore we must check `error.response` before accessing status.
     */
    if (!error.response || !originalRequest) {
      return Promise.reject(error);
    }

    /**
     * Only handle HTTP 401 responses.
     */
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    /**
     * Prevent an infinite retry loop.
     */
    if ((originalRequest as any)._retry) {
      return Promise.reject(error);
    }

    (originalRequest as any)._retry = true;

    try {
      /**
       * If another request is already refreshing the token,
       * wait for that refresh operation instead of starting another one.
       */
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
      }

      const newAccessToken = await refreshPromise;

      /**
       * Attach the new token specifically to the request
       * that originally failed.
       */
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      /**
       * Retry the original request.
       */
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      /**
       * The refresh token is invalid/expired.
       *
       * Remove authentication state.
       */
      clearAuthTokens();

      /**
       * Redirect the browser to the login page.
       */
      if (typeof window !== "undefined") {
        const router = useRouter();
        router.push("/login");
      }

      return Promise.reject(refreshError);
    }
  },
);

export default axiosInstance;
