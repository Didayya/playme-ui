"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type User = {
  id: string;
  name: string;
  email: string;
};

type Tournament = {
  id: string;
  title: string;
  description: string;
  players: number;
  maxPlayers: number;
  status: "LIVE" | "UPCOMING" | "COMPLETED";
  prize?: string;
  startsAt?: string;
};

const tournaments: Tournament[] = [
  {
    id: "1",
    title: "Family Friday",
    description: "The ultimate family quiz night.",
    players: 42,
    maxPlayers: 100,
    status: "LIVE",
    prize: "₦50,000",
  },
  {
    id: "2",
    title: "General Knowledge",
    description: "How much do you really know?",
    players: 68,
    maxPlayers: 100,
    status: "UPCOMING",
    prize: "₦100,000",
    startsAt: "Today · 8:00 PM",
  },
  {
    id: "3",
    title: "Pop Culture Battle",
    description: "Movies, music, celebrities and more.",
    players: 31,
    maxPlayers: 50,
    status: "UPCOMING",
    prize: "₦25,000",
    startsAt: "Tomorrow · 7:30 PM",
  },
];

const recentGames = [
  {
    name: "Family Friday",
    date: "Yesterday",
    position: 3,
    score: "820",
  },
  {
    name: "Sports Challenge",
    date: "Aug 28",
    position: 1,
    score: "960",
  },
  {
    name: "Movie Mania",
    date: "Aug 25",
    position: 7,
    score: "680",
  },
];

const leaderboard = [
  { rank: 1, name: "QuizMaster", score: 12450 },
  { rank: 2, name: "BrainBox", score: 11890 },
  { rank: 3, name: "SmartCookie", score: 11420 },
  { rank: 4, name: "You", score: 10860 },
  { rank: 5, name: "QuizKing", score: 10420 },
];

