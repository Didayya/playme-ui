import { NextResponse } from "next/server";
import { getRefreshToken, setAuthCookies, clearAuthCookies, type AuthResponse } from "@/lib/auth";
import { playmeApi } from "@/lib/playme-api";

export async function POST() {
  const refreshToken = await getRefreshToken();

  if (!refreshToken) {
    await clearAuthCookies();
    return NextResponse.json({ message: "No refresh token." }, { status: 401 });
  }

  try {
    const result = await playmeApi<AuthResponse>("/auth/refresh", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    });

    await setAuthCookies(result);
    return NextResponse.json({ success: true });
  } catch {
    await clearAuthCookies();
    return NextResponse.json({ message: "Session expired." }, { status: 401 });
  }
}
