import Link from "next/link";

export function WelcomeBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-black p-6 text-white sm:p-8 lg:p-10">
      {/* Decorative circles */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-play-red" />

      <div className="absolute -bottom-16 right-28 h-32 w-32 rounded-full bg-play-cyan" />

      <div className="absolute right-10 top-16 h-8 w-8 rotate-12 bg-play-green" />

      <div className="relative z-10 max-w-2xl">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-play-green">
          Welcome back
        </p>

        <h1 className="mt-2 max-w-xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          Ready to put your knowledge to the test?
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
          Jump into a tournament, challenge your friends, and climb the
          leaderboard.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/tournaments"
            className="rounded-xl bg-play-red px-5 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:scale-[1.02]"
          >
            Find a tournament
          </Link>

          <Link
            href="/tournaments/create"
            className="rounded-xl bg-play-green px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:scale-[1.02]"
          >
            Host one
          </Link>
        </div>
      </div>
    </section>
  );
}
