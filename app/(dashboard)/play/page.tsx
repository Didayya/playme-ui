import { ProtectedRoute } from "@/components/protected/ProtectedRoute";
import DashboardStats from "@/components/dashboard/DashboardStats";
import FamilyInviteCard from "@/components/dashboard/FamilyInviteCard";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import RecentGames from "@/components/dashboard/RecentGames";
import TournamentSection from "@/components/dashboard/TournamentSection";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";

export default function PlayPage() {
  return (
    <ProtectedRoute requiredPermission="user:profile:read">
      <div className="min-w-0 px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-8">
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Welcome */}
          <WelcomeBanner />

          {/* Stats */}
          <div className="mt-6">
            <DashboardStats />
          </div>

          {/* Main dashboard */}
          <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-3">
            {/* Main column */}
            <div className="min-w-0 space-y-6 xl:col-span-2">
              <TournamentSection />
              <RecentGames />
            </div>

            {/* Right column */}
            <aside className="min-w-0">
              <div className="min-w-0 space-y-6 xl:col-span-2">
                <Leaderboard />
                <FamilyInviteCard />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
