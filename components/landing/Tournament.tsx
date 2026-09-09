export function Tournament() {
  return (
    <section id="tournaments" className="dark-section">
      <div className="tournament-copy">
        <span className="eyebrow">THE PLAYME EXPERIENCE</span>
        <h2>Every question gets you closer to <span>victory.</span></h2>
        <p>
          Join a tournament, answer the questions, watch your score rise, and
          fight your way to the top.
        </p>
      </div>

      <div className="steps">
        {[
          ["01", "Join", "Enter a live tournament."],
          ["02", "Answer", "Think fast and lock in your answer."],
          ["03", "Score", "Earn points for every correct answer."],
          ["04", "Win", "Finish at the top of the leaderboard."],
        ].map(([n, title, text]) => (
          <div className="step" key={n}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
