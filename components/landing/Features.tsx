const features = [
  [
    "01",
    "Play together",
    "Challenge family, friends, classmates, or your wider community.",
  ],
  [
    "02",
    "Compete live",
    "Answer questions in real time and watch the leaderboard change.",
  ],
  [
    "03",
    "Climb the board",
    "Every correct answer moves you closer to becoming the champion.",
  ],
  [
    "04",
    "Make it yours",
    "Create your own tournament and bring your questions to the game.",
  ],
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="section-heading">
        <span className="eyebrow">WHY PLAYME</span>
        <h2>
          Game night just
          <br />
          <span>got competitive.</span>
        </h2>
        <p>
          Everything you need to turn a simple quiz into an event everyone wants
          to win.
        </p>
      </div>

      <div className="feature-grid">
        {features.map(([number, title, text]) => (
          <article className="feature-card" key={number}>
            <span className="feature-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="feature-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}
