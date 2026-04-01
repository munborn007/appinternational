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
  email: "appinternational@gmail.com",
    phone: "047-404-8717",
    mobile: "080-7313-6728",
    whatsapp: "818073136728",
    responseTime: {
      en: "We reply within 24 hours",
      ja: "24時間以内に返信します"
    }
  },

  socials: {
    facebook:  "https://facebook.com/appinternational",
    instagram: "https://instagram.com/appinternational",
    linkedin:  "https://www.linkedin.com/company/appinternational",
    youtube:   "https://youtube.com/@appinternational",
    whatsapp:  "https://wa.me/818073136728"
  },

  brands: ["Toyota","Nissan","Honda","Mazda","Mitsubishi","Isuzu","Hino","Yamaha","Suzuki","Kawasaki","Hitachi","Kobelco","Komatsu","Caterpillar"],

  vehicleTypes: [
    { id: "car",       label: { en: "Cars",            ja: "乗用車" } },
    { id: "bike",      label: { en: "Motor Bikes",     ja: "バイク" } },
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

    // ── NEW MOTOR BIKES ──────────────────────────────────────────────
    {
      id: "yamaha-mt10-2024",
      brand: "Yamaha",
      type: "bike",
      title: "Yamaha MT-10 2024",
      status: "available",
      featuredImage: "images/Yamaha mt 10 2024/1.jpg",
      images: [
        { url: "images/Yamaha mt 10 2024/1.jpg", alt: "Yamaha MT-10 front" },
        { url: "images/Yamaha mt 10 2024/2.jpg", alt: "Yamaha MT-10 side" },
        { url: "images/Yamaha mt 10 2024/3.jpg", alt: "Yamaha MT-10 rear" },
        { url: "images/Yamaha mt 10 2024/4.jpg", alt: "Yamaha MT-10 detail" },
        { url: "images/Yamaha mt 10 2024/5.jpg", alt: "Yamaha MT-10 cockpit" },
        { url: "images/Yamaha mt 10 2024/6.webp", alt: "Yamaha MT-10 angle" },
        { url: "images/Yamaha mt 10 2024/7.webp", alt: "Yamaha MT-10 profile" },
        { url: "images/Yamaha mt 10 2024/8.webp", alt: "Yamaha MT-10 riding" },
        { url: "images/Yamaha mt 10 2024/9.webp", alt: "Yamaha MT-10 close-up" },
        { url: "images/Yamaha mt 10 2024/10.jpg", alt: "Yamaha MT-10 full view" }
      ],
      priceFOB: 12500,
      priceCIF: 13200,
      currency: "USD",
      mileage: 3500,
      stockNo: "APP-YMT10-2024-001",
      listedAt: "2025-02-28",
      description: {
        en: "Yamaha MT-10 2024 — the ultimate naked streetfighter. 998cc inline-4 engine delivering 160hp, lightweight chassis, and aggressive styling. Perfect for riders seeking high performance and urban presence.",
        ja: "ヤマハMT-10 2024 — 最高のネイキッドストリートファイター。998cc直列4気筒エンジンで160馬力、軽量シャーシ、攻撃的なスタイリング。"
      },
      specs: {
        year: 2024, make: "Yamaha", model: "MT-10",
        engineCC: 998, engineType: "CP4 Inline-4",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Matte Black",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Low mileage, excellent condition. Full service history available.", ja: "低走行、優れた状態。完全なサービス履歴あり。" }
      },
      shipping: { readyDate: "2025-03-15", loadingPort: "Osaka", method: ["Container"] },
      tags: ["bike","yamaha","mt10","naked","998cc","streetfighter"]
    },
    {
      id: "yamaha-r7-2024",
      brand: "Yamaha",
      type: "bike",
      title: "Yamaha YZF-R7 2024",
      status: "available",
      featuredImage: "images/2024 Yamaha YZF-R7/0f67209403_800.jpg",
      images: [
        { url: "images/2024 Yamaha YZF-R7/0f67209403_800.jpg", alt: "Yamaha YZF-R7 front" },
        { url: "images/2024 Yamaha YZF-R7/6d087af3-73a5-48ba-92b8-4349b9eed40c-762x456.jpeg", alt: "Yamaha YZF-R7 side" },
        { url: "images/2024 Yamaha YZF-R7/999820457_1.jpg", alt: "Yamaha YZF-R7 rear" },
        { url: "images/2024 Yamaha YZF-R7/999820457_2.jpg", alt: "Yamaha YZF-R7 detail" },
        { url: "images/2024 Yamaha YZF-R7/6000000006.jpg", alt: "Yamaha YZF-R7 cockpit" },
        { url: "images/2024 Yamaha YZF-R7/Crop800x600.jpg", alt: "Yamaha YZF-R7 angle" },
        { url: "images/2024 Yamaha YZF-R7/does-anyone-have-a-picture-of-a-grey-r7-without-the-decals-v0-nog1xg7g9cbf1.webp", alt: "Yamaha YZF-R7 profile" },
        { url: "images/2024 Yamaha YZF-R7/images (1).jpg", alt: "Yamaha YZF-R7 close-up" },
        { url: "images/2024 Yamaha YZF-R7/IMG_2309.webp", alt: "Yamaha YZF-R7 riding" },
        { url: "images/2024 Yamaha YZF-R7/sddefault.jpg", alt: "Yamaha YZF-R7 full view" }
      ],
      priceFOB: 8200,
      priceCIF: 8700,
      currency: "USD",
      mileage: 2800,
      stockNo: "APP-YR7-2024-001",
      listedAt: "2025-03-01",
      description: {
        en: "Yamaha YZF-R7 2024 — the middleweight supersport with race-bred DNA. 689cc CP2 engine, lightweight chassis, and aggressive aerodynamics. Ideal for track days and spirited road riding.",
        ja: "ヤマハYZF-R7 2024 — レースDNAを持つミドルウェイトスーパースポーツ。689cc CP2エンジン、軽量シャーシ、攻撃的なエアロダイナミクス。"
      },
      specs: {
        year: 2024, make: "Yamaha", model: "YZF-R7",
        engineCC: 689, engineType: "CP2 Parallel-twin",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Team Yamaha Blue",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Excellent condition, low mileage. Ready for export.", ja: "優れた状態、低走行。輸出準備完了。" }
      },
      shipping: { readyDate: "2025-03-18", loadingPort: "Osaka", method: ["Container"] },
      tags: ["bike","yamaha","r7","supersport","689cc","track-ready"]
    },
    {
      id: "kawasaki-z900-2024",
      brand: "Kawasaki",
      type: "bike",
      title: "Kawasaki Z900 2024",
      status: "available",
      featuredImage: "images/Kawasaki Z900 2024/2024-kawasaki-z900-abs.jpg",
      images: [
        { url: "images/Kawasaki Z900 2024/2024-kawasaki-z900-abs.jpg", alt: "Kawasaki Z900 front" },
        { url: "images/Kawasaki Z900 2024/2024-z900-as-first-bike-v0-kp7p61yemhgd1.webp", alt: "Kawasaki Z900 side" },
        { url: "images/Kawasaki Z900 2024/2024-z900-as-first-bike-v0-sdjqm1yemhgd1.jpg", alt: "Kawasaki Z900 rear" },
        { url: "images/Kawasaki Z900 2024/491253603_9270135379781256_4105988163367628782_n.jpg", alt: "Kawasaki Z900 detail" },
        { url: "images/Kawasaki Z900 2024/493834196_1495436518462807_6671891808397282976_n.jpg", alt: "Kawasaki Z900 cockpit" },
        { url: "images/Kawasaki Z900 2024/6000000001.jpeg", alt: "Kawasaki Z900 angle" },
        { url: "images/Kawasaki Z900 2024/6000000001.jpg", alt: "Kawasaki Z900 profile" }
      ],
      priceFOB: 9800,
      priceCIF: 10400,
      currency: "USD",
      mileage: 4200,
      stockNo: "APP-KZ9-2024-001",
      listedAt: "2025-03-02",
      description: {
        en: "Kawasaki Z900 2024 — the ultimate naked streetfighter. 948cc inline-4 engine delivering 123hp, aggressive styling, and advanced electronics. Perfect for riders seeking performance and presence.",
        ja: "カワサキZ900 2024 — 最高のネイキッドストリートファイター。948cc直列4気筒エンジンで123馬力、攻撃的なスタイリング、高度なエレクトロニクス。"
      },
      specs: {
        year: 2024, make: "Kawasaki", model: "Z900",
        engineCC: 948, engineType: "Inline-4",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Metallic Matte Carbon Black",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Excellent condition, low mileage. Ready for export.", ja: "優れた状態、低走行。輸出準備完了。" }
      },
      shipping: { readyDate: "2025-03-20", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["bike","kawasaki","z900","naked","948cc","streetfighter"]
    },
    {
      id: "kawasaki-kx450-2024",
      brand: "Kawasaki",
      type: "bike",
      title: "Kawasaki KX450 2024",
      status: "available",
      featuredImage: "images/2024 kawasaki kx450/3NMNPAGIHBF7ZNQZMUY3GMZTRE.avif",
      images: [
        { url: "images/2024 kawasaki kx450/3NMNPAGIHBF7ZNQZMUY3GMZTRE.avif", alt: "Kawasaki KX450 front" },
        { url: "images/2024 kawasaki kx450/24KX450FI_17.png", alt: "Kawasaki KX450 side" },
        { url: "images/2024 kawasaki kx450/2024-KX450-FMF-7-scaled.jpg", alt: "Kawasaki KX450 rear" },
        { url: "images/2024 kawasaki kx450/75650@2x.jpg", alt: "Kawasaki KX450 detail" },
        { url: "images/2024 kawasaki kx450/BikeReview-2024-Kawasaki-KX450-53.jpg", alt: "Kawasaki KX450 cockpit" },
        { url: "images/2024 kawasaki kx450/fmf1.jpg", alt: "Kawasaki KX450 angle" },
        { url: "images/2024 kawasaki kx450/hq720 (1).jpg", alt: "Kawasaki KX450 profile" },
        { url: "images/2024 kawasaki kx450/image1-3.jpeg", alt: "Kawasaki KX450 close-up" }
      ],
      priceFOB: 7500,
      priceCIF: 8000,
      currency: "USD",
      mileage: 1500,
      stockNo: "APP-KKX450-2024-001",
      listedAt: "2025-03-03",
      description: {
        en: "Kawasaki KX450 2024 — the ultimate motocross machine. 449cc liquid-cooled single-cylinder engine, lightweight chassis, and race-ready suspension. Built for serious off-road competition.",
        ja: "カワサキKX450 2024 — 最高のモトクロスマシン。449cc液体冷却単気筒エンジン、軽量シャーシ、レース仕様サスペンション。"
      },
      specs: {
        year: 2024, make: "Kawasaki", model: "KX450",
        engineCC: 449, engineType: "Liquid-cooled Single",
        transmission: "5-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Team Green",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Excellent condition, low mileage. Ready for export.", ja: "優れた状態、低走行。輸出準備完了。" }
      },
      shipping: { readyDate: "2025-03-22", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["bike","kawasaki","kx450","motocross","449cc","off-road"]
    },
    {
      id: "honda-crf450rw-2023",
      brand: "Honda",
      type: "bike",
      title: "Honda CRF450RW 2023",
      status: "available",
      featuredImage: "images/2023 Honda CRF450RW/7a74a496c92a66b5ae95ad73f8951c0f.jpg",
      images: [
        { url: "images/2023 Honda CRF450RW/7a74a496c92a66b5ae95ad73f8951c0f.jpg", alt: "Honda CRF450RW front" },
        { url: "images/2023 Honda CRF450RW/21-Honda-CRF450RWE_Beauty_01.jpg", alt: "Honda CRF450RW side" },
        { url: "images/2023 Honda CRF450RW/2021-Honda-CRF450R-6.webp", alt: "Honda CRF450RW rear" },
        { url: "images/2023 Honda CRF450RW/2021-Honda-CRF450R-Review.jpg", alt: "Honda CRF450RW detail" },
        { url: "images/2023 Honda CRF450RW/1710270-1920x2880-iphone-hd-honda-crf450r-wallpaper-photo.jpg", alt: "Honda CRF450RW cockpit" },
        { url: "images/2023 Honda CRF450RW/maxresdefault.jpg", alt: "Honda CRF450RW angle" },
        { url: "images/2023 Honda CRF450RW/MOSIMAN-HONDA-CRF450WE-BIKE-STATIC-1_e-1-scaled.jpg", alt: "Honda CRF450RW profile" },
        { url: "images/2023 Honda CRF450RW/THE_0802.webp", alt: "Honda CRF450RW close-up" }
      ],
      priceFOB: 8800,
      priceCIF: 9400,
      currency: "USD",
      mileage: 1200,
      stockNo: "APP-HCRF450RW-2023-001",
      listedAt: "2025-03-04",
      description: {
        en: "Honda CRF450RW 2023 — the ultimate enduro machine. 449cc liquid-cooled single-cylinder engine, long-travel suspension, and off-road capabilities. Perfect for serious off-road adventures.",
        ja: "ホンダCRF450RW 2023 — 最高のエンドゥロマシン。449cc液体冷却単気筒エンジン、ロングストロークサスペンション、オフロード性能。"
      },
      specs: {
        year: 2023, make: "Honda", model: "CRF450RW",
        engineCC: 449, engineType: "Liquid-cooled Single",
        transmission: "5-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Red/White",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Excellent condition, low mileage. Ready for export.", ja: "優れた状態、低走行。輸出準備完了。" }
      },
      shipping: { readyDate: "2025-03-25", loadingPort: "Osaka", method: ["Container"] },
      tags: ["bike","honda","crf450rw","enduro","449cc","off-road"]
    },
    {
      id: "honda-crf250r-2023",
      brand: "Honda",
      type: "bike",
      title: "Honda CRF250R 2023",
      status: "available",
      featuredImage: "images/2023 Honda CRF250R/2023-HONDA-CRF250-5_e.jpg",
      images: [
        { url: "images/2023 Honda CRF250R/2023-HONDA-CRF250-5_e.jpg", alt: "Honda CRF250R front" },
        { url: "images/2023 Honda CRF250R/2023-honda-crf250r-review-motocross-tested-1.webp", alt: "Honda CRF250R side" },
        { url: "images/2023 Honda CRF250R/2023-honda-crf250r-review-motocross-tested-6.webp", alt: "Honda CRF250R rear" },
        { url: "images/2023 Honda CRF250R/2026-crf250r-single-muffler-exhaust.avif", alt: "Honda CRF250R detail" },
        { url: "images/2023 Honda CRF250R/52653638757_e1cedbebed_b.jpg", alt: "Honda CRF250R cockpit" },
        { url: "images/2023 Honda CRF250R/akrapovic-racing-evolution-line-para-honda-crf-250-r-rx-2022-2024.webp", alt: "Honda CRF250R angle" },
        { url: "images/2023 Honda CRF250R/IMG_3823-scaled.jpg", alt: "Honda CRF250R profile" },
        { url: "images/2023 Honda CRF250R/LS-290909-1.webp", alt: "Honda CRF250R close-up" },
        { url: "images/2023 Honda CRF250R/Ready-to-Ship-2023-Hond-CRF450R-Off-Road-Motorcycles-CRF-450-R-CRF-250-R-Dirt-Bikes.avif", alt: "Honda CRF250R full view" }
      ],
      priceFOB: 6200,
      priceCIF: 6600,
      currency: "USD",
      mileage: 1800,
      stockNo: "APP-HCRF250R-2023-001",
      listedAt: "2025-03-05",
      description: {
        en: "Honda CRF250R 2023 — the ultimate motocross machine. 249cc liquid-cooled single-cylinder engine, lightweight chassis, and race-ready suspension. Built for serious off-road competition.",
        ja: "ホンダCRF250R 2023 — 最高のモトクロスマシン。249cc液体冷却単気筒エンジン、軽量シャーシ、レース仕様サスペンション。"
      },
      specs: {
        year: 2023, make: "Honda", model: "CRF250R",
        engineCC: 249, engineType: "Liquid-cooled Single",
        transmission: "5-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Red/White",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Excellent condition, low mileage. Ready for export.", ja: "優れた状態、低走行。輸出準備完了。" }
      },
      shipping: { readyDate: "2025-03-28", loadingPort: "Osaka", method: ["Container"] },
      tags: ["bike","honda","crf250r","motocross","249cc","off-road"]
    },

    // ── MOTOR BIKES ──────────────────────────────────────────────
    {
      id: "yamaha-r3-2019",
      brand: "Yamaha",
      type: "bike",
      title: "Yamaha YZF-R3 2019",
      status: "available",
      featuredImage: "images/Yamaha YZF-R3 2019/2019_yzf_r3_5.jpg",
      images: [
        { url: "images/Yamaha YZF-R3 2019/2019_yzf_r3_5.jpg", alt: "Yamaha YZF-R3 side view" },
        { url: "images/Yamaha YZF-R3 2019/201909_big@2x.jpg", alt: "Yamaha YZF-R3 front angle" },
        { url: "images/Yamaha YZF-R3 2019/2019-yamaha-yzf-r3-render.webp", alt: "Yamaha YZF-R3 render" },
        { url: "images/Yamaha YZF-R3 2019/1714035761-39_2019-yamaha-yzf-r3-review.avif", alt: "Yamaha YZF-R3 review photo" },
        { url: "images/Yamaha YZF-R3 2019/249652003162704.jpg", alt: "Yamaha YZF-R3 details" }
      ],
      priceFOB: 3300,
      priceCIF: 3700,
      currency: "USD",
      mileage: 14000,
      stockNo: "APP-YR3-2019-001",
      listedAt: "2025-02-18",
      description: {
        en: "Yamaha YZF-R3 in clean export condition. Lightweight, reliable, and easy to maintain — perfect for city riding and weekend touring. Fully inspected before shipment.",
        ja: "輸出向けに整備されたヤマハYZF-R3。軽量で信頼性が高く、街乗りや週末ツーリングに最適。出荷前点検済み。"
      },
      specs: {
        year: 2019, make: "Yamaha", model: "YZF-R3",
        engineCC: 321, engineType: "Parallel-twin 4-stroke",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Blue",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A-",
        accidentHistory: false,
        notes: { en: "Starts easily, smooth gearbox. Tyres 70% remaining. No leaks.", ja: "始動良好、変速スムーズ。タイヤ残70%。漏れなし。" }
      },
      shipping: { readyDate: "2025-03-05", loadingPort: "Osaka", method: ["Container"] },
      tags: ["bike","yamaha","sport","321cc","chain"]
    },
    {
      id: "honda-cb400-2016",
      brand: "Honda",
      type: "bike",
      title: "Honda CB400SF 2016",
      status: "available",
      featuredImage: "images/Honda CB400SF 2016/CB400SFV.NC42MAIN4.jpg",
      images: [
        { url: "images/Honda CB400SF 2016/CB400SFV.NC42MAIN4.jpg", alt: "Honda CB400SF main" },
        { url: "images/Honda CB400SF 2016/CB400SF_revo_specialedition.jpg", alt: "Honda CB400SF special edition" },
        { url: "images/Honda CB400SF 2016/IMG_6658.jpg", alt: "Honda CB400SF photo" },
        { url: "images/Honda CB400SF 2016/unnamed.jpg", alt: "Honda CB400SF angle" },
        { url: "images/Honda CB400SF 2016/1_175884648868d5de185ab32.png", alt: "Honda CB400SF image" }
      ],
      priceFOB: 3900,
      priceCIF: 4300,
      currency: "USD",
      mileage: 22000,
      stockNo: "APP-HCB-2016-001",
      listedAt: "2025-02-20",
      description: {
        en: "Honda CB400 Super Four — one of Japan’s most popular middleweight bikes. Comfortable riding position, smooth inline-4 feel, and excellent parts availability. Export-ready.",
        ja: "ホンダCB400スーパーフォア。日本で人気の中型バイク。扱いやすく快適、パーツ供給も豊富。輸出準備完了。"
      },
      specs: {
        year: 2016, make: "Honda", model: "CB400SF",
        engineCC: 399, engineType: "Inline-4 4-stroke",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Black",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Engine pulls cleanly. New oil and filter. Minor cosmetic marks.", ja: "エンジン好調。オイル・フィルター交換済み。小傷あり。" }
      },
      shipping: { readyDate: "2025-03-08", loadingPort: "Nagoya", method: ["Container"] },
      tags: ["bike","honda","cb400","inline-4","chain"]
    },
    {
      id: "kawasaki-ninja400-2020",
      brand: "Kawasaki",
      type: "bike",
      title: "Kawasaki Ninja 400 2020",
      status: "available",
      featuredImage: "images/Kawasaki Ninja 400 2020/Kawasaki_Ninja_400_KRT_Edition_(facelift_model)_right_side.jpg",
      images: [
        { url: "images/Kawasaki Ninja 400 2020/Kawasaki_Ninja_400_KRT_Edition_(facelift_model)_right_side.jpg", alt: "Kawasaki Ninja 400 right side" },
        { url: "images/Kawasaki Ninja 400 2020/2023-kawasaki-ninja-400-krt-edition.jpg", alt: "Kawasaki Ninja 400 KRT edition" },
        { url: "images/Kawasaki Ninja 400 2020/1005513_LE76Y9Bo_thumb4.jpg", alt: "Kawasaki Ninja 400 photo" },
        { url: "images/Kawasaki Ninja 400 2020/8512946.jpg", alt: "Kawasaki Ninja 400 angle" },
        { url: "images/Kawasaki Ninja 400 2020/64qef95twy581.jpg", alt: "Kawasaki Ninja 400 detail" }
      ],
      priceFOB: 4200,
      priceCIF: 4700,
      currency: "USD",
      mileage: 9000,
      stockNo: "APP-KN4-2020-001",
      listedAt: "2025-02-22",
      description: {
        en: "Kawasaki Ninja 400 — agile, fast, and beginner-friendly. Excellent option for both daily commuting and spirited riding. Export inspection completed.",
        ja: "カワサキNinja 400。軽快で速く、初心者にも扱いやすい。通勤にもスポーツ走行にも最適。点検済み。"
      },
      specs: {
        year: 2020, make: "Kawasaki", model: "Ninja 400",
        engineCC: 399, engineType: "Parallel-twin 4-stroke",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Green/Black",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Low mileage. Clean plastics. Brakes and chain checked.", ja: "低走行。外装きれい。ブレーキとチェーン確認済み。" }
      },
      shipping: { readyDate: "2025-03-10", loadingPort: "Osaka", method: ["Container"] },
      tags: ["bike","kawasaki","ninja","400cc","chain"]
    },
    {
      id: "suzuki-vstrom650-2017",
      brand: "Suzuki",
      type: "bike",
      title: "Suzuki V-Strom 650 2017",
      status: "available",
      featuredImage: "images/Suzuki V-Strom 650 2017/DL650_17-_VT1_E.jpg",
      images: [
        { url: "images/Suzuki V-Strom 650 2017/DL650_17-_VT1_E.jpg", alt: "Suzuki V-Strom 650 main" },
        { url: "images/Suzuki V-Strom 650 2017/suzuki-v-strom-650-xt-2017-1.jpg", alt: "Suzuki V-Strom 650 XT" },
        { url: "images/Suzuki V-Strom 650 2017/Red_2005_Suzuki_V-Strom_650.jpg", alt: "Suzuki V-Strom 650 red" },
        { url: "images/Suzuki V-Strom 650 2017/IMG_0223-web.jpg", alt: "Suzuki V-Strom 650 photo" },
        { url: "images/Suzuki V-Strom 650 2017/event-details_026.jpg", alt: "Suzuki V-Strom 650 event" },
        { url: "images/Suzuki V-Strom 650 2017/38496426765_9b029087ef_b.jpg", alt: "Suzuki V-Strom 650 angle" }
      ],
      priceFOB: 5200,
      priceCIF: 5900,
      currency: "USD",
      mileage: 28000,
      stockNo: "APP-SVS-2017-001",
      listedAt: "2025-02-25",
      description: {
        en: "Suzuki V-Strom 650 adventure tourer — reliable V-twin comfort with strong long-distance capability. Ideal for touring, mixed roads, and daily use.",
        ja: "スズキV-Strom 650。信頼性の高いVツインで長距離も快適。ツーリング、舗装/未舗装の混在路、日常使用に最適。"
      },
      specs: {
        year: 2017, make: "Suzuki", model: "V-Strom 650",
        engineCC: 645, engineType: "V-twin 4-stroke",
        transmission: "6-Speed Manual", drive: "Chain",
        fuelType: "Petrol", color: "Grey/Yellow",
        condition: "Export inspected",
        steering: "N/A"
      },
      condition: {
        grade: "B",
        accidentHistory: false,
        notes: { en: "Serviced. Smooth clutch. Minor wear consistent with mileage.", ja: "整備済み。クラッチ良好。走行距離相応の使用感あり。" }
      },
      shipping: { readyDate: "2025-03-12", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["bike","suzuki","v-strom","touring","645cc"]
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
      featuredImage: "images/Kobelco SK210 2016-2026/Kobelco (1).webp",
      images: [
        { url: "images/Kobelco SK210 2016-2026/Kobelco (1).webp", alt: "Kobelco SK210 front" },
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

  ], // end vehicles

  // ── PARTS & COMPONENTS ──────────────────────────────────────────────
  parts: [
    // Engines
    {
      id: "isuzu-4hg1-1995",
      brand: "Isuzu",
      category: "engine",
      title: "Isuzu 4HG1 Engine 1995-2004",
      status: "available",
      featuredImage: "images/4HG1 engine 1995 - 2004/503862577_3134582263372435_5866893020462031082_n.jpg",
      images: [
        { url: "images/4HG1 engine 1995 - 2004/503862577_3134582263372435_5866893020462031082_n.jpg", alt: "Isuzu 4HG1 engine" },
        { url: "images/4HG1 engine 1995 - 2004/504474412_17947587737993989_6275488952093681318_n.jpg", alt: "Isuzu 4HG1 engine front" },
        { url: "images/4HG1 engine 1995 - 2004/503862577_3134582263372435_5866893020462031082_n.jpg", alt: "Isuzu 4HG1 engine side" },
        { url: "images/4HG1 engine 1995 - 2004/504474412_17947587737993989_6275488952093681318_n.jpg", alt: "Isuzu 4HG1 engine detail" },
        { url: "images/4HG1 engine 1995 - 2004/504860447_17947587725993989_2928188744439035256_n.jpg", alt: "Isuzu 4HG1 engine rear" },
        { url: "images/4HG1 engine 1995 - 2004/505295325_3134582260039102_8133374230132411640_n.jpg", alt: "Isuzu 4HG1 engine top" },
        { url: "images/4HG1 engine 1995 - 2004/651188648_870880679317656_6515030282569069050_n.jpg", alt: "Isuzu 4HG1 engine installed" },
        { url: "images/4HG1 engine 1995 - 2004/651677133_869339672805090_3929810375449007865_n.jpg", alt: "Isuzu 4HG1 engine workshop" },
        { url: "images/4HG1 engine 1995 - 2004/651766948_870817159324008_5884918748157632479_n.jpg", alt: "Isuzu 4HG1 engine closeup" },
        { url: "images/4HG1 engine 1995 - 2004/653011783_872439962495061_4515378481383857600_n.jpg", alt: "Isuzu 4HG1 engine test" },
        { url: "images/4HG1 engine 1995 - 2004/653704821_871009415971449_8151766085427935718_n.jpg", alt: "Isuzu 4HG1 engine dyno" },
        { url: "images/4HG1 engine 1995 - 2004/653707766_872536022485455_6160120580055070382_n.jpg", alt: "Isuzu 4HG1 engine packaging" },
        { url: "images/4HG1 engine 1995 - 2004/images (1).jpg", alt: "Isuzu 4HG1 engine manual" },
        { url: "images/4HG1 engine 1995 - 2004/Screenshot_1.png", alt: "Isuzu 4HG1 engine specs" },
        { url: "images/4HG1 engine 1995 - 2004/Screenshot_2.png", alt: "Isuzu 4HG1 engine dimensions" }
      ],
      priceFOB: 2800,
      priceCIF: 3100,
      currency: "USD",
      stockNo: "APP-ENG-4HG1-001",
      listedAt: "2025-03-15",
      description: {
        en: "Genuine Isuzu 4HG1 4-cylinder diesel engine. 2.771L displacement, 80-90 HP. Perfect for Isuzu NPR, NQR, and other light-duty trucks. Low mileage, fully tested, and ready for export.",
        ja: "本物のいすゞ4HG1 4気筒ディーゼルエンジン。2.771L排気量、80-90馬力。いすゞNPR、NQR、その他の小型トラックに最適。低走行、完全テスト済み、輸出準備完了。"
      },
      specs: {
        year: "1995-2004", make: "Isuzu", model: "4HG1",
        engineCC: 2771, engineType: "4-cylinder Diesel",
        fuelType: "Diesel", color: "Engine Grey",
        condition: "Reconditioned",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Low mileage, fully tested, compression tested, oil pressure verified.", ja: "低走行、完全テスト済み、圧縮テスト、油圧確認済み。" }
      },
      shipping: { readyDate: "2025-03-20", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["engine","isuzu","4hg1","diesel","reconditioned"]
    },
    {
      id: "isuzu-4hf1-1995",
      brand: "Isuzu",
      category: "engine",
      title: "Isuzu 4HF1 Engine 1995-2004",
      status: "available",
      featuredImage: "images/Isuzu 4HF1 engine 1995 - 2004/PA99369846_b3aecf.jpg",
      images: [
        { url: "images/Isuzu 4HF1 engine 1995 - 2004/PA99369846_b3aecf.jpg", alt: "Isuzu 4HF1 engine" },
        { url: "images/Isuzu 4HF1 engine 1995 - 2004/Screenshot_1.png", alt: "Isuzu 4HF1 engine front" },
        { url: "images/Isuzu 4HF1 engine 1995 - 2004/Screenshot_2.png", alt: "Isuzu 4HF1 engine side" },
        { url: "images/Isuzu 4HF1 engine 1995 - 2004/Screenshot_3.png", alt: "Isuzu 4HF1 engine detail" },
        { url: "images/Isuzu 4HF1 engine 1995 - 2004/used-engine-1.webp", alt: "Isuzu 4HF1 engine rear" }
      ],
      priceFOB: 3200,
      priceCIF: 3500,
      currency: "USD",
      stockNo: "APP-ENG-4HF1-001",
      listedAt: "2025-03-16",
      description: {
        en: "Genuine Isuzu 4HF1 4-cylinder diesel engine. 3.856L displacement, 100-110 HP. Suitable for Isuzu FSR, FTR, and medium-duty trucks. High torque, reliable performance.",
        ja: "本物のいすゞ4HF1 4気筒ディーゼルエンジン。3.856L排気量、100-110馬力。いすゞFSR、FTR、中型トラックに適合。高トルク、信頼性の高い性能。"
      },
      specs: {
        year: "1995-2004", make: "Isuzu", model: "4HF1",
        engineCC: 3856, engineType: "4-cylinder Diesel",
        fuelType: "Diesel", color: "Engine Grey",
        condition: "Reconditioned",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Low mileage, fully tested, high torque output verified.", ja: "低走行、完全テスト済み、高トルク出力確認済み。" }
      },
      shipping: { readyDate: "2025-03-22", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["engine","isuzu","4hf1","diesel","reconditioned"]
    },
    {
      id: "toyota-1kz-te-1994",
      brand: "Toyota",
      category: "engine",
      title: "Toyota 1KZ-TE Engine 1994-2004",
      status: "available",
      featuredImage: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/4223-IMG_2180.JPG",
      images: [
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/4223-IMG_2180.JPG", alt: "Toyota 1KZ-TE engine" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/480114025_660882939620581_4192916998702719117_n.jpg", alt: "Toyota 1KZ-TE engine front" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/480351002_660882956287246_7596464368082314498_n.jpg", alt: "Toyota 1KZ-TE engine side" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/480472691_660882959620579_5577445754442029947_n.jpg", alt: "Toyota 1KZ-TE engine detail" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499234877_998016585832253_2216577100606014956_n.jpg", alt: "Toyota 1KZ-TE engine rear" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499579884_998016512498927_3420590639437566645_n.jpg", alt: "Toyota 1KZ-TE engine top" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499818613_998016589165586_7620017403270350705_n.jpg", alt: "Toyota 1KZ-TE engine installed" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/img_7418.jpg", alt: "Toyota 1KZ-TE engine workshop" },
        { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/s-l1200.webp", alt: "Toyota 1KZ-TE engine manual" }
      ],
      priceFOB: 2500,
      priceCIF: 2800,
      currency: "USD",
      stockNo: "APP-ENG-1KZ-001",
      listedAt: "2025-03-17",
      description: {
        en: "Genuine Toyota 1KZ-TE 4-cylinder turbo diesel engine. 2.982L displacement, 120-130 HP. Widely used in Toyota HiAce, Hilux, and Land Cruiser Prado. Excellent reliability and fuel efficiency.",
        ja: "本物のトヨタ1KZ-TE 4気筒ターボディーゼルエンジン。2.982L排気量、120-130馬力。トヨタハイエース、ハイラックス、ランドクルーザープラドで広く使用。優れた信頼性と燃費効率。"
      },
      specs: {
        year: "1994-2004", make: "Toyota", model: "1KZ-TE",
        engineCC: 2982, engineType: "4-cylinder Turbo Diesel",
        fuelType: "Diesel", color: "Engine Grey",
        condition: "Reconditioned",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Low mileage, fully tested, turbo efficiency verified.", ja: "低走行、完全テスト済み、ターボ効率確認済み。" }
      },
      shipping: { readyDate: "2025-03-24", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["engine","toyota","1kz-te","turbo","diesel","reconditioned"]
    },
    {
      id: "mazda-r2-1995",
      brand: "Mazda",
      category: "engine",
      title: "Mazda R2 Engine 1995-2004",
      status: "available",
      featuredImage: "images/Mazda R2 engine 1995 - 2004/33333105_2083884375159422_1205863552124977152_n.jpg",
      images: [
        { url: "images/Mazda R2 engine 1995 - 2004/33333105_2083884375159422_1205863552124977152_n.jpg", alt: "Mazda R2 engine" },
        { url: "images/Mazda R2 engine 1995 - 2004/33413494_2083884421826084_2155117750505177088_n.jpg", alt: "Mazda R2 engine front" },
        { url: "images/Mazda R2 engine 1995 - 2004/33618953_2083884471826079_6364675279612280832_n.jpg", alt: "Mazda R2 engine side" },
        { url: "images/Mazda R2 engine 1995 - 2004/480310129_122206494866249526_7808882842697656261_n.jpg", alt: "Mazda R2 engine detail" },
        { url: "images/Mazda R2 engine 1995 - 2004/480342327_122206494920249526_8301908057291184895_n.jpg", alt: "Mazda R2 engine rear" },
        { url: "images/Mazda R2 engine 1995 - 2004/480471791_122206494650249526_3884430189213297606_n.jpg", alt: "Mazda R2 engine view" }
      ],
      priceFOB: 2200,
      priceCIF: 2500,
      currency: "USD",
      stockNo: "APP-ENG-R2-001",
      listedAt: "2025-03-18",
      description: {
        en: "Genuine Mazda R2 4-cylinder diesel engine. 2.659L displacement, 75-85 HP. Used in Mazda Titan and other light-duty trucks. Compact and efficient.",
        ja: "本物のマツダR2 4気筒ディーゼルエンジン。2.659L排気量、75-85馬力。マツダタイタン他小型トラックで使用。コンパクトで効率的。"
      },
      specs: {
        year: "1995-2004", make: "Mazda", model: "R2",
        engineCC: 2659, engineType: "4-cylinder Diesel",
        fuelType: "Diesel", color: "Engine Grey",
        condition: "Reconditioned",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Low mileage, fully tested, reliable performance.", ja: "低走行、完全テスト済み、信頼性の高い性能。" }
      },
      shipping: { readyDate: "2025-03-26", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["engine","mazda","r2","diesel","reconditioned"]
    },

    // Vehicle Bodies
    {
      id: "isuzu-back-tray",
      brand: "Isuzu",
      category: "body",
      title: "Isuzu Back Tray with PTO",
      status: "available",
      featuredImage: "images/Isuzu back tray with PTO/isuzu-dmax-tf-roller-shutter-4-483x483.webp",
      images: [
        { url: "images/Isuzu back tray with PTO/isuzu-dmax-tf-roller-shutter-4-483x483.webp", alt: "Isuzu back tray front" },
        { url: "images/Isuzu back tray with PTO/D-Max_RT1_roller_cover_4-resized_1024x1024_2x_34fb0e86-0bfa-4250-a415-8d8b59cf3598_1024x1024@2x.webp", alt: "Isuzu back tray side" },
        { url: "images/Isuzu back tray with PTO/DMAXROLLER-02462_1024x1024@2x.webp", alt: "Isuzu back tray rear" },
        { url: "images/Isuzu back tray with PTO/DMAXROLLER-02470_1024x1024@2x.webp", alt: "Isuzu back tray detail" },
        { url: "images/Isuzu back tray with PTO/images (1).jpg", alt: "Isuzu back tray installed" }
      ],
      priceFOB: 1800,
      priceCIF: 2100,
      currency: "USD",
      stockNo: "APP-BODY-ISUZU-001",
      listedAt: "2025-03-19",
      description: {
        en: "Isuzu back tray with power take-off (PTO) system. Heavy-duty steel construction, hydraulic lift, and roller shutter. Perfect for light trucks and pickups.",
        ja: "いすゞバックトレイ（PTO付き）。重量級スチール製、油圧リフト、ローラーシャッター。小型トラック・ピックアップに最適。"
      },
      specs: {
        make: "Isuzu", model: "Back Tray",
        material: "Steel", color: "Black",
        length: "2.4m", width: "1.8m", height: "0.6m",
        condition: "New",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "New condition, complete with PTO system and hydraulic lift.", ja: "新品、PTOシステムと油圧リフト付属。" }
      },
      shipping: { readyDate: "2025-03-28", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["body","isuzu","back-tray","pto","hydraulic"]
    },
    {
      id: "isuzu-dump-cabins",
      brand: "Isuzu",
      category: "body",
      title: "Isuzu Dump Cabins",
      status: "available",
      featuredImage: "images/Isuzu dump cabins/Isuzu-dump-truck.jpg",
      images: [
        { url: "images/Isuzu dump cabins/Isuzu-dump-truck.jpg", alt: "Isuzu dump cabin front" },
        { url: "images/Isuzu dump cabins/Double-Row-Cabin-Isuzu-Mini-Dump-Truck-with-3-Cbm-Dump-Box.avif", alt: "Isuzu dump cabin side" }
      ],
      priceFOB: 2500,
      priceCIF: 2800,
      currency: "USD",
      stockNo: "APP-BODY-ISUZU-002",
      listedAt: "2025-03-20",
      description: {
        en: "Isuzu dump truck cabins with hydraulic dump system. Double-row seating, reinforced frame, and weatherproof design. Ideal for construction and mining applications.",
        ja: "いすゞダンプトラックキャビン（油圧ダンプ付き）。ダブルシート、補強フレーム、防水設計。建設・鉱業に最適。"
      },
      specs: {
        make: "Isuzu", model: "Dump Cabin",
        material: "Steel", color: "White",
        seats: 2, doors: 2,
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Used condition, hydraulic system tested, cabin cleaned.", ja: "使用済み、油圧システムテスト済み、キャビン清掃済み。" }
      },
      shipping: { readyDate: "2025-03-30", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["body","isuzu","dump-cabin","hydraulic","construction"]
    },
    {
      id: "mazda-titan-cabins",
      brand: "Mazda",
      category: "body",
      title: "Mazda Titan Cabins",
      status: "available",
      featuredImage: "images/Mazda Titan cabins/1.jpg",
      images: [
        { url: "images/Mazda Titan cabins/1.jpg", alt: "Mazda Titan cabin front" },
        { url: "images/Mazda Titan cabins/2.jpg", alt: "Mazda Titan cabin side" },
        { url: "images/Mazda Titan cabins/3.jpg", alt: "Mazda Titan cabin rear" },
        { url: "images/Mazda Titan cabins/4.jpg", alt: "Mazda Titan cabin detail" },
        { url: "images/Mazda Titan cabins/5.jpg", alt: "Mazda Titan cabin interior" },
        { url: "images/Mazda Titan cabins/6.jpg", alt: "Mazda Titan cabin view" },
        { url: "images/Mazda Titan cabins/7.jpg", alt: "Mazda Titan cabin angle" },
        { url: "images/Mazda Titan cabins/8.jpg", alt: "Mazda Titan cabin exterior" },
        { url: "images/Mazda Titan cabins/9.jpg", alt: "Mazda Titan cabin closeup" },
        { url: "images/Mazda Titan cabins/10.jpg", alt: "Mazda Titan cabin profile" },
        { url: "images/Mazda Titan cabins/11.jpg", alt: "Mazda Titan cabin full view" },
        { url: "images/Mazda Titan cabins/12.jpg", alt: "Mazda Titan cabin alternate" }
      ],
      priceFOB: 1500,
      priceCIF: 1800,
      currency: "USD",
      stockNo: "APP-BODY-MAZDA-001",
      listedAt: "2025-03-21",
      description: {
        en: "Mazda Titan truck cabins. Single or double-row options, weatherproof construction, and ergonomic design. Perfect for light-duty truck conversions.",
        ja: "マツダタイタントラックキャビン。シングル/ダブルシートオプション、防水設計、人間工学に基づいたデザイン。小型トラック改造に最適。"
      },
      specs: {
        make: "Mazda", model: "Titan Cabin",
        material: "Steel", color: "White",
        seats: 1-2, doors: 2,
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B",
        accidentHistory: false,
        notes: { en: "Used condition, cleaned and inspected.", ja: "使用済み、清掃・点検済み。" }
      },
      shipping: { readyDate: "2025-03-31", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["body","mazda","titan-cabin","light-duty","construction"]
    },
    {
      id: "mitsubishi-canter-cabins",
      brand: "Mitsubishi",
      category: "body",
      title: "Mitsubishi Canter Cabins",
      status: "available",
      featuredImage: "images/Mitsubishi Canter Cabins/1.jpg",
      images: [
        { url: "images/Mitsubishi Canter Cabins/1.jpg", alt: "Mitsubishi Canter cabin front" },
        { url: "images/Mitsubishi Canter Cabins/2.jpg", alt: "Mitsubishi Canter cabin side" },
        { url: "images/Mitsubishi Canter Cabins/3.jpg", alt: "Mitsubishi Canter cabin rear" },
        { url: "images/Mitsubishi Canter Cabins/4.jpg", alt: "Mitsubishi Canter cabin detail" },
        { url: "images/Mitsubishi Canter Cabins/5.jpg", alt: "Mitsubishi Canter cabin interior" },
        { url: "images/Mitsubishi Canter Cabins/6.jpg", alt: "Mitsubishi Canter cabin view" },
        { url: "images/Mitsubishi Canter Cabins/7.jpg", alt: "Mitsubishi Canter cabin angle" },
        { url: "images/Mitsubishi Canter Cabins/8.jpg", alt: "Mitsubishi Canter cabin exterior" },
        { url: "images/Mitsubishi Canter Cabins/9.jpg", alt: "Mitsubishi Canter cabin closeup" },
        { url: "images/Mitsubishi Canter Cabins/10.jpg", alt: "Mitsubishi Canter cabin profile" },
        { url: "images/Mitsubishi Canter Cabins/11.jpg", alt: "Mitsubishi Canter cabin full view" },
        { url: "images/Mitsubishi Canter Cabins/12.jpg", alt: "Mitsubishi Canter cabin alternate" },
        { url: "images/Mitsubishi Canter Cabins/13.webp", alt: "Mitsubishi Canter cabin additional" },
        { url: "images/Mitsubishi Canter Cabins/14.jpeg", alt: "Mitsubishi Canter cabin extra" }
      ],
      priceFOB: 1800,
      priceCIF: 2100,
      currency: "USD",
      stockNo: "APP-BODY-MITSUBISHI-001",
      listedAt: "2025-03-22",
      description: {
        en: "Mitsubishi Canter truck cabins. Reliable and durable construction, suitable for various truck models. Weather-resistant and comfortable.",
        ja: "三菱キャンタートラックキャビン。信頼性の高い耐久性のある構造、さまざまなトラックモデルに適合。耐候性と快適性。"
      },
      specs: {
        make: "Mitsubishi", model: "Canter Cabin",
        material: "Steel", color: "White",
        seats: 2-3, doors: 2,
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Used condition, inspected and cleaned.", ja: "使用済み、点検・清掃済み。" }
      },
      shipping: { readyDate: "2025-04-01", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["body","mitsubishi","canter-cabin","durable","construction"]
    },

    // Workshop Equipment
    {
      id: "air-compressor",
      brand: "Various",
      category: "equipment",
      title: "Air Compressor",
      status: "available",
      featuredImage: "images/AIR COMPRESSOR/1.jpg",
      images: [
        { url: "images/AIR COMPRESSOR/1.jpg", alt: "Air compressor front" },
        { url: "images/AIR COMPRESSOR/2.jpg", alt: "Air compressor side" },
        { url: "images/AIR COMPRESSOR/3.jpg", alt: "Air compressor rear" },
        { url: "images/AIR COMPRESSOR/4.jpg", alt: "Air compressor detail" },
        { url: "images/AIR COMPRESSOR/5.jpg", alt: "Air compressor control panel" },
        { url: "images/AIR COMPRESSOR/6.jpg", alt: "Air compressor pressure gauge" },
        { url: "images/AIR COMPRESSOR/7.jpg", alt: "Air compressor motor" },
        { url: "images/AIR COMPRESSOR/8.jpg", alt: "Air compressor tank" },
        { url: "images/AIR COMPRESSOR/9.jpg", alt: "Air compressor base" },
        { url: "images/AIR COMPRESSOR/10.jpg", alt: "Air compressor accessories" },
        { url: "images/AIR COMPRESSOR/11.webp", alt: "Air compressor installation" }
      ],
      priceFOB: 850,
      priceCIF: 950,
      currency: "USD",
      stockNo: "APP-EQUIP-AC-001",
      listedAt: "2025-03-23",
      description: {
        en: "Industrial air compressor for workshop use. 220V, 50L tank, 2HP motor. Perfect for tire changing, painting, and general pneumatic tools.",
        ja: "工業用エアーコンプレッサー（ワークショップ用）。220V、50Lタンク、2HPモーター。タイヤ交換、塗装、一般的な空気工具に最適。"
      },
      specs: {
        make: "Various", model: "Air Compressor",
        voltage: "220V", frequency: "50Hz",
        tankCapacity: "50L", motorPower: "2HP",
        pressure: "8 Bar", color: "Red",
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B",
        accidentHistory: false,
        notes: { en: "Used condition, serviced, pressure tested.", ja: "使用済み、整備済み、圧力テスト済み。" }
      },
      shipping: { readyDate: "2025-04-02", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["equipment","air-compressor","workshop","industrial"]
    },
    {
      id: "tyre-changing-machine",
      brand: "Various",
      category: "equipment",
      title: "Tyre Changing Machine",
      status: "available",
      featuredImage: "images/Tyre changing machine japan/75133d20c9dd4b362d460e126c834a6e.jpg",
      images: [
        { url: "images/Tyre changing machine japan/75133d20c9dd4b362d460e126c834a6e.jpg", alt: "Tyre changing machine front" },
        { url: "images/Tyre changing machine japan/1451619406bf5c26723de6edb59c79fb9f9568794a.jpg", alt: "Tyre changing machine side" },
        { url: "images/Tyre changing machine japan/1451619406bf5c26723de6edb59c79fb9f9568794a (1).jpg", alt: "Tyre changing machine rear" },
        { url: "images/Tyre changing machine japan/14516192765c3bc0c0ef81cc6b6468a26c2fe66d47.jpg", alt: "Tyre changing machine detail" },
        { url: "images/Tyre changing machine japan/product-jpeg.jpg", alt: "Tyre changing machine control panel" },
        { url: "images/Tyre changing machine japan/semi-automatic-tyre-changing-m-20250409122936784.jpeg", alt: "Tyre changing machine operation" },
        { url: "images/Tyre changing machine japan/10-24-Used-Japan-Tire-Tyre-Changer-Machine-Spare-Partsprice-for-Sale.avif", alt: "Tyre changing machine full view" },
        { url: "images/Tyre changing machine japan/Tire-Changer-10-28-Simple-Tire-Lifting-System-Turntable-Free-Tire-Removal-Equipment.avif", alt: "Tyre changing machine profile" }
      ],
      priceFOB: 1200,
      priceCIF: 1350,
      currency: "USD",
      stockNo: "APP-EQUIP-TCM-001",
      listedAt: "2025-03-24",
      description: {
        en: "Professional tyre changing machine for passenger cars and light trucks. Manual operation, durable construction, and easy to use.",
        ja: "乗用車・小型トラック用プロフェッショナルタイヤ交換機。手動操作、耐久性のある構造、使いやすい。"
      },
      specs: {
        make: "Various", model: "Tyre Changing Machine",
        voltage: "220V", frequency: "50Hz",
        maxWheelSize: "24 inches", color: "Blue",
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Used condition, cleaned and lubricated.", ja: "使用済み、清掃・潤滑済み。" }
      },
      shipping: { readyDate: "2025-04-03", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["equipment","tyre-changing","workshop","manual"]
    },
    {
      id: "car-hydraulic-lifting-system",
      brand: "Various",
      category: "equipment",
      title: "Car Hydraulic Lifting System",
      status: "available",
      featuredImage: "images/Car Hydrolic Lifting System/1.avif",
      images: [
        { url: "images/Car Hydrolic Lifting System/1.avif", alt: "Car hydraulic lifting system front" },
        { url: "images/Car Hydrolic Lifting System/2.avif", alt: "Car hydraulic lifting system side" },
        { url: "images/Car Hydrolic Lifting System/3.avif", alt: "Car hydraulic lifting system rear" },
        { url: "images/Car Hydrolic Lifting System/4.jpg", alt: "Car hydraulic lifting system detail" },
        { url: "images/Car Hydrolic Lifting System/5.jpg", alt: "Car hydraulic lifting system operation" },
        { url: "images/Car Hydrolic Lifting System/6291116315001_694.jpg", alt: "Car hydraulic lifting system capacity" },
        { url: "images/Car Hydrolic Lifting System/Best-Selling-New-2024-Two-Post-Car-Lifts-12000lbs-Hydraulic-Car-Lifting-Machine-2-Post-Car-Lift.avif", alt: "Car hydraulic lifting system two-post" },
        { url: "images/Car Hydrolic Lifting System/CE-Certification-2-Post-Double-Cylinder-Hydraulic-Car-Lift (1).avif", alt: "Car hydraulic lifting system certification" },
        { url: "images/Car Hydrolic Lifting System/CE-Certification-2-Post-Double-Cylinder-Hydraulic-Car-Lift.avif", alt: "Car hydraulic lifting system safety" },
        { url: "images/Car Hydrolic Lifting System/Good-Quality-Launch-TLT240SBA-Advanced-Hydraulic-2-Post-Car-Lift-TLT-240SBA-for-Home-Garage-Sale.avif", alt: "Car hydraulic lifting system advanced" },
        { url: "images/Car Hydrolic Lifting System/hydraulic-two-post-car-lift.jpg", alt: "Car hydraulic lifting system two-post operation" },
        { url: "images/Car Hydrolic Lifting System/images (1).jpg", alt: "Car hydraulic lifting system manual" }
      ],
      priceFOB: 2800,
      priceCIF: 3100,
      currency: "USD",
      stockNo: "APP-EQUIP-CHLS-001",
      listedAt: "2025-03-25",
      description: {
        en: "Hydraulic car lifting system for workshop use. 2-post or 4-post options available. 4-ton capacity, safety locks, and easy operation.",
        ja: "ワークショップ用油圧車両リフトシステム。2本立てまたは4本立てオプションあり。4トン容量、安全ロック、簡単操作。"
      },
      specs: {
        make: "Various", model: "Car Hydraulic Lifting System",
        capacity: "4 tons", voltage: "220V",
        frequency: "50Hz", color: "Blue/Yellow",
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Used condition, serviced, safety tested.", ja: "使用済み、整備済み、安全テスト済み。" }
      },
      shipping: { readyDate: "2025-04-04", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["equipment","hydraulic-lifting","workshop","car-lift"]
    },
    {
      id: "lath-machines",
      brand: "Various",
      category: "equipment",
      title: "Lath Machines",
      status: "available",
      featuredImage: "images/Lath Machines/OKUMA-LATHE-LT-1969YEAR-1.jpg",
      images: [
        { url: "images/Lath Machines/OKUMA-LATHE-LT-1969YEAR-1.jpg", alt: "Lath machine front" },
        { url: "images/Lath Machines/MS850G-3.jpg", alt: "Lath machine side" },
        { url: "images/Lath Machines/okuma-lathe-machine-923.jpg", alt: "Lath machine rear" },
        { url: "images/Lath Machines/Image84.jpeg", alt: "Lath machine detail" },
        { url: "images/Lath Machines/images (1).jpg", alt: "Lath machine operation" },
        { url: "images/Lath Machines/images (2).jpg", alt: "Lath machine view" }
      ],
      priceFOB: 1500,
      priceCIF: 1700,
      currency: "USD",
      stockNo: "APP-EQUIP-LM-001",
      listedAt: "2025-03-26",
      description: {
        en: "Industrial lath machines for metal and wood working. Variable speed, precision control, and durable construction.",
        ja: "金属・木工用工業用旋盤。可変速、精密制御、耐久性のある構造。"
      },
      specs: {
        make: "Various", model: "Lath Machine",
        voltage: "220V", frequency: "50Hz",
        swing: "300mm", distanceBetweenCenters: "1000mm",
        color: "Green", condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B",
        accidentHistory: false,
        notes: { en: "Used condition, serviced, calibrated.", ja: "使用済み、整備済み、較正済み。" }
      },
      shipping: { readyDate: "2025-04-05", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["equipment","lath-machine","workshop","industrial"]
    },

    // Components
    {
      id: "toyota-prius-abs-unit",
      brand: "Toyota",
      category: "component",
      title: "Toyota Prius ABS Unit",
      status: "available",
      featuredImage: "images/Toyota prius ABS unit/0000005488_0_bbf7a753-3b11-4358-8769-e1fe3a9717ed.jpg",
      images: [
        { url: "images/Toyota prius ABS unit/0000005488_0_bbf7a753-3b11-4358-8769-e1fe3a9717ed.jpg", alt: "Toyota Prius ABS unit front" },
        { url: "images/Toyota prius ABS unit/296283-46.jpg", alt: "Toyota Prius ABS unit side" },
        { url: "images/Toyota prius ABS unit/189324101_5444264678980389_2804083464902788047_n.jpg", alt: "Toyota Prius ABS unit rear" },
        { url: "images/Toyota prius ABS unit/468959458_580222324496117_4695785951197454279_n.jpg", alt: "Toyota Prius ABS unit detail" },
        { url: "images/Toyota prius ABS unit/i-img640x480-1663728826oqmfjo435.jpg", alt: "Toyota Prius ABS unit installation" },
        { url: "images/Toyota prius ABS unit/s-l1200.jpg", alt: "Toyota Prius ABS unit full view" }
      ],
      priceFOB: 350,
      priceCIF: 400,
      currency: "USD",
      stockNo: "APP-COMP-ABS-001",
      listedAt: "2025-03-27",
      description: {
        en: "Toyota Prius ABS (Anti-lock Braking System) unit. Genuine OEM part, tested and working condition.",
        ja: "トヨタプリウスABS（アンチロックブレーキシステム）ユニット。純正OEM部品、テスト済み、動作良好。"
      },
      specs: {
        make: "Toyota", model: "Prius ABS Unit",
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Tested, working condition, cleaned.", ja: "テスト済み、動作良好、清掃済み。" }
      },
      shipping: { readyDate: "2025-04-06", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["component","toyota","abs-unit","brakes","prius"]
    },
    {
      id: "toyota-prius-doors-fenders",
      brand: "Toyota",
      category: "component",
      title: "Toyota Prius Doors and Fenders",
      status: "available",
      featuredImage: "images/Toyota prius all doors and fenders/474066276_122132200382532065_5960039564783661684_n.jpg",
      images: [
        { url: "images/Toyota prius all doors and fenders/474066276_122132200382532065_5960039564783661684_n.jpg", alt: "Toyota Prius doors and fenders front" },
        { url: "images/Toyota prius all doors and fenders/474368820_122132200238532065_1040089637055762160_n.jpg", alt: "Toyota Prius doors and fenders side" },
        { url: "images/Toyota prius all doors and fenders/474550541_122132200334532065_1801893086559769445_n.jpg", alt: "Toyota Prius doors and fenders rear" },
        { url: "images/Toyota prius all doors and fenders/474730162_122132200292532065_8846451673721393087_n.jpg", alt: "Toyota Prius doors and fenders detail" },
        { url: "images/Toyota prius all doors and fenders/633706976_122120720505067435_892509989308057470_n.jpg", alt: "Toyota Prius doors and fenders installation" },
        { url: "images/Toyota prius all doors and fenders/633706976_122120720505067435_892509989308057470_n (1).jpg", alt: "Toyota Prius doors and fenders view" },
        { url: "images/Toyota prius all doors and fenders/633799992_122120720607067435_1982915097270159859_n.jpg", alt: "Toyota Prius doors and fenders angle" },
        { url: "images/Toyota prius all doors and fenders/633799992_122120720607067435_1982915097270159859_n (1).jpg", alt: "Toyota Prius doors and fenders profile" },
        { url: "images/Toyota prius all doors and fenders/633844237_122120720619067435_3267989245830796999_n.jpg", alt: "Toyota Prius doors and fenders closeup" },
        { url: "images/Toyota prius all doors and fenders/636705304_122120720517067435_5573790144833135122_n.jpg", alt: "Toyota Prius doors and fenders full view" },
        { url: "images/Toyota prius all doors and fenders/images (1).jpg", alt: "Toyota Prius doors and fenders additional" }
      ],
      priceFOB: 450,
      priceCIF: 500,
      currency: "USD",
      stockNo: "APP-COMP-DF-001",
      listedAt: "2025-03-28",
      description: {
        en: "Toyota Prius doors and fenders set. Complete set including front/rear doors and fenders. OEM quality, ready to install.",
        ja: "トヨタプリウスドア＆フェンダーセット。フロント/リアドアとフェンダー完全セット。純正品質、取り付け準備完了。"
      },
      specs: {
        make: "Toyota", model: "Prius Doors and Fenders",
        color: "Silver", condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Used condition, cleaned, minor scratches.", ja: "使用済み、清掃済み、小傷あり。" }
      },
      shipping: { readyDate: "2025-04-07", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["component","toyota","doors-fenders","prius","body-parts"]
    },
    {
      id: "toyota-prius-buffers",
      brand: "Toyota",
      category: "component",
      title: "Toyota Prius Buffers",
      status: "available",
      featuredImage: "images/Toyota prius buffers/489845244_122203243904175043_2009985342568679090_n.jpg",
      images: [
        { url: "images/Toyota prius buffers/489845244_122203243904175043_2009985342568679090_n.jpg", alt: "Toyota Prius buffers front" },
        { url: "images/Toyota prius buffers/493946651_1009429334615231_1330881933758536303_n.jpg", alt: "Toyota Prius buffers side" },
        { url: "images/Toyota prius buffers/494689265_1009429267948571_7380655083325235631_n.jpg", alt: "Toyota Prius buffers rear" },
        { url: "images/Toyota prius buffers/495157070_1009429387948559_3117512907677050304_n.jpg", alt: "Toyota Prius buffers detail" }
      ],
      priceFOB: 200,
      priceCIF: 250,
      currency: "USD",
      stockNo: "APP-COMP-BUF-001",
      listedAt: "2025-03-29",
      description: {
        en: "Toyota Prius front and rear buffers. OEM quality, ready to install.",
        ja: "トヨタプリウスフロント＆リアバッファー。純正品質、取り付け準備完了。"
      },
      specs: {
        make: "Toyota", model: "Prius Buffers",
        color: "Black", condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Used condition, cleaned, ready to install.", ja: "使用済み、清掃済み、取り付け準備完了。" }
      },
      shipping: { readyDate: "2025-04-08", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["component","toyota","buffers","prius","body-parts"]
    },
    {
      id: "yamaha-marine-engines",
      brand: "Yamaha",
      category: "component",
      title: "Yamaha Marine Engines",
      status: "available",
      featuredImage: "images/Yamaha Marine Engines 2015 - 2025/9123732_20231106103619967_1_LARGE.jpg",
      images: [
        { url: "images/Yamaha Marine Engines 2015 - 2025/9123732_20231106103619967_1_LARGE.jpg", alt: "Yamaha marine engine front" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/487352398_1460030848636411_6319481911279011054_n.jpg", alt: "Yamaha marine engine side" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/487451707_1460030825303080_5762299983795034990_n.jpg", alt: "Yamaha marine engine rear" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/487457711_1460031018636394_3014507817400918197_n.jpg", alt: "Yamaha marine engine detail" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/487563788_1460030985303064_5573569950662502827_n.jpg", alt: "Yamaha marine engine installation" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/487860749_1460031008636395_8015785897232094848_n.jpg", alt: "Yamaha marine engine view" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/IMG_6751__32190.jpg", alt: "Yamaha marine engine profile" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/Screenshot_1.png", alt: "Yamaha marine engine specs" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/Screenshot_2.png", alt: "Yamaha marine engine details" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/Screenshot_3.png", alt: "Yamaha marine engine info" },
        { url: "images/Yamaha Marine Engines 2015 - 2025/Screenshot_6.png", alt: "Yamaha marine engine additional" }
      ],
      priceFOB: 3500,
      priceCIF: 3800,
      currency: "USD",
      stockNo: "APP-COMP-ME-001",
      listedAt: "2025-03-30",
      description: {
        en: "Yamaha marine engines for boats and watercraft. Various models and horsepower available. Reliable and efficient.",
        ja: "ボート・水上バイク用ヤマハマリンエンジン。各種モデルと馬力あり。信頼性と効率性。"
      },
      specs: {
        make: "Yamaha", model: "Marine Engines",
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "B+",
        accidentHistory: false,
        notes: { en: "Used condition, serviced, tested.", ja: "使用済み、整備済み、テスト済み。" }
      },
      shipping: { readyDate: "2025-04-09", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["component","yamaha","marine-engine","boat","watercraft"]
    },
    {
      id: "yamaha-xto-japan",
      brand: "Yamaha",
      category: "component",
      title: "Yamaha XTO Japan",
      status: "available",
      featuredImage: "images/Yamaha xto Japan 2025/XTO-cowl.jpg",
      images: [
        { url: "images/Yamaha xto Japan 2025/XTO-cowl.jpg", alt: "Yamaha XTO engine front" },
        { url: "images/Yamaha xto Japan 2025/Image-1.png.jpeg", alt: "Yamaha XTO engine side" },
        { url: "images/Yamaha xto Japan 2025/images (1).jpg", alt: "Yamaha XTO engine rear" },
        { url: "images/Yamaha xto Japan 2025/maxresdefault (1).jpg", alt: "Yamaha XTO engine detail" },
        { url: "images/Yamaha xto Japan 2025/Untitled-design-84.jpg", alt: "Yamaha XTO engine installation" },
        { url: "images/Yamaha xto Japan 2025/yamaha-300hp-reverse-thrust.jpg", alt: "Yamaha XTO engine operation" },
        { url: "images/Yamaha xto Japan 2025/Yamaha-XTO-450hp-9.jpeg", alt: "Yamaha XTO engine full view" },
        { url: "images/Yamaha xto Japan 2025/Yamaha-XTO-side-shot.png", alt: "Yamaha XTO engine profile" },
        { url: "images/Yamaha xto Japan 2025/Yamahai4andv6sidebyside.webp", alt: "Yamaha XTO engine comparison" }
      ],
      priceFOB: 4800,
      priceCIF: 5200,
      currency: "USD",
      stockNo: "APP-COMP-XTO-001",
      listedAt: "2025-03-31",
      description: {
        en: "Yamaha XTO high-performance marine engine. Powerful and reliable for professional use.",
        ja: "ヤマハXTO高性能マリンエンジン。プロ用の高出力・高信頼性。"
      },
      specs: {
        make: "Yamaha", model: "XTO",
        condition: "Used",
        steering: "N/A"
      },
      condition: {
        grade: "A",
        accidentHistory: false,
        notes: { en: "Used condition, serviced, high performance.", ja: "使用済み、整備済み、高性能。" }
      },
      shipping: { readyDate: "2025-04-10", loadingPort: "Yokohama", method: ["Container"] },
      tags: ["component","yamaha","xto","marine-engine","high-performance"]
    }

  ] // end parts

}; // end DB

// Utility functions for formatting
(function() {
  if (!window.DB.utils) {
    window.DB.utils = {
      formatPrice: function(price, currency) {
        currency = currency || "USD";
        if (price == null || isNaN(price)) return "POA";
        return currency + " " + price.toLocaleString();
      },
      formatMileage: function(mileage) {
        if (mileage == null || isNaN(mileage)) return "";
        return mileage.toLocaleString() + " km";
      }
    };
  }
  
  if (!window.DB.partsUtils) {
    window.DB.partsUtils = {
      formatPrice: function(price, currency) {
        currency = currency || "USD";
        if (price == null || isNaN(price)) return "POA";
        return currency + " " + price.toLocaleString();
      }
    };
  }
})();
