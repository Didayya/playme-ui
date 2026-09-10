"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authenticate } from "../api/action";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await authenticate(mode, formData);

      if (!result.success) {
        setError(result.error);
        return;
      }

      router.push("/play");
      router.refresh();
    });
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <Link href="/" className="auth-back">← Back to PlayMe</Link>
        <span className="eyebrow">{mode === "login" ? "WELCOME BACK" : "JOIN PLAYME"}</span>
        <h1>{mode === "login" ? "Ready to play?" : "Create your account."}</h1>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {mode === "signup" && (
            <label>Name <input name="name" required autoComplete="name" /></label>
          )}
          <label>Email <input name="email" type="email" required autoComplete="email" /></label>
          <label>Password 
            <input 
              name="password" 
              type="password" 
              required 
              minLength={8} 
              autoComplete={mode === "login" ? "current-password" : "new-password"} 
            />
          </label>
          
          {error && <div className="form-error">{error}</div>}
          
          <button className="button button-full" disabled={isPending}>
            {isPending ? "Please wait..." : mode === "login" ? "Log in" : "Create account"}
          </button>
        </form>
        
        {/* Auth switch link remains the same */}
      </div>
    </div>
  );
}
