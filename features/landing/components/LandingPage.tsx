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
        <section className="bg-white px-5 py-20 text-center lg:px-8">
          <span className="text-xs font-black tracking-[.2em] text-play-red">
            MORE THAN A QUIZ
          </span>
          <h2 className="mt-5 text-5xl font-black leading-[.9] md:text-7xl">
            It&apos;s game night.
            <br />
            <span className="text-play-cyan">Just better.</span>
          </h2>
        </section>
        <Leaderboard />
        <HostTournament />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
