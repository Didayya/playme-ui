import Image from "next/image";

import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Image src={siteConfig.logo} alt="PlayMe" width={130} height={60} />
        <p>Family-friendly competition, made fun.</p>
      </div>
      <div className="footer-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#tournaments">Tournaments</a>
        <a href="/login">Log in</a>
      </div>
      <small>© {new Date().getFullYear()} PlayMe. All rights reserved.</small>
    </footer>
  );
}
