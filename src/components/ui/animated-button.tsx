import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className,
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3.5 text-center text-sm font-medium leading-[1.25rem] transition-all duration-300 will-change-transform sm:px-6",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
        "active:scale-[0.985] hover:-translate-y-0.5",
        variant === "primary" &&
          "bg-white text-slate-950 shadow-[0_14px_36px_rgba(255,255,255,0.14)] hover:bg-cyan-50 hover:shadow-[0_18px_42px_rgba(125,211,252,0.18)]",
        variant === "secondary" &&
          "border border-white/12 bg-white/[0.05] text-white backdrop-blur-md hover:border-white/18 hover:bg-white/[0.08]",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]",
          variant === "secondary" && "via-white/10"
        )}
      />

      <span
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          variant === "primary"
            ? "bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.18),transparent_55%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]"
        )}
      />

      <span
        className={cn(
          "relative z-10 pb-px transition-transform duration-300 group-hover:-translate-x-0.5",
          variant === "primary" ? "text-slate-950" : "text-white"
        )}
      >
        {children}
      </span>

      <ArrowRight
        className={cn(
          "relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
          variant === "primary" ? "text-slate-950" : "text-white"
        )}
      />
    </Link>
  );
}
