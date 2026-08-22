import { NextResponse } from "next/server";
import { escapeHtml, getMailConfig, resend } from "@/lib/mail";

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

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `İletişim: ${name}`,
      html: `
        <h2>Yeni iletişim mesajı</h2>
        <p><strong>İsim:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      `,
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
