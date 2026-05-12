import type { Metadata } from "next";
import { NavMenu } from "@/components/NavMenu";
import Link from "next/link";
import "./globals.css";
import { Figtree } from "next/font/google";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="ja" className={cn("font-sans", figtree.variable)}>
      <body className="min-h-screen bg-linear-to-br from-secondary to-background text-foreground">
        <header className="sticky top-0 z-10 flex items-stretch gap-8 border-b border-primary/15 bg-background/90 backdrop-blur">
          <div className="flex items-center px-6">
            <Link
              href="/"
              className="flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-2xl font-bold text-primary transition hover:bg-accent"
            >
              <span>地元紹介ページ</span>
            </Link>
          </div>

          <NavMenu />
        </header>

        <main className="w-[min(1300px,calc(100%-32px))] mx-auto py-6 max-md:w-[calc(100%-32px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
