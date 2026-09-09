import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/auth";
import { playmeApi } from "@/lib/playme-api";

export async function GET() {
  const token = await getAccessToken();

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const user = await playmeApi("/auth/me", { method: "GET" }, token);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
