import Link from "next/link";
import { primaryNav, services, site } from "@/lib/site";
import { Container } from "@/components/layout";
import { AnchorIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export function Footer() {
  const main = primaryNav.filter(
    (i) => !["Home", "Services"].includes(i.label),
  );
  return (
    <footer className="bg-[var(--color-atlantic-900)] text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-white/10">
                <AnchorIcon />
              </span>
              <span>
                <span className="block text-[16px] font-semibold tracking-[-0.01em]">
                  {site.name}
                </span>
                <span className="eyebrow !text-white/50">Marine Advisory</span>
              </span>
            </Link>
            <p className="mt-6 max-w-[380px] text-[14.5px] leading-[1.65] text-white/70">
              Independent marine surveying, superintendency and performance
              advisory. Acting exclusively for Shipowners and Charterers.
            </p>
            <div className="mt-8 space-y-3 text-[14px] text-white/80">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <MailIcon size={18} /> <span className="num">{site.email}</span>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <PhoneIcon size={18} /> <span className="num">{site.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPinIcon size={18} /> {site.location}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow !text-white/50">Services</div>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    className="text-[14.5px] text-white/80 hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow !text-white/50">Company</div>
            <ul className="mt-5 space-y-3">
              {main.map((i) => (
                <li key={i.href}>
                  <Link
                    href={i.href}
                    className="text-[14.5px] text-white/80 hover:text-white"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow !text-white/50">Position</div>
            <div className="num mt-5 text-[13.5px] leading-relaxed text-white/75">
              {site.coordinates}
              <br />
              Port of Klaipėda
              <br />
              Baltic Sea
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/50 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div className="flex gap-5">
            <span className="num">{site.registration}</span>
            <Link href="/contact" className="hover:text-white/80">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white/80">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
