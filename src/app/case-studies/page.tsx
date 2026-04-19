import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ArrowRightIcon } from "@/components/icons";
import { caseStudies } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Anonymised selected engagements with scope, method and measurable outcome.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={<>Selected engagements.</>}
        description="All case studies are anonymised and shared with the appointing party's written consent. Full reports are provided under NDA on request."
      />

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((c) => (
              <Card
                key={c.slug}
                padding="sm"
                className="!p-0 overflow-hidden"
                interactive
              >
                <ImagePlaceholder
                  label={`${c.sector} — ${c.title}`}
                  aspect="16/9"
                  tone="dark"
                  className="!rounded-b-none !rounded-t-[14px]"
                />
                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <span className="num rounded-full bg-[var(--color-deck)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                      {c.sector}
                    </span>
                    <span className="num text-[11px] text-[var(--color-slate-500)]">
                      {c.year}
                    </span>
                  </div>
                  <CardEyebrow>Engagement</CardEyebrow>
                  <CardTitle className="!text-[22px]">{c.title}</CardTitle>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[var(--color-slate-700)]">
                    {c.summary}
                  </p>
                  <div className="mt-6 flex items-end justify-between border-t border-[var(--color-hairline)] pt-5">
                    <div>
                      <div className="eyebrow !text-[10px]">
                        {c.metric.label}
                      </div>
                      <div className="num mt-1 text-[22px] font-semibold text-[var(--color-atlantic-900)]">
                        {c.metric.value}
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-atlantic-900)]"
                    >
                      Request full report
                      <ArrowRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light" className="!pt-0 !pb-24">
        <Container>
          <Card tone="dark" padding="lg">
            <CardEyebrow>Confidentiality</CardEyebrow>
            <CardTitle className="!text-white !text-[22px]">
              Reports are the property of the appointing party.
            </CardTitle>
            <p className="mt-4 max-w-[640px] text-[14.5px] leading-[1.65] text-white/70">
              Examples on this page are published only after written consent,
              with vessel names, dates and commercial details removed. We do
              not discuss open matters.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
