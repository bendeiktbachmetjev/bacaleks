import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6 lg:gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Bento cell — controls the span on large screens */
export function BentoCell({
  span = 3,
  rowSpan = 1,
  children,
  className,
}: {
  span?: 2 | 3 | 4 | 6;
  rowSpan?: 1 | 2;
  children: ReactNode;
  className?: string;
}) {
  const colMap: Record<number, string> = {
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    6: "lg:col-span-6",
  };
  const rowMap: Record<number, string> = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
  };
  return (
    <div className={cn(colMap[span], rowMap[rowSpan], "flex", className)}>
      {children}
    </div>
  );
}
