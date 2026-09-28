export const stats = [
  {
    label: "Games played",
    value: "128",
    change: "+12%",
    accent: "bg-play-cyan",
  },
  {
    label: "Games won",
    value: "84",
    change: "+8%",
    accent: "bg-play-green",
  },
  {
    label: "Win rate",
    value: "65.6%",
    change: "+4.2%",
    accent: "bg-play-red",
  },
  {
    label: "Leaderboard",
    value: "#24",
    change: "↑ 7",
    accent: "bg-black",
  },
];

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
    description: "David's birthday",
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
    description: "Alex's wedding",
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
    description: "Daniel's naming ceremony",
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

export const user = {
  id: "f07e3234-50fb-4cb1-a402-68ea00cbc5e8",
  username: "Alex",
  role: "USER",
  permissions: ["user:create", "user:read", "user:update", "user:delete"],
};
