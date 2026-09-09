import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="nav">
      <Link href="/" className="brand" aria-label="PlayMe home">
        <Image src={siteConfig.logo} alt="PlayMe" width={150} height={70} priority />
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {siteConfig.nav.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className="nav-actions">
        <Link href="/login" className="text-button">Log in</Link>
        <Link href="/signup" className="button button-small">Play now</Link>
      </div>
    </header>
  );
}
