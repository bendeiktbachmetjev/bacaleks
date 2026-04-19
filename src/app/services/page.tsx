import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { BentoGrid, BentoCell } from "@/components/bento";
import { CardEyebrow, CardTitle } from "@/components/card";
import {
  ArrowRightIcon,
  CheckIcon,
  ServiceIconMap,
} from "@/components/icons";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Claims advisory, surveys, superintendency and performance audits — delivered by a certified Chief Engineer.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Matrix"
        title={<>Four disciplines. One engineering standard.</>}
        description="Scope, deliverables and reporting standard are fixed before we invoice. No volume work, no subcontracting of judgement."
      />

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <BentoGrid>
            {services.map((s, i) => {
              const Icon = ServiceIconMap[s.icon];
              const large = i % 3 === 0;
              return (
                <BentoCell key={s.slug} span={large ? 6 : 3}>
                  <Link
                    href={s.href}
                    className="group flex w-full flex-col rounded-[16px] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] sm:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-[14px] bg-[var(--color-deck)] text-[var(--color-atlantic-900)] transition-colors group-hover:bg-[var(--color-atlantic-900)] group-hover:text-white">
                        <Icon size={26} />
                      </span>
                      <ArrowRightIcon
                        size={18}
                        className="text-[var(--color-slate-500)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-atlantic-900)]"
                      />
                    </div>
                    <div className="mt-8">
                      <CardEyebrow>{s.kicker}</CardEyebrow>
                      <CardTitle className="!text-[26px] sm:!text-[30px]">
                        {s.title}
                      </CardTitle>
                      <p className="mt-4 max-w-[560px] text-[15px] leading-[1.65] text-[var(--color-slate-700)]">
                        {s.summary}
                      </p>
                    </div>
                    <ul className="mt-8 grid gap-2 border-t border-[var(--color-hairline)] pt-6 sm:grid-cols-2">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-[14px] text-[var(--color-slate-800)]"
                        >
                          <CheckIcon
                            size={16}
                            className="mt-0.5 shrink-0 text-[var(--color-atlantic-900)]"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </BentoCell>
              );
            })}
          </BentoGrid>
        </Container>
      </Section>
    </>
  );
}
