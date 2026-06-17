/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CakeItem, Review } from './types';

export const BAKERY_INFO = {
  name: "Hommade Delights",
  owner: "Anjana",
  city: "Nileshwar",
  district: "Kasaragod",
  state: "Kerala",
  pincode: "671314",
  rating: 5.0,
  reviewsCount: 14,
  priceTier: "₹400–1,200",
  address: "Koodu, Ganapathiyar Temple Road, Palayi Rd, Nileshwar, Kerala 671314",
  mapDirectionsUrl: "https://maps.google.com/?q=Hommade+Delights+Koodu+Ganapathiyar+Temple+Road+Palayi+Rd+Nileshwar+Kerala+671314",
  phone: "+91 98471 23456", // Mock but realistic Kerala phone styling
  whatsapp: "919847123456", // No spacing format for API
  instagram: "hommade_delights_nileshwar", 
  hours: "10:00 AM - 8:00 PM",
  closedMessage: "Closes 8pm",
  openMessage: "Closes 8pm",
};

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "RoShNi ShYaM",
    rating: 5,
    text: "I've been buying cakes and desserts from Hommade Delights for the past 7 years, and they have never disappointed me. The quality, taste, and consistency have been exceptional. Anjana is truly gifted as a baker and always delivers more than we expect!",
    date: "a day ago",
    avatarColor: "bg-amber-100 text-amber-800",
    response: {
      author: "Anjana (Owner)",
      text: "Thankyou So Much ❤️",
      date: "a day ago"
    }
  },
  {
    id: "rev-2",
    author: "Kavya K P",
    rating: 5,
    text: "Thank you for making a beautiful cake and the cake was very tasty 😋. The texture was incredibly moist and sweetness was perfectly balanced.",
    date: "a day ago",
    avatarColor: "bg-emerald-100 text-emerald-800",
    response: {
      author: "Anjana (Owner)",
      text: "Thankyou ❤️",
      date: "a day ago"
    }
  },
  {
    id: "rev-3",
    author: "Shilpa Ramesh",
    rating: 5,
    text: "I am a regular customer of Hommade Delights. I had a wonderful experience with baker Anjana. When she was in TVM I ordered cakes for every family occasions and she made our functions more beautiful. One of it was my parent's 25th wedding anniversary cake which was absolutely spectacular. Now that she is in Nileshwar she continues her sweet magic. Wishing them all the best! Highly recommended! 👍",
    date: "a day ago",
    avatarColor: "bg-pink-100 text-pink-800",
    response: {
      author: "Anjana (Owner)",
      text: "Thankyou so much ❤️",
      date: "a day ago"
    }
  }
];

