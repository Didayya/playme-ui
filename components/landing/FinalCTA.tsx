import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-play-cyan px-5 py-24 text-center">
      <div className="absolute inset-0 halftone-bg opacity-5" />
      <div className="relative mx-auto max-w-4xl">
        <span className="text-xs font-black tracking-[.2em]">READY?</span>
        <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-tight md:text-8xl">
          Gather your people.
          <br />
          <span className="text-play-red">Let the games begin.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-black/60">
          One quiz. One leaderboard. One champion.
        </p>
        <Link
          href="/signup"
          className="mt-8 inline-flex rounded-full bg-play-red px-8 py-4 font-black text-white shadow-[6px_6px_0_#111]"
        >
          Start playing
        </Link>
      </div>
    </section>
  );
}
