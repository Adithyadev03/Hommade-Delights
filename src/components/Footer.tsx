/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cake, Heart, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';
import { BAKERY_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A2E21] text-stone-200 border-t border-emerald-900/50">
      
      {/* Top Banner Accent */}
      <div className="bg-emerald-900/30 border-b border-emerald-900/20 py-6 text-center text-xs sm:text-sm font-mono tracking-wide text-[#B2CBB8] font-medium font-bold">
        ✨ 100% Homemade Cakes & Desserts • Preservative Free • Custom Baked on Demand ✨
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Logo & Vibe description line (md:col-span-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-full bg-emerald-900 flex items-center justify-center border border-emerald-800">
                <Cake className="h-5 w-5 text-emerald-300" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                {BAKERY_INFO.name}
              </span>
            </div>
            
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Anjana’s boutique home baking kitchen in Nileshwar, Kerala. We customize celebration cakes, creamy desserts, and seasonal delicacies with fresh local treasures, making family functions more beautiful.
            </p>

            <p className="text-[11px] text-emerald-400 font-mono">
              ★ Perfect 5.0 Continuous Score based on Google Maps records.
            </p>
          </div>

          {/* Quick specs / Directory (md:col-span-3) */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-serif font-bold text-white text-sm tracking-wider uppercase">Contact Channels</h5>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-300 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Koodu, Ganapathiyar Temple Road, Palayi Rd, Nileshwar, Kerala</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>+91 98471 23456</span>
              </li>
            </ul>
          </div>

          {/* Guidelines disclaimer (md:col-span-4) */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-serif font-bold text-white text-sm tracking-wider uppercase">Ordering Info</h5>
            <p className="text-stone-300 text-xs leading-relaxed">
              We operate exclusively on pre-orders to guarantee maximum freshness. Orders built on this website compile automatically to copyable messages, opening a secure direct WhatsApp chat with Baker Anjana. Pickups occur directly at Koodu or via local transport coordinates.
            </p>
            <div className="text-[10px] text-stone-400 bg-emerald-900/10 p-3 rounded-lg border border-emerald-900/30">
              📌 This is the official showcase website for Hommade Delights, Nileshwar, Kerala. All verified rating databases are simulated using browser LocalStorage for customer interaction.
            </div>
          </div>

        </div>

        {/* Bottom copyright detail line */}
        <div className="pt-12 mt-12 border-t border-[#132218] flex flex-col sm:flex-row items-center justify-between gap-6 text-stone-400 text-xs font-mono font-medium">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} Hommade Delights Nileshwar. All rights reserved.
            </div>
            <div className="text-[10px] text-stone-400/85 pt-1">
              Developed by- <span className="text-stone-200 font-semibold">Adithyadev.M</span>
            </div>
            <div className="text-[9px] text-emerald-400/80 tracking-wider">
              Bespoke Web Design & Interactive Engineering
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 text-[#E66270] fill-[#E66270]" />
            <span>& vanilla cream in Kerala</span>
          </div>
          <div>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="text-emerald-400 hover:text-white transition-colors duration-200 uppercase tracking-wider text-[11px]"
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
