import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Tournament } from "./Tournament";
import { Leaderboard } from "./Leaderboard";
import { HostTournament } from "./HostTournament";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Tournament />
        <section id="how-it-works" className="quote-section">
          <span className="eyebrow">MORE THAN A QUIZ</span>
          <h2>It&apos;s game night.<br /><span>Just better.</span></h2>
        </section>
        <Leaderboard />
        <HostTournament />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
