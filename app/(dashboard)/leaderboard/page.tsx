"use client";

import { PaywallGate } from "@/components/protected/PaywallGate";

export default function LeaderboardPage() {
  
  return (
    <main className="min-h-screen bg-play-paper p-6 lg:p-10 text-black">

      <PaywallGate
        requiredPermission="user:readc"
        featureName="Live Cash Tournaments"
      >
        <div className="space-y-8">
          {/* Quick Metrics Grid */}
          <section className="grid gap-4 md:grid-cols-3">
            <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0_#000]">
              <p className="text-xs font-black text-black/55 tracking-wider uppercase">
                Active Rooms
              </p>
              <h3 className="text-3xl font-black mt-1">24 Streams</h3>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0_#000]">
              <p className="text-xs font-black text-black/55 tracking-wider uppercase">
                Current Prize Pool
              </p>
              <h3 className="text-3xl font-black text-play-green mt-1">
                ₦250,000.00
              </h3>
            </div>
            <div className="bg-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0_#000]">
              <p className="text-xs font-black text-black/55 tracking-wider uppercase">
                Next Countdown
              </p>
              <h3 className="text-3xl font-black text-play-red mt-1">
                00h : 14m : 02s
              </h3>
            </div>
          </section>

          {/* Active Tournament Matchmaking Cards */}
          <section>
            <h2 className="text-xl font-black mb-4">
              Available High-Roller Rooms
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Mock Tournament Item 1 */}
              <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_#000]">
                <div className="bg-play-red border-b-2 border-black p-4 text-white font-black flex justify-between items-center">
                  <span>MEGA TRIVIA SHOWDOWN</span>
                  <span className="bg-black text-xs px-2.5 py-1 rounded-full text-play-green">
                    HOT
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-black/60">Buy-in:</span>
                    <span>50 Tokens</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-black/60">Max Players:</span>
                    <span>1,000 / room</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-black/60">Reward:</span>
                    <span className="text-play-green font-black">
                      ₦100,000 Grand Prize
                    </span>
                  </div>
                  <button className="w-full mt-4 bg-black text-white font-black py-3 rounded-xl shadow-[3px_3px_0_#play-cyan] border border-black transition-all">
                    Register For Room
                  </button>
                </div>
              </div>

              {/* Mock Tournament Item 2 */}
              <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0_#000]">
                <div className="bg-play-cyan border-b-2 border-black p-4 text-black font-black flex justify-between items-center">
                  <span>WEEKEND POP CULTURE BLITZ</span>
                  <span className="bg-white border-2 border-black text-xs px-2.5 py-0.5 rounded-full">
                    WEEKEND ONLY
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-black/60">Buy-in:</span>
                    <span>FREE ENTRY</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-black/60">Max Players:</span>
                    <span>Unlimited</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-black/60">Reward:</span>
                    <span className="text-play-cyan font-black">
                      Elite Leaderboard Badges
                    </span>
                  </div>
                  <button className="w-full mt-4 bg-black text-white font-black py-3 rounded-xl shadow-[3px_3px_0_#play-red] border border-black transition-all">
                    Join Match Queue
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Arena Global Leaderboard Section */}
          <section className="bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0_#000]">
            <h2 className="text-xl font-black mb-4">Top Arena Contenders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-bold text-sm">
                <thead>
                  <tr className="border-b-2 border-black text-black/55">
                    <th className="pb-3">Rank</th>
                    <th className="pb-3">Player</th>
                    <th className="pb-3 text-right">Tournament Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  <tr>
                    <td className="py-3 text-play-red font-black">🥇 #1</td>
                    <td className="py-3">Chidi_QuizMaster</td>
                    <td className="py-3 text-right font-black">24,910 pts</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/60">🥈 #2</td>
                    <td className="py-3">AmaraWinRoom</td>
                    <td className="py-3 text-right font-black">22,400 pts</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-black/60">🥉 #3</td>
                    <td className="py-3">Tunde_FastestFinger</td>
                    <td className="py-3 text-right font-black">21,150 pts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </PaywallGate>
    </main>
  );
}
