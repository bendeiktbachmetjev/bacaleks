export const site = {
  name: "Bacaleks Marine",
  shortName: "Bacaleks",
  legalName: "Bacaleks Marine Advisory",
  tagline: "Independent Marine Advisory & Performance Audits",
  subtagline:
    "Chief Engineer expertise meeting maritime law precision. Based in Klaipėda, serving the Baltic region.",
  location: "Klaipėda, Lithuania",
  coordinates: "55.7033° N, 21.1443° E",
  email: "office@bacaleks.com", // TODO: replace with real
  phone: "+370 000 000 000", // TODO: replace with real
  emergencyPhone: "+370 000 000 000", // TODO: replace with real
  whatsapp: "+370 000 000 000",
  telegram: "@bacaleks",
  founded: 1998,
  registration: "VAT LT000000000", // TODO: replace with real
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Claims Advisory",
        href: "/services/claims-advisory",
        description: "Independent claims support for owners and charterers.",
      },
      {
        label: "Surveys",
        href: "/services/surveys",
        description: "Condition, draft, bunker and damage surveys.",
      },
      {
        label: "Superintendency",
        href: "/services/superintendency",
        description: "Newbuilding, drydock and loading supervision.",
      },
      {
        label: "Performance Audits",
        href: "/services/performance-audits",
        description: "Hull, machinery and voyage performance analysis.",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Coverage", href: "/coverage" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  deliverables: string[];
  href: string;
  icon: "scale" | "survey" | "audit" | "helmet";
};

export const services: Service[] = [
  {
    slug: "claims-advisory",
    title: "Claims Advisory",
    kicker: "Post-incident technical support",
    summary:
      "Independent engineering review of machinery, cargo and hull claims. Preparation of owner-side technical reports, evidence preservation and expert attendance.",
    deliverables: [
      "Root cause analysis (RCA)",
      "Quantum assessment of damage",
      "Owner-side technical reports",
      "Court and arbitration attendance",
    ],
    href: "/services/claims-advisory",
    icon: "scale",
  },
  {
    slug: "surveys",
    title: "Surveys",
    kicker: "On/off-hire · damage · draft · bunker",
    summary:
      "Condition and transactional surveys carried out by certified Chief Engineers. Documented findings with measurable criteria, photographs and machinery tests.",
    deliverables: [
      "Condition & valuation surveys",
      "On/off-hire inspections",
      "Bunker quality & quantity",
      "Draft surveys & sampling",
    ],
    href: "/services/surveys",
    icon: "survey",
  },
  {
    slug: "superintendency",
    title: "Superintendency",
    kicker: "Owner's representation on site",
    summary:
      "Supervision of drydockings, newbuilding projects, major repairs and critical loadings. Daily progress reports, cost control and quality verification.",
    deliverables: [
      "Drydock & repair supervision",
      "Newbuilding site inspection",
      "Loading / lashing supervision",
      "Pre-purchase inspections",
    ],
    href: "/services/superintendency",
    icon: "helmet",
  },
  {
    slug: "performance-audits",
    title: "Performance Audits",
    kicker: "Hull · machinery · voyage",
    summary:
      "Quantitative audit of vessel performance against charter-party warranties. Noon-report verification, ISO 19030 hull performance and fuel consumption analysis.",
    deliverables: [
      "ISO 19030 hull performance",
      "Speed & consumption vs C/P",
      "Noon-report verification",
      "Fuel oil and lube oil audits",
    ],
    href: "/services/performance-audits",
    icon: "audit",
  },
];

