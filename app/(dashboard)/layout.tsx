import "../../styles/dashboard.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-shell">
      <div className="dashboard-content">
        <main>{children}</main>
      </div>
    </div>
  );
}