export default function PlayPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    async function loadUser() {
      try {
        // const response = await fetch("/api/auth/me", {
        //   credentials: "include",
        // });

        // if (!response.ok) {
        //   router.replace("/login");
        //   return;
        // }

        // const data = await response.json();
        const data = { user: { id: "q", name: "qq", email: "qqq" } };

        setUser(data.user ?? data);
      } catch {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [router]);

  async function handleLogout() {
    setLoggingOut(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      router.replace("/login");
      router.refresh();
    }
  }

  if (loading) {
    return (
      <main className="dashboard-loading">
        <div className="dashboard-loading-logo">
          <Image
            src={siteConfig.logo}
            alt="PlayMe"
            width={150}
            height={70}
            priority
          />
        </div>

        <div className="loading-spinner" />
        <p>Getting your games ready...</p>
      </main>
    );
  }

  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-logo">
          <Image
            src={siteConfig.logo}
            alt="PlayMe"
            width={140}
            height={70}
            priority
          />
        </div>

        <nav className="dashboard-nav">
          <a className="dashboard-nav-item active" href="/play">
            <span>⌂</span>
            Dashboard
          </a>

          <a className="dashboard-nav-item" href="#tournaments">
            <span>🏆</span>
            Tournaments
          </a>

          <a className="dashboard-nav-item" href="#leaderboard">
            <span>↗</span>
            Leaderboard
          </a>

          <a className="dashboard-nav-item" href="#history">
            <span>◷</span>
            Game history
          </a>

          <a className="dashboard-nav-item" href="#friends">
            <span>♧</span>
            Friends & family
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a className="dashboard-nav-item" href="/play/settings">
            <span>⚙</span>
            Settings
          </a>

          <button
            className="dashboard-nav-item logout-button"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            <span>↪</span>
            {loggingOut ? "Logging out..." : "Log out"}
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* TOP BAR */}
        <header className="dashboard-topbar">
          <div className="mobile-dashboard-logo">
            <Image src={siteConfig.logo} alt="PlayMe" width={110} height={55} />
          </div>

          <div className="dashboard-search">
            <span>⌕</span>
            <input type="text" placeholder="Search tournaments..." />
          </div>

          <div className="dashboard-profile">
            <button className="notification-button">
              ♢
              <span />
            </button>

            <div className="profile-avatar">
              {user?.name?.charAt(0)?.toUpperCase() || "P"}
            </div>

            <div className="profile-info">
              <strong>{user?.name || "Player"}</strong>
              <small>Player</small>
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="dashboard-content">
          {/* WELCOME */}
          <section className="dashboard-welcome">
            <div>
              <p className="eyebrow">WELCOME BACK 👋</p>

              <h1>
                Ready to <span>play?</span>
              </h1>

              <p className="welcome-description">
                Jump into a tournament, challenge your friends, and see if you
                can make it to the top.
              </p>

              <div className="welcome-actions">
                <button
                  className="primary-dashboard-button"
                  onClick={() => router.push("#tournaments")}
                >
                  Play now
                  <span>→</span>
                </button>

                <button
                  className="secondary-dashboard-button"
                  onClick={() => router.push("/tournaments/create")}
                >
                  Create tournament
                </button>
              </div>
            </div>

            <div className="welcome-art">
              <div className="art-circle" />
              <div className="art-card art-card-one">
                <strong>?</strong>
              </div>
              <div className="art-card art-card-two">
                <strong>✓</strong>
              </div>
              <div className="art-star">✦</div>
            </div>
          </section>

          {/* STATS */}
          <section className="dashboard-stats">
            <div className="dashboard-stat">
              <span className="stat-icon green">♟</span>
              <div>
                <strong>24</strong>
                <small>Games played</small>
              </div>
            </div>

            <div className="dashboard-stat">
              <span className="stat-icon red">🏆</span>
              <div>
                <strong>8</strong>
                <small>Tournaments won</small>
              </div>
            </div>

            <div className="dashboard-stat">
              <span className="stat-icon yellow">★</span>
              <div>
                <strong>10,860</strong>
                <small>Total points</small>
              </div>
            </div>

            <div className="dashboard-stat">
              <span className="stat-icon purple">↗</span>
              <div>
                <strong>#4</strong>
                <small>Global ranking</small>
              </div>
            </div>
          </section>

          {/* TOURNAMENTS */}
          <section className="dashboard-section" id="tournaments">
            <div className="section-heading">
              <div>
                <p className="section-label">PLAY</p>
                <h2>Live & upcoming tournaments</h2>
              </div>

              <button className="text-button">View all →</button>
            </div>

            <div className="tournament-grid">
              {tournaments.map((tournament) => (
                <article
                  className="dashboard-tournament-card"
                  key={tournament.id}
                >
                  <div className="tournament-card-top">
                    <span
                      className={`tournament-status ${tournament.status.toLowerCase()}`}
                    >
                      {tournament.status === "LIVE" && (
                        <i className="live-dot" />
                      )}

                      {tournament.status}
                    </span>

                    {tournament.prize && (
                      <span className="tournament-prize">
                        {tournament.prize}
                      </span>
                    )}
                  </div>

                  <div className="tournament-card-content">
                    <h3>{tournament.title}</h3>

                    <p>{tournament.description}</p>

                    <div className="tournament-meta">
                      <span>
                        ♟ {tournament.players}/{tournament.maxPlayers}
                      </span>

                      {tournament.startsAt && (
                        <span>◷ {tournament.startsAt}</span>
                      )}
                    </div>
                  </div>

                  <button
                    className={
                      tournament.status === "LIVE"
                        ? "tournament-play-button live-button"
                        : "tournament-play-button"
                    }
                    onClick={() =>
                      router.push(`/play/tournament/${tournament.id}`)
                    }
                  >
                    {tournament.status === "LIVE"
                      ? "Join game"
                      : "View tournament"}

                    <span>→</span>
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* LOWER GRID */}
          <div className="dashboard-lower-grid">
            {/* RECENT GAMES */}
            <section className="dashboard-panel" id="history">
              <div className="panel-heading">
                <div>
                  <p className="section-label">YOUR ACTIVITY</p>
                  <h2>Recent games</h2>
                </div>

                <button className="text-button">View all</button>
              </div>

              <div className="recent-games">
                {recentGames.map((game) => (
                  <div
                    className="recent-game"
                    key={`${game.name}-${game.date}`}
                  >
                    <div className="recent-game-icon">?</div>

                    <div className="recent-game-info">
                      <strong>{game.name}</strong>
                      <small>{game.date}</small>
                    </div>

                    <div className="recent-game-result">
                      <strong>#{game.position}</strong>
                      <small>{game.score} pts</small>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* LEADERBOARD */}
            <section className="dashboard-panel" id="leaderboard">
              <div className="panel-heading">
                <div>
                  <p className="section-label">TOP PLAYERS</p>
                  <h2>Leaderboard</h2>
                </div>

                <button className="text-button">Full ranking</button>
              </div>

              <div className="leaderboard-list">
                {leaderboard.map((player) => (
                  <div
                    className={`leaderboard-row ${
                      player.name === "You" ? "current-player" : ""
                    }`}
                    key={player.rank}
                  >
                    <span className="leaderboard-rank">{player.rank}</span>

                    <div className="leaderboard-avatar">
                      {player.name.charAt(0)}
                    </div>

                    <strong>{player.name}</strong>

                    <span className="leaderboard-score">
                      {player.score.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FAMILY / FRIENDS */}
          <section className="family-dashboard-card" id="friends">
            <div>
              <p className="section-label">PLAY TOGETHER</p>

              <h2>
                Your next game night
                <br />
                starts here.
              </h2>

              <p>
                Create a private tournament and invite your friends and family
                to compete.
              </p>

              <button
                className="primary-dashboard-button"
                onClick={() => router.push("/tournaments/create")}
              >
                Create a tournament
                <span>→</span>
              </button>
            </div>

            <div className="family-illustration">
              <div>?</div>
              <div>★</div>
              <div>✓</div>
              <div>+</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
