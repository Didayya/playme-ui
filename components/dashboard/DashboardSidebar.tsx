"use client";

import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { navigation, secondaryNavigation } from "@/constants/navigation";
import { handleLogout } from "@/api/auth";

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function doLogout() {
    await handleLogout();

    router.push("/login");
    router.refresh();
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r-2 border-black bg-black text-white lg:flex">
        {/* Logo */}
        <div className="flex h-20 items-center border-b border-white/10 px-6">
          <Link href="/" className="group flex items-center">
            <span className="text-3xl font-black tracking-[-0.08em]">
              play
              <span className="text-play-cyan">me</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-1 flex-col px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            Menu
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex items-center gap-3 rounded-xl px-3 py-3",
                    "text-sm font-bold transition",
                    active
                      ? "bg-play-cyan text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs">
                    {item.icon}
                  </span>

                  {item.label}
                </Link>
              );
            })}
          </nav>

          <p className="mb-3 mt-8 px-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            Account
          </p>

          <nav className="space-y-1">
            {secondaryNavigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "flex items-center gap-3 rounded-xl px-3 py-3",
                    "text-sm font-bold transition",
                    active
                      ? "bg-play-cyan text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-xs">
                    {item.icon}
                  </span>

                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Host tournament */}
          <div className="mt-auto">
            <div className="overflow-hidden rounded-2xl bg-play-green p-4 text-black">
              <p className="text-[10px] font-black uppercase tracking-[0.15em]">
                Got questions?
              </p>

              <h3 className="mt-1 text-lg font-black leading-tight">
                Host your own tournament.
              </h3>

              <Link
                href="/tournaments/create"
                className="mt-4 flex items-center justify-center rounded-xl bg-black px-3 py-2.5 text-xs font-black text-white transition hover:bg-play-red"
              >
                Create tournament
              </Link>
            </div>

            <button
              onClick={doLogout}
              className="mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-white/50 transition hover:bg-white/10 hover:text-white"
            >
              <span>↪</span>
              Log out
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-black bg-black px-2 py-2 lg:hidden">
        <nav className="mx-auto flex max-w-lg items-center justify-around">
          {navigation.slice(0, 4).map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex min-w-16 flex-col items-center gap-1 rounded-xl px-3 py-2",
                  "text-[10px] font-black",
                  active ? "bg-play-cyan text-black" : "text-white/60",
                ].join(" ")}
              >
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
