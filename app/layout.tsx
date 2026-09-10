import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "PlayMe — Think fast. Play together.",
  description:
    "PlayMe is a family-friendly online quiz tournament where friends and families compete live.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
