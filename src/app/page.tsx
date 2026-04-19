import Link from "next/link";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { BentoGrid, BentoCell } from "@/components/bento";
import { LinkButton } from "@/components/button";
import { ImagePlaceholder } from "@/components/image-placeholder";
import {
  AnchorIcon,
  ArrowRightIcon,
  CheckIcon,
  ServiceIconMap,
  ShieldIcon,
  WaveIcon,
} from "@/components/icons";
import {
  caseStudies,
  coverage,
  industries,
  insights,
  services,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Independence />
      <ServicesBento />
      <Metrics />
      <IndustriesStrip />
      <CaseStudiesTeaser />
      <CoverageTeaser />
      <InsightsTeaser />
      <FinalCTA />
    </>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-atlantic-900)] text-white">
      {/* Background — placeholder for looping marine video */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute inset-0 placeholder"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, #15315a 0%, #0a192f 55%, #050e1d 100%)",
          }}
        />
        <div className="absolute inset-0 hero-veil" />
        {/* Subtle wave lines */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full opacity-20"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,120 C240,60 480,180 720,120 C960,60 1200,180 1440,120 L1440,200 L0,200 Z"
            fill="rgba(255,255,255,0.06)"
          />
          <path
            d="M0,150 C240,100 480,200 720,150 C960,100 1200,200 1440,150 L1440,200 L0,200 Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>

      <Container className="pt-28 pb-24 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40">
        <div className="max-w-[820px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[12px] text-white/80 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-orange-500)]" />
            <span className="eyebrow !text-white/80">
              Chief Engineer · Marine Lawyer · Independent
            </span>
          </div>

          <h1 className="display mt-6 text-[40px] leading-[1.02] text-white sm:text-[56px] lg:text-[72px]">
            {site.tagline}.
          </h1>
          <p className="mt-6 max-w-[640px] text-[17px] leading-[1.6] text-white/75 sm:text-[19px]">
            {site.subtagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <LinkButton href="/services" variant="accent" size="lg" withArrow>
              Review services
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="secondary"
              size="lg"
              className="!bg-white/5 !border-white/20 !text-white hover:!border-white/40"
            >
              Request attendance
            </LinkButton>
          </div>

          <dl className="mt-14 grid max-w-[640px] grid-cols-2 gap-8 sm:grid-cols-4">
            <HeroStat value="25+" label="Years at sea & in office" />
            <HeroStat value="400+" label="Attendances delivered" />
            <HeroStat value="24/7" label="Technical attendance" />
            <HeroStat value="ISO 19030" label="Performance methodology" />
          </dl>
        </div>
      </Container>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="num text-[22px] font-semibold text-white sm:text-[26px]">
        {value}
      </div>
      <div className="mt-1 text-[12.5px] leading-snug text-white/60">
        {label}
      </div>
    </div>
  );
}

/* ------------------------- Independence ------------------------- */
function Independence() {
  return (
    <Section tone="light" className="!pt-16 !pb-10 sm:!pt-20">
      <Container>
        <Card padding="lg" className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-[var(--color-atlantic-900)] text-white">
                <ShieldIcon />
              </span>
              <div className="eyebrow">Strict Independence</div>
            </div>
            <h2 className="display mt-6 text-[28px] sm:text-[34px] lg:text-[40px]">
              We act exclusively for Shipowners and Charterers.
            </h2>
            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.65] text-[var(--color-slate-700)]">
              Zero retainer relationship with insurers or class societies.
              Reports are written for the party that appointed us, to the
              evidentiary standard expected by courts and arbitration
              tribunals.
            </p>
          </div>
          <ul className="grid gap-2 lg:col-span-4">
            {[
              "No insurer panel appointments",
              "No class-society affiliation",
              "Conflict check on every engagement",
              "Chief Engineer + LL.M. maritime law",
            ].map((l) => (
              <li
                key={l}
                className="flex items-start gap-3 rounded-[10px] bg-[var(--color-deck)] px-4 py-3 text-[14px] text-[var(--color-slate-800)]"
              >
                <CheckIcon
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-atlantic-900)]"
                />
                {l}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </Section>
  );
}

