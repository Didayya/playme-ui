import { NextResponse } from "next/server";
import { clearAuthCookies, getAccessToken } from "@/lib/auth";
import { playmeApi } from "@/lib/playme-api";

export async function POST() {
  try {
    const token = await getAccessToken();

    if (token) {
      await playmeApi("/auth/logout", { method: "POST" }, token).catch(() => undefined);
    }
  } finally {
    await clearAuthCookies();
  }

  return NextResponse.json({ success: true });
}
