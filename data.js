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

// ── Parts & Components ────────────────────────────────────────────────
// New inventory: engines, vehicle bodies, and components
window.DB.parts = [
  {
    id: "4hg1-engine",
    category: "engine",
    title: "4HG1 engine 1995 - 2004",
    brand: "Isuzu",
    type: "diesel-engine",
    status: "available",
    featuredImage: "images/4HG1 engine 1995 - 2004/504860447_17947587725993989_2928188744439035256_n.jpg",
    images: [
      { url: "images/4HG1 engine 1995 - 2004/504860447_17947587725993989_2928188744439035256_n.jpg", alt: "4HG1 Engine assembly" },
      { url: "images/4HG1 engine 1995 - 2004/348233236_266025382555419_5892199277079779542_n.jpg", alt: "4HG1 Engine front" },
      { url: "images/4HG1 engine 1995 - 2004/503862577_3134582263372435_5866893020462031082_n.jpg", alt: "4HG1 Engine side" },
      { url: "images/4HG1 engine 1995 - 2004/504474412_17947587737993989_6275488952093681318_n.jpg", alt: "4HG1 Engine detail" },
      { url: "images/4HG1 engine 1995 - 2004/505295325_3134582260039102_8133374230132411640_n.jpg", alt: "4HG1 Engine close-up" }
    ],
    priceFOB: 12000,
    priceCIF: 12800,
    currency: "USD",
    stockNo: "APP-4HG1-001",
    listedAt: "2025-03-01",
    description: {
      en: "Isuzu 4HG1 4-cylinder diesel engine. 3.0L, 130hp. Complete with turbocharger, injectors, and mounting hardware. Ideal for light trucks and commercial vehicles.",
      ja: "いすゞ4HG1 4気筒ディーゼルエンジン。3.0L、130馬力。ターボチャージャー、インジェクター、マウントハードウェア付き。小型トラック・商用車に最適。"
    },
    specs: {
      displacement: "3.0L",
      cylinders: 4,
      power: "130hp",
      torque: "280Nm",
      fuelType: "Diesel",
      condition: "Reconditioned",
      mounting: "Standard Isuzu pattern"
    },
    tags: ["engine","diesel","isuzu","4hg1","reconditioned"]
  },
  {
    id: "4hf1-engine",
    category: "engine",
    title: "Isuzu 4HF1 engine 1995 - 2004",
    brand: "Isuzu",
    type: "diesel-engine",
    status: "available",
    featuredImage: "images/Isuzu 4hf1 engine 1995 - 2004/PA99369846_b3aecf.jpg",
    images: [
      { url: "images/Isuzu 4hf1 engine 1995 - 2004/PA99369846_b3aecf.jpg", alt: "4HF1 Engine front" },
      { url: "images/Isuzu 4hf1 engine 1995 - 2004/used-engine-1.webp", alt: "4HF1 Engine side" }
    ],
    priceFOB: 14000,
    priceCIF: 15000,
    currency: "USD",
    stockNo: "APP-4HF1-001",
    listedAt: "2025-03-01",
    description: {
      en: "Isuzu 4HF1 4-cylinder diesel engine. 3.0L, 150hp. High torque, fuel-efficient. Complete assembly with turbo, injectors, and accessories.",
      ja: "いすゞ4HF1 4気筒ディーゼルエンジン。3.0L、150馬力。高出力・低燃費。ターボ、インジェクター、アクセサリー付き完全アセンブリ。"
    },
    specs: {
      displacement: "3.0L",
      cylinders: 4,
      power: "150hp",
      torque: "350Nm",
      fuelType: "Diesel",
      condition: "Reconditioned",
      mounting: "Standard Isuzu pattern"
    },
    tags: ["engine","diesel","isuzu","4hf1","reconditioned"]
  },
  {
    id: "r2-engine",
    category: "engine",
    title: "Mazda R2 engine 1995 - 2004",
    brand: "Toyota",
    type: "diesel-engine",
    status: "available",
    featuredImage: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/4223-IMG_2180.JPG",
    images: [
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/4223-IMG_2180.JPG", alt: "R2 Engine front" },
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/480114025_660882939620581_4192916998702719117_n.jpg", alt: "R2 Engine side" },
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/480351002_660882956287246_7596464368082314498_n.jpg", alt: "R2 Engine detail" },
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/480472691_660882959620579_5577445754442029947_n.jpg", alt: "R2 Engine assembly" }
    ],
    priceFOB: 11000,
    priceCIF: 11800,
    currency: "USD",
    stockNo: "APP-R2-001",
    listedAt: "2025-03-01",
    description: {
      en: "Toyota R2 4-cylinder diesel engine. 2.2L, 85hp. Reliable and economical. Complete with turbocharger and mounting kit.",
      ja: "トヨタR2 4気筒ディーゼルエンジン。2.2L、85馬力。信頼性と経済性。ターボチャージャーとマウントキット付き。"
    },
    specs: {
      displacement: "2.2L",
      cylinders: 4,
      power: "85hp",
      torque: "190Nm",
      fuelType: "Diesel",
      condition: "Reconditioned",
      mounting: "Standard Toyota pattern"
    },
    tags: ["engine","diesel","toyota","r2","reconditioned"]
  },
  {
    id: "kz1-engine",
    category: "engine",
    title: "JDM TOYOTA 1KZ-TE 1994 - 2004",
    brand: "Toyota",
    type: "diesel-engine",
    status: "available",
    featuredImage: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499234877_998016585832253_2216577100606014956_n.jpg",
    images: [
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499234877_998016585832253_2216577100606014956_n.jpg", alt: "KZ1 Engine front" },
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499579884_998016512498927_3420590639437566645_n.jpg", alt: "KZ1 Engine side" },
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/499818613_998016589165586_7620017403270350705_n.jpg", alt: "KZ1 Engine detail" },
      { url: "images/JDM TOYOTA 1KZ-TE 1994 - 2004/img_7418.jpg", alt: "KZ1 Engine assembly" }
    ],
    priceFOB: 13000,
    priceCIF: 13900,
    currency: "USD",
    stockNo: "APP-KZ1-001",
    listedAt: "2025-03-01",
    description: {
      en: "Toyota KZ1 4-cylinder diesel engine. 2.8L, 120hp. High torque, excellent for commercial use. Complete assembly with turbo and accessories.",
      ja: "トヨタKZ1 4気筒ディーゼルエンジン。2.8L、120馬力。高出力・商用向けに最適。ターボとアクセサリー付き完全アセンブリ。"
    },
    specs: {
      displacement: "2.8L",
      cylinders: 4,
      power: "120hp",
      torque: "260Nm",
      fuelType: "Diesel",
      condition: "Reconditioned",
      mounting: "Standard Toyota pattern"
    },
    tags: ["engine","diesel","toyota","kz1","reconditioned"]
  },
  {
    id: "toyota-prius-2010-2015",
    category: "vehicle",
    title: "JDM 2010-2015 Toyota Prius",
    brand: "Toyota",
    type: "hybrid-car",
    status: "available",
    featuredImage: "images/JDM 2010-2015 TOYOTA PRIUS/419-IMG_6976.JPG",
    images: [
      { url: "images/JDM 2010-2015 TOYOTA PRIUS/419-IMG_6976.JPG", alt: "Toyota Prius front" },
      { url: "images/JDM 2010-2015 TOYOTA PRIUS/IMG_8272_1024x1024@2x.webp", alt: "Toyota Prius side" },
      { url: "images/JDM 2010-2015 TOYOTA PRIUS/P1130971_1024x1024@2x.webp", alt: "Toyota Prius rear" },
      { url: "images/JDM 2010-2015 TOYOTA PRIUS/P1130972_1024x1024@2x.webp", alt: "Toyota Prius interior" }
    ],
    priceFOB: 8500,
    priceCIF: 9100,
    currency: "USD",
    mileage: 75000,
    stockNo: "APP-TP-2010-001",
    listedAt: "2025-03-01",
    description: {
      en: "Toyota Prius 2010-2015. Hybrid system in excellent condition. Low mileage, full service history. Ideal for eco-conscious buyers and fleet operators.",
      ja: "トヨタプリウス2010-2015。ハイブリッドシステム優れた状態。低走行、完全なサービス履歴。環境意識の高いバイヤー・フリートオペレーターに最適。"
    },
    specs: {
      year: "2010-2015",
      make: "Toyota",
      model: "Prius",
      engineCC: 1800,
      engineType: "2ZR-FXE Hybrid",
      transmission: "CVT",
      fuelType: "Hybrid",
      color: "Silver",
      doors: 5,
      seats: 5,
      condition: "Grade 4",
      steering: "Right Hand Drive"
    },
    tags: ["hybrid","toyota","prius","low-mileage","eco-friendly"]
  },
  {
    id: "toyota-prius-abs-unit",
    category: "component",
    title: "Toyota Prius ABS Unit",
    brand: "Toyota",
    type: "brake-system",
    status: "available",
    featuredImage: "images/Toyota prius ABS unit/0000005488_0_bbf7a753-3b11-4358-8769-e1fe3a9717ed.jpg",
    images: [
      { url: "images/Toyota prius ABS unit/0000005488_0_bbf7a753-3b11-4358-8769-e1fe3a9717ed.jpg", alt: "ABS Unit front" },
      { url: "images/Toyota prius ABS unit/296283-46.jpg", alt: "ABS Unit side" },
      { url: "images/Toyota prius ABS unit/189324101_5444264678980389_2804083464902788047_n.jpg", alt: "ABS Unit detail" }
    ],
    priceFOB: 800,
    priceCIF: 860,
    currency: "USD",
    stockNo: "APP-ABS-001",
    listedAt: "2025-03-01",
    description: {
      en: "Toyota Prius ABS control unit. Complete with sensors and wiring harness. Tested and verified. Direct replacement for failed units.",
      ja: "トヨタプリウスABSコントロールユニット。センサーと配線ハーネス付き。テスト済み・検証済み。故障ユニットの直接交換用。"
    },
    specs: {
      compatibility: "Toyota Prius 2010-2015",
      condition: "Tested",
      warranty: "3 months",
      mounting: "Standard Prius pattern"
    },
    tags: ["abs","brake","toyota","prius","replacement"]
  },
  {
    id: "toyota-prius-doors-fenders",
    category: "body",
    title: "Toyota Prius All Doors and Fenders",
    brand: "Toyota",
    type: "body-parts",
    status: "available",
    featuredImage: "images/Toyota prius all doors and fenders/474066276_122132200382532065_5960039564783661684_n.jpg",
    images: [
      { url: "images/Toyota prius all doors and fenders/474066276_122132200382532065_5960039564783661684_n.jpg", alt: "Doors and fenders set" },
      { url: "images/Toyota prius all doors and fenders/474368820_122132200238532065_1040089637055762160_n.jpg", alt: "Door detail" },
      { url: "images/Toyota prius all doors and fenders/474550541_122132200334532065_1801893086559769445_n.jpg", alt: "Fender detail" }
    ],
    priceFOB: 2500,
    priceCIF: 2680,
    currency: "USD",
    stockNo: "APP-DOORS-001",
    listedAt: "2025-03-01",
    description: {
      en: "Complete set of Toyota Prius doors and fenders. All panels in excellent condition, no dents or rust. Includes front fenders, rear doors, front doors, and rear quarter panels.",
      ja: "完全なトヨタプリウスドアとフェンダーセット。すべてのパネル優れた状態、へこみや錆なし。フロントフェンダー、リアドア、フロントドア、リアクォーターパネル付き。"
    },
    specs: {
      compatibility: "Toyota Prius 2010-2015",
      condition: "Excellent",
      finish: "Original paint",
      quantity: "Complete set"
    },
    tags: ["doors","fenders","body","toyota","prius"]
  },
  {
    id: "toyota-prius-buffers",
    category: "body",
    title: "Toyota Prius Buffers",
    brand: "Toyota",
    type: "body-parts",
    status: "available",
    featuredImage: "images/Toyota prius buffers/489845244_122203243904175043_2009985342568679090_n.jpg",
    images: [
      { url: "images/Toyota prius buffers/489845244_122203243904175043_2009985342568679090_n.jpg", alt: "Front buffer" },
      { url: "images/Toyota prius buffers/493946651_1009429334615231_1330881933758536303_n.jpg", alt: "Rear buffer" },
      { url: "images/Toyota prius buffers/494689265_1009429267948571_7380655083325235631_n.jpg", alt: "Buffer detail" }
    ],
    priceFOB: 300,
    priceCIF: 320,
    currency: "USD",
    stockNo: "APP-BUFFERS-001",
    listedAt: "2025-03-01",
    description: {
      en: "Toyota Prius front and rear buffers. Original equipment, excellent condition. Direct fit replacement.",
      ja: "トヨタプリウスフロント・リアバッファーセット。純正部品、優れた状態。直接交換用。"
    },
    specs: {
      compatibility: "Toyota Prius 2010-2015",
      condition: "Excellent",
      finish: "Original paint"
    },
    tags: ["buffers","bumper","toyota","prius"]
  },
  {
    id: "isuzu-dump-cabins",
    category: "body",
    title: "Isuzu Dump Cabins",
    brand: "Isuzu",
    type: "truck-body",
    status: "available",
    featuredImage: "images/Isuzu dump cabins/Double-Row-Cabin-Isuzu-Mini-Dump-Truck-with-3-Cbm-Dump-Box.avif",
    images: [
      { url: "images/Isuzu dump cabins/Double-Row-Cabin-Isuzu-Mini-Dump-Truck-with-3-Cbm-Dump-Box.avif", alt: "Dump cabin front" },
      { url: "images/Isuzu dump cabins/Isuzu-dump-truck.jpg", alt: "Dump cabin side" }
    ],
    priceFOB: 6500,
    priceCIF: 6960,
    currency: "USD",
    stockNo: "APP-DUMP-001",
    listedAt: "2025-03-01",
    description: {
      en: "Isuzu dump truck cabins. Complete with wiring harness, dashboard, and mounting brackets. Compatible with Isuzu Elf and Forward chassis.",
      ja: "いすゞダンプトラックキャビン。配線ハーネス、ダッシュボード、マウントブラケット付き。いすゞエルフ・フォワードシャーシ互換。"
    },
    specs: {
      compatibility: "Isuzu Elf/Forward",
      condition: "Excellent",
      finish: "Original paint",
      includes: ["Wiring harness","Dashboard","Mounting brackets"]
    },
    tags: ["cabins","dump","isuzu","truck-body"]
  },
  {
    id: "isuzu-back-tray-pt",
    category: "body",
    title: "Isuzu Back Tray with PTO",
    brand: "Isuzu",
    type: "truck-body",
    status: "available",
    featuredImage: "images/Isuzu back tray with PTO/D-Max_RT1_roller_cover_4-resized_1024x1024_2x_34fb0e86-0bfa-4250-a415-8d8b59cf3598_1024x1024@2x.webp",
    images: [
      { url: "images/Isuzu back tray with PTO/D-Max_RT1_roller_cover_4-resized_1024x1024_2x_34fb0e86-0bfa-4250-a415-8d8b59cf3598_1024x1024@2x.webp", alt: "Back tray with PTO" },
      { url: "images/Isuzu back tray with PTO/DMAXROLLER-02462_1024x1024@2x.webp", alt: "PTO detail" },
      { url: "images/Isuzu back tray with PTO/DMAXROLLER-02470_1024x1024@2x.webp", alt: "Tray detail" }
    ],
    priceFOB: 8500,
    priceCIF: 9100,
    currency: "USD",
    stockNo: "APP-TRAY-001",
    listedAt: "2025-03-01",
    description: {
      en: "Isuzu back tray with Power Take-Off (PTO) system. Heavy-duty construction, suitable for dump and utility applications. Includes hydraulic pump and mounting hardware.",
      ja: "いすゞバックトレイ・パワーテイクオフ(PTO)システム付き。頑丈な構造、ダンプ・ユーティリティ用途に最適。油圧ポンプとマウントハードウェア付き。"
    },
    specs: {
      compatibility: "Isuzu Elf/Forward",
      condition: "Excellent",
      material: "High-strength steel",
      includes: ["PTO system","Hydraulic pump","Mounting hardware"]
    },
    tags: ["tray","pto","isuzu","truck-body","hydraulic"]
  },
  {
    id: "isuzu-differential-hub",
    category: "component",
    title: "Isuzu Differential & Pine Hub",
    brand: "Isuzu",
    type: "drivetrain",
    status: "available",
    featuredImage: "images/Isuzu dump cabins/Isuzu-dump-truck.jpg",
    images: [
      { url: "images/Isuzu dump cabins/Isuzu-dump-truck.jpg", alt: "Differential front" },
      { url: "images/Isuzu dump cabins/Double-Row-Cabin-Isuzu-Mini-Dump-Truck-with-3-Cbm-Dump-Box.avif", alt: "Pine hub detail" },
      { url: "images/Isuzu back tray with PTO/DMAXROLLER-02462_1024x1024@2x.webp", alt: "Differential side" }
    ],
    priceFOB: 2200,
    priceCIF: 2360,
    currency: "USD",
    stockNo: "APP-DIFF-001",
    listedAt: "2025-03-01",
    description: {
      en: "Isuzu differential assembly with pine hub. Complete with gears, bearings, and seals. Tested and ready for installation.",
      ja: "いすゞディファレンシャルアセンブリ・パインハブ付き。ギア、ベアリング、シール付き。テスト済み・取付可能。"
    },
    specs: {
      compatibility: "Isuzu Elf/Forward",
      condition: "Reconditioned",
      includes: ["Gears","Bearings","Seals"],
      warranty: "6 months"
    },
    tags: ["differential","drivetrain","isuzu","reconditioned"]
  },
  {
    id: "lorry-bodies",
    category: "body",
    title: "All Type of Lorry Bodies",
    brand: "Various",
    type: "truck-body",
    status: "available",
    featuredImage: "images/All type of Lorry Bodies/01_im04.jpg",
    images: [
      { url: "images/All type of Lorry Bodies/01_im04.jpg", alt: "Lorry body front" },
      { url: "images/All type of Lorry Bodies/01_im06.jpg", alt: "Lorry body side" },
      { url: "images/All type of Lorry Bodies/01_im07.jpg", alt: "Lorry body rear" },
      { url: "images/All type of Lorry Bodies/02_im04.jpg", alt: "Lorry body detail" }
    ],
    priceFOB: 5000,
    priceCIF: 5360,
    currency: "USD",
    stockNo: "APP-LORRY-001",
    listedAt: "2025-03-01",
    description: {
      en: "Various types of lorry bodies available. Dropside, flatbed, box, and custom configurations. Heavy-duty construction, suitable for all cargo types.",
      ja: "さまざまなタイプのロリーボディーを提供。ドロップサイド、フラットベッド、ボックス、カスタム構成可能。頑丈な構造、すべての貨物タイプに適応。"
    },
    specs: {
      types: ["Dropside","Flatbed","Box","Custom"],
      material: "High-strength steel",
      condition: "New/Used",
      customization: "Available"
    },
    tags: ["lorry","body","truck","custom","heavy-duty"]
  },
  {
    id: "yamaha-marine-engines-2015-2025",
    category: "engine",
    title: "Yamaha Marine Engines 2015 - 2025",
    brand: "Yamaha",
    type: "marine-engine",
    status: "available",
    featuredImage: "images/Yamaha Marine Engines 2015 - 2025/9123732_20231106103619967_1_LARGE.jpg",
    images: [
      { url: "images/Yamaha Marine Engines 2015 - 2025/9123732_20231106103619967_1_LARGE.jpg", alt: "Marine engine front" },
      { url: "images/Yamaha Marine Engines 2015 - 2025/487352398_1460030848636411_6319481911279011054_n.jpg", alt: "Marine engine side" },
      { url: "images/Yamaha Marine Engines 2015 - 2025/487451707_1460030825303080_5762299983795034990_n.jpg", alt: "Marine engine detail" }
    ],
    priceFOB: 15000,
    priceCIF: 16050,
    currency: "USD",
    stockNo: "APP-YME-001",
    listedAt: "2025-03-01",
    description: {
      en: "Yamaha marine engines 2015-2025. Range from 25hp to 425hp. Outboard and inboard options. Excellent condition, full service history.",
      ja: "ヤマハマリンエンジン2015-2025。25馬力から425馬力まで。舷外機・舷内機オプション。優れた状態、完全なサービス履歴。"
    },
    specs: {
      range: "25hp - 425hp",
      types: ["Outboard","Inboard"],
      condition: "Excellent",
      warranty: "Available"
    },
    tags: ["marine","yamaha","engine","outboard","inboard"]
  },
  {
    id: "yamaha-xto-japan-2025",
    category: "engine",
    title: "Yamaha XTO Japan 2025",
    brand: "Yamaha",
    type: "marine-engine",
    status: "available",
    featuredImage: "images/Yamaha xto Japan 2025/Yamaha-XTO-450hp-9.jpeg",
    images: [
      { url: "images/Yamaha xto Japan 2025/Yamaha-XTO-450hp-9.jpeg", alt: "XTO engine front" },
      { url: "images/Yamaha xto Japan 2025/Yamaha-XTO-side-shot.png", alt: "XTO engine side" },
      { url: "images/Yamaha xto Japan 2025/yamaha-300hp-reverse-thrust.jpg", alt: "XTO engine detail" }
    ],
    priceFOB: 28000,
    priceCIF: 29960,
    currency: "USD",
    stockNo: "APP-XTO-001",
    listedAt: "2025-03-01",
    description: {
      en: "Yamaha XTO 2025 model. 425hp V8 outboard engine. Latest technology, fuel-efficient, low emissions. Perfect for high-performance boats.",
      ja: "ヤマハXTO 2025モデル。425馬力V8舷外機。最新技術、低燃費、低排出ガス。高性能ボートに最適。"
    },
    specs: {
      horsepower: "425hp",
      engineType: "V8",
      fuelType: "Petrol",
      condition: "New",
      warranty: "3 years"
    },
    tags: ["xto","yamaha","marine","v8","425hp","new"]
  },
  {
    id: "yanmar-6czas-gt-630hp",
    category: "engine",
    title: "YANMAR 6CZAS-GT 630hp(2.03)",
    brand: "Yanmar",
    type: "marine-engine",
    status: "available",
    featuredImage: "images/YANMAR 6CZAS-GT 630hp(2.03)/00006169-1773897190-0359.jpg",
    images: [
      { url: "images/YANMAR 6CZAS-GT 630hp(2.03)/00006169-1773897190-0359.jpg", alt: "Yanmar engine front" },
      { url: "images/YANMAR 6CZAS-GT 630hp(2.03)/00006169-1773897191-0327.jpg", alt: "Yanmar engine side" },
      { url: "images/YANMAR 6CZAS-GT 630hp(2.03)/00006169-1773897192-0041.jpg", alt: "Yanmar engine detail" }
    ],
    priceFOB: 45000,
    priceCIF: 48150,
    currency: "USD",
    stockNo: "APP-YANMAR-630-001",
    listedAt: "2025-03-01",
    description: {
      en: "Yanmar 6CZAS-GT 630hp marine diesel engine. 2.03:1 reduction gear. Industrial-grade reliability, suitable for commercial vessels and large yachts.",
      ja: "ヤンマー6CZAS-GT 630馬力マリンディーゼルエンジン。2.03:1減速ギア。産業グレードの信頼性、商用船・大型ヨットに最適。"
    },
    specs: {
      horsepower: "630hp",
      displacement: "18.0L",
      cylinders: 6,
      fuelType: "Diesel",
      reductionRatio: "2.03:1",
      condition: "Reconditioned",
      warranty: "12 months"
    },
    tags: ["yanmar","marine","diesel","630hp","commercial","reconditioned"]
  },
  {
    id: "yanmar-6chk-dt-230hp",
    category: "engine",
    title: "YANMAR 6CHK-DT 230hp(3.53)",
    brand: "Yanmar",
    type: "marine-engine",
    status: "available",
    featuredImage: "images/YANMAR 6CHK-DT 230hp (3.53)/00006144-1772425592-0386.jpg",
    images: [
      { url: "images/YANMAR 6CHK-DT 230hp (3.53)/00006144-1772425590-0544.jpg", alt: "Yanmar engine front" },
      { url: "images/YANMAR 6CHK-DT 230hp (3.53)/00006144-1772425591-0325.jpg", alt: "Yanmar engine side" },
      { url: "images/YANMAR 6CHK-DT 230hp (3.53)/00006144-1772425592-0386.jpg", alt: "Yanmar engine detail" }
    ],
    priceFOB: 22000,
    priceCIF: 23540,
    currency: "USD",
    stockNo: "APP-YANMAR-230-001",
    listedAt: "2025-03-01",
    description: {
      en: "Yanmar 6CHK-DT 230hp marine diesel engine. 3.53:1 reduction gear. Compact design, excellent fuel economy. Ideal for fishing boats and work vessels.",
      ja: "ヤンマー6CHK-DT 230馬力マリンディーゼルエンジン。3.53:1減速ギア。コンパクト設計、優れた燃費。漁船・作業船に最適。"
    },
    specs: {
      horsepower: "230hp",
      displacement: "7.7L",
      cylinders: 6,
      fuelType: "Diesel",
      reductionRatio: "3.53:1",
      condition: "Reconditioned",
      warranty: "12 months"
    },
    tags: ["yanmar","marine","diesel","230hp","fishing","reconditioned"]
  },
  {
    id: "tyre-changing-machine",
    category: "equipment",
    title: "Tyre Changing Machine",
    brand: "Various",
    type: "workshop-equipment",
    status: "available",
    featuredImage: "images/Tyre changing machine japan/1451619406bf5c26723de6edb59c79fb9f9568794a.jpg",
    images: [
      { url: "images/Tyre changing machine japan/1451619406bf5c26723de6edb59c79fb9f9568794a.jpg", alt: "Tyre changer front" },
      { url: "images/Tyre changing machine japan/14516192765c3bc0c0ef81cc6b6468a26c2fe66d47.jpg", alt: "Tyre changer side" },
      { url: "images/Tyre changing machine japan/semi-automatic-tyre-changing-m-20250409122936784.jpeg", alt: "Tyre changer detail" }
    ],
    priceFOB: 1800,
    priceCIF: 1926,
    currency: "USD",
    stockNo: "APP-TYRE-001",
    listedAt: "2025-03-01",
    description: {
      en: "Professional tyre changing machine. Suitable for passenger cars, light trucks, and SUVs. Complete with mounting/demounting tools and safety features.",
      ja: "プロフェッショナルタイヤ交換機。乗用車、小型トラック、SUVに適応。取付/取外しツールと安全機能付き。"
    },
    specs: {
      compatibility: "Passenger cars, light trucks, SUVs",
      power: "Electric/Hydraulic",
      condition: "Excellent",
      warranty: "6 months"
    },
    tags: ["tyre","changer","workshop","equipment"]
  },
  {
    id: "air-compressor",
    category: "equipment",
    title: "Air Compressor",
    brand: "Various",
    type: "workshop-equipment",
    status: "available",
    featuredImage: "images/AIR COMPRESSOR/1.jpg",
    images: [
      { url: "images/AIR COMPRESSOR/1.jpg", alt: "Air compressor front" },
      { url: "images/AIR COMPRESSOR/2.jpg", alt: "Air compressor side" },
      { url: "images/AIR COMPRESSOR/3.jpg", alt: "Air compressor detail" }
    ],
    priceFOB: 1200,
    priceCIF: 1284,
    currency: "USD",
    stockNo: "APP-COMP-001",
    listedAt: "2025-03-01",
    description: {
      en: "Industrial air compressor. 10HP, 100L tank. Suitable for workshops, garages, and industrial applications. Complete with pressure regulator and safety valve.",
      ja: "産業用エアーコンプレッサー。10馬力、100Lタンク。作業場、ガレージ、産業用途に適応。圧力レギュレーターと安全弁付き。"
    },
    specs: {
      power: "10HP",
      tank: "100L",
      pressure: "8 bar",
      condition: "Excellent",
      warranty: "6 months"
    },
    tags: ["compressor","air","workshop","industrial"]
  },
  {
    id: "lathe-machines",
    category: "equipment",
    title: "Lath Machines",
    brand: "Various",
    type: "workshop-equipment",
    status: "available",
    featuredImage: "images/Lath Machines/MS850G-3.jpg",
    images: [
      { url: "images/Lath Machines/MS850G-3.jpg", alt: "Lathe machine front" },
      { url: "images/Lath Machines/OKUMA-LATHE-LT-1969YEAR-1.jpg", alt: "Lathe machine side" },
      { url: "images/Lath Machines/okuma-lathe-machine-923.jpg", alt: "Lathe machine detail" }
    ],
    priceFOB: 3500,
    priceCIF: 3745,
    currency: "USD",
    stockNo: "APP-LATHE-001",
    listedAt: "2025-03-01",
    description: {
      en: "Precision lathe machines. Various sizes available. Suitable for metalworking, automotive, and general machining. Complete with tooling and accessories.",
      ja: "精密旋盤機。さまざまなサイズを提供。金属加工、自動車、一般機械加工に適応。工具とアクセサリー付き。"
    },
    specs: {
      sizes: ["Small","Medium","Large"],
      power: "Electric",
      condition: "Excellent",
      warranty: "12 months"
    },
    tags: ["lathe","machine","metalworking","precision"]
  },
  {
    id: "car-hydraulic-lifting-system",
    category: "equipment",
    title: "Car Hydraulic Lifting System",
    brand: "Various",
    type: "workshop-equipment",
    status: "available",
    featuredImage: "images/Car Hydrolic Lifting System/1.avif",
    images: [
      { url: "images/Car Hydrolic Lifting System/1.avif", alt: "Lifting system front" },
      { url: "images/Car Hydrolic Lifting System/2.avif", alt: "Lifting system side" },
      { url: "images/Car Hydrolic Lifting System/3.avif", alt: "Lifting system detail" }
    ],
    priceFOB: 3500,
    priceCIF: 3745,
    currency: "USD",
    stockNo: "APP-LIFT-001",
    listedAt: "2025-03-01",
    description: {
      en: "Car hydraulic lifting system. 2-post design, 3.5-ton capacity. Complete with safety locks and hydraulic pump. Ideal for automotive workshops and garages.",
      ja: "自動車用油圧リフティングシステム。2ポスト設計、3.5トン容量。安全ロックと油圧ポンプ付き。自動車作業場・ガレージに最適。"
    },
    specs: {
      capacity: "3.5 tons",
      type: "2-post hydraulic",
      power: "Hydraulic",
      condition: "Excellent",
      warranty: "12 months"
    },
    tags: ["lifting","hydraulic","workshop","automotive"]
  },
  {
    id: "mazda-titan-cabins",
    category: "body",
    title: "Mazda Titan Cabins",
    brand: "Mazda",
    type: "truck-body",
    status: "available",
    featuredImage: "images/Mazda Titan cabins/1.jpg",
    images: [
      { url: "images/Mazda Titan cabins/1.jpg", alt: "Titan cabin front" },
      { url: "images/Mazda Titan cabins/2.jpg", alt: "Titan cabin side" },
      { url: "images/Mazda Titan cabins/3.jpg", alt: "Titan cabin interior" }
    ],
    priceFOB: 4500,
    priceCIF: 4820,
    currency: "USD",
    stockNo: "APP-TITAN-001",
    listedAt: "2025-03-01",
    description: {
      en: "Mazda Titan truck cabins. Complete with wiring harness, dashboard, and mounting brackets. Compatible with Mazda Titan chassis.",
      ja: "マツダタイタントラックキャビン。配線ハーネス、ダッシュボード、マウントブラケット付き。マツダタイタンシャーシ互換。"
    },
    specs: {
      compatibility: "Mazda Titan",
      condition: "Excellent",
      finish: "Original paint",
      includes: ["Wiring harness","Dashboard","Mounting brackets"]
    },
    tags: ["cabins","mazda","titan","truck-body"]
  },
  {
    id: "mitsubishi-canter-cabins",
    category: "body",
    title: "Mitsubishi Canter Cabins",
    brand: "Mitsubishi",
    type: "truck-body",
    status: "available",
    featuredImage: "images/Mitsubishi Canter Cabins/1.jpg",
    images: [
      { url: "images/Mitsubishi Canter Cabins/1.jpg", alt: "Canter cabin front" },
      { url: "images/Mitsubishi Canter Cabins/2.jpg", alt: "Canter cabin side" },
      { url: "images/Mitsubishi Canter Cabins/3.jpg", alt: "Canter cabin interior" }
    ],
    priceFOB: 5200,
    priceCIF: 5570,
    currency: "USD",
    stockNo: "APP-CANTER-001",
    listedAt: "2025-03-01",
    description: {
      en: "Mitsubishi Canter truck cabins. Complete with wiring harness, dashboard, and mounting brackets. Compatible with Mitsubishi Canter chassis.",
      ja: "三菱キャンタートラックキャビン。配線ハーネス、ダッシュボード、マウントブラケット付き。三菱キャンターシャーシ互換。"
    },
    specs: {
      compatibility: "Mitsubishi Canter",
      condition: "Excellent",
      finish: "Original paint",
      includes: ["Wiring harness","Dashboard","Mounting brackets"]
    },
    tags: ["cabins","mitsubishi","canter","truck-body"]
  }
];

// ── Parts Utilities ────────────────────────────────────────────────
window.DB.partsUtils = {
  getByCategory: (category) => window.DB.parts.filter(p => p.category === category),
  getByBrand: (brand) => window.DB.parts.filter(p => p.brand === brand),
  getByType: (type) => window.DB.parts.filter(p => p.type === type),
  getAvailable: () => window.DB.parts.filter(p => p.status === "available"),
  formatPrice: (n) => n ? `USD ${n.toLocaleString()}` : "POA",
  getCategories: () => [...new Set(window.DB.parts.map(p => p.category))],
  getBrands: () => [...new Set(window.DB.parts.map(p => p.brand))]
};

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
