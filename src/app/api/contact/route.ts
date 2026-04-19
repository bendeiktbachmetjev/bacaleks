import { NextResponse } from "next/server";

/**
 * Stub contact endpoint.
 * Wire up to SMTP / Resend / Postmark once credentials are provided
 * (see README.md → "Required assets & secrets").
 */
export async function POST(req: Request) {
  try {
    const data = await req.json();
    // TODO: integrate with email provider (Resend / SMTP / Postmark).
    // For now we only validate shape and log to server output.
    if (!data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }
    console.log("[contact] inbound:", {
      service: data.service,
      name: data.name,
      email: data.email,
      vessel: data.vessel,
      imo: data.imo,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Bad request" },
      { status: 400 },
    );
  }
}
