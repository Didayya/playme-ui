import Link from "next/link";
export function HostTournament() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-play-green px-5 py-24 lg:px-8"
    >
      <div className="absolute right-0 top-0 h-full w-1/3 halftone-bg opacity-10" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-black tracking-[.2em] text-play-red">
            HOST YOUR OWN
          </span>
          <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-tight md:text-7xl">
            Create the quiz{" "}
            <span className="text-play-red">everyone remembers.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-black/65">
            Build a tournament, write your questions, invite your people, and
            let PlayMe handle the competition.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-full bg-[#111] px-7 py-4 font-black text-white shadow-[6px_6px_0_#22d3ee]"
          >
            Create a tournament
          </Link>
        </div>
        <div className="rounded-[2rem] border-2 border-black bg-white p-5 shadow-[10px_10px_0_#111]">
          <span className="text-xs font-black">YOUR TOURNAMENT</span>
          <strong className="mt-2 block text-3xl font-black">
            Family Friday
          </strong>
          <div className="mt-6 rounded-2xl bg-play-cyan p-5 font-black">
            Which planet is known as the Red Planet?
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-black">
            <span className="rounded-xl border-2 border-black p-3">
              A. Venus
            </span>
            <span className="rounded-xl border-2 border-black bg-play-red p-3 text-white">
              B. Mars
            </span>
            <span className="rounded-xl border-2 border-black p-3">
              C. Jupiter
            </span>
            <span className="rounded-xl border-2 border-black p-3">
              D. Saturn
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
