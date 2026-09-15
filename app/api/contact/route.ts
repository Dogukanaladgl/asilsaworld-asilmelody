import { NextResponse } from "next/server";
import { buildContactEmailHtml } from "@/lib/email-templates";
import { getMailConfig, getResend } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { to, from } = getMailConfig();

    const { error } = await getResend().emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `İletişim: ${name}`,
      html: buildContactEmailHtml({ name, email, message }),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
