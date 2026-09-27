"use client";

import { FormEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import axios from "axios";
import axiosInstance, { saveAccessToken, saveRefreshToken } from "@/lib/axios";

import { useAuth } from "@/context/AuthContext";
import { AuthLayout } from "../AuthLayout";

export function SignupForm() {
  const router = useRouter();
  const { refreshAuth } = useAuth();

  // Field values state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Structural error messaging state
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  // Live validator logic engine
  const validateField = (
    name: string,
    value: string,
    currentData = formData,
  ) => {
    let errorMsg = "";

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        errorMsg = "Please enter a valid email address.";
      }
    }

    if (name === "password") {
      if (value && value.length < 8) {
        errorMsg = "Password must be at least 8 characters long.";
      }
    }

    if (name === "confirmPassword" || name === "password") {
      const pass = name === "password" ? value : currentData.password;
      const confirmPass =
        name === "confirmPassword" ? value : currentData.confirmPassword;

      if (confirmPass && pass !== confirmPass) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: "Passwords do not match.",
        }));
        return;
      } else if (confirmPass && pass === confirmPass) {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    validateField(name, value, updatedData);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Do not submit if active errors exist
    if (errors.email || errors.password || errors.confirmPassword) return;

    setLoading(true);
    setServerError("");

    const payload = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axiosInstance.post("/app/auth/signup", payload);
      saveAccessToken(response.data.accessToken);
      saveRefreshToken(response.data.accessToken)
      await refreshAuth();

      router.push("/play");
      router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setServerError(err.response.data?.message ?? "Something went wrong.");
      } else {
        setServerError("Unable to connect. Please try again.");
      }
      setLoading(false);
    }
  }

  // Determine if submission is safety-blocked
  const isFormInvalid =
    !formData.username ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    Object.values(errors).some((msg) => msg !== "");

  return (
    <AuthLayout
      tagline="JOIN PLAYME"
      heading="Create your account."
      subheading="Create your PlayMe account and start competing."
    >
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm font-black text-black">
          username
          <input
            name="username"
            type="text"
            required
            disabled={loading}
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            className="mt-2 w-full rounded-2xl border-2 border-black bg-white px-4 py-3.5 outline-none focus:border-play-red disabled:opacity-50"
          />
        </label>

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
              errors.email
                ? "border-play-red focus:border-play-red"
                : "border-black"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-play-red">
              {errors.email}
            </p>
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
            autoComplete="new-password"
            className={`mt-2 w-full rounded-2xl border-2 bg-white px-4 py-3.5 outline-none focus:border-play-green disabled:opacity-50 ${
              errors.password
                ? "border-play-red focus:border-play-red"
                : "border-black"
            }`}
          />
          {errors.password && (
            <p className="mt-1 text-xs font-bold text-play-red">
              {errors.password}
            </p>
          )}
        </label>

        <label className="block text-sm font-black text-black">
          Confirm Password
          <input
            name="confirmPassword"
            type="password"
            required
            disabled={loading}
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            className={`mt-2 w-full rounded-2xl border-2 bg-white px-4 py-3.5 outline-none focus:border-play-green disabled:opacity-50 ${
              errors.confirmPassword
                ? "border-play-red focus:border-play-red"
                : "border-black"
            }`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-xs font-bold text-play-red">
              {errors.confirmPassword}
            </p>
          )}
        </label>

        {serverError && (
          <div className="rounded-2xl border-2 border-play-red bg-play-red/10 px-4 py-3 text-sm font-bold text-play-red">
            {serverError}
          </div>
        )}

        <button
          disabled={loading || isFormInvalid}
          className="w-full rounded-2xl bg-play-red px-5 py-4 font-black text-white shadow-[5px_5px_0_#111] disabled:opacity-40 disabled:shadow-none disabled:translate-x-0.5 disabled:translate-y-0.5 transition-all"
        >
          {loading ? "Please wait..." : "Create account"}
        </button>
      </form>

      <div className="mt-7 text-center text-sm text-black/55">
        Already have an account?{" "}
        <Link className="font-black text-play-red" href="/login">
          Log in
        </Link>
      </div>
    </AuthLayout>
  );
}
