import { leaderboard } from "@/constants/dashboard";

export function Leaderboard() {
  return (
    <section className="w-full min-w-0 overflow-hidden rounded-2xl border-2 border-black/10 bg-[#111] p-4 text-white sm:p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-play-cyan">
            Global
          </p>

          <h2 className="mt-1 truncate text-lg font-black">Leaderboard</h2>
        </div>

        <span className="shrink-0 rounded-full bg-play-red px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-white sm:px-3 sm:text-[10px]">
          This week
        </span>
      </div>

      {/* Players */}
      <div className="mt-4 space-y-1.5">
        {leaderboard.map(([rank, name, score]) => {
          const isYou = name === "You";

          return (
            <div
              key={rank}
              className={[
                "grid w-full min-w-0 grid-cols-[28px_minmax(0,1fr)_auto]",
                "items-center gap-2 rounded-xl px-2.5 py-2.5",
                "transition-colors",
                isYou
                  ? "bg-play-cyan text-black"
                  : "text-white hover:bg-white/5",
              ].join(" ")}
            >
              {/* Rank */}
              <span
                className={[
                  "text-xs font-black",
                  isYou ? "opacity-60" : "text-white/40",
                ].join(" ")}
              >
                {rank}
              </span>

              {/* Name */}
              <strong className="min-w-0 truncate text-sm font-black">
                {name}
              </strong>

              {/* Score */}
              <span className="whitespace-nowrap text-sm font-black">
                {score}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
