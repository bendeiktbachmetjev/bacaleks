import type { Metadata } from "next";
import { Container, Section } from "@/components/layout";
import { PageHero } from "@/components/page-hero";
import { Card, CardEyebrow, CardTitle } from "@/components/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a surveyor attendance, claims review or performance audit. Reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Request scope and quotation.</>}
        description="Send vessel particulars and a short description of the matter. You will receive a written scope within one business day."
      />

      <Section tone="light" className="!pt-16 sm:!pt-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <Card padding="md">
                <CardEyebrow>Office</CardEyebrow>
                <CardTitle className="!text-[20px]">{site.location}</CardTitle>
                <dl className="mt-5 space-y-4 text-[14px] text-[var(--color-slate-800)]">
                  <div className="flex items-start gap-3">
                    <MailIcon
                      size={18}
                      className="mt-0.5 text-[var(--color-atlantic-900)]"
                    />
                    <div>
                      <dt className="eyebrow !text-[10px]">Email</dt>
                      <dd className="num mt-1">
                        <a
                          href={`mailto:${site.email}`}
                          className="hover:underline"
                        >
                          {site.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PhoneIcon
                      size={18}
                      className="mt-0.5 text-[var(--color-atlantic-900)]"
                    />
                    <div>
                      <dt className="eyebrow !text-[10px]">Office phone</dt>
                      <dd className="num mt-1">
                        <a
                          href={`tel:${site.phone.replace(/\s/g, "")}`}
                          className="hover:underline"
                        >
                          {site.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPinIcon
                      size={18}
                      className="mt-0.5 text-[var(--color-atlantic-900)]"
                    />
                    <div>
                      <dt className="eyebrow !text-[10px]">Position</dt>
                      <dd className="num mt-1">{site.coordinates}</dd>
                    </div>
                  </div>
                </dl>
              </Card>

              <Card tone="dark" padding="md">
                <CardEyebrow>24/7 Technical Attendance</CardEyebrow>
                <CardTitle className="!text-white !text-[20px]">
                  In case of casualty.
                </CardTitle>
                <p className="mt-3 text-[14px] leading-[1.6] text-white/75">
                  For active incidents please call the emergency line. Have
                  vessel name, IMO number, position and nature of event
                  ready.
                </p>
                <a
                  href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
                  className="mt-5 inline-flex items-center gap-3 rounded-full bg-[var(--color-orange-500)] px-5 py-3 text-[14px] font-semibold text-white hover:bg-[var(--color-orange-600)]"
                >
                  <PhoneIcon size={16} />
                  <span className="num">{site.emergencyPhone}</span>
                </a>
              </Card>

              <ImagePlaceholder
                label="Klaipėda port — cool-tone editorial photo"
                aspect="4/3"
                tone="dark"
              />
            </div>

            <div className="lg:col-span-7">
              <Card padding="lg">
                <CardEyebrow>Request scope</CardEyebrow>
                <CardTitle>Send engagement details.</CardTitle>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[var(--color-slate-700)]">
                  All messages are treated as confidential. Please do not
                  include privileged information in your first contact.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
