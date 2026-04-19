import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "light",
}: {
  className?: string;
  children: ReactNode;
  id?: string;
  tone?: "light" | "paper" | "dark";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24 lg:py-32",
        tone === "light" && "bg-[var(--color-deck)] text-[var(--color-slate-800)]",
        tone === "paper" && "bg-white text-[var(--color-slate-800)]",
        tone === "dark" &&
          "bg-[var(--color-atlantic-900)] text-white [&_.display]:text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}
