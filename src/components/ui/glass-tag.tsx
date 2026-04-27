import { cn } from "@/lib/utils";

type GlassTagProps = {
  label: string;
  className?: string;
};

export function GlassTag({ label, className }: GlassTagProps) {
  return (
    <span
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full border border-white/12 px-4 py-2 text-xs text-white/75 backdrop-blur-md transition-all duration-300",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_100%)]",
        "shadow-[0_8px_24px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)]",
        "hover:-translate-y-0.5 hover:-rotate-2 hover:text-white hover:shadow-[0_12px_30px_rgba(64,196,255,0.16),inset_0_1px_0_rgba(255,255,255,0.1)]",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
      <span className="relative z-10">{label}</span>
    </span>
  );
}