const stats = [
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

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border-2 border-black/10 bg-white p-4 sm:p-5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-black uppercase tracking-[0.12em] text-black/40 sm:text-[10px]">
              {stat.label}
            </span>

            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${stat.accent}`}
            />
          </div>

          <div className="mt-3 flex items-end justify-between gap-2">
            <strong className="text-2xl font-black sm:text-3xl">
              {stat.value}
            </strong>

            <span className="text-[10px] font-black text-black/40">
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}