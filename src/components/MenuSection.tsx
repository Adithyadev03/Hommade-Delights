/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cake, Sparkles, Filter, ChevronRight, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { CakeCategory, CakeItem } from '../types';

interface MenuSectionProps {
  onSelectFlavor: (flavorName: string) => void;
}

export default function MenuSection({ onSelectFlavor }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory | 'all'>('all');

  const categories: { key: CakeCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Items' },
    { key: 'fresh_cream', label: 'Fresh Cream' },
    { key: 'velvet', label: 'Velvet Cakes' },
    { key: 'fruit', label: 'Fruit Cakes' },
    { key: 'truffle', label: 'Truffles' },
    { key: 'chocolate_sponge', label: 'Chocolate Sponge' },
    { key: 'vanilla_sponge', label: 'Vanilla Sponge' },
    { key: 'tres_leches', label: 'Tres Leches' },
    { key: 'brownies', label: 'Brownies' },
    { key: 'dream_cakes', label: 'Dream Cakes' },
    { key: 'cakes_desserts', label: 'Cakes & Desserts' },
    { key: 'specialty', label: 'Specialty Items' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-[#FAF9F5] rounded-full text-[11px] font-mono tracking-wider text-emerald-800 uppercase border border-stone-200">
            <Sparkles className="h-3 w-3 text-emerald-600" />
            <span>Handcrafted Delicacies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950">
            Our Digital Dessert Cabinet
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Every creation is prepared on-demand, guaranteeing that your baked delights are moist, fresh, and visually stunning. Explore our signature flavors.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-950/20 scale-102'
                  : 'bg-stone-50 hover:bg-[#FAF9F5] text-stone-700 hover:text-emerald-950 border border-stone-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredItems.map((item) => {
            return (
              <div 
                key={item.id} 
                className="group bg-stone-50/50 rounded-2xl overflow-hidden border border-emerald-100/55 hover:border-emerald-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                
                {/* Product Image Stage */}
                <div className="relative overflow-hidden aspect-video bg-stone-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    {item.isPopular && (
                      <span className="bg-emerald-800 text-emerald-50 text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm self-start">
                        Bestseller 🔥
                      </span>
                    )}
                    {item.isSeasonal && (
                      <span className="bg-amber-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm self-start">
                        {item.name.toLowerCase().includes('rum') || item.name.toLowerCase().includes('christmas')
                          ? 'Christmas Special 🎄'
                          : 'Seasonal Special 🥭'}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-emerald-950 text-xs font-mono font-bold px-3 py-1 rounded-lg shadow-xs">
                    {item.unitName}
                  </div>
                </div>

                {/* Product Content info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Flavor Chips */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {item.flavors.map((flavor, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center text-[10px] sm:text-xs text-emerald-800 bg-[#FAF9F5] px-2 py-0.5 rounded-md font-medium border border-stone-200/30"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-100/40 flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-0.5 text-left">
                      {item.price500g ? (
                        <>
                          <div className="text-xs font-medium text-stone-500">
                            500g: <span className="font-serif text-sm font-bold text-emerald-950">₹{item.price500g}</span>
                          </div>
                          <div className="text-xs font-medium text-stone-500">
                            1 Kg: <span className="font-serif text-sm font-bold text-emerald-950">₹{item.price1kg}</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-xs font-medium text-stone-500">
                          {item.unitName.includes('Kg') ? '1 Kg: ' : 'Price: '}<span className="font-serif text-base font-bold text-emerald-950">₹{item.price1kg}</span>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectFlavor(item.name)}
                      className="px-4 py-2 bg-emerald-100 hover:bg-emerald-800 text-emerald-950 hover:text-white rounded-xl text-xs font-semibold tracking-wide transition-all inline-flex items-center space-x-1"
                    >
                      <span>Order Custom</span>
                      <ChevronRight className="h-3 ml-0.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Footnote information */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 bg-stone-50/70 rounded-2xl border border-stone-200/50">
          <p className="text-xs text-emerald-900 leading-relaxed font-medium">
            💡 <strong>Special Designer Customization:</strong> Need something unique for weddings, theme parties, or custom cartoon shapes? We craft precise customized theme design coatings! Let Anjana know in your customization forms below.
          </p>
        </div>

      </div>
    </section>
  );
}
