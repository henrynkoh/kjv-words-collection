import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/SideNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KJV Words Collection | Biblical Prophecies & Truth",
  description:
    "A comprehensive theological exploration: Biblical prophecies of Christ's comings, the dispensation of grace, and the blessed hope of the Rapture. KJV with Korean 흠정역.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100">
        <aside className="w-full md:w-72 lg:w-80 shrink-0 h-64 md:h-screen md:sticky md:top-0 flex flex-col">
          <Suspense fallback={<SideNavFallback />}>
            <SideNav />
          </Suspense>
        </aside>
        <main className="flex-1 min-w-0 flex flex-col">{children}</main>
      </body>
    </html>
  );
}

function SideNavFallback() {
  return (
    <div className="flex flex-col h-full overflow-hidden border-r border-stone-200/80 bg-stone-50/80 dark:bg-stone-900/50 dark:border-stone-700/50 animate-pulse">
      <div className="h-14 border-b border-stone-200/80 dark:border-stone-700/50" />
      <div className="flex-1 py-4 px-4 space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 rounded bg-stone-200/60 dark:bg-stone-700/40" />
        ))}
      </div>
    </div>
  );
}
