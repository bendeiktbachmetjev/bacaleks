"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/cn";

const serviceOptions = [
  "Claims Advisory",
  "Survey",
  "Superintendency",
  "Performance Audit",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [service, setService] = useState("Survey");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const data = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      (e.target as HTMLFormElement).reset();
      setService("Survey");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input type="hidden" name="service" value={service} />
      <div>
        <Label>Service</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                service === s
                  ? "border-[var(--color-atlantic-900)] bg-[var(--color-atlantic-900)] text-white"
                  : "border-[var(--color-border)] bg-white text-[var(--color-slate-800)] hover:border-[var(--color-atlantic-900)]",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Full name" required />
        <Field name="company" label="Company" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone (optional)" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="vessel" label="Vessel name" />
        <Field name="imo" label="IMO number" mono />
      </div>
      <div>
        <Label htmlFor="message">Short description</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Nature of engagement, port(s), timeline…"
          className="mt-2 w-full rounded-[12px] border border-[var(--color-border)] bg-white px-4 py-3 text-[14.5px] text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-500)] focus:border-[var(--color-atlantic-900)] focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 text-[12.5px] text-[var(--color-slate-700)]">
        <input
          id="nda"
          name="nda"
          type="checkbox"
          className="h-4 w-4 accent-[var(--color-atlantic-900)]"
        />
        <label htmlFor="nda">
          I may require an NDA before further discussion.
        </label>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" withArrow disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send request"}
        </Button>
        {status === "ok" && (
          <span className="text-[13.5px] text-[var(--color-atlantic-900)]">
            Received. Reply within one business day.
          </span>
        )}
        {status === "error" && (
          <span className="text-[13.5px] text-[var(--color-orange-600)]">
            Delivery failed. Please email directly.
          </span>
        )}
      </div>
    </form>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="eyebrow !text-[10px]"
    >
      {children}
    </label>
  );
}

function Field({
  name,
  label,
  required,
  type = "text",
  mono,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  mono?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label} {required && <span className="text-[var(--color-orange-500)]">*</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={cn(
          "mt-2 w-full rounded-[12px] border border-[var(--color-border)] bg-white px-4 py-3 text-[14.5px] text-[var(--color-slate-800)] placeholder:text-[var(--color-slate-500)] focus:border-[var(--color-atlantic-900)] focus:outline-none",
          mono && "font-mono",
        )}
      />
    </div>
  );
}
