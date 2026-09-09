import { NextResponse } from "next/server";
import { playmeApi } from "@/lib/playme-api";
import { setAuthCookies, type AuthResponse } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await playmeApi<AuthResponse>("/app/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    });

    await setAuthCookies(result);

    return NextResponse.json({
      user: result.user ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Unable to sign in." },
      { status: 401 },
    );
  }
}
