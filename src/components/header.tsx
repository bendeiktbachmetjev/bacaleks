"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/site";
import { cn } from "@/lib/cn";
import {
  AnchorIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from "@/components/icons";
import { EmergencyButton } from "./emergency";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  // Dark hero mode: only on Home, only while we are still above the hero.
  // When active → transparent header + white text.
  const darkMode = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSub(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        "border-b",
        darkMode
          ? "border-transparent bg-transparent"
          : scrolled
            ? "border-[var(--color-border)] bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
            : "border-transparent bg-white/40 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60",
      )}
      style={
        darkMode
          ? undefined
          : { WebkitBackdropFilter: "saturate(180%) blur(20px)" }
      }
    >
      <div className="mx-auto flex h-[64px] w-full max-w-[1240px] items-center gap-4 px-5 sm:h-[68px] sm:px-8 lg:px-12">
        {/* Brand */}
        <Link
          href="/"
          className={cn(
            "group flex items-center gap-2.5 transition-colors",
            darkMode ? "text-white" : "text-[var(--color-atlantic-900)]",
          )}
          aria-label={site.name}
        >
          <span
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-[10px] transition-colors",
              darkMode
                ? "bg-white/15 text-white backdrop-blur-sm"
                : "bg-[var(--color-atlantic-900)] text-white",
            )}
          >
            <AnchorIcon size={18} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-semibold tracking-[-0.01em]">
              {site.shortName}
            </span>
            <span
              className={cn(
                "eyebrow !text-[9px]",
                darkMode && "!text-white/70",
              )}
            >
              Marine Advisory
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="ml-8 hidden flex-1 items-center gap-1 xl:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const linkColor = darkMode
              ? active
                ? "text-white"
                : "text-white/80 hover:text-white"
              : active
                ? "text-[var(--color-atlantic-900)]"
                : "text-[var(--color-slate-800)] hover:text-[var(--color-atlantic-900)]";

            if (item.children) {
              const isOpen = openSub === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenSub(item.label)}
                  onMouseLeave={() => setOpenSub(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors",
                      linkColor,
                    )}
                  >
                    {item.label}
                    <ChevronDownIcon size={14} />
                  </Link>
                  {isOpen && (
                    <div className="absolute left-0 top-full pt-3">
                      <div className="w-[340px] rounded-[16px] border border-[var(--color-border)] bg-white p-2 shadow-[0_20px_40px_-20px_rgba(10,25,47,0.2)]">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="group block rounded-[10px] p-3 hover:bg-[var(--color-deck)]"
                          >
                            <div className="text-[14px] font-semibold text-[var(--color-atlantic-900)]">
                              {sub.label}
                            </div>
                            {sub.description && (
                              <div className="mt-1 text-[12.5px] leading-snug text-[var(--color-slate-700)]">
                                {sub.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors",
                  linkColor,
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <EmergencyButton />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors xl:hidden",
              darkMode
                ? "border-white/25 bg-white/10 text-white backdrop-blur-sm"
                : "border-[var(--color-border)] bg-white text-[var(--color-atlantic-900)]",
            )}
            aria-label="Open navigation"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] xl:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[var(--color-atlantic-900)]/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[min(420px,100%)] bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[64px] items-center justify-between border-b border-[var(--color-border)] px-5">
          <span className="eyebrow">Navigation</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)]"
            aria-label="Close navigation"
          >
            <CloseIcon />
          </button>
        </div>
        <nav
          className="flex h-[calc(100%-64px)] flex-col overflow-y-auto p-5"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-[12px] px-3 py-3 text-[16px] font-semibold",
                      active
                        ? "bg-[var(--color-deck)] text-[var(--color-atlantic-900)]"
                        : "text-[var(--color-atlantic-900)]",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 ml-3 border-l border-[var(--color-border)] pl-3">
                      {item.children.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block rounded-[10px] px-3 py-2 text-[14.5px] text-[var(--color-slate-700)] hover:text-[var(--color-atlantic-900)]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pt-6">
            <a
              href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
              className="flex items-center justify-between rounded-[14px] bg-[var(--color-orange-500)] px-5 py-4 text-white"
            >
              <span>
                <span className="block text-[11px] uppercase tracking-[0.14em] opacity-80">
                  24/7 Technical Attendance
                </span>
                <span className="num block text-[15px] font-semibold">
                  {site.emergencyPhone}
                </span>
              </span>
              <PhoneIcon size={18} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
