import Link from "next/link";

import { TournamentCard } from "./TournamentCard";
import { dashboardTournaments } from "@/constants/dashboard";

export function TournamentSection() {
  return (
    <section className="min-w-0">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-play-red">
            Compete
          </p>

          <h2 className="mt-1 text-xl font-black sm:text-2xl">Tournaments</h2>
        </div>

        <Link
          href="/tournaments"
          className="shrink-0 text-xs font-black underline decoration-2 underline-offset-4"
        >
          View all
        </Link>
      </div>

      <div className="grid min-w-0 gap-4 md:grid-cols-2">
        {dashboardTournaments.slice(0, 4).map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </section>
  );
}
