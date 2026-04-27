import Link from "next/link";
import { Download, Eye } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-100 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="visimove-container">
        <div
          className="
            relative flex items-center justify-between rounded-full
            border border-white/12
            bg-[linear-gradient(180deg,rgba(10,14,30,0.88)_0%,rgba(8,12,24,0.74)_100%)]
            px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.32)]
            backdrop-blur-xl supports-backdrop-filter:bg-[linear-gradient(180deg,rgba(10,14,30,0.72)_0%,rgba(8,12,24,0.58)_100%)]
            sm:px-6 sm:py-3
          "
        >
          <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/8" />

          <Link
            href="/"
            className="group relative z-10 inline-flex min-w-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white sm:tracking-[0.28em]"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-105">
              <Eye className="h-4 w-4 text-cyan-300" />
            </span>
            <span>VisiMove</span>
          </Link>

          <nav className="relative z-10 hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 text-sm text-white/72 transition-all duration-300 hover:border-white/10 hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="relative z-10 hidden sm:block">
            <AnimatedButton
              href="#download"
              variant="secondary"
              className="border-white/10 bg-white/8 px-5 py-2.5"
            >
              Get Started
            </AnimatedButton>
          </div>

          <Link
            href="#download"
            aria-label="Download VisiMove"
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-cyan-200 shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/12 sm:hidden"
          >
            <Download className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
