export const dashboardTournaments = [
  {
    id: "1",
    title: "Friday Family Face-Off",
    category: "General Knowledge",
    players: 48,
    maxPlayers: 64,
    status: "LIVE",
    prize: "₦50,000",
    startsAt: "Live now",
  },
  {
    id: "2",
    title: "The Big Brain Bash",
    category: "Mixed Trivia",
    players: 32,
    maxPlayers: 50,
    status: "UPCOMING",
    prize: "₦100,000",
    startsAt: "Today · 8:00 PM",
  },
  {
    id: "3",
    title: "Weekend Wonders",
    category: "Family",
    players: 96,
    maxPlayers: 100,
    status: "UPCOMING",
    prize: "Free",
    startsAt: "Sat · 6:00 PM",
  },
] as const;

export const leaderboard = [
  ["01", "Sarah Johnson", "1,920"],
  ["02", "Michael Chen", "1,840"],
  ["03", "You", "1,790"],
  ["04", "David Okoro", "1,710"],
  ["05", "Emma Williams", "1,640"],
];

export const recentGames = [
  {
    id: "1",
    name: "Science Sprint",
    position: "1st place",
    score: "980 pts",
    date: "Today",
  },
  {
    id: "2",
    name: "Pop Culture Clash",
    position: "4th place",
    score: "760 pts",
    date: "Yesterday",
  },
  {
    id: "3",
    name: "Family Friday",
    position: "2nd place",
    score: "890 pts",
    date: "Mon",
  },
];