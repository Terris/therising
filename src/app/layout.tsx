import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "../providers/AppProviders";
import { cn } from "../utils/cn";

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
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
