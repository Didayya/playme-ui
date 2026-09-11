"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const form = new FormData(e.currentTarget);
      const payload = Object.fromEntries(form.entries());
      const r = await fetch(
        mode === "login" ? "http://localhost:8000/api/app/auth/login" : "http://localhost:8000/api/app/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await r.json();
      if (!r.ok) {
        setError(data.message ?? "Something went wrong.");
        return;
      }
      router.push("/play");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="grid min-h-screen bg-play-paper lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-[#111] p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-play-red/80 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-play-cyan/60 blur-3xl" />
        <Link href="/" className="relative z-10">
          <Image
            src={siteConfig.logo}
            alt="PlayMe"
            width={150}
            height={70}
            className="brightness-0 invert"
          />
        </Link>
        <div className="relative z-10 max-w-xl">
          <span className="rounded-full border border-play-green bg-play-green/10 px-4 py-2 text-xs font-black tracking-[.18em] text-play-green">
            PLAYME LIVE
          </span>
          <h2 className="mt-6 text-6xl font-black leading-[.85] tracking-tight">
            Your next
            <br />
            <span className="text-play-cyan">win</span> starts here.
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            Join family-friendly quiz tournaments, climb the leaderboard and
            make game night unforgettable.
          </p>
        </div>
        <p className="relative z-10 text-xs font-bold text-white/35">
          THINK FAST · PLAY TOGETHER · WIN THE ROOM
        </p>
      </section>
      <section className="flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm font-bold lg:hidden"
          >
            ← Back to PlayMe
          </Link>
          <span className="text-xs font-black tracking-[.2em] text-play-red">
            {mode === "login" ? "WELCOME BACK" : "JOIN PLAYME"}
          </span>
          <h1 className="mt-4 text-5xl font-black leading-[.9] tracking-tight">
            {mode === "login" ? "Ready to play?" : "Create your account."}
          </h1>
          <p className="mt-5 text-black/55">
            {mode === "login"
              ? "Sign in and get back into the competition."
              : "Create your PlayMe account and start competing."}
          </p>
          <form onSubmit={submit} className="mt-8 space-y-5">
            {mode === "signup" && (
              <label className="block text-sm font-black">
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-2xl border-2 border-black bg-white px-4 py-3.5 outline-none focus:border-play-red"
                />
              </label>
            )}
            <label className="block text-sm font-black">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-2xl border-2 border-black bg-white px-4 py-3.5 outline-none focus:border-play-cyan"
              />
            </label>
            <label className="block text-sm font-black">
              Password
              <input
                name="password"
                type="password"
                minLength={8}
                required
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                className="mt-2 w-full rounded-2xl border-2 border-black bg-white px-4 py-3.5 outline-none focus:border-play-green"
              />
            </label>
            {error && (
              <div className="rounded-2xl border-2 border-play-red bg-play-red/10 px-4 py-3 text-sm font-bold text-play-red">
                {error}
              </div>
            )}
            <button
              disabled={loading}
              className="w-full rounded-2xl bg-play-red px-5 py-4 font-black text-white shadow-[5px_5px_0_#111] disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                  ? "Log in"
                  : "Create account"}
            </button>
          </form>
          <div className="mt-7 text-center text-sm text-black/55">
            {mode === "login" ? (
              <>
                New to PlayMe?{" "}
                <Link className="font-black text-play-red" href="/signup">
                  Create an account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link className="font-black text-play-red" href="/login">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
