<script>
// =======================
// APP International Data
// =======================
window.DB = {
  vehicles: [
    {
      id: "toyota-aqua-2018",
      type: "car",
      brand: "Toyota",
      title: "Toyota Aqua 2018",
      year: 2018,
      mileage: "45,000 km",
      price: "$3,200",
      img: "images/2018 Toyota Aqua Hybrid (Prius C).jpg",
      specs: {
        Engine: "1.5L Hybrid",
        Transmission: "Automatic",
        Fuel: "Hybrid",
        Seats: "5",
        Color: "Silver",
      },
      description:
        "Reliable hybrid hatchback with excellent fuel economy. Japan domestic market unit, well maintained.",
      gallery: [
        "images/2018 Toyota Aqua Hybrid (Prius C).jpg"
      ]
    },
    {
      id: "nissan-note-2018",
      type: "car",
      brand: "Nissan",
      title: "Nissan Note 2018",
      year: 2018,
      mileage: "38,000 km",
      price: "$3,800",
      img: "images/🚗 2018 Nissan Note.jpg",
      specs: {
        Engine: "1.2L Petrol",
        Transmission: "Automatic",
        Seats: "5",
        Color: "White",
      },
      description: "Compact hatchback with roomy cabin and smooth ride.",
      gallery: ["images/🚗 2018 Nissan Note.jpg"]
    },
    {
      id: "honda-fit-2019",
      type: "car",
      brand: "Honda",
      title: "Honda Fit 2019",
      year: 2019,
      mileage: "29,000 km",
      price: "$4,200",
      img: "images/ホンダ・フィットRS Honda SENSING 内装・外装など35枚 【画像・写真】 - webCG.jpg",
      specs: {
        Engine: "1.3L Petrol",
        Transmission: "Automatic",
        Seats: "5",
        Color: "Black",
      },
      description: "Low mileage, clean interior, Honda Sensing equipped.",
      gallery: ["images/ホンダ・フィットRS Honda SENSING 内装・外装など35枚 【画像・写真】 - webCG.jpg"]
    },

    // Excavators
    {
      id: "komatsu-pc200-2016",
      type: "excavator",
      brand: "Komatsu",
      title: "Komatsu PC200 (2016)",
      year: 2016,
      price: "$22,500",
      img: "images/Komatsu PC200LC-8 Specs & Dimensions.jpg",
      specs: { 
        OperatingWeight: "20,000 kg", 
        BucketCapacity: "0.8 m³", 
        Engine: "Komatsu SAA6D107E-1" 
      },
      description: "PC200LC-8 class machine, strong hydraulics, good undercarriage.",
      gallery: ["images/Komatsu PC200LC-8 Specs & Dimensions.jpg"]
    },
    {
      id: "hitachi-zx85us-2017",
      type: "excavator",
      brand: "Hitachi",
      title: "Hitachi ZX85US-5 (2017)",
      year: 2017,
      price: "$25,000",
      img: "images/HITACHI ZX85US-5  https___autoline_info_-_sale_mini-diggers_HITACHI-ZX85US-5--15102613115518433600.jpg",
      specs: { 
        OperatingWeight: "8,500 kg", 
        BucketCapacity: "0.28 m³", 
        Engine: "Isuzu 4JJ1X" 
      },
      description: "Short-tail swing mini excavator, tight-space specialist.",
      gallery: ["images/HITACHI ZX85US-5  https___autoline_info_-_sale_mini-diggers_HITACHI-ZX85US-5--15102613115518433600.jpg"]
    },
    {
      id: "kobelco-sk210-2015",
      type: "excavator",
      brand: "Kobelco",
      title: "Kobelco SK210 (2015)",
      year: 2015,
      price: "$21,000",
      img: "images/Kobelco SK200-8 SK210LC-8 Hydraulic Excavator Service Repair Manual PDF.jpg",
      specs: { 
        OperatingWeight: "21,000 kg", 
        BucketCapacity: "0.9 m³", 
        Engine: "HINO J05E" 
      },
      description: "Fuel-efficient SK210LC series with smooth control.",
      gallery: ["images/Kobelco SK200-8 SK210LC-8 Hydraulic Excavator Service Repair Manual PDF.jpg"]
    }
  ],

  // Master brand list
  brands: [
    "Toyota","Nissan","Honda","Mitsubishi","Isuzu","Subaru","Suzuki","Mazda","Daihatsu",
    "Komatsu","Hitachi","Kobelco","CAT","Kubota","Yanmar"
  ]
};
</script>
