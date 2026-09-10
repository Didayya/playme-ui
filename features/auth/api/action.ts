"use server";

import { setTokens } from "@/lib/auth/cookies";

export async function authenticate(
  mode: "login" | "signup",
  formData: FormData,
) {
  const payload = Object.fromEntries(formData.entries());
  const API_URL = process.env.BACKEND_API_URL || "http://localhost:8000";

  try {
    const response = await fetch(`${API_URL}/api/app/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message ?? "Authentication failed.",
      };
    }

    // Example: Securely save your auth token in an HttpOnly cookie
    if (data.accessToken) {
      setTokens(data);
    }

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: "Unable to connect to the authentication server.",
    };
  }
}
