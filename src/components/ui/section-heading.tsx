import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm sm:tracking-[0.32em]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/68 sm:mt-5 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
