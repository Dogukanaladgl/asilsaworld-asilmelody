import type { LocalizedText } from "@/lib/i18n";

export interface FurnitureItem {
  id: string;
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
}

export const furnitureData: FurnitureItem[] = [
  {
    id: "ASL-001",
    title: "Linen Lounge",
    category: {
      tr: "Oturma Odası",
      en: "Living Room",
      ja: "リビング",
      es: "Salón",
      ru: "Гостиная",
    },
    description: {
      tr: "Yumuşak keten döşeme ile heykelsi form buluşuyor; sakin ve yükseltilmiş bir yaşam için tasarlanmış bir dinlenme parçası.",
      en: "Soft linen upholstery meets sculptural form in a lounge piece designed for quiet, elevated living.",
      ja: "やわらかなリネンの張地と彫刻的なフォルムが出会う、静かで上質な暮らしのためのラウンジピース。",
      es: "La suave tapicería de lino se une a una forma escultórica en una pieza pensada para una vida serena y elevada.",
      ru: "Мягкая льняная обивка встречается со скульптурной формой в предмете, созданном для спокойной и утончённой жизни.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-002",
    title: "Oak Dining",
    category: {
      tr: "Yemek Odası",
      en: "Dining Room",
      ja: "ダイニング",
      es: "Comedor",
      ru: "Столовая",
    },
    description: {
      tr: "Sıcak meşe yüzeyler ve dengeli oranlar, zamansız zanaata dayanan bir yemek deneyimi yaratıyor.",
      en: "Warm oak surfaces and balanced proportions create a dining experience rooted in timeless craftsmanship.",
      ja: "温かみのあるオーク材と均整のとれたプロポーションが、時を超える職人技に根ざした食卓を生み出します。",
      es: "Superficies cálidas de roble y proporciones equilibradas crean una experiencia de comedor arraigada en la artesanía atemporal.",
      ru: "Тёплые дубовые поверхности и выверенные пропорции создают трапезу, укоренённую во вневременном мастерстве.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-003",
    title: "Serene Bedroom",
    category: {
      tr: "Yatak Odası",
      en: "Bedroom",
      ja: "ベッドルーム",
      es: "Dormitorio",
      ru: "Спальня",
    },
    description: {
      tr: "Yumuşatılmış tonlar ve incelikli dokulardan oluşan sakin bir sığınak; dingin bir zarafet için kurgulandı.",
      en: "A calm sanctuary of muted tones and refined textures, composed for restful elegance.",
      ja: "落ち着いた色調と洗練された質感が織りなす、安らぎと優雅さのための静かな空間。",
      es: "Un refugio sereno de tonos suaves y texturas refinadas, compuesto para una elegancia reposada.",
      ru: "Спокойное убежище из приглушённых тонов и утончённых фактур, созданное для безмятежной элегантности.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-004",
    title: "Marble Accent",
    category: {
      tr: "Aksesuar Parçalar",
      en: "Accent Pieces",
      ja: "アクセントピース",
      es: "Piezas de Acento",
      ru: "Акцентные предметы",
    },
    description: {
      tr: "Doğal mermer damarları ve arınmış geometri, mekâna sessiz bir lüks hissiyle kimlik kazandırıyor.",
      en: "Natural marble veining and clean geometry anchor the room with a sense of quiet luxury.",
      ja: "天然大理石の表情と洗練された幾何学が、静かな贅沢さで空間を引き締めます。",
      es: "El veteado natural del mármol y una geometría limpia aportan a la sala un lujo silencioso.",
      ru: "Природный рисунок мрамора и чистая геометрия придают комнате ощущение тихой роскоши.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-005",
    title: "Velvet Corner",
    category: {
      tr: "L Koltuklar",
      en: "L-Sofas",
      ja: "L字ソファ",
      es: "Sofás en L",
      ru: "Угловые диваны",
    },
    description: {
      tr: "Derin kadife ve davetkâr kıvrımlar; konforu, sohbeti ve gösterişsiz zarafeti bir araya getiriyor.",
      en: "Deep velvet and inviting curves bring together comfort, conversation, and understated sophistication.",
      ja: "深みのあるベルベットと心地よい曲線が、快適さと会話、そして控えめな洗練を結びます。",
      es: "Terciopelo profundo y curvas acogedoras reúnen confort, conversación y una sofisticación discreta.",
      ru: "Глубокий бархат и мягкие изгибы объединяют комфорт, беседу и сдержанную изысканность.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-006",
    title: "Reading Nook",
    category: {
      tr: "Berjer & Koltuk",
      en: "Lounge Chairs",
      ja: "ラウンジチェア",
      es: "Butacas",
      ru: "Кресла",
    },
    description: {
      tr: "Yumuşak oturum ve sıcak ışığın samimi kompozisyonu; yavaş ve bilinçli anlar için tasarlandı.",
      en: "An intimate composition of soft seating and warm light, designed for slow and intentional moments.",
      ja: "やわらかな座り心地と温かな光が生む親密な構成。ゆっくりと過ごす時間のために。",
      es: "Una composición íntima de asientos suaves y luz cálida, pensada para momentos pausados.",
      ru: "Камерная композиция мягкого сиденья и тёплого света, созданная для неспешных моментов.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-007",
    title: "Soft Gallery",
    category: {
      tr: "Oturma Odası",
      en: "Living Room",
      ja: "リビング",
      es: "Salón",
      ru: "Гостиная",
    },
    description: {
      tr: "Galeri hissi veren ferah yerleşim ve yumuşak nötr tonlar, gündelik yaşamı seçkin bir görsel deneyime dönüştürüyor.",
      en: "Gallery-like spacing and soft neutrals turn everyday living into a curated visual experience.",
      ja: "ギャラリーのような余白とやわらかなニュートラルカラーが、日常を洗練された視覚体験へと変えます。",
      es: "Un espaciado de galería y neutros suaves convierten la vida cotidiana en una experiencia visual cuidada.",
      ru: "Галерейные интервалы и мягкие нейтральные тона превращают повседневность в выверенный визуальный опыт.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
  {
    id: "ASL-008",
    title: "Morning Light",
    category: {
      tr: "İç Mekân Objeleri",
      en: "Interior Objects",
      ja: "インテリアオブジェ",
      es: "Objetos de Interior",
      ru: "Интерьерные объекты",
    },
    description: {
      tr: "Güneş alan yüzeyler ve hafif formlar; mekânla birlikte nefes alan mobilyalarla açıklığı kutluyor.",
      en: "Sunlit surfaces and airy forms celebrate openness with furniture that breathes alongside the room.",
      ja: "陽光を受ける表面と軽やかなフォルムが、空間とともに呼吸する家具で開放感を讃えます。",
      es: "Superficies bañadas de sol y formas ligeras celebran la amplitud con muebles que respiran con la sala.",
      ru: "Залитые солнцем поверхности и лёгкие формы воспевают простор мебелью, которая дышит вместе с комнатой.",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=90&w=2400&auto=format&fit=crop&dpr=2",
  },
];
