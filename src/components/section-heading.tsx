import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <header
      className={cn(
        "max-w-[720px]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="display text-[30px] sm:text-[38px] lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] leading-[1.6] text-[var(--color-slate-700)]">
          {description}
        </p>
      )}
    </header>
  );
}
