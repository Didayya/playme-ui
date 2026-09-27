import type { Metadata } from "next";

import { AuthProvider } from "@/context/AuthContext";

import "../styles/global.css";

export const metadata: Metadata = {
  title: "PlayMe — Think fast. Play together. Win the room.",
  description: "Family-friendly live quiz tournaments.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