/* --------------------------- Services --------------------------- */
function ServicesBento() {
  return (
    <Section tone="light" id="services" className="!pt-12 sm:!pt-16">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Service Matrix"
            title={<>Four disciplines. One engineering standard.</>}
            description="Each engagement is delivered by a certified Chief Engineer with direct sea-going experience on the relevant vessel type."
          />
          <LinkButton href="/services" variant="secondary" withArrow>
            All services
          </LinkButton>
        </div>

        <BentoGrid className="mt-12">
          {services.map((s, i) => {
            const Icon = ServiceIconMap[s.icon];
            const large = i === 0 || i === 3;
            return (
              <BentoCell key={s.slug} span={large ? 4 : 2}>
                <Link
                  href={s.href}
                  className="group flex w-full flex-col rounded-[16px] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-atlantic-900)]/30 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-[var(--color-deck)] text-[var(--color-atlantic-900)] transition-colors group-hover:bg-[var(--color-atlantic-900)] group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <ArrowRightIcon
                      size={18}
                      className="text-[var(--color-slate-500)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--color-atlantic-900)]"
                    />
                  </div>
                  <div className="mt-8">
                    <CardEyebrow>{s.kicker}</CardEyebrow>
                    <CardTitle>{s.title}</CardTitle>
                    <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--color-slate-700)]">
                      {s.summary}
                    </p>
                  </div>
                  <ul className="mt-6 grid gap-1.5 border-t border-[var(--color-hairline)] pt-5 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-[13.5px] text-[var(--color-slate-800)]"
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
  );
}

/* --------------------------- Metrics --------------------------- */
function Metrics() {
  return (
    <Section tone="dark" className="!py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow !text-white/60">By the numbers</div>
            <h2 className="display mt-4 text-[30px] leading-[1.1] text-white sm:text-[38px]">
              An engineering practice measured in evidence, not adjectives.
            </h2>
            <p className="mt-4 max-w-[420px] text-[15.5px] leading-[1.65] text-white/70">
              Figures below reflect delivered engagements across the Baltic,
              North Sea and Mediterranean.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:col-span-7 lg:grid-cols-3">
            {[
              { k: "Years on deck & in office", v: "25+" },
              { k: "Attendances delivered", v: "400+" },
              { k: "Drydockings supervised", v: "60+" },
              { k: "Flags represented", v: "14" },
              { k: "Vessel types covered", v: "12" },
              { k: "Languages", v: "EN · LT · RU" },
            ].map((m) => (
              <div
                key={m.k}
                className="border-t border-white/10 pt-6"
              >
                <dt className="num text-[28px] font-semibold text-white sm:text-[34px]">
                  {m.v}
                </dt>
                <dd className="mt-2 text-[12.5px] uppercase tracking-[0.12em] text-white/55">
                  {m.k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------- Industries --------------------------- */
function IndustriesStrip() {
  return (
    <Section tone="light">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Industries"
            title={<>Vessel types we attend on a weekly basis.</>}
            description="Scope of work is tailored to the asset class — from Capesize bulkers to offshore workboats."
          />
          <LinkButton href="/industries" variant="secondary" withArrow>
            See all industries
          </LinkButton>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <Card key={ind.name} padding="md" interactive>
              <div className="flex items-start justify-between">
                <CardTitle className="!text-[20px]">{ind.name}</CardTitle>
                <span className="num rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                  {ind.badge}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
                {ind.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------ Case Studies -------------------------- */
function CaseStudiesTeaser() {
  return (
    <Section tone="light" className="!pt-0">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Case Studies"
            title={<>Selected engagements, anonymised.</>}
            description="Each record includes scope, method and a measurable outcome. Full reports are available on request under NDA."
          />
          <LinkButton href="/case-studies" variant="secondary" withArrow>
            All case studies
          </LinkButton>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {caseStudies.slice(0, 2).map((c) => (
            <Link
              key={c.slug}
              href="/case-studies"
              className="group flex flex-col rounded-[16px] border border-[var(--color-border)] bg-white p-0 shadow-[var(--shadow-card)] transition duration-300 hover:shadow-[var(--shadow-card-hover)]"
            >
              <ImagePlaceholder
                label={`${c.sector} — ${c.title}`}
                aspect="16/9"
                tone="dark"
                className="!rounded-b-none !rounded-t-[16px]"
              />
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3">
                  <span className="num rounded-full bg-[var(--color-deck)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                    {c.sector}
                  </span>
                  <span className="num text-[11px] text-[var(--color-slate-500)]">
                    {c.year}
                  </span>
                </div>
                <h3 className="display mt-4 text-[22px] leading-[1.2]">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-[var(--color-slate-700)]">
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-deck)] text-[var(--color-atlantic-900)] transition-colors group-hover:bg-[var(--color-atlantic-900)] group-hover:text-white">
                    <ArrowRightIcon size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------- Coverage --------------------------- */
function CoverageTeaser() {
  return (
    <Section tone="light" className="!pt-0">
      <Container>
        <Card padding="lg" className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">Coverage</div>
            <h2 className="display mt-4 text-[28px] leading-[1.15] sm:text-[34px]">
              Baltic Sea based.
              <br /> Worldwide on arrangement.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-[var(--color-slate-700)]">
              Same-day attendance across the Lithuanian, Latvian and Polish
              coastline. Under 24 hours to principal North Sea and Skagerrak
              ports.
            </p>
            <div className="mt-8">
              <LinkButton href="/coverage" variant="primary" withArrow>
                Coverage details
              </LinkButton>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ImagePlaceholder
              label="World map — illuminated Baltic region with port pins"
              aspect="4/3"
              tone="dark"
            />
          </div>
        </Card>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coverage.slice(0, 3).map((c) => (
            <Card key={c.region} padding="md">
              <div className="flex items-start justify-between">
                <div>
                  <CardEyebrow>Region</CardEyebrow>
                  <CardTitle className="!text-[19px]">{c.region}</CardTitle>
                </div>
                <WaveIcon className="text-[var(--color-atlantic-900)]/60" />
              </div>
              <div className="mt-4 text-[13.5px] text-[var(--color-slate-700)]">
                {c.ports.join(" · ")}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-[var(--color-hairline)] pt-4">
                <span className="eyebrow !text-[10px]">ETA</span>
                <span className="num text-[13px] text-[var(--color-atlantic-900)]">
                  {c.eta}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------- Insights --------------------------- */
function InsightsTeaser() {
  return (
    <Section tone="light" className="!pt-0">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title={<>Technical notes from the deck.</>}
            description="Short, engineering-grade commentary on the methods we use in casework."
          />
          <LinkButton href="/insights" variant="secondary" withArrow>
            All insights
          </LinkButton>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {insights.map((i) => (
            <Link
              key={i.slug}
              href="/insights"
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
              <h3 className="display mt-5 text-[19px] leading-[1.25]">
                {i.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
                {i.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-atlantic-900)]">
                Read note <ArrowRightIcon size={14} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------- Final CTA -------------------------- */
function FinalCTA() {
  return (
    <Section tone="light" className="!pt-0 !pb-24">
      <Container>
        <Card
          tone="dark"
          padding="lg"
          className="grid gap-10 overflow-hidden lg:grid-cols-12 lg:items-center"
        >
          <div className="lg:col-span-7">
            <div className="eyebrow !text-white/60">Engagement</div>
            <h2 className="display mt-4 text-[28px] leading-[1.1] text-white sm:text-[36px] lg:text-[44px]">
              Discuss a surveyor attendance, claim, or audit.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.65] text-white/70">
              Send vessel particulars and incident summary. You will receive a
              scope and quotation within one business day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
            <LinkButton href="/contact" variant="accent" size="lg" withArrow>
              Request scope
            </LinkButton>
            <LinkButton
              href="/about"
              variant="secondary"
              size="lg"
              className="!bg-white/5 !border-white/20 !text-white hover:!border-white/40"
            >
              About the practice
            </LinkButton>
          </div>
          <div className="absolute right-[-80px] top-[-80px] hidden h-[280px] w-[280px] rounded-full bg-white/5 blur-[80px] lg:block" />
          <AnchorIcon
            className="absolute right-8 bottom-8 hidden text-white/10 lg:block"
            size={120}
          />
        </Card>
      </Container>
    </Section>
  );
}
