import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "../providers/AppProviders";
import { cn } from "../utils/cn";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Rising",
  description: "A game by BittyBrella",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen min-w-screen")}>
        <AppProviders>
          <header className="flex flex-row align-center gap-4 p-4 shadow">
            <h1 className="font-bold mr-4">The Rising</h1>
            <Link href="/">Games</Link>
            <Link
              href="/games/new"
              className="bg-red-500 px-2 py-1 ml-auto rounded text-sm hover:bg-red-500/75"
            >
              Start new game
            </Link>
          </header>
          <main className="p-4">{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
