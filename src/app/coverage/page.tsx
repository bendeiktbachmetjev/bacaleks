import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { WaveIcon } from "@/components/icons";
import { coverage, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "Geographical coverage with primary ports, response times and worldwide partner network.",
};

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title={<>Baltic-based. Network-backed. Worldwide attendance.</>}
        description="Primary coverage is delivered in-house across the Baltic. Outside the Baltic we work through a vetted network of independent Chief-Engineer surveyors."
      />

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <Card padding="lg" className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <CardEyebrow>Home port</CardEyebrow>
              <CardTitle>Klaipėda, Lithuania.</CardTitle>
              <p className="mt-4 text-[15px] leading-[1.65] text-[var(--color-slate-700)]">
                The only ice-free deep-water port on the eastern Baltic,
                handling dry bulk, containers, RoRo, tankers and project
                cargo. Short drive to Liepāja and Ventspils; one day to
                Gdańsk and Gdynia.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <dt className="eyebrow !text-[10px]">Position</dt>
                  <dd className="num mt-1 text-[14px] text-[var(--color-atlantic-900)]">
                    {site.coordinates}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow !text-[10px]">Attendance</dt>
                  <dd className="num mt-1 text-[14px] text-[var(--color-atlantic-900)]">
                    Same day
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow !text-[10px]">Road distance</dt>
                  <dd className="num mt-1 text-[14px] text-[var(--color-atlantic-900)]">
                    Riga 300 km · Gdańsk 430 km
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow !text-[10px]">Languages</dt>
                  <dd className="num mt-1 text-[14px] text-[var(--color-atlantic-900)]">
                    EN · LT · RU
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-7">
              <ImagePlaceholder
                label="Stylised Baltic map with port markers — dark navy"
                aspect="4/3"
                tone="dark"
              />
            </div>
          </Card>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((c) => (
              <Card key={c.region} padding="md">
                <div className="flex items-start justify-between">
                  <div>
                    <CardEyebrow>Region</CardEyebrow>
                    <CardTitle className="!text-[19px]">{c.region}</CardTitle>
                  </div>
                  <WaveIcon className="text-[var(--color-atlantic-900)]/60" />
                </div>
                <div className="mt-4 text-[13.5px] leading-[1.6] text-[var(--color-slate-700)]">
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
    </>
  );
}
