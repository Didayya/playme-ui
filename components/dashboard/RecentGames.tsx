import { recentGames } from "@/constants/dashboard";

export function RecentGames() {
  return (
    <section className="min-w-0 overflow-hidden rounded-2xl border-2 border-black/10 bg-white">
      <div className="flex items-center justify-between border-b border-black/10 p-5">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-play-red">
            Activity
          </p>

          <h2 className="mt-1 text-lg font-black">Recent games</h2>
        </div>

        <button className="text-xs font-black underline underline-offset-4">
          History
        </button>
      </div>

      <div className="divide-y divide-black/5">
        {recentGames.map((game) => (
          <div
            key={game.id}
            className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 sm:grid-cols-[1fr_auto_auto]"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-black">{game.name}</p>

              <p className="mt-1 text-[10px] font-medium text-black/40">
                {game.date}
              </p>
            </div>

            <span
              className={[
                "rounded-full px-2.5 py-1 text-[9px] font-black uppercase",
                game.position === "1st place"
                  ? "bg-play-green text-black"
                  : "bg-black/5 text-black/50",
              ].join(" ")}
            >
              {game.position}
            </span>

            <strong className="hidden text-sm font-black sm:block">
              {game.score}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}
