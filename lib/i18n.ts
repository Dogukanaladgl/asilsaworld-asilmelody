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
      line1: "Yaşam Alanlarını",
      line2: "Eve Dönüştüren",
      line3: "Tasarım",
      subtitle: "Zarafet, konfor ve kusursuz detaylarla şekillenen premium mobilya deneyimi.",
      cta: "Koleksiyonu Keşfet",
      scroll: "Keşfetmek için kaydırın",
    },
    features: {
      items: [
        {
          title: "Özenli Zanaat",
          text: "Her parça, seçilmiş malzemeler ve titiz işçiliğin birleşimi.",
        },
        {
          title: "Zamansız Tasarım",
          text: "Trendleri değil, yıllarca yaşayan formları tercih ediyoruz.",
        },
        {
          title: "Showroom Deneyimi",
          text: "Konya’daki alanımızda dokunarak, görerek karar verin.",
        },
        {
          title: "Kişisel Danışmanlık",
          text: "WhatsApp veya ziyaretle size özel yönlendirme sunuyoruz.",
        },
      ],
    },
    spaces: {
      eyebrow: "Mekânlar",
      title: "Odaya Göre Keşfet",
      items: [
        { key: "living", label: "Oturma Odası" },
        { key: "bedroom", label: "Yatak Odası" },
        { key: "dining", label: "Yemek Odası" },
        { key: "lounge", label: "Lounge" },
      ],
    },
    featured: {
      eyebrow: "Öne Çıkanlar",
      title: "Seçilmiş Atmosferler",
    },
    collections: {
      eyebrow: "Evinizi güzelleştiren eşsiz tasarımlar",
      title: "Seçkin Koleksiyonlar",
      inquire: "Bilgi Al",
    },
    about: {
      eyebrow: "Hikâyemiz",
      title: "Asil's a World Hakkında",
      subtitle: "Kalite ve Zarafet",
      description:
        "Asil's a World, her parçasında kalite ve zarafeti bir araya getirir. Modern tasarımlarımız, yaşam alanlarınızı güzelleştirmek için özel olarak kurgulanmıştır.",
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
      phone: "Telefon",
      rights: "© 2026 Asil's a World. Tüm hakları saklıdır.",
      inviteTitle: "Birlikte güzel bir şey tasarlayalım",
      inviteText: "Showroom’umuzu ziyaret edin veya WhatsApp’tan yazın.",
      inviteCta: "İletişime Geç",
    },
    location: {
      eyebrow: "Showroom",
      title: "Yardım burada. Ne zaman ve ne şekilde ihtiyacınız olursa.",
      invite: "Daha da iyisi, gelin, yüz yüze görüşelim.",
      note: "Müşterilerimize değer veriyoruz. Mesai saatleri içinde bizi dilediğiniz zaman ziyaret edebilirsiniz.",
      hoursLabel: "Çalışma Saatleri",
      hoursToday: "Bugün açık",
      directions: "Yol Tarifi Al",
      mapTitle: "Asil's a World konumu",
    },
    careers: {
      title: "Vizyonumuza Katıl",
      subtitle:
        "Eğer estetiğe, lükse ve kusursuz detaylara tutkuyla bağlıysan, Asil's a World ekibinde sana her zaman yer var.",
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
      sending: "Gönderiliyor...",
      success: "Başvurunuz alındı. Teşekkür ederiz.",
      error: "Başvuru gönderilemedi. Lütfen tekrar deneyin.",
    },
    common: {
      switchLanguage: "Dili değiştir",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      contactUs: "Bize yazın",
    },
    contactPanel: {
      greeting:
        "Merhaba! Size nasıl yardımcı olabileceğimizi belirtirseniz, kısa sürede dönüş yapabiliriz.",
      name: "İsim",
      email: "E-posta",
      message: "Size nasıl yardımcı olabiliriz?",
      send: "Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız alındı. En kısa sürede dönüş yapacağız.",
      error: "Gönderilemedi. Lütfen tekrar deneyin.",
      close: "Kapat",
      whatsappBody: "Merhaba, ben {name} ({email}).\n\n{message}",
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
      line1: "Designing Spaces",
      line2: "That Feel",
      line3: "Like Home",
      subtitle:
        "A premium furniture experience shaped by elegance, comfort and flawless detail.",
      cta: "Explore Collections",
      scroll: "Scroll to Explore",
    },
    features: {
      items: [
        {
          title: "Refined Craft",
          text: "Every piece unites selected materials with meticulous workmanship.",
        },
        {
          title: "Timeless Design",
          text: "We choose forms that endure — not fleeting trends.",
        },
        {
          title: "Showroom Experience",
          text: "See and feel the pieces in our Konya space before you decide.",
        },
        {
          title: "Personal Guidance",
          text: "Receive tailored advice via WhatsApp or an in-person visit.",
        },
      ],
    },
    spaces: {
      eyebrow: "Spaces",
      title: "Explore by Room",
      items: [
        { key: "living", label: "Living Room" },
        { key: "bedroom", label: "Bedroom" },
        { key: "dining", label: "Dining Room" },
        { key: "lounge", label: "Lounge" },
      ],
    },
    featured: {
      eyebrow: "Featured",
      title: "Curated Atmospheres",
    },
    collections: {
      eyebrow: "Unique designs that beautify your home",
      title: "Curated Collections",
      inquire: "Inquire",
    },
    about: {
      eyebrow: "Our Story",
      title: "About Asil's a World",
      subtitle: "Quality & Elegance",
      description:
        "Asil's a World brings quality and elegance together in every piece. Our modern designs are crafted to elevate the beauty of your living spaces.",
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
      phone: "Phone",
      rights: "© 2026 Asil's a World. All rights reserved.",
      inviteTitle: "Let's design something beautiful",
      inviteText: "Visit our showroom or message us on WhatsApp.",
      inviteCta: "Get in Touch",
    },
    location: {
      eyebrow: "Showroom",
      title: "Help is here. Whenever and however you need it.",
      invite: "Even better — come, let's meet face to face.",
      note: "We value our guests. You are welcome to visit us anytime during business hours.",
      hoursLabel: "Opening Hours",
      hoursToday: "Open today",
      directions: "Get Directions",
      mapTitle: "Asil's a World location",
    },
    careers: {
      title: "Join Our Vision",
      subtitle:
        "If you are passionate about aesthetics, luxury and flawless detail, there is always a place for you within the Asil's a World team.",
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
      sending: "Sending...",
      success: "Your application has been received. Thank you.",
      error: "Could not send the application. Please try again.",
    },
    common: {
      switchLanguage: "Switch language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      contactUs: "Message us",
    },
    contactPanel: {
      greeting:
        "Hello! Tell us how we can help and we will get back to you shortly.",
      name: "Name",
      email: "Email",
      message: "How can we help?",
      send: "Send",
      sending: "Sending...",
      success: "Message received. We will get back to you shortly.",
      error: "Could not send. Please try again.",
      close: "Close",
      whatsappBody: "Hello, my name is {name} ({email}).\n\n{message}",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Language];
