"use client";

import Link from "next/link";

import { FormEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import { handleLogin } from "@/api/auth";
import { AuthLayout } from "../AuthLayout";
import { saveAccessToken, saveRefreshToken } from "@/lib/axios";

export function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (emailError) return;

    setLoading(true);
    setServerError("");

    const response = await handleLogin(formData);
    saveAccessToken(response.accessToken);
    saveRefreshToken(response.refreshToken);

    if (response) {
      router.push("/play");
      router.refresh();
    } else {
      setServerError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  }

  const isFormInvalid =
    !formData.email || !formData.password || emailError !== "";

  return (
    <AuthLayout
      tagline="WELCOME BACK"
      heading="Ready to play?"
      subheading="Sign in and get back into the competition."
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm font-black text-black">
          Email
          <input
            name="email"
            type="email"
            required
            disabled={loading}
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            className={`mt-2 w-full rounded-2xl border-2 bg-white px-4 py-3.5 outline-none focus:border-play-cyan disabled:opacity-50 ${
              emailError
                ? "border-play-red focus:border-play-red"
                : "border-black"
            }`}
          />
          {emailError && (
            <p className="mt-1 text-xs font-bold text-play-red">{emailError}</p>
          )}
        </label>

        <label className="block text-sm font-black text-black">
          Password
          <input
            name="password"
            type="password"
            required
            disabled={loading}
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            className="mt-2 w-full rounded-2xl border-2 border-black bg-white px-4 py-3.5 outline-none focus:border-play-green disabled:opacity-50"
          />
        </label>

        {serverError && (
          <div className="rounded-2xl border-2 border-play-red bg-play-red/10 px-4 py-3 text-sm font-bold text-play-red">
            {serverError}
          </div>
        )}

        <button
          disabled={loading || isFormInvalid}
          className="w-full rounded-2xl bg-play-cyan px-5 py-4 font-black text-white shadow-[5px_5px_0_#111] transition-all"
        >
          {loading ? "Please wait..." : "Log in"}
        </button>
      </form>

      <div className="mt-7 text-center text-sm text-black/55">
        New to PlayMe?{" "}
        <Link className="font-black text-play-red" href="/signup">
          Create an account
        </Link>
      </div>
    </AuthLayout>
  );
}
