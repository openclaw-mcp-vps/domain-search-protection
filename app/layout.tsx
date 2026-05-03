import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DomainShield — Private Domain Search",
  description: "Prevent domain squatting during searches. Route domain availability queries through anonymous endpoints so registrars never see your intent."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="790df9cb-f026-4000-9777-eb7515f0f603"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
