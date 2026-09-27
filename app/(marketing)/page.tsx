import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HostTournament } from "@/components/landing/HostTournament";
import { Leaderboard } from "@/components/landing/Leaderboard";
import { Navbar } from "@/components/landing/Navbar";
import { Tournament } from "@/components/landing/Tournament";

export default function LandingPage() {
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
