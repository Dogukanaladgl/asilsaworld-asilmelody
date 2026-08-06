export type Language = "tr" | "en";

export type LocalizedText = Record<Language, string>;

export const dictionary = {
  tr: {
    nav: {
      collections: "Koleksiyonlar",
      asilMelody: "Asil Melody",
      careers: "Kariyer",
      contact: "İletişim",
    },
    hero: {
      title: "Her Detayda Zarafet.",
      subtitle: "Yaşam alanlarının sanatını keşfedin.",
      scroll: "Keşfetmek için kaydırın",
    },
    collections: {
      title: "Seçkin Koleksiyonlar",
      inquire: "Bilgi Al",
    },
    lightbox: {
      whatsapp: "WhatsApp'tan Bilgi Al",
      reference: "Ref.",
      close: "Kapat",
      message: "Merhaba, {title} hakkında bilgi almak istiyorum.",
    },
    partner: {
      eyebrow: "Partner",
      title: "İlham Kaynağımızı Keşfedin: Asil Melody",
      description:
        "Sıcak bir ses müzesi — atmosferin, yaşam alanının ötesinde sanatla buluştuğu yer.",
      cta: "Keşfet",
    },
    footer: {
      tagline:
        "Premium bir mobilya lookbook'u — her detayda zarafet, seçkin yaşam alanları için.",
      quickLinks: "Hızlı Linkler",
      contact: "İletişim",
      rights: "© 2026 Asilsa World. Tüm hakları saklıdır.",
    },
    careers: {
      title: "Vizyonumuza Katıl",
      subtitle:
        "Eğer estetiğe, lükse ve kusursuz detaylara tutkuyla bağlıysan, Asilsa World ekibinde sana her zaman yer var.",
      name: "İsim",
      namePlaceholder: "Adınız Soyadınız",
      email: "E-posta",
      emailPlaceholder: "ornek@email.com",
      position: "Pozisyon",
      positionPlaceholder: "Başvurmak istediğiniz pozisyon",
      about: "Kendini Anlat",
      aboutPlaceholder: "Bize biraz kendinizden bahsedin...",
      cv: "CV",
      cvHint: "CV'nizi sürükleyin veya seçmek için tıklayın (.pdf, .docx)",
      submit: "Başvuruyu Gönder",
    },
    common: {
      switchLanguage: "Dili değiştir",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
    },
  },
  en: {
    nav: {
      collections: "Collections",
      asilMelody: "Asil Melody",
      careers: "Careers",
      contact: "Contact",
    },
    hero: {
      title: "Elegance in Every Detail.",
      subtitle: "Discover the art of living spaces.",
      scroll: "Scroll to Explore",
    },
    collections: {
      title: "Curated Collections",
      inquire: "Inquire",
    },
    lightbox: {
      whatsapp: "Inquire via WhatsApp",
      reference: "Ref.",
      close: "Close",
      message: "Hello, I would like to know more about {title}.",
    },
    partner: {
      eyebrow: "Partner",
      title: "Discover Our Inspiration: Asil Melody",
      description:
        "A warm museum of sound — where atmosphere meets artistry beyond the living space.",
      cta: "Explore",
    },
    footer: {
      tagline:
        "A premium furniture lookbook — elegance in every detail, crafted for refined living spaces.",
      quickLinks: "Quick Links",
      contact: "Contact",
      rights: "© 2026 Asilsa World. All rights reserved.",
    },
    careers: {
      title: "Join Our Vision",
      subtitle:
        "If you are passionate about aesthetics, luxury and flawless detail, there is always a place for you within the Asilsa World team.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "example@email.com",
      position: "Position",
      positionPlaceholder: "The position you are applying for",
      about: "About You",
      aboutPlaceholder: "Tell us a little about yourself...",
      cv: "CV",
      cvHint: "Drag your CV here or click to select (.pdf, .docx)",
      submit: "Submit Application",
    },
    common: {
      switchLanguage: "Switch language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Language];
