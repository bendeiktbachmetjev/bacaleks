import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/**
 * Visual placeholder for imagery the client will provide later.
 * Keeps the layout stable and conveys the intended content via label.
 */
export function ImagePlaceholder({
  label,
  aspect = "16/9",
  tone = "light",
  className,
  children,
}: {
  label: string;
  aspect?: "16/9" | "4/3" | "3/4" | "1/1" | "21/9";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "placeholder relative flex w-full items-end overflow-hidden rounded-[14px] border",
        tone === "dark"
          ? "bg-[var(--color-atlantic-900)] text-white border-white/10"
          : "border-[var(--color-border)]",
        className,
      )}
      style={{ aspectRatio: aspect }}
      aria-label={`Image placeholder: ${label}`}
      role="img"
    >
      <div className="absolute inset-0 pointer-events-none [background-image:radial-gradient(circle_at_80%_10%,rgba(10,25,47,0.12),transparent_60%)]" />
      <div className="relative flex w-full items-center justify-between gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex h-2 w-2 rounded-full",
              tone === "dark" ? "bg-white/70" : "bg-[var(--color-atlantic-900)]",
            )}
          />
          <span className="eyebrow !text-[10px]">Image placeholder</span>
        </div>
        <span
          className={cn(
            "num truncate text-[12px]",
            tone === "dark" ? "text-white/80" : "text-[var(--color-slate-700)]",
          )}
          title={label}
        >
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
