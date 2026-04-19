import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { ArrowRightIcon } from "@/components/icons";
import { insights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical notes on marine surveying, performance audits and casework.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Technical notes from the deck.</>}
        description="Short, engineering-focused commentary on the methods we use in casework. No promotional content."
      />

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          {featured && (
            <Card padding="lg" className="mb-6 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="num rounded-full bg-[var(--color-deck)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                    Featured · {featured.tag}
                  </span>
                  <span className="num text-[11px] text-[var(--color-slate-500)]">
                    {featured.date} · {featured.readingTime}
                  </span>
                </div>
                <CardTitle className="!mt-5 !text-[28px] sm:!text-[34px]">
                  {featured.title}
                </CardTitle>
                <p className="mt-4 max-w-[640px] text-[15.5px] leading-[1.65] text-[var(--color-slate-700)]">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-end justify-end lg:col-span-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 text-[13.5px] font-medium text-[var(--color-atlantic-900)] hover:border-[var(--color-atlantic-900)]"
                >
                  Read note
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </Card>
          )}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((i) => (
              <Link
                key={i.slug}
                href="/contact"
                className="group flex flex-col rounded-[16px] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="flex items-center gap-3">
                  <span className="num rounded-full bg-[var(--color-deck)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                    {i.tag}
                  </span>
                  <span className="num text-[11px] text-[var(--color-slate-500)]">
                    {i.date} · {i.readingTime}
                  </span>
                </div>
                <CardTitle className="!mt-5 !text-[19px]">{i.title}</CardTitle>
                <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
                  {i.excerpt}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-atlantic-900)]">
                  Read note <ArrowRightIcon size={14} />
                </div>
              </Link>
            ))}
          </div>

          <Card padding="md" className="mt-10">
            <CardEyebrow>Archive</CardEyebrow>
            <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
              Earlier notes are available on request. Specific case or method
              queries will be answered within one business day.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
