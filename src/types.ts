/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CakeCategory = 'celebration' | 'cupcakes' | 'dessert' | 'fusion';

export interface CakeItem {
  id: string;
  name: string;
  category: CakeCategory;
  description: string;
  pricePerKg?: number; // for cakes
  pricePerUnit?: number; // for cupcakes/pastries
  unitName: string; // e.g., "1 Kg", "6 Pieces", "Cup"
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
