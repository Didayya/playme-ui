import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-play-paper">
      <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-play-cyan/50 blur-2xl" />
      <div className="absolute left-0 top-0 h-40 w-40 halftone-bg opacity-15" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <span className="inline-flex rounded-full border-2 border-black bg-play-green px-4 py-1.5 text-xs font-black tracking-[.18em]">
            THE FAMILY QUIZ TOURNAMENT
          </span>
          <h1 className="mt-7 max-w-4xl text-[clamp(3.8rem,8vw,7.7rem)] font-black leading-[.82] tracking-[-.07em]">
            Think fast.
            <br />
            <span className="text-play-red">Play together.</span>
            <br />
            Win the room.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
            PlayMe brings friends and families together for live online quiz
            tournaments where every answer counts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="rounded-full bg-play-red px-7 py-4 font-black text-white shadow-[6px_6px_0_#111]"
            >
              Start playing
            </Link>
            <a
              href="#how-it-works"
              className="rounded-full border-2 border-black bg-white px-7 py-4 font-black shadow-[4px_4px_0_#22d3ee]"
            >
              See how it works
            </a>
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-black/55">
            ● Family-friendly · Live competition · Real-time scores
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-xl play-float">
          <div className="absolute -left-8 top-10 z-10 rotate-[-8deg] rounded-2xl border-2 border-black bg-play-green px-5 py-4 text-sm font-black shadow-[5px_5px_0_#111]">
            WHO KNOWS THE MOST?
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border-2 border-black bg-play-cyan shadow-[12px_12px_0_#111]">
            <Image
              src={siteConfig.logo}
              alt="PlayMe"
              fill
              className="object-contain p-12 opacity-15"
            />
            <div className="absolute inset-6 rounded-[1.5rem] border-2 border-black bg-white p-6">
              <div className="flex justify-between text-xs font-black">
                <span>PLAYME LIVE</span>
                <span>ROUND 03</span>
              </div>
              <div className="mt-8 rounded-2xl bg-play-red p-6 text-white">
                <p className="text-xs font-bold uppercase opacity-80">
                  Question 03
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Which planet is known as the Red Planet?
                </h2>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-black">
                <div className="rounded-xl border-2 border-black p-3">
                  A. Venus
                </div>
                <div className="rounded-xl border-2 border-black bg-play-green p-3">
                  B. Mars ✓
                </div>
                <div className="rounded-xl border-2 border-black p-3">
                  C. Jupiter
                </div>
                <div className="rounded-xl border-2 border-black p-3">
                  D. Saturn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
