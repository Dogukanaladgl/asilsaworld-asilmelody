import { brand, contact } from "@/lib/contact";
import { escapeHtml } from "@/lib/mail";

type DetailRow = { label: string; value: string; multiline?: boolean };

function renderRows(rows: DetailRow[]) {
  return rows
    .map((row, index) => {
      const valueHtml = row.multiline
        ? escapeHtml(row.value).replaceAll("\n", "<br/>")
        : escapeHtml(row.value);
      const padding = index === rows.length - 1 ? "0" : "4px";
      return `
        <tr>
          <td style="font-size:14px;color:#2C241C;line-height:1.6;padding-bottom:${padding};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
            <strong style="color:#2C241C;">${escapeHtml(row.label)}:</strong>
            ${row.multiline ? `<div style="margin-top:6px;color:#2C241C;">${valueHtml}</div>` : ` ${valueHtml}`}
          </td>
        </tr>`;
    })
    .join("");
}

function wrapNotificationEmail(options: {
  preview: string;
  title: string;
  intro: string;
  sectionLabel: string;
  rows: DetailRow[];
  ctaHref: string;
  ctaLabel: string;
}) {
  const year = new Date().getFullYear();
  const brandLine1 = escapeHtml(brand.line1);
  const brandLine2 = escapeHtml(brand.line2);
  const brandName = escapeHtml(brand.name);
  const rowsHtml = renderRows(options.rows);

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="tr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${escapeHtml(options.title)}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F7F3EE; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .mobile-padding { padding-left: 24px !important; padding-right: 24px !important; }
      .mobile-btn { display: block !important; width: 100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F7F3EE;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;font-size:1px;color:#F7F3EE;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${escapeHtml(options.preview)}
  </div>
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F7F3EE;table-layout:fixed;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width:600px;background-color:#ffffff;border:1px solid #E8DFD3;border-radius:4px;overflow:hidden;">
          <tr>
            <td style="height:3px;background-color:#C4A574;font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td align="center" class="mobile-padding" style="padding:48px 36px 24px;">
              <div style="font-family:Georgia,'Playfair Display',serif;font-weight:400;color:#2C241C;line-height:1;text-transform:uppercase;">
                <div style="font-size:13px;letter-spacing:0.28em;margin-bottom:6px;">
                  ${brandLine1}<sup style="font-size:0.55em;letter-spacing:0;">®</sup>
                </div>
                <div style="font-size:18px;letter-spacing:0.34em;">
                  ${brandLine2}
                </div>
              </div>
              <div style="width:32px;height:1px;background-color:#C4A574;margin:14px auto 0;"></div>
            </td>
          </tr>
          <tr>
            <td align="center" class="mobile-padding" style="padding:16px 40px 0;">
              <h1 style="margin:0;font-family:Georgia,'Playfair Display',serif;font-size:26px;font-weight:500;color:#2C241C;line-height:1.35;">
                ${escapeHtml(options.title)}
              </h1>
              <p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:#6b6760;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                ${escapeHtml(options.intro)}
              </p>
            </td>
          </tr>
          <tr>
            <td align="center" class="mobile-padding" style="padding:28px 40px 24px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="border-bottom:1px solid #E8DFD3;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="mobile-padding" style="padding:0 40px 28px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#F7F3EE;border:1px solid #E8DFD3;border-radius:4px;">
                <tr>
                  <td style="padding:24px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#C4A574;font-weight:600;padding-bottom:12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                          ${escapeHtml(options.sectionLabel)}
                        </td>
                      </tr>
                      ${rowsHtml}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" class="mobile-padding" style="padding:10px 40px 48px;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${escapeHtml(options.ctaHref)}" style="height:46px;v-text-anchor:middle;width:220px;" arcsize="8%" stroke="f" fillcolor="#C4A574">
                <w:anchorlock/>
                <center style="color:#2C241C;font-family:sans-serif;font-size:13px;font-weight:bold;letter-spacing:1px;">${escapeHtml(options.ctaLabel)}</center>
              </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-->
              <a href="${escapeHtml(options.ctaHref)}" target="_blank" class="mobile-btn" style="background-color:#C4A574;border:1px solid #C4A574;border-radius:3px;color:#2C241C;display:inline-block;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:1.5px;line-height:44px;text-align:center;text-decoration:none;padding:0 36px;text-transform:uppercase;">
                ${escapeHtml(options.ctaLabel)}
              </a>
              <!--<![endif]-->
            </td>
          </tr>
          <tr>
            <td class="mobile-padding" style="background-color:#FBFAF8;border-top:1px solid #E8DFD3;padding:32px 40px;text-align:center;">
              <p style="margin:0 0 10px;font-size:12px;color:#8e8a82;line-height:1.5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                Bu e-posta, asilsaworld.com üzerindeki form bildirimidir.
              </p>
              <p style="margin:0;font-size:12px;color:#aba69e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
                © ${year} ${brandName}. ${escapeHtml(contact.addressShort)}
                &bull; <a href="mailto:${escapeHtml(contact.email)}" style="color:#C4A574;text-decoration:underline;">${escapeHtml(contact.email)}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmailHtml(input: {
  name: string;
  email: string;
  message: string;
}) {
  return wrapNotificationEmail({
    preview: `${input.name} adlı ziyaretçiden yeni bir iletişim mesajı geldi.`,
    title: "Yeni iletişim mesajı",
    intro:
      "Sitedeki iletişim formundan yeni bir mesaj alındı. Aşağıdaki özeti inceleyebilir, yanıtlamak için butonu kullanabilirsiniz.",
    sectionLabel: "Mesaj özeti",
    rows: [
      { label: "İsim", value: input.name },
      { label: "E-posta", value: input.email },
      { label: "Mesaj", value: input.message, multiline: true },
    ],
    ctaHref: `mailto:${input.email}?subject=${encodeURIComponent(`Re: Asil's a World`)}`,
    ctaLabel: "Yanıtla",
  });
}

export function buildCareersEmailHtml(input: {
  name: string;
  email: string;
  position: string;
  message: string;
  cvLabel: string;
}) {
  return wrapNotificationEmail({
    preview: `${input.name} — ${input.position} pozisyonu için yeni kariyer başvurusu.`,
    title: "Yeni kariyer başvurusu",
    intro:
      "Kariyer formundan yeni bir başvuru alındı. Aday bilgilerini aşağıda görebilir, doğrudan e-posta ile dönüş yapabilirsiniz.",
    sectionLabel: "Başvuru özeti",
    rows: [
      { label: "İsim", value: input.name },
      { label: "E-posta", value: input.email },
      { label: "Pozisyon", value: input.position },
      { label: "Mesaj", value: input.message || "—", multiline: true },
      { label: "CV", value: input.cvLabel },
    ],
    ctaHref: `mailto:${input.email}?subject=${encodeURIComponent(`Re: Kariyer — ${input.position}`)}`,
    ctaLabel: "Adaya yaz",
  });
}
