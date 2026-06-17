/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CakeCategory = 
  | 'fresh_cream' 
  | 'velvet' 
  | 'fruit' 
  | 'truffle' 
  | 'chocolate_sponge' 
  | 'vanilla_sponge' 
  | 'tres_leches';

export interface CakeItem {
  id: string;
  name: string;
  category: CakeCategory;
  description: string;
  price500g?: number;
  price1kg: number;
  unitName: string;
  image: string;
  flavors: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  photos?: string[];
  avatarColor: string;
  isLocal?: boolean; // added locally in this browser session
  response?: {
    author: string;
    text: string;
    date: string;
  };
}

export interface CustomOrderOptions {
  flavor: string;
  size: string; // "0.5 Kg", "1 Kg", "1.5 Kg", "2 Kg+"
  shape: string; // "Round", "Heart", "Square"
  message: string;
  frostingStyle: string; // "Smooth / Minimal", "Textured Cream", "Rustic Naked", "Floral Piping"
  customerName: string;
  customerPhone: string;
  deliveryDate: string;
  deliveryTime: string; // "Morning (10 AM - 1 PM)", "Afternoon (1 PM - 4 PM)", "Evening (4 PM - 8 PM)"
  notes: string;
}
