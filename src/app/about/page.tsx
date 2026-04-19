import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { SectionHeading } from "@/components/section-heading";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { LinkButton } from "@/components/button";
import { CheckIcon, ShieldIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founder-led marine advisory practice combining Chief Engineer sea time with maritime law expertise.",
};

const timeline = [
  { year: "1989", text: "Graduated as Marine Engineer, began sea service on general cargo and tankers." },
  { year: "1996", text: "Chief Engineer endorsement on motor vessels, unlimited horsepower." },
  { year: "2004", text: "LL.M. in Maritime Law. Transition to shore-based advisory and claims support." },
  { year: "2011", text: "Opened independent practice in Klaipėda serving Baltic owners and charterers." },
  { year: "2024", text: "400+ attendances delivered across 14 flags, 12 vessel types." },
];

const credentials = [
  { title: "Chief Engineer", detail: "Class 1 motor, unlimited kW. STCW III/2." },
  { title: "LL.M. Maritime Law", detail: "Charter-party disputes, COGSA, Hague-Visby." },
  { title: "ISO 19030", detail: "Hull & propeller performance analysis." },
  { title: "Member", detail: "Association of Average Adjusters (associate). NI member." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Founder-led. Bench-tested.
            <br /> Court-ready.
          </>
        }
        description="An independent marine advisory built around a single conviction: the technical report should withstand cross-examination, not marketing scrutiny."
      />

      {/* Founder */}
      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <ImagePlaceholder
                label="Founder portrait — studio, desaturated, cool tone"
                aspect="4/3"
                tone="dark"
              />
              <Card padding="sm" className="mt-4 !py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="eyebrow">Founder</div>
                    <div className="mt-1 text-[15px] font-semibold text-[var(--color-atlantic-900)]">
                      {/* TODO: replace with real name */}
                      [Founder Name], C/E · LL.M.
                    </div>
                  </div>
                  <span className="num rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                    {site.location}
                  </span>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Biography"
                title={<>Three decades between the engine room and the courtroom.</>}
              />
              <div className="mt-6 space-y-4 text-[15.5px] leading-[1.7] text-[var(--color-slate-800)]">
                {/* TODO: replace with real founder biography */}
                <p>
                  [Placeholder biography — 3 to 5 paragraphs covering sea
                  service, notable vessels and trades, transition to shore
                  practice, academic work in maritime law, and the decision
                  to establish an independent advisory in Klaipėda.]
                </p>
                <p>
                  [Placeholder paragraph — specialisation, languages, key
                  international casework, reputation within the Baltic
                  shipping community.]
                </p>
                <p>
                  [Placeholder paragraph — philosophy of independence, why
                  the practice declines insurer-panel work, and how
                  engagements are structured.]
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {credentials.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-[12px] border border-[var(--color-border)] bg-white p-4"
                  >
                    <div className="eyebrow !text-[10px]">Credential</div>
                    <div className="mt-2 text-[14px] font-semibold text-[var(--color-atlantic-900)]">
                      {c.title}
                    </div>
                    <div className="mt-1 text-[12.5px] leading-snug text-[var(--color-slate-700)]">
                      {c.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section tone="light" className="!pt-0">
        <Container>
          <Card padding="lg">
            <SectionHeading
              eyebrow="Timeline"
              title={<>Professional record.</>}
            />
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <div className="num text-[22px] font-semibold text-[var(--color-atlantic-900)]">
                    {t.year}
                  </div>
                  <div className="mt-3 h-px bg-[var(--color-border)]" />
                  <p className="mt-4 text-[13.5px] leading-[1.6] text-[var(--color-slate-700)]">
                    {t.text}
                  </p>
                </li>
              ))}
            </ol>
          </Card>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="light" className="!pt-0">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Card padding="md">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-[var(--color-atlantic-900)] text-white">
                <ShieldIcon />
              </span>
              <CardTitle className="!mt-6 !text-[20px]">
                Independence
              </CardTitle>
              <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
                No retainer with insurers or class societies. Conflict checks
                on every engagement.
              </p>
            </Card>
            <Card padding="md">
              <CardEyebrow>Method</CardEyebrow>
              <CardTitle className="!text-[20px]">Engineering first</CardTitle>
              <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
                Findings are quantitative, referenced to standards, and
                supported by primary evidence.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "ISO 19030 / ISO 8217",
                  "SOLAS, MARPOL, ISM audits",
                  "Primary photographic record",
                ].map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-2 text-[13.5px] text-[var(--color-slate-800)]"
                  >
                    <CheckIcon
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--color-atlantic-900)]"
                    />
                    {l}
                  </li>
                ))}
              </ul>
            </Card>
            <Card padding="md">
              <CardEyebrow>Reporting</CardEyebrow>
              <CardTitle className="!text-[20px]">Evidentiary standard</CardTitle>
              <p className="mt-3 text-[14px] leading-[1.6] text-[var(--color-slate-700)]">
                Reports are drafted to be used in arbitration and court
                without rewriting by legal counsel.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section tone="light" className="!pt-0">
        <Container>
          <Card tone="dark" padding="lg" className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="eyebrow !text-white/60">Next step</div>
              <h2 className="display mt-3 text-[26px] text-white sm:text-[32px]">
                Read a sample engagement.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="/case-studies" variant="accent" withArrow>
                Case studies
              </LinkButton>
              <LinkButton
                href="/contact"
                variant="secondary"
                className="!bg-white/5 !border-white/20 !text-white hover:!border-white/40"
              >
                Contact
              </LinkButton>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
