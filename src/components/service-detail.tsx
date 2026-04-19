import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { LinkButton } from "@/components/button";
import { ImagePlaceholder } from "@/components/image-placeholder";
import {
  ArrowRightIcon,
  CheckIcon,
  ServiceIconMap,
} from "@/components/icons";
import type { Service } from "@/lib/site";
import { services } from "@/lib/site";
import Link from "next/link";

type Detail = {
  intro: string;
  workflow: { step: string; title: string; text: string }[];
  standards: string[];
  tools?: string[];
};

export const serviceDetails: Record<string, Detail> = {
  "claims-advisory": {
    intro:
      "Independent technical support from the first report of damage through final award. We build the factual record before memory and evidence deteriorate.",
    workflow: [
      {
        step: "01",
        title: "Scene preservation",
        text: "Attendance within the shortest operational window. Chain-of-custody sampling, photographic record, witness statements.",
      },
      {
        step: "02",
        title: "Root cause analysis",
        text: "Engineering RCA referenced to maker's documentation, class rules and applicable standards. Failure mode and sequence documented.",
      },
      {
        step: "03",
        title: "Quantum",
        text: "Independent assessment of repair scope, depreciation, off-hire and consequential losses.",
      },
      {
        step: "04",
        title: "Report & attendance",
        text: "Expert report drafted for arbitration or court. In-person or remote attendance at mediation, arbitration, trial.",
      },
    ],
    standards: [
      "IACS UR and class rules",
      "MAN-ES, Wärtsilä, Caterpillar service letters",
      "ISO 8217 fuel specification",
      "Hague-Visby / Hamburg rules context",
    ],
  },
  surveys: {
    intro:
      "Transactional and condition surveys carried out by certified Chief Engineers, with measurable findings and a documented chain of evidence.",
    workflow: [
      {
        step: "01",
        title: "Scope agreement",
        text: "Written scope before attendance: vessel particulars, survey type, access requirements, reporting format.",
      },
      {
        step: "02",
        title: "On-board attendance",
        text: "Machinery tests, tank soundings, cargo hold inspection, documentary review, photographic record.",
      },
      {
        step: "03",
        title: "Draft findings",
        text: "Preliminary findings shared same day for urgent decisions (loading, bunkering, delivery).",
      },
      {
        step: "04",
        title: "Final report",
        text: "Signed report within 3 working days. Machine-readable appendices for data-heavy surveys.",
      },
    ],
    standards: [
      "IACS UR Z7 / Z10",
      "ISO 8217 (bunkers)",
      "UN/ECE draft survey code",
      "Recognised organisation rules (DNV, LR, BV, ABS)",
    ],
  },
  superintendency: {
    intro:
      "Owner's representation on site during drydock, newbuilding, major repair or critical loading campaigns. Daily reporting in the Owner's language.",
    workflow: [
      {
        step: "01",
        title: "Pre-mobilisation",
        text: "Specification review, yard/shop evaluation, critical-path and cost plan, RFQ support.",
      },
      {
        step: "02",
        title: "Site attendance",
        text: "Daily attendance with engineering judgement on the shop floor. Hold-points and witness-points enforced.",
      },
      {
        step: "03",
        title: "Cost & variation control",
        text: "Variation orders reviewed before acceptance. No additional work proceeds without Owner's written approval.",
      },
      {
        step: "04",
        title: "Redelivery",
        text: "Sea trials, performance verification, punch-list closure, final documentation handover.",
      },
    ],
    standards: [
      "IACS No. 47 Shipbuilding and Repair Quality Standard",
      "Owner's specifications and addenda",
      "Class survey requirements",
      "MARPOL, SOLAS, MLC compliance",
    ],
  },
  "performance-audits": {
    intro:
      "Quantitative audit of speed, consumption and hull condition against charter-party warranties and reference baselines.",
    workflow: [
      {
        step: "01",
        title: "Data acquisition",
        text: "Noon reports, high-frequency telemetry (where available), weather hindcast, fuel analyses.",
      },
      {
        step: "02",
        title: "Filtering",
        text: "ISO 19030 compliant filtering: weather, draft, trim, auxiliary load, ocean current.",
      },
      {
        step: "03",
        title: "Baseline & deviation",
        text: "Reference period defined and agreed. Speed-power deviation and consumption deviation reported with confidence intervals.",
      },
      {
        step: "04",
        title: "Report",
        text: "Technical report suitable for charter-party negotiations or dispute. Raw data and scripts provided to counterparty on request.",
      },
    ],
    standards: [
      "ISO 19030 Parts 1–3",
      "BIMCO CE / SHIPMAN terminology",
      "CII / EEXI operational context",
      "MRV / IMO DCS reporting consistency",
    ],
    tools: ["Python · pandas · xarray", "ERA5 hindcast", "Copernicus currents"],
  },
};

