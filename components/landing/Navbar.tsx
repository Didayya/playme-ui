import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-play-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="relative h-12 w-28">
          <Image
            src={siteConfig.logo}
            alt="PlayMe"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm font-bold hover:text-play-red"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className=" rounded-full bg-play-cyan px-5 py-2.5 text-sm font-black text-white shadow-[4px_4px_0_#111]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-play-red px-5 py-2.5 text-sm font-black text-white shadow-[4px_4px_0_#111]"
          >
            Play now
          </Link>
        </div>
      </div>
    </header>
  );
}