export const industries = [
  {
    name: "Dry Bulk",
    description:
      "Handysize to Capesize. Cargo hold inspections, pre-loading readiness, draft surveys.",
    badge: "Bulkers",
  },
  {
    name: "Tankers",
    description:
      "Oil, chemical and product carriers. Tank condition, SIRE/CDI familiarity, bunker integrity.",
    badge: "Tankers",
  },
  {
    name: "Container",
    description:
      "Box stowage, lashing verification, reefer plant attendance, stevedore damage.",
    badge: "Boxships",
  },
  {
    name: "General Cargo & MPP",
    description:
      "Heavy lift, project cargo, break-bulk. Lashing calculations and stow review.",
    badge: "MPP",
  },
  {
    name: "RoRo & Ferries",
    description:
      "Ramp and deck surveys, vehicle damage assessment, passenger vessel attendance.",
    badge: "RoRo",
  },
  {
    name: "Offshore & Workboats",
    description:
      "Tugs, OSVs, pontoons. Condition audits and towage approval assistance.",
    badge: "Offshore",
  },
];

export const caseStudies = [
  {
    slug: "main-engine-crankshaft",
    title: "Main engine crankshaft failure — Handymax bulker",
    sector: "Dry Bulk",
    year: 2024,
    summary:
      "Independent RCA after catastrophic main-engine damage off the Skaw. Findings supported the Owner's recovery against lube-oil supplier.",
    metric: { label: "Quantum recovered", value: "USD 1.8M" },
  },
  {
    slug: "hull-performance-iso-19030",
    title: "Hull performance dispute under ISO 19030",
    sector: "Tankers",
    year: 2023,
    summary:
      "Re-analysis of 14 months of noon reports and CP speed warranties for a MR tanker; identified weather-routing bias in Charterer's claim.",
    metric: { label: "Claim reduced", value: "−62%" },
  },
  {
    slug: "drydock-supervision",
    title: "Drydock supervision — 2× Supramax",
    sector: "Dry Bulk",
    year: 2024,
    summary:
      "On-site superintendency in Klaipėda and Gdańsk. Daily reporting, specification control and variation order review.",
    metric: { label: "Variation saved", value: "EUR 214k" },
  },
  {
    slug: "bunker-quality-dispute",
    title: "Bunker quality dispute — VLSFO",
    sector: "Container",
    year: 2023,
    summary:
      "Sampling chain-of-custody review and ISO 8217 parameter analysis after purifier distress in the Mediterranean.",
    metric: { label: "Off-spec confirmed", value: "ISO 8217 §5" },
  },
];

export const coverage = [
  { region: "Baltic Sea", ports: ["Klaipėda", "Riga", "Ventspils", "Tallinn", "Gdańsk", "Gdynia"], eta: "Same day" },
  { region: "North Sea", ports: ["Rotterdam", "Antwerp", "Hamburg", "Bremerhaven"], eta: "< 24 h" },
  { region: "Skagerrak & Kattegat", ports: ["Skaw", "Gothenburg", "Aarhus"], eta: "< 24 h" },
  { region: "Mediterranean", ports: ["Piraeus", "Istanbul", "Genoa", "Barcelona"], eta: "On request" },
  { region: "Black Sea", ports: ["Constanța", "Varna"], eta: "On request" },
  { region: "Worldwide", ports: ["Via partner network"], eta: "By arrangement" },
];

export const insights = [
  {
    slug: "iso-19030-pitfalls",
    title: "ISO 19030 in practice: three pitfalls in charter-party disputes",
    date: "2025-02-18",
    readingTime: "7 min",
    excerpt:
      "Weather sources, filtering rules and the choice of reference period quietly drive the outcome of most hull-performance claims.",
    tag: "Performance",
  },
  {
    slug: "owner-vs-insurer-scope",
    title: "Owner-appointed vs insurer-appointed surveyors: scope of duty",
    date: "2024-11-04",
    readingTime: "5 min",
    excerpt:
      "A short note on why the identity of the appointing party changes the weight of the resulting report.",
    tag: "Legal",
  },
  {
    slug: "vlsfo-stability",
    title: "VLSFO stability: what a surveyor actually tests on board",
    date: "2024-07-22",
    readingTime: "6 min",
    excerpt:
      "A practical checklist for on-board verification of fuel condition, from sighting glass to spot checks.",
    tag: "Bunkers",
  },
];
