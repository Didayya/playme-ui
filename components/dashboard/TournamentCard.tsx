import Link from "next/link";

import { Tournament } from "@/types/tournament";

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  const live = tournament.status === "LIVE";

  return (
    <article className="min-w-0 overflow-hidden rounded-2xl border-2 border-black/10 bg-white transition hover:-translate-y-0.5 hover:border-black">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <span
            className={[
              "rounded-full px-2.5 py-1 text-[9px] font-black uppercase",
              live ? "bg-play-red text-white" : "bg-play-cyan text-black",
            ].join(" ")}
          >
            {live ? "Live now" : "Upcoming"}
          </span>

          {tournament.prize && (
            <span className="shrink-0 text-xs font-black">
              {tournament.prize}
            </span>
          )}
        </div>

        <h3 className="mt-5 truncate text-lg font-black">{tournament.title}</h3>

        <p className="mt-1 line-clamp-2 text-xs leading-5 text-black/50">
          {tournament.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
          <span className="text-[10px] font-bold text-black/40">
            {tournament.players}/{tournament.maxPlayers} players
          </span>

          <Link
            href={`/tournaments/${tournament.id}`}
            className="rounded-lg bg-black px-3 py-2 text-[10px] font-black uppercase text-white transition hover:bg-play-red"
          >
            {live ? "Join game" : "View"}
          </Link>
        </div>
      </div>
    </article>
  );
}
