import { NextResponse } from "next/server";
import { escapeHtml, getMailConfig, resend } from "@/lib/mail";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const position = String(formData.get("position") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const cv = formData.get("cv");

    if (!name || !email || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const { to, from } = getMailConfig();

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    if (cv instanceof File && cv.size > 0) {
      if (cv.size > MAX_CV_BYTES) {
        return NextResponse.json(
          { error: "CV too large" },
          { status: 413 },
        );
      }
      const buffer = Buffer.from(await cv.arrayBuffer());
      attachments.push({
        filename: cv.name || "cv.pdf",
        content: buffer,
      });
    }

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Kariyer başvurusu: ${name} — ${position}`,
      html: `
        <h2>Yeni kariyer başvurusu</h2>
        <p><strong>İsim:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Pozisyon:</strong> ${escapeHtml(position)}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message || "—").replaceAll("\n", "<br/>")}</p>
        <p><strong>CV:</strong> ${attachments.length ? attachments[0].filename : "Yüklenmedi"}</p>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend careers error:", error);
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
