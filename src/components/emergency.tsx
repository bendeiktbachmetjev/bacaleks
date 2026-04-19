"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { CloseIcon, MailIcon, PhoneIcon } from "@/components/icons";

export function EmergencyButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex h-10 items-center gap-2 rounded-full bg-[var(--color-orange-500)] pl-3 pr-4 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--color-orange-600)]",
          className,
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="hidden sm:inline">24/7 Technical Attendance</span>
        <span className="sm:hidden">SOS</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Emergency contact"
        >
          <div
            className="absolute inset-0 bg-[var(--color-atlantic-950)]/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-[460px] rounded-[20px] border border-white/10 bg-[var(--color-atlantic-900)] p-6 text-white shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="eyebrow !text-white/70">
                  24/7 Technical Attendance
                </div>
                <h2 className="display mt-2 text-[22px] text-white">
                  Emergency on board?
                </h2>
                <p className="mt-2 text-[14px] text-white/70">
                  Reach a certified Chief Engineer directly. No call centre,
                  no ticket queue.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 hover:bg-white/10"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={`tel:${site.emergencyPhone.replace(/\s/g, "")}`}
                className="flex items-center justify-between rounded-[14px] bg-[var(--color-orange-500)] px-5 py-4 hover:bg-[var(--color-orange-600)]"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] opacity-80">
                    Voice line (24/7)
                  </span>
                  <span className="num mt-0.5 block text-[16px] font-semibold">
                    {site.emergencyPhone}
                  </span>
                </span>
                <PhoneIcon />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-white/60">
                    WhatsApp
                  </span>
                  <span className="num mt-0.5 block text-[15px]">
                    {site.whatsapp}
                  </span>
                </span>
                <span className="num text-[12px] text-white/60">Chat</span>
              </a>
              <a
                href={`mailto:${site.email}?subject=URGENT%20-%20Technical%20Attendance`}
                className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-white/60">
                    Email
                  </span>
                  <span className="num mt-0.5 block text-[15px]">
                    {site.email}
                  </span>
                </span>
                <MailIcon />
              </a>
            </div>

            <p className="mt-6 text-[12px] leading-relaxed text-white/55">
              For casualty attendance please have vessel name, IMO number,
              position, and nature of incident ready.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
