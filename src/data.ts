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
  phone: "+91 9207098314", // Her actual contact number
  whatsapp: "919207098314", // WhatsApp API format without spaces or symbols
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
  // --- FRESH CREAM CAKES ---
  {
    id: "fc-white-forest",
    name: "White Forest Cake",
    category: "fresh_cream",
    description: "Light vanilla sponge layered with fluffy fresh whipped cream, sweet maraschino cherries, and silky premium white chocolate curls.",
    price500g: 400,
    price1kg: 700,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80",
    flavors: ["White Forest Classic", "Cherry Blossom Whipped"],
    isPopular: false
  },
  {
    id: "fc-black-forest",
    name: "Black Forest Cake",
    category: "fresh_cream",
    description: "Traditional German-style celebration cake with moist chocolate sponge, dark cherry compote layers, and rich chocolate shavings.",
    price500g: 400,
    price1kg: 700,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    flavors: ["Classic Black Forest", "Chocolate Cherry Fudge"],
    isPopular: false
  },
  {
    id: "fc-vancho",
    name: "Vancho Cake",
    category: "fresh_cream",
    description: "An elegant blend of rich white and dark chocolate sponges layered with premium mousse and coated with premium dual-chocolate swirls.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    flavors: ["Signature Vancho Duo", "Vancho with Butter Crunch"],
    isPopular: true
  },
  {
    id: "fc-butterscotch",
    name: "Butterscotch Cake",
    category: "fresh_cream",
    description: "Golden sponge layered with decadent caramelized butterscotch cream and packed with crunchy caramel-almond praline pieces.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=600&q=80",
    flavors: ["Caramel Butterscotch", "Nutty Butterscotch Fudge"],
    isPopular: false
  },
  {
    id: "fc-red-bee",
    name: "Red Bee Cake",
    category: "fresh_cream",
    description: "Exquisite honey-kissed vanilla sponge layered with red crimson cream crumbs and delicate honeybee blossom designs.",
    price500g: 600,
    price1kg: 1100,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
    flavors: ["Traditional Honey Bee Red", "Red Velvet Honey Whipped"],
    isPopular: false
  },
  {
    id: "fc-nutty-vancho",
    name: "Nutty Vancho Cake",
    category: "fresh_cream",
    description: "Our signature white-and-dark Vancho cake enhanced with heavy folds of toasted cashew nuts, almonds, and rich praline paste.",
    price500g: 650,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&w=600&q=80",
    flavors: ["Premium Double-Nutty Vancho", "Caramelized Nutty Choco-Vancho"],
    isPopular: true
  },
  {
    id: "fc-rainbow",
    name: "Rainbow Cake",
    category: "fresh_cream",
    description: "Seven gorgeous layers of colorful chiffon sponge baked vanilla-fresh, stacked elegantly with luscious tangy frosting.",
    price1kg: 1300,
    unitName: "1 Kg Only",
    image: "https://images.unsplash.com/photo-1558961309-db6262759838?auto=format&fit=crop&w=600&q=80",
    flavors: ["Vibrant Seven Colors Chiffon"],
    isPopular: false
  },

  // --- VELVET CAKES ---
  {
    id: "vc-vanilla-velvet",
    name: "Vanilla Velvet Cake",
    category: "velvet",
    description: "Delicate, melt-in-the-mouth white sponge cake with a ultra-fine velvet crumb, covered with cloud-like vanilla glaze.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
    flavors: ["Pure Vanilla Bean Velvet", "Classic White Satin"],
    isPopular: false
  },
  {
    id: "vc-red-velvet",
    name: "Red Velvet Cake",
    category: "velvet",
    description: "Deep-red traditional cocoa velvet sponge layers frosted with premium silky-smooth cream cheese and topped with sweet ruby crumbs.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "/red-velvet-cake-1.jpg",
    flavors: ["Traditional Cream Cheese Velvet", "Chocolate Chip Red Velvet"],
    isPopular: true
  },
  {
    id: "vc-pink-velvet",
    name: "Pink Velvet Cake",
    category: "velvet",
    description: "Romantic pastel-pink velvet sponge paired with fresh strawberry compote layers and high-contrast sweet cream.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=600&q=80",
    flavors: ["Pretty Pink Berry Velvet", "Rosewater Pink Satin"],
    isPopular: false
  },
  {
    id: "vc-blue-velvet",
    name: "Blue Velvet Cake",
    category: "velvet",
    description: "Stunning royal blue velvet sponge cake with rich cream-cheese filling and white fondant starry ornaments.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13636?auto=format&fit=crop&w=600&q=80",
    flavors: ["Royal Blue Velvet Cream", "Blue Lagoon Saffron Frost"],
    isPopular: false
  },

  // --- FRUIT CAKES ---
  {
    id: "fr-pineapple-delight",
    name: "Pineapple Delight Cake",
    category: "fruit",
    description: "Soft golden sponge cake loaded with hand-chopped sweet pineapple fruit chunks, layered in refreshing dairy cream.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1562266641-1fcdc80abf35?auto=format&fit=crop&w=600&q=80",
    flavors: ["Tropical Gold Pineapple", "Sweet & Tangy Pineapple Melt"],
    isPopular: false
  },
  {
    id: "fr-blueberry",
    name: "Blueberry Cake",
    category: "fruit",
    description: "Delicious vanilla sponge cake layered with sweet wild blueberry filling and adorned with purple cream rosettes.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1604497076192-747f3e819752?auto=format&fit=crop&w=600&q=80",
    flavors: ["Wild Blueberry Classic", "Blueberry Lemon Zest"],
    isPopular: false
  },
  {
    id: "fr-tender-coconut",
    name: "Tender Coconut Cake",
    category: "fruit",
    description: "Anjana's legendary signature bestseller. Vanilla chiffon cake layered with fresh coconut pulp (Karikku) and coconut water extract cream.",
    price500g: 550,
    price1kg: 1000,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    flavors: ["Signature Karikku Coconut", "Tender Coconut & Honey Almond"],
    isPopular: true
  },
  {
    id: "fr-fruit-custard",
    name: "Fruit Custard Cake",
    category: "fruit",
    description: "Premium fruit fest. Dense sponge filled with slow-cooked rich vanilla custard and seasonal diced orchard fresh fruits.",
    price1kg: 1300,
    unitName: "1 Kg Only",
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=600&q=80",
    flavors: ["Classic Rich Fruit Custard", "Double Layer Custard Dream"],
    isPopular: false
  },
  {
    id: "fr-strawberry",
    name: "Strawberry Cake (Fresh)",
    category: "fruit",
    description: "Seasonal premium sponge stacked with freshly imported strawberries, sweet compote, and light pink berry glaze.",
    price500g: 650,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80",
    flavors: ["Seasonal fresh strawberry", "Strawberry Cream Cheese Blend"],
    isPopular: true
  },

  // --- TRUFFLE ---
  {
    id: "tr-white-truffle",
    name: "White Chocolate Truffle Cake",
    category: "truffle",
    description: "Decadent white chocolate mud cake covered in a thick silky layer of dark-sweet Belgian white chocolate truffle ganache.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1519340332824-d10d2d4081ef?auto=format&fit=crop&w=600&q=80",
    flavors: ["Bespoke White Chocolate Ganache", "White Truffle Crunch"],
    isPopular: false
  },
  {
    id: "tr-milk-truffle",
    name: "Milk Chocolate Truffle Cake",
    category: "truffle",
    description: "Luxurious milk-chocolate chiffon sponge layered with melt-in-the-mouth milk chocolate ganache and chocolate cream ripples.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
    flavors: ["Pure Milk Truffle Mousse", "Silk Milk Ganache"],
    isPopular: false
  },
  {
    id: "tr-dark-truffle",
    name: "Dark Chocolate Truffle Cake",
    category: "truffle",
    description: "Sensational deep-cocoa mud sponge drenched in 55% dark Belgian chocolate ganache for true chocolate connoisseurs.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    flavors: ["Deep Intense Dark Belgian Truffle", "Mocha Chocolate Ganache"],
    isPopular: true
  },
  {
    id: "tr-mango-truffle",
    name: "Mango Truffle Cake",
    category: "truffle",
    description: "Creative fusion. Rich white chocolate truffle mud cake infused with real tropical mango pulp layers.",
    price500g: 550,
    price1kg: 950,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    flavors: ["Sweet Mango Velvet Truffle", "Alphonso Mango Truffle"],
    isPopular: false
  },

  // --- CHOCOLATE SPONGE CAKES ---
  {
    id: "cs-spanish-delight",
    name: "Spanish Delight Cake",
    category: "chocolate_sponge",
    description: "Cinnamon-scented Spanish-style chocolate cake filled with airy chocolate mousse and toasted pecan candy pieces.",
    price500g: 700,
    price1kg: 1300,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1622896784083-cc051313dbab?auto=format&fit=crop&w=600&q=80",
    flavors: ["Authentic Spanish Delight", "Spiced Nutty Chocolatier"],
    isPopular: true
  },
  {
    id: "cs-chocolate-overloaded",
    name: "Chocolate Overloaded Cake",
    category: "chocolate_sponge",
    description: "Extreme chocolate chocolate sponge stacked with cocoa chips, chocolate pastry creams, and gooey fudge borders.",
    price500g: 750,
    price1kg: 1500,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=600&q=80",
    flavors: ["Death by Overloaded Chocolate", "Triple Fudge Extra Fudge"],
    isPopular: true
  },
  {
    id: "cs-choco-dry-fruit",
    name: "Choco Dry Fruit Cake",
    category: "chocolate_sponge",
    description: "Nourishing, dense chocolate sponge loaded with premium dried figs, dates, raisins, almonds, and cashew chunks.",
    price500g: 650,
    price1kg: 1250,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=600&q=80",
    flavors: ["Baking-Rich Chocolatier Dry Fruit", "Dates & Almond Chocolatier"],
    isPopular: false
  },
  {
    id: "cs-choco-nuts",
    name: "Choco Nuts Cake",
    category: "chocolate_sponge",
    description: "Rich dark chocolate sponge embedded with butter-toasted premium crushed hazelnuts and cashew bits.",
    price500g: 650,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&w=600&q=80",
    flavors: ["Dark Choco Toasted Hazelnuts", "Cashew Crunch Chocolate"],
    isPopular: false
  },
  {
    id: "cs-oreo",
    name: "Oreo Cake",
    category: "chocolate_sponge",
    description: "Delicious chocolate cake filled with smooth cookies-and-cream frosting and topped with real crunchy Oreo crumbs.",
    price500g: 550,
    price1kg: 1000,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    flavors: ["Creamy Cookies & Oreo Dream"],
    isPopular: false
  },
  {
    id: "cs-kitkat-gems",
    name: "Kitkat Gems Cake",
    category: "chocolate_sponge",
    description: "Beautiful cake surrounded with crispy dual-finger Kitkat chocolates, filled in the center with sweet colorful Gems candy.",
    price500g: 850,
    price1kg: 1600,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1558961309-db6262759838?auto=format&fit=crop&w=600&q=80",
    flavors: ["Carnival Kitkat Gems Delight"],
    isPopular: true
  },

  // --- VANILLA SPONGE CAKES ---
  {
    id: "vs-milky-nuts",
    name: "Milky Nuts Cake",
    category: "vanilla_sponge",
    description: "Sponge cake soaked in thick premium condensed milk and layered generously with chopped almonds and cashews.",
    price500g: 650,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
    flavors: ["Signature Milky Nuts Classic", "Pista Almond Cream Soak"],
    isPopular: false
  },
  {
    id: "vs-milky-butterscotch",
    name: "Milky Butterscotch Cake",
    category: "vanilla_sponge",
    description: "Golden vanilla sponge doused with rich milk cream and homemade brown butterscotch drops.",
    price500g: 650,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=600&q=80",
    flavors: ["Milky Caramel Butterscotch"],
    isPopular: false
  },
  {
    id: "vs-honey-almond",
    name: "Honey Almond Cake",
    category: "vanilla_sponge",
    description: "Extremely moist vanilla sponge soaked in wild raw honey syrup and baked under a heavy caramelized almond crust.",
    price500g: 650,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    flavors: ["Rich Honey Almond Glaze", "Bee Sweet Almond Crunch"],
    isPopular: true
  },
  {
    id: "vs-kulfi",
    name: "Kulfi Cake",
    category: "vanilla_sponge",
    description: "Royal Indian fusion. Saffron cardamom sponge cake infused with rich thickened milk cream reminiscent of traditional Kulfi.",
    price500g: 600,
    price1kg: 1100,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
    flavors: ["Royal Saffron Pistachio Kulfi", "Matka Kulfi Fusion"],
    isPopular: false
  },
  {
    id: "vs-lotus-biscoff",
    name: "Lotus Biscoff Cake",
    category: "vanilla_sponge",
    description: "Decadent cookie cake layered with original biscuit spread butter and crispy Biscoff cracker toppings.",
    price500g: 850,
    price1kg: 1700,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80",
    flavors: ["Lotus Speculoos Premium Cookie", "Double Biscoff Fusion"],
    isPopular: true
  },

  // --- TRES LECHES CAKES ---
  {
    id: "tl-vanilla",
    name: "Vanilla Tres Leches Cake",
    category: "tres_leches",
    description: "Light milk sponge drenched thoroughly in a rich, velvety recipe of condensed milk, evaporated milk, and sweet dairy cream.",
    price500g: 600,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&w=600&q=80",
    flavors: ["Original Three-Milk Vanilla", "Mild Sweet Milky Sponge"],
    isPopular: true
  },
  {
    id: "tl-pista",
    name: "Pista Tres Leches Cake",
    category: "tres_leches",
    description: "A perfect Pistachio twist to our milk sponge, soaked in gourmet Pista-flavored milk and decorated with real Iranian pistachios.",
    price500g: 600,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1604497076192-747f3e819752?auto=format&fit=crop&w=600&q=80",
    flavors: ["Gourmet Iranian Pistachio Soak", "Creamy Pista Milky Heaven"],
    isPopular: false
  },
  {
    id: "tl-rosemilk",
    name: "Rosemilk Tres Leches Cake",
    category: "tres_leches",
    description: "Sweet nostalgic rose syrup soaked tres leches sponge topped with thick whipped cream and dry organic rose petals.",
    price500g: 600,
    price1kg: 1200,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&w=600&q=80",
    flavors: ["Nostalgic Rosemilk Blossom Soak", "Cardamom infusion Rosemilk"],
    isPopular: false
  },
  {
    id: "tl-pista-rosemilk",
    name: "Pista Rosemilk Tres Leches",
    category: "tres_leches",
    description: "Unique combination sponge drenched in premium Pista milk and frosted with fragrant pink rosemilk curls.",
    price500g: 650,
    price1kg: 1300,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?auto=format&fit=crop&w=600&q=80",
    flavors: ["Pista Milk soak with Rose Cream"],
    isPopular: false
  },
  {
    id: "tl-rosemilk-pista",
    name: "Rosemilk Pista Tres Leches",
    category: "tres_leches",
    description: "Sweet rose milk doused cake topped with highly premium crushed green pistachio layout.",
    price500g: 650,
    price1kg: 1300,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=600&q=80",
    flavors: ["Rosewater Soak with Pistachio Crunch"],
    isPopular: false
  },
  {
    id: "tl-turkish",
    name: "Turkish Milk Cake",
    category: "tres_leches",
    description: "Authentic Turkish sponge beautifully soaked in rich cream syrup and finished with a thick layer of our homemade golden caramel glaze.",
    price500g: 650,
    price1kg: 1300,
    unitName: "500g / 1 Kg",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80",
    flavors: ["Authentic Golden Caramel Soak", "Caramelized Turkish Glory"],
    isPopular: true
  }
];

export const SHAPES_LIST = ["Round", "Heart", "Square", "Numeric (Specify in Notes)"];
export const FROSTING_STYLES = [
  { name: "Smooth / Minimal", desc: "Sleek, direct, modern flat coating" },
  { name: "Textured Rustic Cream", desc: "Whimsical, horizontal waves and peaks" },
  { name: "Rustic Naked / Semi-Naked", desc: "Cake layers peek through for a vintage natural charm" },
  { name: "Elegant Floral Piping", desc: "Handcrafted butter or whipped cream blossoms and trims" }
];
