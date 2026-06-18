/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Eye, X, Calendar, ArrowRight, CheckCircle, Cake, Camera } from 'lucide-react';

interface CustomCakeItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  baseFlavor: string;
  story: string;
}

interface CustomCakesGalleryProps {
  onSelectFlavor: (flavorName: string) => void;
}

export default function CustomCakesGallery({ onSelectFlavor }: CustomCakesGalleryProps) {
  const [selectedCake, setSelectedCake] = useState<CustomCakeItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const customCakes: CustomCakeItem[] = Array.from({ length: 34 }, (_, index) => {
    const idNum = index + 1;
    const isJpeg = idNum === 1;
    const imageSuffix = isJpeg ? 'jpeg' : 'jpg';
    
    // Distribute flavors and tags to make the filters interactive and realistic
    const patterns = [
      { flavor: "Red Velvet Cake", tags: ["Velvet Cakes"], name: "Velvet Crimson" },
      { flavor: "Oreo Cake", tags: ["Chocolate Sponge"], name: "Cookies & Cream" },
      { flavor: "Blue Velvet Cake", tags: ["Velvet Cakes"], name: "Blue Velvet Classic" },
      { flavor: "Butterscotch Cake", tags: ["Fresh Cream"], name: "Butterscotch Gold" },
      { flavor: "Pink Velvet Cake", tags: ["Velvet Cakes"], name: "Blush Pink Velvet" },
      { flavor: "White Forest Cake", tags: ["Fresh Cream"], name: "White Forest Shavings" },
      { flavor: "White Chocolate Truffle Cake", tags: ["Truffles"], name: "White Truffle Ganache" },
      { flavor: "Red Velvet Cake", tags: ["Birthday Specials"], name: "Red Velvet Cupcake" },
    ];
    
    const meta = patterns[index % patterns.length];
    
    // Explicit overrides for user selected items: 1, 2, and 23
    const tags = (idNum === 1 || idNum === 2 || idNum === 23) 
      ? ["Birthday Specials"] 
      : meta.tags;

    return {
      id: `cc-photo-${idNum}`,
      name: `Custom Creation #${idNum}`,
      image: `/${idNum}.${imageSuffix}`,
      description: "",
      tags: tags,
      baseFlavor: meta.flavor,
      story: ""
    };
  });

  const filters = ["All", "Velvet Cakes", "Fresh Cream", "Chocolate Sponge", "Truffles", "Birthday Specials"];

  const filteredCakes = activeFilter === 'All'
    ? customCakes
    : customCakes.filter(cake => cake.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()) || cake.tags.includes(activeFilter));

  const handleInquire = (cakeName: string, baseFlavor: string) => {
    setSelectedCake(null);
    onSelectFlavor(baseFlavor);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF9F5]/70 relative border-b border-stone-200/40">
      <div className="absolute top-0 left-10 w-72 h-72 bg-rose-100/35 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white rounded-full text-[11px] font-mono tracking-wider text-emerald-800 uppercase border border-stone-250/50 shadow-2xs">
            <Camera className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
            <span>Actual Home Creations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950">
            Anjana's Custom Showcase
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto">
            These are real-life, unedited photos of custom orders crafted inside our home kitchen. Click any masterpiece to inspect how it was designed, read the story behind it, and order your custom variant.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto">
          {filters.map((fl) => (
            <button
              key={fl}
              type="button"
              onClick={() => setActiveFilter(fl)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === fl
                  ? 'bg-emerald-800 text-white shadow-md shadow-emerald-950/20 scale-102'
                  : 'bg-white hover:bg-[#FAF9F5] text-stone-700 hover:text-emerald-950 border border-stone-200/80 shadow-2xs'
              }`}
            >
              {fl}
            </button>
          ))}
        </div>

        {/* Custom Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              onClick={() => setSelectedCake(cake)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative aspect-square"
            >
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 font-sans"
                referrerPolicy="no-referrer"
              />

              {/* Minimal elegant floating tag on bottom left, fades out on hover */}
              <span className="absolute bottom-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-md text-[9px] font-mono text-emerald-900 font-bold tracking-wider uppercase px-2 py-0.5 rounded shadow-2xs transition-opacity duration-300 group-hover:opacity-0 z-10">
                {cake.tags[0]}
              </span>

              {/* Glowing camera/inspect indicator top right */}
              <div className="absolute top-3 right-3 bg-white/80 p-1.5 rounded-full shadow-2xs z-10">
                <Camera className="h-3.5 w-3.5 text-stone-600 group-hover:text-rose-500 transition-colors" />
              </div>

              {/* Full Hover overlay with a smooth gradient, title and view action */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block text-[9px] font-mono text-emerald-300 font-bold tracking-widest uppercase">
                    {cake.baseFlavor}
                  </span>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white leading-tight">
                    {cake.name}
                  </h3>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#FAF9F5]/90 font-medium font-mono">
                    <span>Inspect Details</span>
                    <ArrowRight className="h-3.5 w-3.5 text-rose-300" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state details */}
        {filteredCakes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-stone-200/50 p-8 max-w-lg mx-auto">
            <Cake className="h-10 w-10 text-stone-300 mx-auto mb-3" />
            <p className="text-stone-600 font-medium">No custom showcase items in this filter category yet.</p>
            <p className="text-stone-400 text-xs mt-1">Anjana is constantly uploading her latest designs! Select another category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal overlay view */}
      {selectedCake && (
        <div 
          className="fixed inset-0 bg-[#121A15]/85 backdrop-blur-sm z-[200] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCake(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-xl w-full relative animate-in zoom-in-95 duration-230 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close absolute button */}
            <button
              onClick={() => setSelectedCake(null)}
              type="button"
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/85 text-white rounded-full p-2 z-[210] hover:scale-105 transition-all outline-none"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Picture Container */}
            <div className="relative bg-stone-100 aspect-square w-full">
              <img
                src={selectedCake.image}
                alt={selectedCake.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#121A15]/80 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full shadow-xs font-bold">
                📷 Creation #{selectedCake.id.replace('cc-photo-', '')}
              </div>
            </div>

            {/* Bottom info section - ultra clean typography */}
            <div className="p-6 bg-white space-y-2 border-t border-stone-100">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {selectedCake.tags[0]}
                </span>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest font-semibold">
                  Flavor: {selectedCake.baseFlavor}
                </span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-emerald-950">
                {selectedCake.name}
              </h3>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
