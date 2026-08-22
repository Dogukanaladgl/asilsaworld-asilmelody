import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export function getMailConfig() {
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Asil's a World <onboarding@resend.dev>";

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing");
  }
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is missing");
  }

  return { to, from };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
