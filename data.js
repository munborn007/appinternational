// ============================================================
// APP INTERNATIONAL — DATA SOURCE
// TODO: Replace window.DB with fetch('/api/vehicles') when backend is ready
// ============================================================

window.DB = {

  company: {
    name: "APP International LLC.",
    nameJa: "APP インターナショナル合同会社",
    tagline: {
      en: "Your Trusted Source for Quality Japanese Vehicles",
      ja: "高品質な日本車の信頼できる輸出業者"
    },
    about: {
      en: "APP International has been exporting quality Japanese used vehicles and heavy machinery to customers across Africa, Asia, and South America since 2010. Every vehicle is auction-inspected, properly documented, and shipped with full transparency.",
      ja: "APP Internationalは2010年以来、アフリカ、アジア、南米のお客様に高品質な日本の中古車・重機を輸出しています。"
    },
    address: { en: "Funabashi, Chiba, Japan", ja: "千葉県船橋市" },
    established: "2010"
  },

  contact: {
    email: "info@appinternational.co",
    phone: "+81-47-000-0000",
    whatsapp: "819000000000",
    responseTime: {
      en: "We reply within 24 hours",
      ja: "24時間以内に返信します"
    }
  },

  socials: {
    facebook:  "https://facebook.com/appinternational",
    instagram: "https://instagram.com/appinternational",
    youtube:   "https://youtube.com/@appinternational",
    whatsapp:  "https://wa.me/819000000000"
  },

  brands: ["Toyota","Nissan","Honda","Mazda","Mitsubishi","Isuzu","Hino","Hitachi","Kobelco","Komatsu","Caterpillar"],

  vehicleTypes: [
    { id: "car",       label: { en: "Cars",            ja: "乗用車" } },
    { id: "truck",     label: { en: "Trucks",          ja: "トラック" } },
    { id: "bus",       label: { en: "Buses",           ja: "バス" } },
    { id: "excavator", label: { en: "Excavators",      ja: "油圧ショベル" } },
    { id: "machinery", label: { en: "Heavy Machinery", ja: "重機" } }
  ],

  shippingRegions: [
    { id: "east-africa",    label: "East Africa",    eta: "25–30 days", ports: "Mombasa, Dar es Salaam, Mombasa ICD" },
    { id: "south-asia",     label: "South Asia",     eta: "15–20 days", ports: "Colombo, Chittagong, Chennai" },
    { id: "west-africa",    label: "West Africa",    eta: "35–40 days", ports: "Lagos (Apapa), Tema, Abidjan" },
    { id: "south-america",  label: "South America",  eta: "30–40 days", ports: "Callao (Lima), Valparaíso, Buenos Aires" },
    { id: "middle-east",    label: "Middle East",    eta: "12–18 days", ports: "Dubai (Jebel Ali), Salalah, Aqaba" },
    { id: "southeast-asia", label: "Southeast Asia", eta: "8–15 days",  ports: "Singapore, Manila, Jakarta" },
    { id: "central-asia",   label: "Central Asia",   eta: "20–28 days", ports: "Vladivostok (road to KZ/UZ)" }
  ],

  testimonials: [
    {
      name: "Kumara Jayasinghe",
      country: "Sri Lanka",
      flag: "🇱🇰",
      text: {
        en: "I have purchased 3 Toyota Aqua vehicles from APP International over the past 2 years. Every time, the documents were perfect, the condition matched exactly what was described, and the shipping was on time. These are serious, honest people.",
        ja: "過去2年間にAPP Internationalからトヨタアクアを3台購入しました。毎回、書類は完璧で、状態は説明通りで、配送も時間通りでした。"
      },
      vehicle: "Toyota Aqua 2017",
      date: "2024-11"
    },
    {
      name: "James Odhiambo",
      country: "Kenya",
      flag: "🇰🇪",
      text: {
        en: "I was skeptical about buying from Japan but APP International guided me through every step — from choosing the right vehicle for our roads to clearing customs in Mombasa. The Nissan Note arrived in perfect condition. Highly recommend.",
        ja: "日本からの購入に懐疑的でしたが、APP Internationalが車両選びから通関まで全てをサポートしてくれました。"
      },
      vehicle: "Nissan Note 2016",
      date: "2024-09"
    },
    {
      name: "Carlos Mendoza",
      country: "Chile",
      flag: "🇨🇱",
      text: {
        en: "The Kobelco excavator we received was in outstanding condition. The inspection report was detailed and accurate. APP International is our go-to supplier for all Japanese machinery.",
        ja: "受け取ったコベルコの掘削機は素晴らしい状態でした。点検報告書は詳細で正確でした。APP Internationalは日本の機械のサプライヤーです。"
      },
      vehicle: "Kobelco SK210 2016",
      date: "2024-07"
    },
    {
      name: "Pradeep Wijeratne",
      country: "Sri Lanka",
      flag: "🇱🇰",
      text: {
        en: "Fast communication, honest pricing, no surprises. The Honda Fit arrived exactly as shown in photos. Will definitely order again.",
        ja: "迅速なコミュニケーション、正直な価格設定、サプライズなし。ホンダフィットは写真通りの状態で届きました。"
      },
      vehicle: "Honda Fit 2018",
      date: "2025-01"
    }
  ],

  partners: [
    { name: "Lanka Automobiles Ltd.", country: "Sri Lanka", flag: "🇱🇰" },
    { name: "East Africa Motors",     country: "Kenya",     flag: "🇰🇪" },
    { name: "Andean Trade Group",     country: "Chile",     flag: "🇨🇱" },
    { name: "Gulf Auto Trading",      country: "UAE",       flag: "🇦🇪" }
  ],

  vehicles: [

    // ── CARS ──────────────────────────────────────────────────────
    {
      id: "toyota-aqua-2017",
      brand: "Toyota",
      type: "car",
      title: "Toyota Aqua 2017",
      status: "available",
      featuredImage: "images/Toyota Aqua 2017-2026/Toyota Aqua (1).jpg",
      images: [
        { url: "images/Toyota Aqua 2017-2026/Toyota Aqua (1).jpg", alt: "Toyota Aqua front" },
        { url: "images/Toyota Aqua 2017-2026/Toyota Aqua (2).jpg", alt: "Toyota Aqua side" },
        { url: "images/Toyota Aqua 2017-2026/Toyota Aqua (3).jpg", alt: "Toyota Aqua rear" },
        { url: "images/Toyota Aqua 2017-2026/Toyota Aqua (4).jpg", alt: "Toyota Aqua on road" },
        { url: "images/Toyota Aqua 2017-2026/Toyota Aqua (5).jpg", alt: "Toyota Aqua driving" },
        { url: "images/Toyota Aqua 2017-2026/Toyota Aqua (6).jpg", alt: "Toyota Aqua night view" }
      ],
      priceFOB: 5800,
      priceCIF: 6200,
      currency: "USD",
      mileage: 65000,
      stockNo: "APP-AQ-2017-001",
      listedAt: "2025-01-15",
      description: {
        en: "Excellent condition Toyota Aqua hybrid hatchback. Auction grade 4.5 — non-accident history, full service records available. Ideal for city commuting and long-distance driving. Popular model with proven reliability in markets across East Africa, South Asia, and South America. Ready for immediate export.",
        ja: "状態の良いトヨタアクアハイブリッドハッチバック。オークショングレード4.5、無事故歴、完全なサービス記録あり。市街地および長距離走行に最適。東アフリカ、南アジア、南米市場で実績のある人気モデルです。"
      },
      specs: {
        year: 2017, make: "Toyota", model: "Aqua",
        engineCC: 1500, engineType: "1NZ-FXE Hybrid",
        transmission: "CVT Automatic", drive: "FWD",
        fuelType: "Hybrid", color: "Pearl White",
        doors: 5, seats: 5,
        condition: "Auction Grade 4.5",
        steering: "Right Hand Drive"
      },
      condition: {
        grade: "4.5",
        accidentHistory: false,
        notes: {
          en: "Minor scuff on rear bumper, all mechanicals fully checked and cleared. Engine and hybrid battery in excellent condition.",
          ja: "リアバンパーに軽い擦り傷。全機械系統は完全に確認・クリア済み。エンジンとハイブリッドバッテリーは優れた状態です。"
        }
      },
      shipping: { readyDate: "2025-02-15", loadingPort: "Osaka", method: ["RORO","Container"] },
      tags: ["hybrid","low-mileage","grade-4.5","popular"]
    },

    {
      id: "nissan-note-2016",
      brand: "Nissan",
      type: "car",
      title: "Nissan Note 2016",
      status: "available",
      featuredImage: "images/Nissan Note 2018-2026/Nissan Note (1).jpg",
      images: [
        { url: "images/Nissan Note 2018-2026/Nissan Note (1).jpg", alt: "Nissan Note front" },
        { url: "images/Nissan Note 2018-2026/Nissan Note (2).jpg", alt: "Nissan Note rear" },
        { url: "images/Nissan Note 2018-2026/Nissan Note (3).jpg", alt: "Nissan Note side" },
        { url: "images/Nissan Note 2018-2026/Nissan Note (4).jpg", alt: "Nissan Note detail" },
        { url: "images/Nissan Note 2018-2026/Nissan Note (5).jpg", alt: "Nissan Note exterior" }
      ],
      priceFOB: 5200,
      priceCIF: 5600,
      currency: "USD",
      mileage: 72000,
      stockNo: "APP-NN-2016-001",
      listedAt: "2025-01-20",
      description: {
        en: "Reliable and fuel-efficient Nissan Note in excellent export condition. Grade 4 auction vehicle with no accident history. The Note is one of the most trusted and practical models for African and Asian markets thanks to its ground clearance, fuel economy, and low maintenance cost.",
        ja: "優れた輸出状態の信頼できる低燃費日産ノート。グレード4オークション車両、無事故歴。ノートは地上高、燃費、低メンテナンスコストからアフリカ・アジア市場で最も信頼されるモデルの一つです。"
      },
      specs: {
        year: 2016, make: "Nissan", model: "Note",
        engineCC: 1200, engineType: "HR12DE",
        transmission: "CVT Automatic", drive: "FWD",
        fuelType: "Petrol", color: "Silver Metallic",
        doors: 5, seats: 5,
        condition: "Auction Grade 4",
        steering: "Right Hand Drive"
      },
      condition: {
        grade: "4",
        accidentHistory: false,
        notes: { en: "Small stone chips on bonnet. Tyres 70% tread remaining. Fully serviced.", ja: "ボンネットに小さな石傷あり。タイヤトレッド70%残存。完全整備済み。" }
      },
      shipping: { readyDate: "2025-02-01", loadingPort: "Nagoya", method: ["RORO","Container"] },
      tags: ["petrol","grade-4","africa-ready"]
    },

    {
      id: "honda-fit-2018",
      brand: "Honda",
      type: "car",
      title: "Honda Fit 2018",
      status: "available",
      featuredImage: "images/Honda Fit 2018-2026/Honda Fit (1).jpg",
      images: [
        { url: "images/Honda Fit 2018-2026/Honda Fit (1).jpg", alt: "Honda Fit front" },
        { url: "images/Honda Fit 2018-2026/Honda Fit (2).jpg", alt: "Honda Fit side" }
      ],
      priceFOB: 6800,
      priceCIF: 7300,
      currency: "USD",
      mileage: 60000,
      stockNo: "APP-HF-2018-001",
      listedAt: "2025-01-25",
      description: {
        en: "Near-perfect Honda Fit with the highest auction grade in our current car stock. Grade 4.5, zero accident history, serviced at Honda dealership throughout ownership. Exceptional fuel economy and versatile Magic Seat system make this the ideal family and commercial vehicle.",
        ja: "現在の在庫で最高オークショングレードのほぼ完璧なホンダフィット。グレード4.5、無事故歴、所有期間中ホンダディーラーにて整備。"
      },
      specs: {
        year: 2018, make: "Honda", model: "Fit",
        engineCC: 1300, engineType: "L13B",
        transmission: "CVT Automatic", drive: "FWD",
        fuelType: "Petrol", color: "Aegean Blue Pearl",
        doors: 5, seats: 5,
        condition: "Auction Grade 4.5",
        steering: "Right Hand Drive"
      },
      condition: {
        grade: "4.5",
        accidentHistory: false,
        notes: { en: "Immaculate condition. No visible damage. Dealer-serviced throughout.", ja: "非の打ち所のない状態。目に見えるダメージなし。ディーラー整備済み。" }
      },
      shipping: { readyDate: "2025-02-10", loadingPort: "Osaka", method: ["RORO","Container"] },
      tags: ["petrol","grade-4.5","low-mileage","dealer-serviced"]
    },

    {
      id: "toyota-land-cruiser-2015",
      brand: "Toyota",
      type: "car",
      title: "Toyota Land Cruiser Prado 2015",
      status: "available",
      featuredImage: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (1).jpg",
      images: [
        { url: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (1).jpg", alt: "Land Cruiser front" },
        { url: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (2).jpg", alt: "Land Cruiser side" },
        { url: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (3).jpg", alt: "Land Cruiser rear" },
        { url: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (4).jpg", alt: "Land Cruiser detail" },
        { url: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (5).jpg", alt: "Land Cruiser interior" },
        { url: "images/Toyota Land Cruiser 2025-2026/Toyota Land Cruiser (6).jpg", alt: "Land Cruiser exterior" }
      ],
      priceFOB: 18500,
      priceCIF: 19800,
      currency: "USD",
      mileage: 88000,
      stockNo: "APP-LC-2015-001",
      listedAt: "2025-01-28",
      description: {
        en: "Iconic Toyota Land Cruiser Prado 150 series in excellent condition. Perfect for NGO fleets, government use, safari operators, and private buyers in East Africa and South Asia. 4WD system, diesel engine, and legendary Toyota reliability make this the ultimate all-terrain vehicle.",
        ja: "優れた状態の象徴的なトヨタランドクルーザープラド150シリーズ。NGOフリート、政府使用、サファリオペレーター、東アフリカ・南アジアの個人バイヤーに最適。"
      },
      specs: {
        year: 2015, make: "Toyota", model: "Land Cruiser Prado 150",
        engineCC: 2800, engineType: "1GD-FTV Diesel",
        transmission: "6-Speed Automatic", drive: "4WD",
        fuelType: "Diesel", color: "Graphite Grey Metallic",
        doors: 5, seats: 7,
        condition: "Auction Grade 3.5",
        steering: "Right Hand Drive"
      },
      condition: {
        grade: "3.5",
        accidentHistory: false,
        notes: { en: "Surface scratches on rear bumper and door sill. Mechanically excellent. All 4WD functions verified.", ja: "リアバンパーとドアシルに表面傷あり。機械的には優秀。全4WD機能確認済み。" }
      },
      shipping: { readyDate: "2025-03-01", loadingPort: "Osaka", method: ["RORO","Container"] },
      tags: ["diesel","4wd","suv","grade-3.5","ngo-ready","safari"]
    },

    {
      id: "toyota-v8-2020",
      brand: "Toyota",
      type: "car",
      title: "Toyota V8 2020",
      status: "available",
      featuredImage: "images/Toyota V8 2020-2026/Toyota V8 (1).jpg",
      images: [
        { url: "images/Toyota V8 2020-2026/Toyota V8 (1).jpg", alt: "Toyota V8 front" },
        { url: "images/Toyota V8 2020-2026/Toyota V8 (2).jpg", alt: "Toyota V8 side" },
        { url: "images/Toyota V8 2020-2026/Toyota V8 (3).jpg", alt: "Toyota V8 rear" },
        { url: "images/Toyota V8 2020-2026/Toyota V8 (4).jpg", alt: "Toyota V8 interior" },
        { url: "images/Toyota V8 2020-2026/Toyota V8 (5).jpg", alt: "Toyota V8 detail" },
        { url: "images/Toyota V8 2020-2026/Toyota V8 (6).jpg", alt: "Toyota V8 driving" },
        { url: "images/Toyota V8 2020-2026/Toyota V8 (7).jpg", alt: "Toyota V8 exterior" }
      ],
      priceFOB: 42000,
      priceCIF: 44800,
      currency: "USD",
      mileage: 45000,
      stockNo: "APP-TV8-2020-001",
      listedAt: "2025-02-01",
      description: { en: "Toyota Land Cruiser V8 in excellent condition. Full option, ideal for safari and tough terrain. Ready for export.", ja: "優れた状態のトヨタランドクルーザーV8。フルオプション、サファリや悪路に最適。輸出準備完了。" },
      specs: { year: 2020, make: "Toyota", model: "Land Cruiser V8", engineCC: 4600, engineType: "1UR-FE V8", transmission: "6-Speed Auto", drive: "4WD", fuelType: "Petrol", color: "White", doors: 5, seats: 8, condition: "Grade 4", steering: "Right Hand Drive" },
      condition: { grade: "4", accidentHistory: false, notes: { en: "Well maintained. Full service history.", ja: "整備良好。完全なサービス履歴あり。" } },
      shipping: { readyDate: "2025-03-01", loadingPort: "Osaka", method: ["RORO","Container"] },
      tags: ["v8","4wd","suv","safari"]
    },
    {
      id: "nissan-patrol-2020",
      brand: "Nissan",
      type: "car",
      title: "Nissan Patrol 2020",
      status: "available",
      featuredImage: "images/Nissan Petrol 2020-2026/Nissan Petrol  (1).jpg",
      images: [
        { url: "images/Nissan Petrol 2020-2026/Nissan Petrol  (1).jpg", alt: "Nissan Patrol front" },
        { url: "images/Nissan Petrol 2020-2026/Nissan Petrol  (2).jpg", alt: "Nissan Patrol side" },
        { url: "images/Nissan Petrol 2020-2026/Nissan Petrol  (3).jpg", alt: "Nissan Patrol driving" },
        { url: "images/Nissan Petrol 2020-2026/Nissan Petrol  (4).jpg", alt: "Nissan Patrol detail" },
        { url: "images/Nissan Petrol 2020-2026/Nissan Petrol  (5).jpg", alt: "Nissan Patrol exterior" }
      ],
      priceFOB: 52000,
      priceCIF: 55800,
      currency: "USD",
      mileage: 38000,
      stockNo: "APP-NP-2020-001",
      listedAt: "2025-02-05",
      description: { en: "Nissan Patrol in outstanding condition. Powerful V8, luxury interior. Popular in Middle East and Africa.", ja: "優れた状態の日産パトロール。強力なV8、ラグジュアリー内装。中東・アフリカで人気。" },
      specs: { year: 2020, make: "Nissan", model: "Patrol", engineCC: 5600, engineType: "VK56VD V8", transmission: "7-Speed Auto", drive: "4WD", fuelType: "Petrol", color: "Black", doors: 5, seats: 7, condition: "Grade 4.5", steering: "Right Hand Drive" },
      condition: { grade: "4.5", accidentHistory: false, notes: { en: "Full option. Immaculate.", ja: "フルオプション。完璧な状態。" } },
      shipping: { readyDate: "2025-03-10", loadingPort: "Yokohama", method: ["RORO","Container"] },
      tags: ["patrol","v8","4wd","luxury"]
    },
    {
      id: "toyota-hilux-2020",
      brand: "Toyota",
      type: "car",
      title: "Toyota Hilux 2020",
      status: "available",
      featuredImage: "images/Toyota Hilux 2020-2026/Toyota Hilux (1).jpg",
      images: [
        { url: "images/Toyota Hilux 2020-2026/Toyota Hilux (1).jpg", alt: "Toyota Hilux front" },
        { url: "images/Toyota Hilux 2020-2026/Toyota Hilux (2).jpg", alt: "Toyota Hilux side" },
        { url: "images/Toyota Hilux 2020-2026/Toyota Hilux (3).jpg", alt: "Toyota Hilux rear" },
        { url: "images/Toyota Hilux 2020-2026/Toyota Hilux (4).jpg", alt: "Toyota Hilux detail" }
      ],
      priceFOB: 28500,
      priceCIF: 30800,
      currency: "USD",
      mileage: 62000,
      stockNo: "APP-TH-2020-001",
      listedAt: "2025-02-08",
      description: { en: "Toyota Hilux pickup — the world's most reliable workhorse. Diesel, double cab. Ready for export.", ja: "トヨタハイラックス — 世界で最も信頼されるワークホース。ディーゼル、ダブルキャブ。輸出準備完了。" },
      specs: { year: 2020, make: "Toyota", model: "Hilux", engineCC: 2800, engineType: "1GD-FTV Diesel", transmission: "6-Speed Auto", drive: "4WD", fuelType: "Diesel", color: "White", doors: 4, seats: 5, condition: "Grade 4", steering: "Right Hand Drive" },
      condition: { grade: "4", accidentHistory: false, notes: { en: "Strong demand in Africa and Asia.", ja: "アフリカ・アジアで高い需要。" } },
      shipping: { readyDate: "2025-03-05", loadingPort: "Osaka", method: ["RORO","Container"] },
      tags: ["hilux","pickup","diesel","4wd"]
    },
    {
      id: "mazda-rx7-2020",
      brand: "Mazda",
      type: "car",
      title: "Mazda RX-7 2020",
      status: "available",
      featuredImage: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (1).jpg",
      images: [
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (1).jpg", alt: "Mazda RX-7 front" },
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (2).jpg", alt: "Mazda RX-7 side" },
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (3).jpg", alt: "Mazda RX-7 rear" },
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (4).jpg", alt: "Mazda RX-7 detail" },
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (5).jpg", alt: "Mazda RX-7 exterior" },
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (6).jpg", alt: "Mazda RX-7 driving" },
        { url: "images/Mazda Rx 7 - 2020-2026/Mazda Rx 7 (7).jpg", alt: "Mazda RX-7 profile" }
      ],
      priceFOB: 68000,
      priceCIF: 72000,
      currency: "USD",
      mileage: 22000,
      stockNo: "APP-MRX7-2020-001",
      listedAt: "2025-02-10",
      description: { en: "Mazda RX-7 in exceptional condition. Rotary engine, iconic sports car. Collector and enthusiast favourite.", ja: "最高状態のマツダRX-7。ロータリーエンジン、アイコニックなスポーツカー。コレクター・愛好家に人気。" },
      specs: { year: 2020, make: "Mazda", model: "RX-7", engineCC: 1300, engineType: "13B-REW Rotary", transmission: "5-Speed Manual", drive: "RWD", fuelType: "Petrol", color: "Blue", doors: 2, seats: 4, condition: "Grade 5", steering: "Right Hand Drive" },
      condition: { grade: "5", accidentHistory: false, notes: { en: "Low mileage. Original condition.", ja: "低走行。オリジナル状態。" } },
      shipping: { readyDate: "2025-03-15", loadingPort: "Nagoya", method: ["Container"] },
      tags: ["rx7","sports","rotary","collector"]
    },
    {
      id: "toyota-supra-2020",
      brand: "Toyota",
      type: "car",
      title: "Toyota Supra 2020",
      status: "available",
      featuredImage: "images/Supra 2020-2026/Supra (1).jpg",
      images: [
        { url: "images/Supra 2020-2026/Supra (1).jpg", alt: "Supra front" },
        { url: "images/Supra 2020-2026/Supra (2).jpg", alt: "Supra side" },
        { url: "images/Supra 2020-2026/Supra (3).avif", alt: "Supra rear" },
        { url: "images/Supra 2020-2026/Supra (4).avif", alt: "Supra detail" },
        { url: "images/Supra 2020-2026/Supra (5).avif", alt: "Supra exterior" }
      ],
      priceFOB: 72000,
      priceCIF: 76500,
      currency: "USD",
      mileage: 18000,
      stockNo: "APP-TSUP-2020-001",
      listedAt: "2025-02-12",
      description: { en: "Toyota Supra A90 — legendary sports car. Twin-turbo inline-6. Perfect for collectors and performance enthusiasts.", ja: "トヨタスープラA90 — 伝説のスポーツカー。ツインターボ直列6気筒。コレクター・パフォーマンス愛好家に最適。" },
      specs: { year: 2020, make: "Toyota", model: "Supra A90", engineCC: 3000, engineType: "B58 Twin-Turbo I6", transmission: "8-Speed Auto", drive: "RWD", fuelType: "Petrol", color: "Red", doors: 2, seats: 2, condition: "Grade 5", steering: "Right Hand Drive" },
      condition: { grade: "5", accidentHistory: false, notes: { en: "As new. Full options.", ja: "新品同様。フルオプション。" } },
      shipping: { readyDate: "2025-03-20", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["supra","sports","turbo","collector"]
    },
    {
      id: "nissan-gtr-2020",
      brand: "Nissan",
      type: "car",
      title: "Nissan GTR 2020",
      status: "available",
      featuredImage: "images/Nissan GTR 2020-2026/Nissan GTR (1).jpg",
      images: [
        { url: "images/Nissan GTR 2020-2026/Nissan GTR (1).jpg", alt: "Nissan GTR front" },
        { url: "images/Nissan GTR 2020-2026/Nissan GTR (2).jpg", alt: "Nissan GTR side" },
        { url: "images/Nissan GTR 2020-2026/Nissan GTR (3).jpg", alt: "Nissan GTR rear" },
        { url: "images/Nissan GTR 2020-2026/Nissan GTR (4).jpg", alt: "Nissan GTR detail" }
      ],
      priceFOB: 95000,
      priceCIF: 101000,
      currency: "USD",
      mileage: 12000,
      stockNo: "APP-NGTR-2020-001",
      listedAt: "2025-02-15",
      description: { en: "Nissan GT-R in pristine condition. Legendary performance, low mileage. One of the world's greatest sports cars.", ja: "最高状態の日産GT-R。伝説のパフォーマンス、低走行。世界最高のスポーツカーの一台。" },
      specs: { year: 2020, make: "Nissan", model: "GT-R", engineCC: 3800, engineType: "VR38DETT Twin-Turbo V6", transmission: "6-Speed DCT", drive: "AWD", fuelType: "Petrol", color: "Red", doors: 2, seats: 4, condition: "Grade 5", steering: "Right Hand Drive" },
      condition: { grade: "5", accidentHistory: false, notes: { en: "Collector grade. Full service history.", ja: "コレクターグレード。完全なサービス履歴。" } },
      shipping: { readyDate: "2025-03-25", loadingPort: "Osaka", method: ["Container"] },
      tags: ["gtr","sports","turbo","awd","collector"]
    },

    // ── HEAVY MACHINERY ───────────────────────────────────────────
    {
      id: "hitachi-zx85us-2015",
      brand: "Hitachi",
      type: "excavator",
      title: "Hitachi ZX85US 2015",
      status: "available",
      featuredImage: "images/Hitachi ZX85US - 2015-2026/Hitachi  (1).jpg",
      images: [
        { url: "images/Hitachi ZX85US - 2015-2026/Hitachi  (1).jpg", alt: "Hitachi ZX85US excavator" },
        { url: "images/Hitachi ZX85US - 2015-2026/Hitachi  (2).jpg", alt: "Hitachi ZX85US side view" },
        { url: "images/Hitachi ZX85US - 2015-2026/Hitachi  (3).jpg", alt: "Hitachi ZX85US at site" },
        { url: "images/Hitachi ZX85US - 2015-2026/Hitachi  (4).jpg", alt: "Hitachi ZX85US tracks" }
      ],
      priceFOB: 38000,
      priceCIF: 40500,
      currency: "USD",
      mileage: null,
      stockNo: "APP-HZ-2015-001",
      listedAt: "2025-01-10",
      description: {
        en: "Hitachi ZX85US short-radius compact excavator in excellent working condition. 4,200 hours on meter — well within acceptable service life. Ideal for urban construction, drainage, road works, and building projects in space-constrained environments. All hydraulics, swing, and track systems verified operational.",
        ja: "優れた稼働状態の日立ZX85USショートラジアスコンパクト油圧ショベル。メーター4,200時間 — 許容稼働寿命内。都市建設、排水、道路工事、狭小環境での建設プロジェクトに最適。"
      },
      specs: {
        year: 2015, make: "Hitachi", model: "ZX85US",
        engineCC: 3000, engineType: "Isuzu 4JJ1X Diesel",
        transmission: "Hydraulic", drive: "Track (Steel)",
        fuelType: "Diesel", color: "Hitachi Orange",
        operatingWeight: "8,500 kg",
        bucketCapacity: "0.28 m³",
        maxDigDepth: "4.53 m",
        condition: "Excellent — 4,200 hours",
        steering: "N/A"
      },
      condition: {
        grade: "B",
        accidentHistory: false,
        notes: { en: "All hydraulic cylinders checked — no leaks. Undercarriage 70% remaining. New filters installed.", ja: "全油圧シリンダー確認済み — 漏れなし。アンダーキャリッジ70%残存。新品フィルター取付済み。" }
      },
      shipping: { readyDate: "2025-02-20", loadingPort: "Osaka", method: ["Container","Flat Rack"] },
      tags: ["compact","short-radius","low-hours","diesel","urban-construction"]
    },

    {
      id: "kobelco-sk210-2016",
      brand: "Kobelco",
      type: "excavator",
      title: "Kobelco SK210 2016",
      status: "available",
      featuredImage: "images/Kobelco SK210 2016-2026/Kobelco (2).jpg",
      images: [
        { url: "images/Kobelco SK210 2016-2026/Kobelco (1).jpg", alt: "Kobelco SK210 front" },
        { url: "images/Kobelco SK210 2016-2026/Kobelco (2).jpg", alt: "Kobelco SK210 digging" },
        { url: "images/Kobelco SK210 2016-2026/Kobelco (3).jpg", alt: "Kobelco SK210 at site" },
        { url: "images/Kobelco SK210 2016-2026/Kobelco (4).jpg", alt: "Kobelco SK210 side view" },
        { url: "images/Kobelco SK210 2016-2026/Kobelco (5).jpg", alt: "Kobelco SK210 rear" },
        { url: "images/Kobelco SK210 2016-2026/Kobelco (6).jpg", alt: "Kobelco SK210 alternate" },
        { url: "images/Kobelco SK210 2016-2026/Kobelco (7).jpg", alt: "Kobelco SK210 detail" }
      ],
      priceFOB: 52000,
      priceCIF: 55500,
      currency: "USD",
      mileage: null,
      stockNo: "APP-KS-2016-001",
      listedAt: "2025-01-12",
      description: {
        en: "Kobelco SK210 20-tonne medium excavator — the workhorse of construction sites across Africa and Asia. 6,800 hours. Kobelco's INOUE hydraulic system delivers exceptional fuel efficiency and digging power. Ideal for large earthworks, mining access roads, dam construction, and port development.",
        ja: "コベルコSK210 20トン中型油圧ショベル — アフリカ・アジアの建設現場の主力機。6,800時間。コベルコのINOUE油圧システムにより優れた燃費と掘削力を実現。"
      },
      specs: {
        year: 2016, make: "Kobelco", model: "SK210",
        engineCC: 5100, engineType: "Hino J05E Diesel",
        transmission: "Hydraulic", drive: "Track (Steel/Rubber options)",
        fuelType: "Diesel", color: "Kobelco Yellow",
        operatingWeight: "20,800 kg",
        bucketCapacity: "0.9 m³",
        maxDigDepth: "6.63 m",
        condition: "Good — 6,800 hours",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Recently serviced. New track pads on left side. Hydraulic pump pressure tested and within spec.", ja: "最近整備済み。左側トラックパッド新品。油圧ポンプ圧力テスト済み、規格内。" }
      },
      shipping: { readyDate: "2025-03-01", loadingPort: "Osaka", method: ["Flat Rack","Break Bulk"] },
      tags: ["20-tonne","diesel","earthworks","mining","africa-ready"]
    },

    {
      id: "komatsu-pc200-2014",
      brand: "Komatsu",
      type: "excavator",
      title: "Komatsu PC200-8 2014",
      status: "available",
      featuredImage: "images/Komatsu/komatsu (1).jpg",
      images: [
        { url: "images/Komatsu/komatsu (1).jpg", alt: "Komatsu PC200-8 excavator" },
        { url: "images/Komatsu/komatsu (2).jpg", alt: "Komatsu PC200-8 side view" },
        { url: "images/Komatsu/komatsu (3).jpg", alt: "Komatsu PC200-8 at site" }
      ],
      priceFOB: 44000,
      priceCIF: 47200,
      currency: "USD",
      mileage: null,
      stockNo: "APP-KP-2014-001",
      listedAt: "2025-01-18",
      description: {
        en: "Komatsu PC200-8 — one of the world's most trusted 20-tonne excavators. 7,400 hours. Komatsu's KOMTRAX telematics system has been verified and shows consistent operation history. Preferred by contractors in South America and Middle East for its parts availability and dealer network.",
        ja: "コマツPC200-8 — 世界で最も信頼される20トン油圧ショベルの一つ。7,400時間。KOMTRAXテレマティクスシステムで一貫した稼働履歴を確認済み。"
      },
      specs: {
        year: 2014, make: "Komatsu", model: "PC200-8",
        engineCC: 5200, engineType: "SAA6D107E-1 Diesel",
        transmission: "Hydraulic", drive: "Track (Steel)",
        fuelType: "Diesel", color: "Komatsu Yellow",
        operatingWeight: "19,800 kg",
        bucketCapacity: "0.8 m³",
        maxDigDepth: "6.6 m",
        condition: "Good — 7,400 hours",
        steering: "N/A"
      },
      condition: {
        grade: "B",
        accidentHistory: false,
        notes: { en: "KOMTRAX verified. Undercarriage 65%. Hydraulic hoses recently replaced.", ja: "KOMTRAX確認済み。アンダーキャリッジ65%。油圧ホース最近交換済み。" }
      },
      shipping: { readyDate: "2025-02-28", loadingPort: "Nagoya", method: ["Flat Rack","Container"] },
      tags: ["20-tonne","diesel","komtrax","south-america","middle-east"]
    },

  ] // end vehicles

}; // end DB

// ── Utilities ────────────────────────────────────────────────
// TODO: Replace window.DB with fetch('/api/vehicles') when backend is ready
window.DB.utils = {
  getById:       (id)    => window.DB.vehicles.find(v => v.id === id),
  getByBrand:    (brand) => window.DB.vehicles.filter(v => v.brand === brand),
  getByType:     (type)  => window.DB.vehicles.filter(v => v.type === type),
  getAvailable:  ()      => window.DB.vehicles.filter(v => v.status === "available"),
  formatPrice:   (n)     => n ? `USD ${n.toLocaleString()}` : "POA",
  formatMileage: (n)     => n ? `${n.toLocaleString()} km` : "—",
  getHoursOrMileage: (v) => {
    if (v.type === "excavator" || v.type === "machinery") {
      const hrs = v.specs?.operatingHours;
      return hrs ? `${hrs.toLocaleString()} hrs` : "See description";
    }
    return window.DB.utils.formatMileage(v.mileage);
  }
};
