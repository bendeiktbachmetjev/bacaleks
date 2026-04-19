import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { CheckIcon } from "@/components/icons";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Vessel types and trades we attend on a regular basis across the Baltic and North Sea.",
};

const scope: Record<string, string[]> = {
  "Dry Bulk": [
    "Hold cleanliness & cargo readiness",
    "Draft and displacement surveys",
    "Stevedore damage, cargo contamination",
    "Hatch cover weathertightness (ultrasonic)",
  ],
  "Tankers": [
    "Tank condition & coating assessment",
    "Ship-to-ship transfer attendance",
    "Pre-SIRE / CDI gap audits",
    "Cargo short / over delivery",
  ],
  "Container": [
    "Reefer plant attendance",
    "Stowage & lashing verification",
    "Stevedore damage catalogue",
    "Container weight (VGM) discrepancy",
  ],
  "General Cargo & MPP": [
    "Project cargo stow review",
    "Heavy lift rigging plans",
    "Break-bulk sampling",
    "Lashing calculations to CSS code",
  ],
  "RoRo & Ferries": [
    "Ramp & deck condition",
    "Vehicle damage assessment",
    "Passenger vessel ISM attendance",
    "Turnaround-time studies",
  ],
  "Offshore & Workboats": [
    "Condition audits for charter",
    "Towage & warranty approval support",
    "Deck equipment certification review",
    "OVMSA / OVID gap analysis",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Scope is tailored to the asset class.</>}
        description="A Panamax bulker is not a chemical tanker. We adjust method, checklists and reporting format to the trade — not the other way round."
      />

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {industries.map((ind) => (
              <Card key={ind.name} padding="lg" className="flex flex-col gap-6">
                <ImagePlaceholder
                  label={`${ind.name} — representative vessel, cool tone`}
                  aspect="16/9"
                  tone="dark"
                />
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardEyebrow>Sector</CardEyebrow>
                      <CardTitle>{ind.name}</CardTitle>
                    </div>
                    <span className="num rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[11px] text-[var(--color-slate-700)]">
                      {ind.badge}
                    </span>
                  </div>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[var(--color-slate-700)]">
                    {ind.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {(scope[ind.name] ?? []).map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-[13.5px] text-[var(--color-slate-800)]"
                      >
                        <CheckIcon
                          size={16}
                          className="mt-0.5 shrink-0 text-[var(--color-atlantic-900)]"
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
