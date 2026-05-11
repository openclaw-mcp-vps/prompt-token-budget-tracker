import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Token Budget Tracker — Track AI Prompt Costs Per Project",
  description: "Monitor token usage and costs across AI models per project. Budget alerts, cost optimization, and real-time dashboards for AI developers and agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="20059863-2830-4259-9d62-41861856a663"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
