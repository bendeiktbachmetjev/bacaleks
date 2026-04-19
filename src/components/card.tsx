import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
  tone?: "paper" | "dark" | "outline";
  padding?: "sm" | "md" | "lg";
  interactive?: boolean;
  children: ReactNode;
};

export function Card({
  as: Tag = "div",
  tone = "paper",
  padding = "md",
  interactive,
  className,
  children,
  ...props
}: CardProps) {
  const pad =
    padding === "sm"
      ? "p-5 sm:p-6"
      : padding === "lg"
        ? "p-8 sm:p-10 lg:p-12"
        : "p-6 sm:p-8";

  const toneCls =
    tone === "dark"
      ? "bg-[var(--color-atlantic-900)] text-white border-white/10"
      : tone === "outline"
        ? "bg-transparent border-[var(--color-border)] text-[var(--color-slate-800)]"
        : "bg-white border-[var(--color-border)] text-[var(--color-slate-800)]";

  return (
    <Tag
      className={cn(
        "relative rounded-[16px] border",
        "shadow-[var(--shadow-card)]",
        interactive &&
          "transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
        pad,
        toneCls,
        className,
      )}
      {...(props as object)}
    >
      {children}
    </Tag>
  );
}

export function CardEyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow mb-4">{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "display text-[22px] sm:text-[26px] leading-[1.15]",
        className,
      )}
    >
      {children}
    </h3>
  );
}
