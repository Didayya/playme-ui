"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const response = await fetch(
      mode === "login" ? "/api/app/auth/login" : "/api/app/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.message ?? "Something went wrong.");
      setLoading(false);
      return;
    }

    router.push("/play");
    router.refresh();
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link href="/" className="auth-back">
          ← Back to PlayMe
        </Link>
        <span className="eyebrow">
          {mode === "login" ? "WELCOME BACK" : "JOIN PLAYME"}
        </span>
        <h1>{mode === "login" ? "Ready to play?" : "Create your account."}</h1>
        <p>
          {mode === "login"
            ? "Sign in and get back into the competition."
            : "Create your PlayMe account and start competing."}
        </p>

        <form onSubmit={submit} className="auth-form">
          {mode === "signup" && (
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
          )}
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              required
              minLength={8}
              autoComplete={
                mode === "login" ? "current-password" : "new-password"
              }
            />
          </label>

          {error && <div className="form-error">{error}</div>}

          <button className="button button-full" disabled={loading}>
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Log in"
                : "Create account"}
          </button>
        </form>

        <div className="auth-switch">
          {mode === "login" ? (
            <>
              New to PlayMe? <Link href="/signup">Create an account</Link>
            </>
          ) : (
            <>
              Already have an account? <Link href="/login">Log in</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
