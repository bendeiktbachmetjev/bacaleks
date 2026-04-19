import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/icons";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-atlantic-900)] text-white hover:bg-[var(--color-atlantic-800)]",
  secondary:
    "bg-white text-[var(--color-atlantic-900)] border border-[var(--color-border)] hover:border-[var(--color-atlantic-900)]",
  ghost:
    "bg-transparent text-[var(--color-atlantic-900)] hover:bg-[var(--color-atlantic-900)]/5",
  accent:
    "bg-[var(--color-orange-500)] text-white hover:bg-[var(--color-orange-600)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {withArrow && <ArrowRightIcon size={16} />}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  href,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<
    ComponentProps<"a">,
    "href"
  >) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...props}
      >
        {children}
        {withArrow && <ArrowRightIcon size={16} />}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {withArrow && <ArrowRightIcon size={16} />}
    </Link>
  );
}
