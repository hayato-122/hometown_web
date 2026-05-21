import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "../components/Header/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "明石ガイド",
  description: "明石市を紹介するページ",
  appleWebApp: {
    title: "明石ガイド",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={cn("font-sans", inter.variable, dmSans.variable)}
    >
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="mx-auto w-[min(1200px,calc(100%-32px))] py-8 max-md:w-[calc(100%-32px)]">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
