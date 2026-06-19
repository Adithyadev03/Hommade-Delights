/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CakeItem, Review } from './types';

export const BAKERY_INFO = {
  name: "Hommade Delights",
  owner: "Anjana",
  city: "Nileshwaram",
  district: "Kasaragod",
  state: "Kerala",
  pincode: "671314",
  rating: 5.0,
  reviewsCount: 14,
  priceTier: "₹400–1,200",
  address: "Koodu, Palayi, Nileshwaram, Kerala 671314",
  mapDirectionsUrl: "https://maps.google.com/?q=Hommade+Delights+Koodu+Palayi+Nileshwaram+Kerala+671314",
  phone: "+91 9207098314", // Her actual contact number
  whatsapp: "919207098314", // WhatsApp API format without spaces or symbols
  instagram: "hommade_delights", 
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
    image: "whiteforest.jpeg",
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
    image: "blackforest.jpg",
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
    image: "vancho.jpg",
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
    image: "Butter_Scotch.jpg",
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
    image: "red bee.jpg ",
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
    image: "nutty vencho.png",
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
    image: "rainbow.jpg",
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
    image: "vanila velvet.jpg",
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
    image: "pink-velvet-cake.jpg",
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
    image: "blue velvet cake.jpg",
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
    image: "pineappledelight.jpg",
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
    image: "blueberry cakes.jpg",
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
    image: "tender coconut.jpg",
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
    image: "fruit custard.jpg",
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
    image: "strawbery.jpg",
    flavors: ["Seasonal fresh strawberry", "Strawberry Cream Cheese Blend"],
    isPopular: true
  },
  {
    id: "fr-rum-fruit",
    name: "Rum Fruit Cake",
    category: "fruit",
    description: "A rich Christmas special packed with dried fruits, nuts, and hand-ground spices pre-soaked in dark rum for a warm, festive holiday flavour.",
    price500g: 500,
    price1kg: 1000,
    unitName: "500g / 1 Kg",
    image: "rumcake.jpg",
    flavors: ["Traditional Rum-Aged Spiced Fruit", "Non-Alcoholic Festive Fruit Blend"],
    isPopular: false,
    isSeasonal: true
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
    image: "white chocolate truffle cake.png",
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
    image: "milk chocolate truffle.jpg",
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
    image: "dark chocolate truffle.jpg",
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
    image: "mangotruffle.jpg",
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
    image: "spanish delight.jpg",
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
    image: "chocolateoverload.jpg",
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
    image: "chocofryfruit.jpg",
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
    image: "choconuts.jpg",
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
    image: "oreo cake.jpg",
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
    image: "kitkat.jpg",
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
    image: "milkynuts.jpg",
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
    image: "milkybutterscotch.jpg",
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
    image: "honeyalmond.jpg",
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
    image: "kulfi.jpg",
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
    image: "lotus biscoff.jpg",
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
    image: "vanila tres leches.jpg",
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
    image: "pistachio tres leches.jpg",
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
    image: "rosemilk tres leches.jpg",
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
    image: "pista leches.jpeg",
    flavors: ["Pista Milk soak with Rose Cream"],
    isPopular: false
  },


  // --- BROWNIES ---
  {
    id: "br-red-velvet",
    name: "Red Velvet Brownie (9 piece)",
    category: "brownies",
    description: "Super fudgy, dense red velvet brownies layered with sweet chocolate chip folds and elegant sugar dustings.",
    price1kg: 600,
    unitName: "9 Piece Box",
    image: "redvelvetbrownie.jpg",
    flavors: ["Fudgy Red Velvet"],
    isPopular: false
  },
  {
    id: "br-chocolate",
    name: "Chocolate Brownie (9 piece)",
    category: "brownies",
    description: "Classic intensely rich, double-chocolate fudgy brownies baked with premium Dutch cocoa and overloaded with semisweet chips.",
    price1kg: 550,
    unitName: "9 Piece Box",
    image: "chocobrownie.jpg",
    flavors: ["Double Chocolate Fudgy"],
    isPopular: false
  },
  {
    id: "br-nutella",
    name: "Nutella Brownie (9 piece)",
    category: "brownies",
    description: "Gooey chocolate fudgy brownie base heavily swirled with premium creamy Nutella hazelnut spread for ultimate rich decadence.",
    price1kg: 600,
    unitName: "9 Piece Box",
    image: "nutella brownie.jpg",
    flavors: ["Nutella Swirl Fudgy"],
    isPopular: true
  },
  {
    id: "br-mixed",
    name: "Mixed Brownie Box (8 piece)",
    category: "brownies",
    description: "The perfect sampler containing 4 white chocolate blondie pieces and 4 dark chocolate fudgy brownies to please everyone. (4 white + 4 dark)",
    price1kg: 420,
    unitName: "8 Pieces",
    image: "mixedbrownie.jpg",
    flavors: ["4 White + 4 Dark Duo"],
    isPopular: false
  },

  // --- CAKES & DESSERTS (DREAM & CARROT CAKES) ---
  {
    id: "cd-choco-dream",
    name: "Choco Dream Cake",
    category: "dream_cakes",
    description: "Our signature best-selling 5-in-1 chocolate dessert tin. Crafted with layers of moist chocolate sponge, velvety mousse, rich fudge ganache, a crisp chocolate crack top, and elegant cocoa dusting.",
    price500g: 500,
    price1kg: 1000,
    unitName: "500g / 1 Kg",
    image: "chocodream.jpg",
    flavors: ["Premium Double Chocolate Dream Layer"],
    isPopular: true
  },
  {
    id: "cd-white-chocolate-dream",
    name: "White Chocolate Dream Cake",
    category: "dream_cakes",
    description: "Indulgent five-layer custom tin-in-can dream cake layered with rich white chocolate sponge, creamy mousse, white ganache, and solid chocolate crack shell.",
    price500g: 550,
    price1kg: 1100,
    unitName: "500g / 1 Kg",
    image: "whitechocodream.jpg",
    flavors: ["Dreamy Cream White Chocolate"],
    isPopular: true
  },
  {
    id: "cd-mango-dream",
    name: "Mango Dream Cake",
    category: "dream_cakes",
    description: "Lush five-layer tropical dream cake featuring smooth Alphonso mango compote layered with sweet vanilla cream and a hard snap-top shell inside a decorative tin.",
    price500g: 650,
    price1kg: 1300,
    unitName: "500g / 1 Kg",
    image: "mango dream.jpg",
    flavors: ["Alphonso Mango Dream Layer"],
    isPopular: true
  },
  {
    id: "cd-carrot-dates",
    name: "Carrot Dates Cake",
    category: "cakes_desserts",
    description: "Perfect, wholesome moist tea-time cake packed with hand-grated fresh carrots, sweet imported Saudi dates, raw butter, and roasted cashew pieces.",
    price500g: 300,
    price1kg: 600,
    unitName: "500g / 1 Kg",
    image: "carrotdate.jpg",
    flavors: ["Classic Carrot & Date Spiced"],
    isPopular: false
  },
  {
    id: "cd-ghee-cake",
    name: "Aromatic Pure Ghee Cake",
    category: "cakes_desserts",
    description: "Incredibly soft, rich, and aromatic traditional home-baked cake made with premium pure golden cow ghee. Offers a stellar melt-in-your-mouth experience with every single slice.",
    price500g: 350,
    price1kg: 700,
    unitName: "500g / 1 Kg",
    image: "ghee.jpg",
    flavors: ["Traditional Malabar Ghee Flavor"],
    isPopular: true
  },

  // --- SPECIALTY ITEMS ---
  {
    id: "sp-cakesicles",
    name: "Cakesicles (Chocolate) 4 piece",
    category: "specialty",
    description: "Adorable rich chocolate cake pops on wooden sticks, coated with a hard chocolate candy shell, sprinkles, and elegant decorative drizzles. (₹80 per piece)",
    price1kg: 320,
    unitName: "4 Pieces",
    image: "cakesicles.jpg",
    flavors: ["Double Chocolate Cakesicle"],
    isPopular: false
  },
  {
    id: "sp-blondies",
    name: "White Chocolate Blondies 9 piece",
    category: "specialty",
    description: "Irresistibly dense and chewy bars baked with caramelized brown butter, rich vanilla, and chunks of melt-in-the-mouth Belgian white chocolate. (₹600 per box)",
    price1kg: 600,
    unitName: "9 Pieces",
    image: "whitechocoblond.jpg",
    flavors: ["Gourmet White Chocolate Blondie"],
    isPopular: false
  },
  {
    id: "sp-vanilla-popsicles",
    name: "Vanilla Popsicles 6 piece",
    category: "specialty",
    description: "Charming rich vanilla cake pops on wooden sticks, coated with a sweet white chocolate candy shell, pastel sprinkles, and elegant decorative chocolate drizzles. (₹25 per piece)",
    price1kg: 150,
    unitName: "6 Pieces",
    image: "vanilla popsicles-1.jpg",
    flavors: ["Classic Creamy Vanilla Popsicle"],
    isPopular: false
  },
  {
    id: "sp-cream-kunafa",
    name: "Cream Kunafa",
    category: "specialty",
    description: "Traditional golden crispy baked Middle Eastern dessert layered with lush, velvety sweet cream filling and soaked in aromatic sugar syrup, garnished with crunchy pistachios.",
    price1kg: 400,
    unitName: "6 Inches (Small Size)",
    image: "cream kunafa.jpg",
    flavors: ["Classic Arabian Cream Filling"],
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
