import type { Metadata } from "next";
import { renderServicePage } from "@/components/service-detail";
import { services } from "@/lib/site";

const slug = "surveys";
const s = services.find((x) => x.slug === slug)!;

export const metadata: Metadata = {
  title: s.title,
  description: s.summary,
};

export default function Page() {
  return renderServicePage(slug);
}
