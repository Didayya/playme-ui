"use client";

import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";

interface AuthLayoutProps {
  children: React.ReactNode;
  tagline: string;
  heading: string;
  subheading: string;
}

export function AuthLayout({
  children,
  tagline,
  heading,
  subheading,
}: AuthLayoutProps) {
  return (
    <main className="grid min-h-screen bg-play-paper lg:grid-cols-2">
      {/* Decorative Sidebar (Large Screens Only) */}
      <section className="relative hidden overflow-hidden bg-[#111] p-10 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-play-red/80 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-play-cyan/60 blur-3xl" />
        <Link href="/" className="relative z-10">
          <Image
            src={siteConfig.logo}
            alt="PlayMe"
            width={150}
            height={70}
            style={{ height: "auto" }}
            className="brightness-0 invert"
            priority
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

      {/* Form Content Side */}
      <section className="flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-10 inline-flex text-sm font-bold lg:hidden"
          >
            ← Back to PlayMe
          </Link>
          <span className="text-xs font-black tracking-[.2em] text-play-red">
            {tagline}
          </span>
          <h1 className="mt-4 text-5xl font-black leading-[.9] tracking-tight">
            {heading}
          </h1>
          <p className="mt-5 text-black/55">{subheading}</p>
          {children}
        </div>
      </section>
    </main>
  );
}
