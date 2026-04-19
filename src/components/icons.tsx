import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (p: IconProps) => ({
  width: p.size ?? 24,
  height: p.size ?? 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v16" />
      <path d="M6 20h12" />
      <path d="M4 8h16" />
      <path d="M4 8l-2 6a4 4 0 0 0 8 0L8 8" />
      <path d="M20 8l-2 6a4 4 0 0 0 8 0l-2-6" transform="translate(-4 0)" />
    </svg>
  );
}

export function SurveyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M20 20l-4.5-4.5" />
      <path d="M8 10.5h5" />
      <path d="M10.5 8v5" />
    </svg>
  );
}

export function AuditIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 20V6" />
      <path d="M4 20h16" />
      <path d="M7 16l4-5 3 3 5-7" />
      <circle cx="19" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function HelmetIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M3 15h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M12 7v-2" />
      <path d="M9 15v-3" />
      <path d="M15 15v-3" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function AnchorIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14" />
      <path d="M5 13a7 7 0 0 0 14 0" />
      <path d="M9 10h6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)} strokeWidth={2}>
      <path d="M5 12.5l4 4 10-10" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 48 24">
      <path d="M0 12c6 0 6-6 12-6s6 6 12 6 6-6 12-6 6 6 12 6" />
      <path d="M0 18c6 0 6-6 12-6s6 6 12 6 6-6 12-6 6 6 12 6" opacity=".5" />
    </svg>
  );
}

export const ServiceIconMap = {
  scale: ScaleIcon,
  survey: SurveyIcon,
  audit: AuditIcon,
  helmet: HelmetIcon,
} as const;
