// data.js — central inventory & settings
window.DB = {
  company: "APP International",
  email: "appinternational@gmail.com",
  phone: "+81 80-7313-6728",
  address: "Chiba-ken, Funabashi-shi, Komuro-cho 1112-13, Japan",

  socials: {
    facebook: "https://facebook.com/YOURPAGE",
    instagram: "https://instagram.com/YOURPAGE",
    youtube: "https://youtube.com/@YOURCHANNEL",
    whatsapp: "https://wa.me/818073136728"
  },

  brands: ["Toyota", "Nissan", "Honda", "Hitachi", "Kobelco"],

  vehicles: [
    {
      id: "toyota-aqua-2017",
      brand: "Toyota",
      type: "car",
      title: "Toyota Aqua 2017",
      img: "images/toyota-aqua.jpg",
      price: "$6,200 CIF",
      mileage: "65,000 km",
      specs: {
        year: "2017",
        engine: "1.5L Hybrid",
        transmission: "Automatic",
        color: "Pearl White",
        condition: "Grade 4.5"
      }
    },
    {
      id: "nissan-note-2016",
      brand: "Nissan",
      type: "car",
      title: "Nissan Note 2016",
      img: "images/nissan-note.jpg",
      price: "$5,800 CIF",
      mileage: "72,000 km",
      specs: {
        year: "2016",
        engine: "1.2L Petrol",
        transmission: "Automatic",
        color: "Silver",
        condition: "Grade 4"
      }
    },
    {
      id: "honda-fit-2018",
      brand: "Honda",
      type: "car",
      title: "Honda Fit 2018",
      img: "images/honda-fit.jpg",
      price: "$6,700 CIF",
      mileage: "60,000 km",
      specs: {
        year: "2018",
        engine: "1.3L Petrol",
        transmission: "Automatic",
        color: "Blue",
        condition: "Grade 4.5"
      }
    },
    {
      id: "hitachi-zx85us",
      brand: "Hitachi",
      type: "excavator",
      title: "Hitachi ZX85US",
      img: "images/hitachi-zx85us.jpg",
      price: "$27,000 FOB",
      specs: {
        year: "2015",
        engine: "Isuzu 4JJ1",
        weight: "8.5 tons",
        condition: "Used, Good Condition"
      }
    },
    {
      id: "kobelco-sk210",
      brand: "Kobelco",
      type: "excavator",
      title: "Kobelco SK210",
      img: "images/kobelco-sk210.jpg",
      price: "$34,000 FOB",
      specs: {
        year: "2016",
        engine: "HINO J05E",
        weight: "21 tons",
        condition: "Used, Excellent Condition"
      }
    }
  ]
};
