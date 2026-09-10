import { cookies } from 'next/headers';

const ACCESS_TOKEN_NAME = 'access_token';
const REFRESH_TOKEN_NAME = 'refresh_token';

// Helper to determine cookie age (e.g., 15 mins for access token, 7 days for refresh)
const ACCESS_TOKEN_MAX_AGE = 15 * 60; 
const REFRESH_TOKEN_MAX_AGE = 7 * 24 * 60 * 60;

export async function getAccessToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_NAME)?.value;
}

export async function getRefreshToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(REFRESH_TOKEN_NAME)?.value;
}

export interface TokenPayload {
  accessToken: string;
  refreshToken?: string; // Optional in case your backend doesn't rotationally issue a new refresh token every time
}

export async function setTokens({ accessToken, refreshToken }: TokenPayload): Promise<void> {
  const cookieStore = await cookies();

  // Secure cookie configuration options
  const baseOptions = {
    httpOnly: true, // Prevents client-side JS from reading the tokens (Mitigates XSS)
    secure: process.env.NODE_ENV === 'production', // Requires HTTPS in production
    sameSite: 'lax' as const, // Protects against CSRF attacks
    path: '/',
  };

  if (accessToken) {
    cookieStore.set(ACCESS_TOKEN_NAME, accessToken, {
      ...baseOptions,
      maxAge: ACCESS_TOKEN_MAX_AGE,
    });
  }

  if (refreshToken) {
    cookieStore.set(REFRESH_TOKEN_NAME, refreshToken, {
      ...baseOptions,
      maxAge: REFRESH_TOKEN_MAX_AGE,
    });
  }
}

export async function clearTokens(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN_NAME);
  cookieStore.delete(REFRESH_TOKEN_NAME);
}
