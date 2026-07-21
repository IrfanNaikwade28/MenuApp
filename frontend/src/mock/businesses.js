export const businesses = [
  {
    id: 1,
    slug: "chingari",
    type: "restaurant",

    name: "Chingari",
    tagline: "Authentic Indian & Chinese Cuisine",

    rating: 4.3,
    reviewCount: 1284,

    coverImage: "/images/businesses/chingari.png",

    address: {
      area: "Bund Garden Road",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001",
      full: "Sheraton Grand Pune Bund Garden Road, Pune"
    },

    contact: {
      phone: "+91 9876543210",
      email: "hello@chingari.com"
    },

    location: {
      lat: 18.5314,
      lng: 73.8745
    },

    openingHours: {
      open: "11:00 AM",
      close: "12:00 AM",
      isOpen: true
    },

    cuisines: [
      "North Indian",
      "Chinese",
    ],

    features: [
      "Authentic Taste Since 2015",
      "Valet Parking",
      "Family Friendly"
    ]
  },

  {
    id: 2,
    slug: "bombon",
    type: "cafe",

    name: "Bombon",
    tagline: "Coffee • Desserts • Snacks",

    rating: 4.6,
    reviewCount: 824,

    coverImage: "/images/businesses/bombon.png",

    address: {
      area: "NIBM Road",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411048",
      full: "NIBM Road, Pune"
    },

    contact: {
      phone: "+91 9988776655",
      email: "hello@bombon.com"
    },

    location: {
      lat: 18.479,
      lng: 73.902
    },

    openingHours: {
      open: "10:00 AM",
      close: "11:00 PM",
      isOpen: true
    },

    cuisines: [
      "Coffee",
      "Fast Food",
      "Desserts"
    ],

    features: [
      "Premium Coffee",
      "Free WiFi",
      "Indoor Seating"
    ]
  },

  {
    id: 3,
    slug: "ayodhya-veg",
    type: "restaurant",

    name: "Ayodhya Veg",
    tagline: "Pure Veg Family Restaurant",

    rating: 4.5,
    reviewCount: 650,

    coverImage: "/images/businesses/ayodhya.png",

    address: {
      area: "Karve Nagar",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411052",
      full: "Karve Nagar, Pune"
    },

    contact: {
      phone: "+91 9765432100",
      email: "info@ayodhyaveg.com"
    },

    location: {
      lat: 18.507,
      lng: 73.807
    },

    openingHours: {
      open: "11:00 AM",
      close: "11:30 PM",
      isOpen: true
    },

    cuisines: [
      "North Indian",
      "South Indian",
      "Chinese"
    ],

    features: [
      "Pure Veg",
      "Family Seating",
      "Parking Available"
    ]
  },

  {
    id: 4,
    slug: "artisan-bakery",
    type: "bakery",

    name: "Artisan Bakery",
    tagline: "Fresh Bread • Cakes • Pastries",

    rating: 4.8,
    reviewCount: 531,

    coverImage: "/images/businesses/chingari.png",

    address: {
      area: "Koregaon Park",
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001",
      full: "Koregaon Park, Pune"
    },

    contact: {
      phone: "+91 9123456789",
      email: "contact@artisanbakery.com"
    },

    location: {
      lat: 18.536,
      lng: 73.893
    },

    openingHours: {
      open: "08:00 AM",
      close: "09:00 PM",
      isOpen: true
    },

    cuisines: [
      "Bakery",
      "Desserts",
      "Coffee"
    ],

    features: [
      "Freshly Baked",
      "Custom Cakes",
      "Takeaway"
    ]
  }
];


export const cuisines = [
  {
    id: 1,
    name: "North Indian",
    icon: "/images/categories/north-indian.png",
  },
  {
    id: 2,
    name: "South Indian",
    icon: "/images/categories/south-indian.png",
  },
  {
    id: 3,
    name: "Chinese",
    icon: "/images/categories/chinese.png",
  },
  {
    id: 4,
    name: "Fast Food",
    icon: "/images/categories/fast-food.png",
  },
  {
    id: 5,
    name: "Coffee",
    icon: "/images/categories/coffee.png",
  },
  {
    id: 6,
    name: "Bakery",
    icon: "/images/categories/bakery.png",
  },
];
