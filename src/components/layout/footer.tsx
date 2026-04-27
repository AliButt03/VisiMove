import Link from "next/link";
import { Eye } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Download", href: "#download" },
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 sm:pb-10 sm:pt-4">
      <div className="visimove-container">
        <Reveal y={20}>
          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)] px-4 py-5 shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-md sm:rounded-[28px] sm:px-8 sm:py-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="mx-auto max-w-sm text-center sm:mx-0 sm:max-w-md sm:text-left">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300">
                    <Eye className="h-4 w-4" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white sm:tracking-[0.24em]">
                      VisiMove
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/55">
                      Eye-driven interaction for a more accessible digital future.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-3">
                {footerLinks.map((link, index) => (
                  <Reveal key={link.label} delay={index * 90} y={14}>
                    <Link
                      href={link.href}
                      className="flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white/68 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/10 hover:text-white sm:inline-flex sm:px-4"
                    >
                      {link.label}
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
