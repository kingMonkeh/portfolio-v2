import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hy Lac | Portfolio",
  description: "Software Engineering Student & Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>

        {/* --- GLOBAL NAVBAR --- */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-background-2 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 sm:px-16">

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
              <Link href="/" className="hover:text-zinc-950 transition-colors">
                Me
              </Link>
              <Link href="/projects" className="hover:text-zinc-950 transition-colors">
                Projects
              </Link>
              <Link href="/community" className="hover:text-zinc-950 transition-colors">
                Community
              </Link>
            </nav>

          </div>
        </header>

        {/* --- PAGE CONTENT --- */}
        <div className="flex-1 w-full">
          {children}
        </div>

      </body>
    </html>
  );
}
