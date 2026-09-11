import type { Metadata } from "next";

import "../styles/global.css";

export const metadata: Metadata = {
  title: "PlayMe — Think fast. Play together. Win the room.",
  description: "Family-friendly live quiz tournaments.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
