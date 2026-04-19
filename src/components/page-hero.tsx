import { Container } from "@/components/layout";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 400px at 90% -10%, rgba(10,25,47,0.06), transparent 60%)",
        }}
      />
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-[820px]">
          {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
          <h1 className="display text-[36px] leading-[1.05] sm:text-[48px] lg:text-[60px]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-[var(--color-slate-700)] sm:text-[19px]">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