export const MENU_ITEMS: CakeItem[] = [
  {
    id: "cake-tender-coconut",
    name: "Signature Tender Coconut Cake",
    category: "celebration",
    description: "Our absolute local bestseller. Soft vanilla chiffon layered with pure dairy cream infused with fresh coconut water pulp and tender coconut meat folds (Karikku), topped with elegant white cream curls.",
    pricePerKg: 750,
    unitName: "1 Kg",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    flavors: ["Classic Tender Coconut", "Pineapple Coconut", "Mango Coconut"],
    isPopular: true
  },
  {
    id: "cake-chocolate-ganache",
    name: "Rich Belgian Chocolate Ganache",
    category: "celebration",
    description: "Multi-layered devil's food chocolate sponge smothered in silky smooth dark Belgian chocolate ganache (55% cocoa). Rich, glossy, and beautifully styled with hand-piped truffles.",
    pricePerKg: 850,
    unitName: "1 Kg",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    flavors: ["Dark Cocoa Ganache", "Milk Chocolate Truffle", "Hazelnut Praline Ganache"],
    isPopular: true
  },
  {
    id: "cake-red-velvet",
    name: "Red Velvet Cherry-Star Masterpiece",
    category: "celebration",
    description: "Our gorgeous three-layer crimson cocoa masterpiece on a gold base, coated in red velvet crumbs, and decorated with elegant piped cream-cheese rosettes, glossy dark red cherries with stems, and fresh berries. One slice pulled out reveals the moist crimson layers and white frosting inside.",
    pricePerKg: 950,
    unitName: "1 Kg",
    image: "/red-velvet-cake-1.jpg",
    flavors: ["Classic Cream Cheese", "Red Velvet with Chocolate Chunks"],
    isPopular: true
  },
  {
    id: "cake-mango-cream",
    name: "Fresh Mango Cream Dream (Seasonal)",
    category: "celebration",
    description: "Freshly harvested sweet mangoes cut into small gems, folded lovingly into a cloud of whipped vanilla cream and soft golden sponge.",
    pricePerKg: 800,
    unitName: "1 Kg",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    flavors: ["Fresh Mango Custard Cream", "Mango Passionfruit Twist"],
    isPopular: true
  },
  {
    id: "cup-duo-chocolate",
    name: "Intense Chocolate Fudge Cupcakes",
    category: "cupcakes",
    description: "Moist chocolate-infused miniature sponge cakes topped with a deep swirl of dark chocolate glaze and golden pearl drops.",
    pricePerUnit: 450,
    unitName: "6 Pieces",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
    flavors: ["Double Double Fudge", "Cookies & Cream Core"],
    isPopular: false
  },
  {
    id: "cup-velvet-swirl",
    name: "Signature Red Velvet Cupcakes",
    category: "cupcakes",
    description: "Crimson miniature bakes topped with elegant swirls of tangy white cream cheese and a dash of sweet ruby crumbs.",
    pricePerUnit: 480,
    unitName: "6 Pieces",
    image: "/red-velvet-cupcakes.jpg",
    flavors: ["Traditional Cream Cheese"],
    isPopular: false
  },
  {
    id: "cup-biscoff",
    name: "Caramel Biscoff Crumble Cupcakes",
    category: "cupcakes",
    description: "Spiced cinnamon cake bases, core-filled with pure runny Lotus Biscoff paste, styled with soft Biscoff-infused buttercream.",
    pricePerUnit: 500,
    unitName: "6 Pieces",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
    flavors: ["Lotus Biscoff Core", "Caramel Salted Toffee Core"],
    isPopular: true
  },
  {
    id: "dessert-tres-leches",
    name: "Three-Milk Soaked Tres Leches",
    category: "dessert",
    description: "Our interpretation of the classic. Light milk-sponge doused perfectly in sweet condensed milk, evaporated milk, and thick cream, layered under whipped topping.",
    pricePerUnit: 180,
    unitName: "1 Individual Tub",
    image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&w=600&q=80",
    flavors: ["Classic Tres Leches", "Saffron Elakkai Tres Leches", "Pista Soak Tres Leches"],
    isPopular: true
  },
  {
    id: "fusion-karikku-pudding",
    name: "Kerala Tender Coconut Milk Pudding",
    category: "fusion",
    description: "Creamy, cold-set traditional pudding prepared with pure fresh coconut milk, sweet tender pulp bits, and china grass, giving a smooth melt-in-mouth wobble.",
    pricePerUnit: 400,
    unitName: "1 Medium Container (Serves 4)",
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=600&q=80",
    flavors: ["Original Elaneer Pudding", "Cardamom Infused Pudding"],
    isPopular: false
  }
];

export const SHAPES_LIST = ["Round", "Heart", "Square", "Numeric (Specify in Notes)"];
export const FROSTING_STYLES = [
  { name: "Smooth / Minimal", desc: "Sleek, direct, modern flat coating" },
  { name: "Textured Rustic Cream", desc: "Whimsical, horizontal waves and peaks" },
  { name: "Rustic Naked / Semi-Naked", desc: "Cake layers peek through for a vintage natural charm" },
  { name: "Elegant Floral Piping", desc: "Handcrafted butter or whipped cream blossoms and trims" }
];
