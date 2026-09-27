"use client";

import Link from "next/link";

interface PaywallDisplayProps {
  featureName: string;
}

export function PaywallDisplay({ featureName }: PaywallDisplayProps) {
  const handleUpgrade = () => {
    // Integrate your Stripe, Lemon Squeezy, or backend checkout process here
    console.log("Triggering subscription modal/redirect...");
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-play-paper p-6 overflow-hidden rounded-3xl border-4 border-black shadow-[8px_8px_0_#111]">
      {/* Decorative vector/blur graphics matching branding */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-play-cyan/20 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-play-red/25 blur-3xl" />

      <div className="relative z-10 max-w-lg text-center">
        <span className="inline-block rounded-full border-2 border-black bg-play-green px-4 py-1.5 text-xs font-black tracking-[.2em] text-black shadow-[3px_3px_0_#111] uppercase">
          PRO FEATURE 👑
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-none tracking-tight text-black">
          Unlock access to <br />
          <span className="text-play-red bg-play-red/10 px-2 rounded-xl inline-block mt-1">
            {featureName}
          </span>
        </h2>

        <p className="mt-6 text-black/70 font-medium text-base max-w-sm mx-auto">
          Your current account tier doesn&apos;t include permissions for this
          arena. Upgrade to unlock tournaments, live score analytics, and
          exclusive cash rooms.
        </p>

        {/* Action Triggers */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleUpgrade}
            className="w-full sm:w-auto rounded-2xl bg-play-green border-2 border-black px-8 py-4 font-black text-black shadow-[5px_5px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#111] transition-all"
          >
            Upgrade Account Now
          </button>

          <Link
            href="/play"
            className="w-full sm:w-auto rounded-2xl bg-white border-2 border-black px-8 py-4 font-black text-black shadow-[5px_5px_0_#111] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_#111] transition-all text-center"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <p className="mt-8 text-xs font-bold text-black/45 tracking-widest">
          COMPETE · LEVEL UP · WIN TOGETHER
        </p>
      </div>
    </div>
  );
}
