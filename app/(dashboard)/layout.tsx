import { AuthProvider } from "@/context/AuthContext";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#f4f4f0] text-black">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main application area */}
          <div className="flex min-w-0 flex-1 flex-col">
            <DashboardHeader />
            <main className="min-w-0 flex-1">{children}</main>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
