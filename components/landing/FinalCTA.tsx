import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="halftone cta-texture" />
      <span className="eyebrow">READY?</span>
      <h2>
        Gather your people.
        <br />
        <span>Let the games begin.</span>
      </h2>
      <p>One quiz. One leaderboard. One champion.</p>
      <Link href="/signup" className="button button-dark">
        Start playing
      </Link>
    </section>
  );
}
