import Link from "next/link";

export function HostTournament() {
  return (
    <section className="host-section">
      <div className="halftone host-texture" />
      <div>
        <span className="eyebrow">HOST YOUR OWN</span>
        <h2>
          Create the quiz
          <br />
          <span>everyone remembers.</span>
        </h2>
        <p>
          Build a tournament, write your questions, invite your people, and let
          PlayMe handle the competition.
        </p>
        <Link href="/signup" className="button">
          Create a tournament
        </Link>
      </div>

      <div className="host-card">
        <span>YOUR TOURNAMENT</span>
        <strong>Family Friday</strong>
        <div className="mini-question">
          Which planet is known as the Red Planet?
        </div>
        <div className="answers">
          <span>A. Venus</span>
          <span>B. Mars</span>
          <span>C. Jupiter</span>
          <span>D. Saturn</span>
        </div>
      </div>
    </section>
  );
}
