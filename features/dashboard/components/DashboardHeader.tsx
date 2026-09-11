"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function DashboardHeader() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        // const response = await fetch("/api/auth/me");

        // if (!response.ok) {
        //   return;
        // }

        // const data = await response.json();
        const data: User = {
          id: "1",
          name: "Anthony",
          email: "email@email.com"
        }
        setUser(data);
      } catch {
        // Ignore failed user lookup here.
      }
    }

    loadUser();
  }, []);

  const initials =
    user?.name
      ?.split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ?? "PL";

  return (
    <header className="sticky top-0 z-40 border-b-2 border-black/10 bg-[#f4f4f0]/95 backdrop-blur">
      <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Mobile logo */}
        <Link
          href="/play"
          className="text-2xl font-black tracking-[-0.08em] lg:hidden"
        >
          play<span className="text-play-red">me</span>
        </Link>

        {/* Search */}
        <div className="relative hidden max-w-md flex-1 md:block">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm">
            ⌕
          </span>

          <input
            type="search"
            placeholder="Search tournaments, players..."
            className="h-11 w-full rounded-xl border-2 border-black/10 bg-white pl-10 pr-4 text-sm font-medium outline-none transition placeholder:text-black/30 focus:border-black"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black/10 bg-white text-lg transition hover:border-black">
            ♢
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-play-red" />
          </button>

          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl border-2 border-black/10 bg-white p-1.5 pr-3 transition hover:border-black"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-play-green text-xs font-black">
              {initials}
            </div>

            <div className="hidden text-left sm:block">
              <p className="max-w-32 truncate text-xs font-black">
                {user?.name ?? "Player"}
              </p>

              <p className="text-[10px] font-medium text-black/40">
                View profile
              </p>
            </div>

            <span className="hidden text-xs sm:block">⌄</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
