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
      title: "İlham Kaynağımızı Keşfedin: Asil's a Melody",
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
      title: "Discover Our Inspiration: Asil's a Melody",
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
          title: "丁寧な職人技",
          text: "厳選された素材と緻密な手仕事が、一つひとつの作品を形づくります。",
        },
        {
          title: "時を超えるデザイン",
          text: "流行ではなく、長く愛されるかたちを選びます。",
        },
        {
          title: "ショールーム体験",
          text: "コンヤのショールームで、実際に見て触れてお選びいただけます。",
        },
        {
          title: "パーソナルなご提案",
          text: "WhatsApp またはご来店で、お客様に合わせたご提案をいたします。",
        },
      ],
    },
    spaces: {
      eyebrow: "空間",
      title: "部屋別に探す",
      items: [
        { key: "living", label: "リビング" },
        { key: "bedroom", label: "ベッドルーム" },
        { key: "dining", label: "ダイニング" },
        { key: "lounge", label: "ラウンジ" },
      ],
    },
    featured: {
      eyebrow: "特集",
      title: "選び抜かれた空間",
    },
    collections: {
      eyebrow: "住まいを美しく彩る特別なデザイン",
      title: "厳選コレクション",
      inquire: "お問い合わせ",
    },
    about: {
      eyebrow: "私たちの物語",
      title: "Asil's a World について",
      subtitle: "品質と優雅さ",
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
        "プレミアム家具のルックブック — 洗練された住空間のために、細部まで優雅に。",
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
          title: "Artesanía Cuidada",
          text: "Cada pieza une materiales seleccionados con una ejecución meticulosa.",
        },
        {
          title: "Diseño Atemporal",
          text: "Elegimos formas que perduran, no tendencias pasajeras.",
        },
        {
          title: "Experiencia en Showroom",
          text: "Vea y sienta las piezas en nuestro espacio de Konya antes de decidir.",
        },
        {
          title: "Asesoría Personal",
          text: "Reciba orientación a medida por WhatsApp o en una visita.",
        },
      ],
    },
    spaces: {
      eyebrow: "Espacios",
      title: "Explorar por Ambiente",
      items: [
        { key: "living", label: "Salón" },
        { key: "bedroom", label: "Dormitorio" },
        { key: "dining", label: "Comedor" },
        { key: "lounge", label: "Lounge" },
      ],
    },
    featured: {
      eyebrow: "Destacados",
      title: "Atmósferas Seleccionadas",
    },
    collections: {
      eyebrow: "Diseños únicos que embellecen su hogar",
      title: "Colecciones Selectas",
      inquire: "Consultar",
    },
    about: {
      eyebrow: "Nuestra Historia",
      title: "Sobre Asil's a World",
      subtitle: "Calidad y Elegancia",
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
        "Un lookbook de mobiliario premium: elegancia en cada detalle, para espacios refinados.",
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
          title: "Тонкое мастерство",
          text: "Каждое изделие соединяет отобранные материалы и тщательную работу.",
        },
        {
          title: "Вневременной дизайн",
          text: "Мы выбираем формы, которые живут годами, а не мимолётные тренды.",
        },
        {
          title: "Опыт шоурума",
          text: "Увидьте и почувствуйте мебель в нашем пространстве в Конье.",
        },
        {
          title: "Личная консультация",
          text: "Индивидуальные рекомендации в WhatsApp или при визите к нам.",
        },
      ],
    },
    spaces: {
      eyebrow: "Пространства",
      title: "Выбрать по комнате",
      items: [
        { key: "living", label: "Гостиная" },
        { key: "bedroom", label: "Спальня" },
        { key: "dining", label: "Столовая" },
        { key: "lounge", label: "Лаундж" },
      ],
    },
    featured: {
      eyebrow: "Избранное",
      title: "Отобранные атмосферы",
    },
    collections: {
      eyebrow: "Уникальные решения, украшающие ваш дом",
      title: "Избранные коллекции",
      inquire: "Узнать больше",
    },
    about: {
      eyebrow: "Наша история",
      title: "О Asil's a World",
      subtitle: "Качество и элегантность",
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
        "Премиальный лукбук мебели — элегантность в каждой детали, для утончённых интерьеров.",
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
