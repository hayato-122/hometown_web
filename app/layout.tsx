import type { Metadata } from "next";
import { NavMenu } from "@/components/NavMenu";
import Link from "next/link";
import "./globals.css";
import { DM_Sans, Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "地元紹介ページ",
  description: "明石市を紹介するページ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={cn("font-sans", inter.variable, dmSans.variable)}>
      <body className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-10 flex items-stretch gap-8 border-b border-border bg-card/95 backdrop-blur">
          <div className="flex items-center px-6">
            <Link
              href="/"
              className="flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 font-heading text-2xl font-semibold tracking-[-0.03em] text-foreground transition hover:bg-accent"
            >
              <span>地元紹介ページ</span>
            </Link>
          </div>

          <NavMenu />
        </header>

        <main className="mx-auto w-[min(1200px,calc(100%-32px))] py-8 max-md:w-[calc(100%-32px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
