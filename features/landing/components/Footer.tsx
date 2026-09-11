import Image from "next/image";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#111] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src={siteConfig.logo}
            alt="PlayMe"
            width={120}
            height={55}
            className="brightness-0 invert"
          />
          <p className="mt-3 text-sm text-white/50">
            Family-friendly competition, made fun.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm font-bold">
          <a href="#features" className="hover:text-play-green">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-play-cyan">
            How it works
          </a>
          <a href="#tournaments" className="hover:text-play-red">
            Tournaments
          </a>
          <a href="/login">Log in</a>
        </div>
        <small className="text-white/40">
          © {new Date().getFullYear()} PlayMe
        </small>
      </div>
    </footer>
  );
}
