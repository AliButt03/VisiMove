import { useId } from "react";
import { cn } from "@/lib/utils";

/** Eye whose pupil is a cursor: gaze becomes the pointer. Same artwork as src/app/icon.svg. */
export function LogoMark({ className }: { className?: string }) {
  const gradient = useId();
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("h-9 w-9", className)}>
      <defs>
        <linearGradient id={gradient} x1="6" y1="14" x2="58" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7cf1ff" />
          <stop offset="1" stopColor="#4f8dfd" />
        </linearGradient>
      </defs>
      <path
        d="M7 32C14.5 19.5 23 14.5 32 14.5S49.5 19.5 57 32C49.5 44.5 41 49.5 32 49.5S14.5 44.5 7 32Z"
        fill="none"
        stroke={`url(#${gradient})`}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="11.5" fill={`url(#${gradient})`} />
      <path
        d="M28.6 24.6v14.6l3.7-3.5 2.6 5.6 2.6-1.2-2.6-5.5h5.1z"
        fill="#070b1d"
        stroke="#070b1d"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Visi<span className="text-gradient">Move</span>
      </span>
    </span>
  );
}
