export const menus = [
  {
    businessId: 1,
    specialMenu: [
      {
        id: 1,
        name: "Butter Chicken",
        price: 320,
        image: "/images/Menu/DalMakhani.png",
      },
      {
        id: 2,
        name: "Paneer Tikka",
        price: 280,
        image: "/images/Menu/PaneerBiryani.png",
      },
      {
        id: 3,
        name: "Chicken Biryani",
        price: 340,
        image: "/images/Menu/DalMakhani.png",
      },
      {
        id: 4,
        name: "Veg Thali",
        price: 260,
        image: "/images/Menu/PaneerBiryani.png",
      },
    ],

    categories: [
      {
        id: 1,
        name: "Starters",
        items: [
          { id: 101, name: "Paneer Tikka", price: 280 },
          { id: 102, name: "Veg Spring Roll", price: 180 },
          { id: 103, name: "Chicken Lollipop", price: 300 },
          { id: 104, name: "Crispy Corn", price: 170 },
        ],
      },
      {
        id: 2,
        name: "Main Course",
        items: [
          { id: 201, name: "Butter Chicken", price: 320 },
          { id: 202, name: "Kadai Paneer", price: 290 },
          { id: 203, name: "Dal Makhani", price: 240 },
          { id: 204, name: "Mix Veg", price: 220 },
        ],
      },
      {
        id: 3,
        name: "Breads",
        items: [
          { id: 301, name: "Butter Naan", price: 45 },
          { id: 302, name: "Garlic Naan", price: 60 },
          { id: 303, name: "Tandoori Roti", price: 35 },
          { id: 304, name: "Laccha Paratha", price: 65 },
        ],
      },
      {
        id: 4,
        name: "Rice & Biryani",
        items: [
          { id: 401, name: "Veg Biryani", price: 250 },
          { id: 402, name: "Chicken Biryani", price: 340 },
          { id: 403, name: "Jeera Rice", price: 160 },
          { id: 404, name: "Steam Rice", price: 120 },
        ],
      },
      {
        id: 5,
        name: "Desserts",
        items: [
          { id: 501, name: "Gulab Jamun", price: 90 },
          { id: 502, name: "Brownie", price: 140 },
          { id: 503, name: "Ice Cream", price: 120 },
          { id: 504, name: "Rasmalai", price: 110 },
        ],
      },
    ],
  },

  {
    businessId: 2,

    specialMenu: [
      {
        id: 1,
        name: "Cold Coffee",
        price: 180,
        image: "/images/Menu/DalMakhani.png",
      },
      {
        id: 2,
        name: "Red Velvet Cake",
        price: 220,
        image: "/images/Menu/PaneerBiryani.png",
      },
      {
        id: 3,
        name: "Alfredo Pasta",
        price: 260,
        image: "/images/Menu/DalMakhani.png",
      },
    ],

    categories: [
      {
        id: 1,
        name: "Coffee",
        items: [
          { id: 101, name: "Espresso", price: 120 },
          { id: 102, name: "Cappuccino", price: 170 },
          { id: 103, name: "Latte", price: 180 },
          { id: 104, name: "Mocha", price: 200 },
        ],
      },
      {
        id: 2,
        name: "Beverages",
        items: [
          { id: 201, name: "Cold Coffee", price: 180 },
          { id: 202, name: "Oreo Shake", price: 220 },
          { id: 203, name: "Mango Smoothie", price: 200 },
          { id: 204, name: "Virgin Mojito", price: 170 },
        ],
      },
      {
        id: 3,
        name: "Sandwiches",
        items: [
          { id: 301, name: "Veg Sandwich", price: 160 },
          { id: 302, name: "Grilled Cheese", price: 180 },
          { id: 303, name: "Club Sandwich", price: 210 },
          { id: 304, name: "Paneer Sandwich", price: 190 },
        ],
      },
      {
        id: 4,
        name: "Pizza & Pasta",
        items: [
          { id: 401, name: "Margherita Pizza", price: 260 },
          { id: 402, name: "Farmhouse Pizza", price: 320 },
          { id: 403, name: "Alfredo Pasta", price: 260 },
          { id: 404, name: "Arrabbiata Pasta", price: 250 },
        ],
      },
      {
        id: 5,
        name: "Desserts",
        items: [
          { id: 501, name: "Cheesecake", price: 220 },
          { id: 502, name: "Brownie", price: 160 },
          { id: 503, name: "Red Velvet Cake", price: 220 },
          { id: 504, name: "Chocolate Muffin", price: 140 },
        ],
      },
    ],
  },

  {
    businessId: 3,

    specialMenu: [
      {
        id: 1,
        name: "Special Veg Thali",
        price: 280,
        image: "/images/Menu/DalMakhani.png",
      },
      {
        id: 2,
        name: "Paneer Butter Masala",
        price: 300,
        image: "/images/Menu/PaneerBiryani.png",
      },
      {
        id: 3,
        name: "Masala Dosa",
        price: 150,
        image: "/images/Menu/DalMakhani.png",
      },
    ],

    categories: [
      {
        id: 1,
        name: "South Indian",
        items: [
          { id: 101, name: "Masala Dosa", price: 150 },
          { id: 102, name: "Idli Sambar", price: 100 },
          { id: 103, name: "Medu Vada", price: 120 },
          { id: 104, name: "Uttapam", price: 170 },
        ],
      },
      {
        id: 2,
        name: "Punjabi",

        items: [
          { id: 201, name: "Paneer Butter Masala", price: 300 },
          { id: 202, name: "Shahi Paneer", price: 310 },
          { id: 203, name: "Dal Fry", price: 220 },
          { id: 204, name: "Veg Kolhapuri", price: 260 },
        ],
      },
      {
        id: 3,
        name: "Rice",
        items: [
          { id: 301, name: "Veg Biryani", price: 240 },
          { id: 302, name: "Jeera Rice", price: 150 },
          { id: 303, name: "Fried Rice", price: 210 },
          { id: 304, name: "Curd Rice", price: 180 },
        ],
      },
      {
        id: 4,
        name: "Breads",
        items: [
          { id: 401, name: "Butter Naan", price: 45 },
          { id: 402, name: "Chapati", price: 20 },
          { id: 403, name: "Tandoori Roti", price: 35 },
          { id: 404, name: "Kulcha", price: 60 },
        ],
      },
      {
        id: 5,
        name: "Desserts",
        items: [
          { id: 501, name: "Gulab Jamun", price: 90 },
          { id: 502, name: "Jalebi", price: 100 },
          { id: 503, name: "Rasmalai", price: 110 },
          { id: 504, name: "Fruit Custard", price: 130 },
        ],
      },
    ],
  },

  {
    businessId: 4,
    specialMenu: [
      {
        id: 1,
        name: "Chocolate Truffle Cake",
        price: 650,
        image: "/images/Menu/DalMakhani.png",
      },
      {
        id: 2,
        name: "Blueberry Cheesecake",
        price: 240,
        image: "/images/Menu/PaneerBiryani.png",
      },
      {
        id: 3,
        name: "Garlic Bread",
        price: 140,
        image: "/images/Menu/DalMakhani.png",
      },
    ],

    categories: [
      {
        id: 1,
        name: "Cakes",
        items: [
          { id: 101, name: "Chocolate Cake", price: 600 },
          { id: 102, name: "Black Forest", price: 580 },
          { id: 103, name: "Red Velvet", price: 650 },
          { id: 104, name: "Pineapple Cake", price: 520 },
        ],
      },
      {
        id: 2,
        name: "Pastries",
        items: [
          { id: 201, name: "Chocolate Pastry", price: 120 },
          { id: 202, name: "Fruit Pastry", price: 130 },
          { id: 203, name: "Red Velvet Pastry", price: 150 },
          { id: 204, name: "Butterscotch Pastry", price: 140 },
        ],
      },
      {
        id: 3,
        name: "Breads",
        items: [
          { id: 301, name: "Garlic Bread", price: 140 },
          { id: 302, name: "Whole Wheat Bread", price: 90 },
          { id: 303, name: "Baguette", price: 110 },
          { id: 304, name: "Multigrain Bread", price: 120 },
        ],
      },
      {
        id: 4,
        name: "Cookies",
        items: [
          { id: 401, name: "Choco Chip Cookie", price: 70 },
          { id: 402, name: "Butter Cookie", price: 60 },
          { id: 403, name: "Oat Cookie", price: 80 },
          { id: 404, name: "Almond Cookie", price: 90 },
        ],
      },
      {
        id: 5,
        name: "Coffee",
        items: [
          { id: 501, name: "Espresso", price: 120 },
          { id: 502, name: "Cappuccino", price: 170 },
          { id: 503, name: "Latte", price: 180 },
          { id: 504, name: "Americano", price: 160 },
        ],
      },
    ],
  },
];