export function renderServicePage(slug: string) {
  const service = services.find((s) => s.slug === slug) as Service;
  const detail = serviceDetails[slug];
  const Icon = ServiceIconMap[service.icon];
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={<>{service.title}.</>}
        description={service.summary}
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact" variant="primary" withArrow>
            Request scope
          </LinkButton>
          <LinkButton href="/services" variant="secondary">
            All services
          </LinkButton>
        </div>
      </PageHero>

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-[14px] bg-[var(--color-atlantic-900)] text-white">
                <Icon size={26} />
              </div>
              <h2 className="display mt-6 text-[28px] sm:text-[32px]">
                {detail.intro}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <Card padding="md">
                <CardEyebrow>Deliverables</CardEyebrow>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-[14.5px] text-[var(--color-slate-800)]"
                    >
                      <CheckIcon
                        size={16}
                        className="mt-0.5 shrink-0 text-[var(--color-atlantic-900)]"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card padding="md" className="mt-4">
                <CardEyebrow>Standards referenced</CardEyebrow>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {detail.standards.map((d) => (
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
              </Card>
              {detail.tools && (
                <Card padding="md" className="mt-4">
                  <CardEyebrow>Tools</CardEyebrow>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {detail.tools.map((t) => (
                      <span
                        key={t}
                        className="num rounded-full border border-[var(--color-border)] bg-[var(--color-deck)] px-3 py-1 text-[12px] text-[var(--color-slate-800)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Workflow */}
      <Section tone="light" className="!pt-0">
        <Container>
          <Card padding="lg">
            <CardEyebrow>Workflow</CardEyebrow>
            <CardTitle className="!mt-3 !text-[28px] sm:!text-[34px]">
              From first call to final report.
            </CardTitle>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {detail.workflow.map((w) => (
                <li
                  key={w.step}
                  className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-deck)] p-6"
                >
                  <div className="num text-[13px] text-[var(--color-slate-500)]">
                    {w.step}
                  </div>
                  <h3 className="display mt-2 text-[17px]">{w.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-[var(--color-slate-700)]">
                    {w.text}
                  </p>
                </li>
              ))}
            </ol>
          </Card>
        </Container>
      </Section>

      {/* Visual */}
      <Section tone="light" className="!pt-0">
        <Container>
          <ImagePlaceholder
            label={`${service.title} — editorial photo, on board, cool tone`}
            aspect="21/9"
            tone="dark"
          />
        </Container>
      </Section>

      {/* Related */}
      <Section tone="light" className="!pt-0 !pb-24">
        <Container>
          <CardEyebrow>Related services</CardEyebrow>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((s) => {
              const OIcon = ServiceIconMap[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={s.href}
                  className="group flex items-start gap-4 rounded-[16px] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[var(--color-deck)] text-[var(--color-atlantic-900)] transition-colors group-hover:bg-[var(--color-atlantic-900)] group-hover:text-white">
                    <OIcon size={20} />
                  </span>
                  <div className="flex-1">
                    <div className="text-[15px] font-semibold text-[var(--color-atlantic-900)]">
                      {s.title}
                    </div>
                    <div className="mt-1 text-[12.5px] leading-snug text-[var(--color-slate-700)]">
                      {s.kicker}
                    </div>
                  </div>
                  <ArrowRightIcon
                    size={18}
                    className="shrink-0 text-[var(--color-slate-500)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--color-atlantic-900)]"
                  />
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
