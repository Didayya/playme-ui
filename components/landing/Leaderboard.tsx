import { players } from "@/constants/landing";

export function Leaderboard() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
      <div>
        <span className="text-xs font-black tracking-[.2em] text-play-red">
          LIVE LEADERBOARD
        </span>
        <h2 className="mt-5 text-5xl font-black leading-[.9] tracking-tight md:text-7xl">
          See the competition{" "}
          <span className="text-play-cyan">as it happens.</span>
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
          No waiting for results. Scores update as players answer, so every
          question feels like it matters.
        </p>
      </div>
      <div className="rounded-4xl border-2 border-black bg-white p-5 shadow-[8px_8px_0_#c7ff31]">
        <div className="flex justify-between border-b-2 border-black pb-4 text-xs font-black">
          <span>PLAYME LIVE</span>
          <span>ROUND 03</span>
        </div>
        {players.map(([r, n, s]) => (
          <div
            key={r}
            className={`grid grid-cols-[50px_1fr_auto] items-center border-b border-black/10 py-5 ${r === "03" ? "rounded-xl bg-play-cyan px-3 -mx-2" : ""}`}
          >
            <span className="text-xs font-black opacity-50">{r}</span>
            <strong>{n}</strong>
            <span className="font-black">{s}</span>
          </div>
        ))}
        <div className="mt-4 flex justify-between rounded-xl bg-play-green px-4 py-3 text-xs font-black">
          <span>YOU&apos;RE #3</span>
          <span>KEEP GOING →</span>
        </div>
      </div>
    </section>
  );
}
