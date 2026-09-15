export type Language = "tr" | "en" | "ja" | "es" | "ru";

export type LocalizedText = Record<Language, string>;

export const languages: { code: Language; label: string; name: string }[] = [
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JA", name: "日本語" },
  { code: "es", label: "ES", name: "Español" },
  { code: "ru", label: "RU", name: "Русский" },
];

export const dictionary = {
  tr: {
    nav: {
      collections: "Koleksiyonlar",
      asilMelody: "Asil's a Melody",
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
          title: "Evinizin Ruhunu Yansıtan Premium Ürünler",
          text: "Yaşam alanınıza kimlik katan seçkin mobilyalar.",
        },
        {
          title: "Kolay Alışveriş & Hızlı Teslimat",
          text: "Siparişten teslimata, akıcı ve güvenilir bir süreç.",
        },
        {
          title: "Dünyanın Her Yerine Gönderim",
          text: "Sınırları aşan premium mobilya lojistiği.",
        },
        {
          title: "Asıl Asalet Asil's a World'de",
          text: "Markanın öz vaadi: asalet, zarafet ve kalıcı değer.",
        },
      ],
    },
    spaces: {
      eyebrow: "Kategoriler",
      title: "Koleksiyona Göre Keşfet",
      items: [
        { key: "living", label: "Salon Takımı & Oturma Grubu Modelleri" },
        { key: "corner", label: "Köşe Koltuk & L Oturma Grubu Modelleri" },
        { key: "bedroom", label: "Yatak Odası & Yaşam Odası Modelleri" },
        { key: "bedset", label: "Yatak Baza Başlık Seti & Karyola Modelleri" },
        { key: "dining", label: "Yemek Odası & Salon Takımı Modelleri" },
        { key: "tv", label: "TV Ünitesi & Masa Sandalye Modelleri" },
        { key: "wedding", label: "Düğün & Çeyiz Setleri" },
        { key: "outdoor", label: "Çay & Balkon & Bahçe Seti Modelleri" },
      ],
    },
    featured: {
      eyebrow: "Öne Çıkanlar",
      title: "Seçilmiş Atmosferler",
    },
    collections: {
      eyebrow: "Evinizin ruhunu yansıtan premium ürünler",
      title: "Seçkin Koleksiyonlar",
      inquire: "Bilgi Al",
    },
    about: {
      eyebrow: "Hikâyemiz",
      title: "Asil's a World Hakkında",
      subtitle: "Asıl asalet Asil's a World'de",
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
      title: "İlham Kaynağımızı Keşfedin: Asil's a Melody",
      description:
        "Sıcak bir ses müzesi — atmosferin, yaşam alanının ötesinde sanatla buluştuğu yer.",
      cta: "Keşfet",
    },
    footer: {
      tagline: "® Asıl asalet Asil's a World'de — evinizin ruhunu yansıtan premium ürünler.",
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
      directionsApple: "Apple Haritalar ile Yol Tarifi",
      directionsGoogle: "Google Haritalar ile Yol Tarifi",
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
      quickTitle: "Form doldurmak istemiyor musunuz?",
      quickText:
        "CV'nizi doğrudan WhatsApp üzerinden gönderin, size oradan dönüş yapalım.",
      quickCta: "WhatsApp'tan Başvur",
      quickMessage:
        "Merhaba, Asil's a World ekibine katılmak istiyorum. CV'mi buradan paylaşabilir miyim?",
      formDivider: "veya formu doldurun",
    },
    notFound: {
      eyebrow: "404",
      title: "Aradığınız sayfa bulunamadı",
      text: "Bağlantı taşınmış veya hiç var olmamış olabilir. Koleksiyonlara göz atarak devam edebilirsiniz.",
      home: "Ana Sayfaya Dön",
      collections: "Koleksiyonları Gör",
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
      asilMelody: "Asil's a Melody",
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
          title: "Premium Pieces That Reflect Your Home's Spirit",
          text: "Curated furniture that gives every room a distinct identity.",
        },
        {
          title: "Easy Shopping & Fast Delivery",
          text: "A smooth, reliable journey from order to delivery.",
        },
        {
          title: "Shipping Worldwide",
          text: "Premium furniture logistics that cross every border.",
        },
        {
          title: "True Nobility Lives at Asil's a World",
          text: "Our promise: nobility, elegance, and lasting value.",
        },
      ],
    },
    spaces: {
      eyebrow: "Categories",
      title: "Explore by Collection",
      items: [
        { key: "living", label: "Salon & Living Group Models" },
        { key: "corner", label: "Corner Sofa & L-Living Group Models" },
        { key: "bedroom", label: "Bedroom & Living Room Models" },
        { key: "bedset", label: "Bed Base, Headboard & Bedstead Models" },
        { key: "dining", label: "Dining Room & Salon Set Models" },
        { key: "tv", label: "TV Unit & Table–Chair Models" },
        { key: "wedding", label: "Wedding & Trousseau Sets" },
        { key: "outdoor", label: "Tea, Balcony & Garden Set Models" },
      ],
    },
    featured: {
      eyebrow: "Featured",
      title: "Curated Atmospheres",
    },
    collections: {
      eyebrow: "Premium pieces that reflect your home's spirit",
      title: "Curated Collections",
      inquire: "Inquire",
    },
    about: {
      eyebrow: "Our Story",
      title: "About Asil's a World",
      subtitle: "True nobility lives at Asil's a World",
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
      title: "Discover Our Inspiration: Asil's a Melody",
      description:
        "A warm museum of sound — where atmosphere meets artistry beyond the living space.",
      cta: "Explore",
    },
    footer: {
      tagline:
        "® True nobility lives at Asil's a World — premium pieces that reflect your home's spirit.",
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
      directionsApple: "Directions with Apple Maps",
      directionsGoogle: "Directions with Google Maps",
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
      quickTitle: "Prefer not to fill in a form?",
      quickText:
        "Send your CV straight through WhatsApp and we will reply there.",
      quickCta: "Apply via WhatsApp",
      quickMessage:
        "Hello, I would like to join the Asil's a World team. May I share my CV here?",
      formDivider: "or fill in the form",
    },
    notFound: {
      eyebrow: "404",
      title: "We couldn't find that page",
      text: "The link may have moved, or it may never have existed. Browse our collections to continue.",
      home: "Back to Home",
      collections: "View Collections",
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
  ja: {
    nav: {
      collections: "コレクション",
      asilMelody: "Asil's a Melody",
      careers: "採用情報",
      contact: "お問い合わせ",
    },
    hero: {
      line1: "住まいを",
      line2: "我が家へと変える",
      line3: "デザイン",
      subtitle:
        "優雅さ、心地よさ、そして完璧なディテールが息づくプレミアム家具の体験。",
      cta: "コレクションを見る",
      scroll: "スクロールして探す",
    },
    features: {
      items: [
        {
          title: "住まいの魂を映すプレミアム家具",
          text: "空間に個性を与える厳選されたピース。",
        },
        {
          title: "かんたん購入 & 迅速配送",
          text: "ご注文からお届けまで、スムーズで安心の流れ。",
        },
        {
          title: "世界中へお届け",
          text: "国境を越えるプレミアム家具のロジスティクス。",
        },
        {
          title: "真の気品は Asil's a World に",
          text: "気品・優雅さ・長く続く価値という約束。",
        },
      ],
    },
    spaces: {
      eyebrow: "カテゴリー",
      title: "コレクションから探す",
      items: [
        { key: "living", label: "サロン & リビングセット" },
        { key: "corner", label: "コーナーソファ & L字セット" },
        { key: "bedroom", label: "ベッドルーム & リビングルーム" },
        { key: "bedset", label: "ベッドベース・ヘッドボード・ベッドフレーム" },
        { key: "dining", label: "ダイニング & サロンセット" },
        { key: "tv", label: "TVボード & テーブル・チェア" },
        { key: "wedding", label: "ウェディング & 嫁入りセット" },
        { key: "outdoor", label: "ティー・バルコニー・ガーデンセット" },
      ],
    },
    featured: {
      eyebrow: "特集",
      title: "選び抜かれた空間",
    },
    collections: {
      eyebrow: "住まいの魂を映すプレミアム家具",
      title: "厳選コレクション",
      inquire: "お問い合わせ",
    },
    about: {
      eyebrow: "私たちの物語",
      title: "Asil's a World について",
      subtitle: "真の気品は Asil's a World に",
      description:
        "Asil's a World は、すべての作品に品質と優雅さを重ねています。モダンなデザインは、暮らしの空間をより美しく引き立てるために生まれました。",
    },
    lightbox: {
      whatsapp: "WhatsApp でお問い合わせ",
      reference: "参照",
      close: "閉じる",
      message: "こんにちは。{title} について詳しく知りたいです。",
    },
    partner: {
      eyebrow: "パートナー",
      title: "私たちのインスピレーション: Asil's a Melody",
      description:
        "温もりある音の美術館 — 空間を超えて、芸術と出会う場所。",
      cta: "見てみる",
    },
    footer: {
      tagline:
        "® 真の気品は Asil's a World に — 住まいの魂を映すプレミアム家具。",
      quickLinks: "クイックリンク",
      contact: "お問い合わせ",
      phone: "電話",
      rights: "© 2026 Asil's a World. All rights reserved.",
      inviteTitle: "一緒に美しい空間をつくりましょう",
      inviteText: "ショールームへお越しいただくか、WhatsApp でご連絡ください。",
      inviteCta: "お問い合わせ",
    },
    location: {
      eyebrow: "ショールーム",
      title: "必要なときに、必要なかたちでサポートします。",
      invite: "ぜひ一度、直接お会いしましょう。",
      note: "お客様を大切にしています。営業時間内はいつでもご来店いただけます。",
      hoursLabel: "営業時間",
      hoursToday: "本日営業中",
      directions: "道順を見る",
      directionsApple: "Apple マップで道順を見る",
      directionsGoogle: "Google マップで道順を見る",
      mapTitle: "Asil's a World の所在地",
    },
    careers: {
      title: "私たちのビジョンに参加する",
      subtitle:
        "美意識、ラグジュアリー、完璧なディテールに情熱をお持ちなら、Asil's a World にはいつでもあなたの場所があります。",
      name: "お名前",
      namePlaceholder: "氏名",
      email: "メールアドレス",
      emailPlaceholder: "example@email.com",
      position: "ご希望の職種",
      positionPlaceholder: "応募したい職種",
      about: "自己紹介",
      aboutPlaceholder: "ご自身について少し教えてください...",
      cv: "履歴書",
      cvHint: "履歴書をドラッグするか、クリックして選択 (.pdf, .docx)",
      submit: "応募する",
      sending: "送信中...",
      success: "ご応募を受け付けました。ありがとうございます。",
      error: "送信できませんでした。もう一度お試しください。",
      quickTitle: "フォームの入力は手間ですか？",
      quickText:
        "履歴書を WhatsApp から直接お送りください。そのままご連絡いたします。",
      quickCta: "WhatsApp で応募する",
      quickMessage:
        "こんにちは。Asil's a World のチームに応募したいです。こちらで履歴書をお送りしてもよろしいでしょうか。",
      formDivider: "またはフォームに入力",
    },
    notFound: {
      eyebrow: "404",
      title: "ページが見つかりませんでした",
      text: "リンクが移動したか、存在しない可能性があります。コレクションからお進みください。",
      home: "ホームへ戻る",
      collections: "コレクションを見る",
    },
    common: {
      switchLanguage: "言語を変更",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      contactUs: "メッセージを送る",
    },
    contactPanel: {
      greeting:
        "こんにちは。ご要望をお知らせいただければ、追ってご連絡いたします。",
      name: "お名前",
      email: "メールアドレス",
      message: "どのようなご用件でしょうか？",
      send: "送信",
      sending: "送信中...",
      success: "メッセージを受け取りました。折り返しご連絡いたします。",
      error: "送信できませんでした。もう一度お試しください。",
      close: "閉じる",
      whatsappBody: "こんにちは。{name}（{email}）と申します。\n\n{message}",
    },
  },
  es: {
    nav: {
      collections: "Colecciones",
      asilMelody: "Asil's a Melody",
      careers: "Empleo",
      contact: "Contacto",
    },
    hero: {
      line1: "Diseñamos Espacios",
      line2: "Que Se Sienten",
      line3: "Como un Hogar",
      subtitle:
        "Una experiencia de mobiliario premium moldeada por la elegancia, el confort y el detalle impecable.",
      cta: "Descubrir Colecciones",
      scroll: "Desliza para explorar",
    },
    features: {
      items: [
        {
          title: "Productos Premium que Reflejan el Alma de su Hogar",
          text: "Mobiliario selecto que da identidad a cada espacio.",
        },
        {
          title: "Compra Fácil & Entrega Rápida",
          text: "Un proceso fluido y fiable desde el pedido hasta la entrega.",
        },
        {
          title: "Envíos a Todo el Mundo",
          text: "Logística premium de mobiliario sin fronteras.",
        },
        {
          title: "La Verdadera Nobleza Está en Asil's a World",
          text: "Nuestra promesa: nobleza, elegancia y valor duradero.",
        },
      ],
    },
    spaces: {
      eyebrow: "Categorías",
      title: "Explorar por Colección",
      items: [
        { key: "living", label: "Salón & Grupos de Estar" },
        { key: "corner", label: "Sofás Esquinados & Grupos en L" },
        { key: "bedroom", label: "Dormitorio & Sala de Estar" },
        { key: "bedset", label: "Base, Cabecero & Camas" },
        { key: "dining", label: "Comedor & Sets de Salón" },
        { key: "tv", label: "Mueble TV & Mesa–Silla" },
        { key: "wedding", label: "Sets de Boda & Ajuar" },
        { key: "outdoor", label: "Té, Balcón & Jardín" },
      ],
    },
    featured: {
      eyebrow: "Destacados",
      title: "Atmósferas Seleccionadas",
    },
    collections: {
      eyebrow: "Productos premium que reflejan el alma de su hogar",
      title: "Colecciones Selectas",
      inquire: "Consultar",
    },
    about: {
      eyebrow: "Nuestra Historia",
      title: "Sobre Asil's a World",
      subtitle: "La verdadera nobleza está en Asil's a World",
      description:
        "Asil's a World reúne calidad y elegancia en cada pieza. Nuestros diseños modernos están concebidos para realzar la belleza de sus espacios.",
    },
    lightbox: {
      whatsapp: "Consultar por WhatsApp",
      reference: "Ref.",
      close: "Cerrar",
      message: "Hola, me gustaría saber más sobre {title}.",
    },
    partner: {
      eyebrow: "Partner",
      title: "Descubra Nuestra Inspiración: Asil's a Melody",
      description:
        "Un cálido museo del sonido, donde la atmósfera se encuentra con el arte más allá del espacio habitado.",
      cta: "Descubrir",
    },
    footer: {
      tagline:
        "® La verdadera nobleza está en Asil's a World — productos premium que reflejan el alma de su hogar.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      phone: "Teléfono",
      rights: "© 2026 Asil's a World. Todos los derechos reservados.",
      inviteTitle: "Diseñemos algo bello juntos",
      inviteText: "Visite nuestro showroom o escríbanos por WhatsApp.",
      inviteCta: "Contactar",
    },
    location: {
      eyebrow: "Showroom",
      title: "Estamos aquí para ayudarle, cuando y como lo necesite.",
      invite: "Mejor aún: venga y conozcámonos en persona.",
      note: "Valoramos a nuestros visitantes. Puede visitarnos en cualquier momento dentro del horario comercial.",
      hoursLabel: "Horario",
      hoursToday: "Abierto hoy",
      directions: "Cómo Llegar",
      directionsApple: "Cómo llegar con Apple Maps",
      directionsGoogle: "Cómo llegar con Google Maps",
      mapTitle: "Ubicación de Asil's a World",
    },
    careers: {
      title: "Únase a Nuestra Visión",
      subtitle:
        "Si le apasionan la estética, el lujo y el detalle impecable, siempre hay un lugar para usted en el equipo de Asil's a World.",
      name: "Nombre",
      namePlaceholder: "Nombre y apellidos",
      email: "Correo electrónico",
      emailPlaceholder: "ejemplo@email.com",
      position: "Puesto",
      positionPlaceholder: "El puesto al que se postula",
      about: "Sobre Usted",
      aboutPlaceholder: "Cuéntenos un poco sobre usted...",
      cv: "CV",
      cvHint: "Arrastre su CV o haga clic para seleccionar (.pdf, .docx)",
      submit: "Enviar Candidatura",
      sending: "Enviando...",
      success: "Hemos recibido su candidatura. Gracias.",
      error: "No se pudo enviar la candidatura. Inténtelo de nuevo.",
      quickTitle: "¿Prefiere no rellenar un formulario?",
      quickText:
        "Envíe su CV directamente por WhatsApp y le responderemos por allí.",
      quickCta: "Postular por WhatsApp",
      quickMessage:
        "Hola, me gustaría unirme al equipo de Asil's a World. ¿Puedo enviar mi CV por aquí?",
      formDivider: "o rellene el formulario",
    },
    notFound: {
      eyebrow: "404",
      title: "No encontramos esa página",
      text: "Es posible que el enlace se haya movido o que nunca haya existido. Continúe explorando nuestras colecciones.",
      home: "Volver al Inicio",
      collections: "Ver Colecciones",
    },
    common: {
      switchLanguage: "Cambiar idioma",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      contactUs: "Escríbanos",
    },
    contactPanel: {
      greeting:
        "¡Hola! Cuéntenos cómo podemos ayudarle y le responderemos en breve.",
      name: "Nombre",
      email: "Correo electrónico",
      message: "¿En qué podemos ayudarle?",
      send: "Enviar",
      sending: "Enviando...",
      success: "Mensaje recibido. Le responderemos en breve.",
      error: "No se pudo enviar. Inténtelo de nuevo.",
      close: "Cerrar",
      whatsappBody: "Hola, soy {name} ({email}).\n\n{message}",
    },
  },
  ru: {
    nav: {
      collections: "Коллекции",
      asilMelody: "Asil's a Melody",
      careers: "Карьера",
      contact: "Контакты",
    },
    hero: {
      line1: "Дизайн, который",
      line2: "превращает пространство",
      line3: "в дом",
      subtitle:
        "Премиальная мебель, созданная из элегантности, комфорта и безупречных деталей.",
      cta: "Смотреть коллекции",
      scroll: "Прокрутите, чтобы узнать больше",
    },
    features: {
      items: [
        {
          title: "Премиум-изделия, отражающие дух вашего дома",
          text: "Избранная мебель, которая придаёт пространству характер.",
        },
        {
          title: "Лёгкая покупка и быстрая доставка",
          text: "Плавный и надёжный путь от заказа до получения.",
        },
        {
          title: "Доставка по всему миру",
          text: "Премиальная логистика мебели без границ.",
        },
        {
          title: "Истинное благородство — в Asil's a World",
          text: "Наше обещание: благородство, элегантность и непреходящая ценность.",
        },
      ],
    },
    spaces: {
      eyebrow: "Категории",
      title: "Смотреть по коллекции",
      items: [
        { key: "living", label: "Салон и гостиные группы" },
        { key: "corner", label: "Угловые и L-образные группы" },
        { key: "bedroom", label: "Спальня и жилые комнаты" },
        { key: "bedset", label: "Основания, изголовья и кровати" },
        { key: "dining", label: "Столовые и салонные комплекты" },
        { key: "tv", label: "ТВ-тумбы, столы и стулья" },
        { key: "wedding", label: "Свадебные и приданые наборы" },
        { key: "outdoor", label: "Чайные, балконные и садовые наборы" },
      ],
    },
    featured: {
      eyebrow: "Избранное",
      title: "Отобранные атмосферы",
    },
    collections: {
      eyebrow: "Премиум-изделия, отражающие дух вашего дома",
      title: "Избранные коллекции",
      inquire: "Узнать больше",
    },
    about: {
      eyebrow: "Наша история",
      title: "О Asil's a World",
      subtitle: "Истинное благородство — в Asil's a World",
      description:
        "Asil's a World соединяет качество и элегантность в каждом изделии. Наши современные проекты создаются, чтобы подчеркнуть красоту вашего пространства.",
    },
    lightbox: {
      whatsapp: "Узнать в WhatsApp",
      reference: "Арт.",
      close: "Закрыть",
      message: "Здравствуйте! Хотел(а) бы узнать больше о {title}.",
    },
    partner: {
      eyebrow: "Партнёр",
      title: "Откройте наше вдохновение: Asil's a Melody",
      description:
        "Тёплый музей звука — место, где атмосфера встречается с искусством за пределами жилого пространства.",
      cta: "Открыть",
    },
    footer: {
      tagline:
        "® Истинное благородство — в Asil's a World: премиум-изделия, отражающие дух вашего дома.",
      quickLinks: "Быстрые ссылки",
      contact: "Контакты",
      phone: "Телефон",
      rights: "© 2026 Asil's a World. Все права защищены.",
      inviteTitle: "Давайте создадим что-то прекрасное вместе",
      inviteText: "Посетите наш шоурум или напишите нам в WhatsApp.",
      inviteCta: "Связаться",
    },
    location: {
      eyebrow: "Шоурум",
      title: "Мы рядом — когда и как вам удобно.",
      invite: "А лучше приходите, познакомимся лично.",
      note: "Мы ценим наших гостей. Вы можете посетить нас в любое время в рабочие часы.",
      hoursLabel: "Часы работы",
      hoursToday: "Сегодня открыто",
      directions: "Построить маршрут",
      directionsApple: "Маршрут в Apple Maps",
      directionsGoogle: "Маршрут в Google Maps",
      mapTitle: "Расположение Asil's a World",
    },
    careers: {
      title: "Присоединяйтесь к нашему видению",
      subtitle:
        "Если вам близки эстетика, роскошь и безупречные детали, в команде Asil's a World всегда найдётся место для вас.",
      name: "Имя",
      namePlaceholder: "Имя и фамилия",
      email: "Эл. почта",
      emailPlaceholder: "example@email.com",
      position: "Должность",
      positionPlaceholder: "Желаемая должность",
      about: "О себе",
      aboutPlaceholder: "Расскажите немного о себе...",
      cv: "Резюме",
      cvHint: "Перетащите резюме или нажмите, чтобы выбрать (.pdf, .docx)",
      submit: "Отправить заявку",
      sending: "Отправка...",
      success: "Ваша заявка получена. Благодарим вас.",
      error: "Не удалось отправить заявку. Попробуйте ещё раз.",
      quickTitle: "Не хотите заполнять форму?",
      quickText:
        "Отправьте резюме прямо в WhatsApp — мы ответим вам там же.",
      quickCta: "Откликнуться в WhatsApp",
      quickMessage:
        "Здравствуйте! Хочу присоединиться к команде Asil's a World. Могу отправить резюме здесь?",
      formDivider: "или заполните форму",
    },
    notFound: {
      eyebrow: "404",
      title: "Такая страница не найдена",
      text: "Возможно, ссылка изменилась или страницы никогда не существовало. Загляните в наши коллекции.",
      home: "На главную",
      collections: "Смотреть коллекции",
    },
    common: {
      switchLanguage: "Сменить язык",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      contactUs: "Напишите нам",
    },
    contactPanel: {
      greeting:
        "Здравствуйте! Расскажите, чем мы можем помочь, и мы скоро ответим.",
      name: "Имя",
      email: "Эл. почта",
      message: "Чем мы можем помочь?",
      send: "Отправить",
      sending: "Отправка...",
      success: "Сообщение получено. Мы скоро свяжемся с вами.",
      error: "Не удалось отправить. Попробуйте ещё раз.",
      close: "Закрыть",
      whatsappBody: "Здравствуйте, меня зовут {name} ({email}).\n\n{message}",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Language];
