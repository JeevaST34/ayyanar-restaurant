export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const fullMenuCategories: MenuCategory[] = [
  {
    title: "Breakfast",
    items: [
      { name: "Idly", price: "$ 0.80 / per pc" },
      { name: "Pongal", price: "$ 1.50 / per box" },
      { name: "Ven Pongal", price: "$ 2.00 / dine in" },
      { name: "Dosa", price: "$ 1.50 / per pc" },
      { name: "Rava Dosa", price: "$ 2.50 / per pc" },
      { name: "Egg Dosa", price: "$ 2.50 / per pc" },
      { name: "Masala Dosa", price: "$ 2.50 / per pc" },
      { name: "Poori", price: "$ 2.00 / per pc" },
      { name: "Lemon Rice", price: "$ 1.50 / per box" },
      { name: "Pepper Rice", price: "$ 1.50 / per box" },
      { name: "Koozh", price: "$ 1.50 / per box" },
      { name: "Puttu", price: "$ 2.00 / per box" },
      { name: "Curd Rice", price: "$ 1.50 / per box" },
      { name: "Coconut Rice", price: "$ 1.50 / per box" },
      { name: "Turmeric Rice", price: "$ 1.50 / per box" },
    ],
  },
  {
    title: "Lunch",
    items: [
      { name: "Veg Meal", price: "$ 5.50" },
      { name: "Chicken Meal", price: "$ 6.50" },
      { name: "Mutton Meal", price: "$ 7.50" },
      { name: "Fish Meal", price: "$ 7.50" },
    ],
  },
  {
    title: "Sunday Specials - Seeraga Samba ",
    items: [
      { name: "Mutton Biryani", price: "$ 8.00" },
      { name: "Chicken Biryani", price: "$ 7.00" },
      { name: "Prawn Biryani", price: "$ 8.00" },
      { name: "Fish Biryani", price: "$ 8.00" },
    ],
  },
  {
    title: "Curries",
    items: [
      { name: "Chicken with Curry", price: "$ 3.50" },
      { name: "Mutton with Curry", price: "$ 4.50" },
      { name: "Fish with Curry", price: "$ 4.50" },
      { name: "Egg with Curry", price: "$ 1.00" },
    ],
  },
  {
    title: "Dinner",
    items: [
      { name: "Idly", price: "$ 0.80 / per pc" },
      { name: "Dosa", price: "$ 1.50 / per pc" },
      { name: "Rava Dosa", price: "$ 2.50 / per pc" },
      { name: "Egg Dosa", price: "$ 2.50 / per pc" },
      { name: "Masala Dosa", price: "$ 2.50 / per pc" },
      { name: "Parotta ", price: "$ 2.50 / 2 pcs" },
      { name: "Chapathi ", price: "$ 2.50 / 2 pcs" },
      { name: "Chicken Fried Rice", price: "$ 5.50" },
      { name: "Fried Rice", price: "$ 4.50" },
      { name: "Omelette", price: "$ 2.00" },
      { name: "Kalaki", price: "$ 2.00" },
      { name: "Egg Half Boil", price: "$ 1.00" },
      { name: "Egg Full Boil", price: "$ 1.00" },
    ],
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Coffee", price: "$ 1.00 dine in / $ 1.20 take away" },
      { name: "Tea", price: "$ 1.00 dine in / $ 1.20 take away" },
      { name: "Ginger Tea", price: "$ 1.20 dine in / $ 1.40 take away" },
      { name: "Black Tea", price: "$ 1.00 dine in / $ 1.20 take away" },
      { name: "Lemon Tea", price: "$ 1.20 dine in / $ 1.40 take away" },
      { name: "Horlicks", price: "$ 1.50 dine in / $ 1.70 take away" },
      { name: "Boost", price: "$ 1.50 dine in / $ 1.70 take away" },
      { name: "Sukku Tea", price: "$ 1.20 dine in / $ 1.40 take away" },
      { name: "Milk", price: "$ 1.20 dine in / $ 1.40 take away" },
      { name: "Masala Tea", price: "$ 1.20 dine in / $ 1.40 take away" },
      { name: "Milo", price: "$ 1.50 dine in / $ 1.70 take away" },
      { name: "Badam Milk", price: "$ 1.50 dine in / $ 1.70 take away" },
    ],
  },
  {
    title: "Cold Drinks",
    items: [
      { name: "Ice Coffee", price: "$ 1.50 dine in / $ 1.70 take away" },
      { name: "Ice Tea", price: "$ 1.50 dine in / $ 1.70 take away" },
      { name: "Ice Milo", price: "$ 2.00 dine in / $ 2.20 take away" },
      { name: "Badam Milk", price: "$ 2.00" },
      { name: "Rose Milk", price: "$ 2.00" },
      { name: "Sarbath", price: "$ 1.50" },
      { name: "Coke", price: "$ 1.20" },
      { name: "Pepsi", price: "$ 1.20" },
      { name: "Red Bull", price: "$ 1.20" },
      { name: "7 Up", price: "$ 1.20" },
      { name: "Sprite", price: "$ 1.20" },
    ],
  },
];

