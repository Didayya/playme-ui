import { Features } from "@/features/landing/components/Features";
import { FinalCTA } from "@/features/landing/components/FinalCTA";
import { Footer } from "@/features/landing/components/Footer";
import { Hero } from "@/features/landing/components/Hero";
import { HostTournament } from "@/features/landing/components/HostTournament";
import { LeaderboardPreview } from "@/features/landing/components/LeaderboardPreview";
import { Navbar } from "@/features/landing/components/Navbar";
import { TournamentPreview } from "@/features/landing/components/TournamentPreview";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TournamentPreview />
        <section id="how-it-works" className="quote-section">
          <span className="eyebrow">MORE THAN A QUIZ</span>
          <h2>
            It&apos;s game night.
            <br />
            <span>Just better.</span>
          </h2>
        </section>
        <LeaderboardPreview />
        <HostTournament />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
