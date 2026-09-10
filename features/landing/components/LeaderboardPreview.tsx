const players = [
  ["01", "Sarah", "920"],
  ["02", "David", "875"],
  ["03", "Michael", "840"],
  ["04", "Emma", "810"],
];

export function LeaderboardPreview() {
  return (
    <section className="section leaderboard-section">
      <div className="leader-copy">
        <span className="eyebrow">LIVE LEADERBOARD</span>
        <h2>See the competition<br /><span>as it happens.</span></h2>
        <p>
          No waiting for results. Scores update as players answer, so every
          question feels like it matters.
        </p>
      </div>

      <div className="leaderboard">
        <div className="leader-head">
          <span>PLAYME LIVE</span>
          <span>ROUND 03</span>
        </div>
        {players.map(([rank, name, score]) => (
          <div className={`player-row ${rank === "03" ? "current" : ""}`} key={rank}>
            <span className="rank">{rank}</span>
            <strong>{name}</strong>
            <span>{score}</span>
          </div>
        ))}
        <div className="you-row">YOU&apos;RE #3 <span>KEEP GOING →</span></div>
      </div>
    </section>
  );
}
