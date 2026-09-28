import { authTokens } from "@/constants/auth";

// Login handler
export async function handleLogin(payload: unknown) {
  return authTokens;
}

export async function handleSignup(payload: unknown) {
  return authTokens;
}

// Logout handler adapted to use axiosInstance
export async function handleLogout() {
  return authTokens;
}