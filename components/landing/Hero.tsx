import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="halftone hero-texture" />
      <div className="hero-copy">
        <div className="eyebrow">THE FAMILY QUIZ TOURNAMENT</div>
        <h1>
          Think fast.
          <br />
          <span>Play together.</span>
          <br />
          Win the room.
        </h1>
        <p>
          PlayMe brings friends and families together for live online quiz
          tournaments where every answer counts.
        </p>
        <div className="hero-actions">
          <Link href="/signup" className="button">
            Start playing
          </Link>
          <a href="#how-it-works" className="button button-light">
            See how it works
          </a>
        </div>
        <div className="hero-note">
          <span className="dot" /> Family-friendly • Live competition •
          Real-time scores
        </div>
      </div>

      <div className="hero-art">
        <div className="art-card">
          <Image
            src={siteConfig.heroImage}
            alt="PlayMe quiz competition"
            fill
            priority
            sizes="(max-width: 900px) 90vw, 50vw"
          />
          <div className="art-overlay">
            <span>PLAYME LIVE</span>
            <strong>Who knows the most?</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
