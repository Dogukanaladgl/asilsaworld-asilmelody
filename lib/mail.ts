import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is missing");
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

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