export const previewMenuCategories: MenuCategory[] = [
  {
    title: "Breakfast",
    note: "Morning staples and rice-box favorites from the latest price list.",
    items: [
      {
        name: "Idly",
        price: "$ 0.80 / per pc",
        description: "Soft steamed rice cakes served fresh for breakfast.",
      },
      {
        name: "Pongal (Dine In)",
        price: "$ 2.00",
        description: "Comforting ven pongal finished for dine-in service.",
      },
      {
        name: "Dosa",
        price: "$ 1.50 / per pc",
        description: "Classic South Indian dosa with crisp golden edges.",
      },
      {
        name: "Rava Dosa",
        price: "$ 2.50 / per pc",
        description: "Lacy semolina dosa with a light, crunchy bite.",
      },
      {
        name: "Poori",
        price: "$ 2.00 / per pc",
        description: "Puffed poori served warm and satisfying.",
      },
      {
        name: "Puttu",
        price: "$ 2.00 / per box",
        description: "Soft steamed rice flour cylinders packed for takeaway.",
      },
    ],
  },
  {
    title: "Lunch",
    note: "Meals, biryani, and curry specials featured on the current menu.",
    items: [
      {
        name: "Veg Meal",
        price: "$ 5.50",
        description: "A full vegetarian meal plate for a hearty lunch.",
      },
      {
        name: "Chicken Meal",
        price: "$ 6.50",
        description: "Rice with chicken curry and classic accompaniments.",
      },
      {
        name: "Seeraga Samba Chicken Biryani",
        price: "$ 7.00",
        description: "Fragrant biryani made with Seeraga samba rice.",
      },
      {
        name: "Seeraga Samba Prawn Biryani",
        price: "$ 8.00",
        description: "Seafood biryani with spiced prawns and short-grain rice.",
      },
      {
        name: "Fish with Curry",
        price: "$ 4.50",
        description: "Fish curry portion for pairing with rice or sides.",
      },
      {
        name: "Egg with Curry",
        price: "$ 1.00",
        description: "A simple curry add-on from the lunch specials list.",
      },
    ],
  },
  {
    title: "Dinner",
    note: "Night-time staples, fried rice, and egg dishes from the PDF.",
    items: [
      {
        name: "Idly",
        price: "$ 0.80 / per pc",
        description: "Light and soft idly for an easy evening meal.",
      },
      {
        name: "Masala Dosa",
        price: "$ 2.50 / per pc",
        description: "Crisp dosa wrapped around savory masala filling.",
      },
      {
        name: "Parotta ",
        price: "$ 2.50 / 2 pcs",
        description: "Layered parotta served as a two-piece portion.",
      },
      {
        name: "Chapathi",
        price: "$ 2.50 / 2 pcs",
        description: "Soft chapathi pair for a lighter dinner plate.",
      },
      {
        name: "Chicken Fried Rice",
        price: "$ 5.50",
        description: "Wok-tossed fried rice with chicken and spices.",
      },
      {
        name: "Kalaki",
        price: "$ 2.00",
        description: "Street-style soft egg kalaki cooked to order.",
      },
    ],
  },
  {
    title: "Hot Drinks",
    note: "Updated dine-in and take-away beverage prices from the PDF.",
    items: [
      {
        name: "Coffee",
        price: "$ 1.00 / $ 1.20",
        description: "Dine in / take away pricing for South Indian coffee.",
      },
      {
        name: "Tea",
        price: "$ 1.00 / $ 1.20",
        description: "Everyday milk tea with separate dine-in and takeaway rates.",
      },
      {
        name: "Masala Tea",
        price: "$ 1.20 / $ 1.40",
        description: "Spiced tea served hot with the latest updated price.",
      },
      {
        name: "Horlicks",
        price: "$ 1.50 / $ 1.70",
        description: "Malted hot drink for dine in or take away.",
      },
      {
        name: "Milo",
        price: "$ 1.50 / $ 1.70",
        description: "Chocolate malt drink with updated dual pricing.",
      },
      {
        name: "Badam Milk",
        price: "$ 1.50 / $ 1.70",
        description: "Hot badam milk listed on the current drinks page.",
      },
    ],
  },
];
