import { cookies } from "next/headers";

const ACCESS_TOKEN = "playme_access_token";
const REFRESH_TOKEN = "playme_refresh_token";

export type AuthResponse = {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  user?: {
    id: string;
    name?: string;
    email?: string;
  };
};

export async function setAuthCookies(result: AuthResponse) {
  const store = await cookies();
  const secure = process.env.PLAYME_COOKIE_SECURE === "true";
  const domain = process.env.PLAYME_COOKIE_DOMAIN || undefined;
  const maxAge = result.expiresIn ?? Number(process.env.PLAYME_ACCESS_TOKEN_TTL ?? 3600);

  store.set(ACCESS_TOKEN, result.accessToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge,
    domain,
  });

  if (result.refreshToken) {
    store.set(REFRESH_TOKEN, result.refreshToken, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 60 * 60 * 24 * 30,
      domain,
    });
  }
}

export async function clearAuthCookies() {
  const store = await cookies();
  store.delete(ACCESS_TOKEN);
  store.delete(REFRESH_TOKEN);
}

export async function getAccessToken() {
  return (await cookies()).get(ACCESS_TOKEN)?.value;
}

export async function getRefreshToken() {
  return (await cookies()).get(REFRESH_TOKEN)?.value;
}
