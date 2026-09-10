export type TournamentStatus = "LIVE" | "UPCOMING" | "COMPLETED";

export interface Tournament {
  id: string;
  title: string;
  description: string;
  players: number;
  maxPlayers: number;
  status: TournamentStatus;
  prize?: string;
  startsAt?: string;
}
