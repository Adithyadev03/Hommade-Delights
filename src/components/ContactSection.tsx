/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, HelpCircle, ChevronRight, ChevronDown, Heart, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data';

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [zoomLevel, setZoomLevel] = useState(15);

  const faqs = [
    {
      q: "How far in advance should I place my order?",
      a: "For standard signature cakes (like Tender Coconut or Belgian Ganache) and cupcakes, place your order 1 to 2 days in advance. For customized multip-tier themes or wedding specialties, we highly recommend booking at least 5 days prior to allow Anjana to craft details from scratch."
    },
    {
      q: "Do you offer doorstep delivery in Nileshwar/Kasaragod?",
      a: "Most customers choose self-pickup from our home kitchen at Ganapathiyar Temple Road. However, we coordinate comfortable and safe home deliveries of delicate structures in and around Nileshwar, Cheruvathur, and Kanhangad for a minimal transport fee."
    },
    {
      q: "Are the cakes 100% eggless and suitable for vegetarians?",
      a: "Yes! We can bake 100% vegetarian/eggless variations for all of our recipes. They are prepared under strict hygienic conditions using separate, pristine bake-wares."
    },
    {
      q: "How does payment work for home bakes?",
      a: "No immediate payment is processed on this website. Once you build your design sheet and click 'Send to Anjana', she reviews the details on WhatsApp, confirms availability, and shares her Google Pay/UPI details. You can make an advance or full payment upon confirmation."
    }
  ];

  // Mock directions simulator
  const handleDirectionsClick = () => {
    window.open(BAKERY_INFO.mapDirectionsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-stone-50/20 to-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-[#FAF9F5] rounded-full text-[11px] font-mono tracking-wider text-emerald-800 uppercase border border-stone-200">
            <MapPin className="h-3 w-3 text-emerald-600" />
            <span>Nileshwar Location</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950">
            Visit Us or Get in Touch
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Find Hommade Delights right in the heart of Nileshwar, Kerala. Drop by to pick up your customized sweet boxes, or ask any questions through our helper guidelines below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Address & Mock Interactive Map (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Cards Info */}
            <div className="bg-white rounded-3xl p-6 shadow-xs border border-emerald-100/70 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address details */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-emerald-800">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-xs uppercase font-mono tracking-widest font-bold">Our Kitchen Address</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  {BAKERY_INFO.address}
                </p>
                <div className="pt-1.5">
                  <span className="inline-block text-[10px] font-mono text-stone-500 font-bold bg-stone-100 px-2 py-0.5 rounded">
                    📍 Near Ganapathiyar Temple
                  </span>
                </div>
              </div>

              {/* Hours details */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-emerald-800">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <span className="text-xs uppercase font-mono tracking-widest font-bold">Kitchen Timings</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 font-medium">
                  Monday to Sunday
                  <span className="block font-serif text-lg text-emerald-950 font-bold mt-1">10:00 AM - 8:00 PM</span>
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-700 font-bold flex items-center space-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span>Active & Baking Today</span>
                </div>
              </div>

            </div>

            {/* Custom Interactive Mock Map component */}
            <div className="bg-[#EFEBE4] rounded-3xl overflow-hidden shadow-md border-2 border-white relative h-80 sm:h-96 group">
              
              {/* Map grid representation */}
              <div className="absolute inset-0 p-4 select-none overflow-hidden flex flex-col justify-between">
                
                {/* SVG Mocking Paleyi Road & Temple Road layout */}
                <svg className="absolute inset-0 w-full h-full text-stone-400 opacity-60" xmlns="http://www.w3.org/2000/svg">
                  {/* Background grid */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect width="40" height="40" fill="none" />
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D1C7BD" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Rivers / Green landscape boundaries */}
                  <path d="M -50,150 Q 150,220 500,280" fill="none" stroke="#C4DEC9" strokeWidth="32" strokeLinecap="round" />
                  
                  {/* Roads representation */}
                  {/* Palayi Road */}
                  <path d="M -20,120 L 550,120" fill="none" stroke="#FAF8F5" strokeWidth="20" />
                  <path d="M -20,120 L 550,120" fill="none" stroke="#E6E0D4" strokeWidth="2" strokeDasharray="5,5" />
                  
                  {/* Ganapathiyar Temple Road */}
                  <path d="M 260,110 L 260,400" fill="none" stroke="#FAF8F5" strokeWidth="16" />
                  
                  {/* Nileshwar rail line */}
                  <path d="M 420,-10 C 390,100 440,320 460,450" fill="none" stroke="#A8A29A" strokeWidth="3" />
                  <path d="M 420,-10 C 390,100 440,320 460,450" fill="none" stroke="#A8A29A" strokeWidth="7" strokeDasharray="1,6" />
                </svg>

                {/* Simulated Landmarks tags */}
                <div className="absolute top-[85px] left-8 transform -rotate-1 font-mono text-[9px] font-bold text-stone-500 bg-white/80 px-1.5 py-0.5 rounded shadow-xs border border-stone-200">
                  Palayi Road
                </div>

                <div className="absolute top-[220px] left-[280px] font-mono text-[9px] font-bold text-stone-500 bg-white/80 px-1.5 py-0.5 rounded shadow-xs border border-stone-200">
                  Ganapathiyar Temple Road
                </div>

                {/* Ganapathiyar Temple pin indicator */}
                <div className="absolute top-[280px] left-[150px] flex flex-col items-center">
                  <div className="h-6.5 w-6.5 rounded-full bg-emerald-600 shadow-md flex items-center justify-center border border-white">
                    <span className="text-[10px] text-white">⛩️</span>
                  </div>
                  <span className="text-[8px] font-bold text-stone-600 bg-white/90 px-1.5 py-0.5 rounded shadow-xs border border-stone-100 mt-1">
                    Ganapathiyar Temple
                  </span>
                </div>

                {/* Hommade Delights Main Pin Indicator (Wobbling with ring pulse) */}
                <div className="absolute top-[180px] left-[225px] flex flex-col items-center z-10">
                  
                  {/* Ping animation rings */}
                  <span className="absolute h-8 w-8 rounded-full bg-rose-500/30 animate-ping -top-1.5"></span>
                  
                  {/* Main Baker Pin */}
                  <div className="h-10 w-10 rounded-full bg-rose-600 shadow-lg flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-5.5 w-5.5 text-white fill-white" />
                  </div>

                  <div className="text-[10px] font-bold text-rose-950 bg-rose-50 px-2.5 py-1 rounded-full shadow-sm border border-rose-200 mt-1.5 whitespace-nowrap">
                    🍰 Hommade Delights (Koodu)
                  </div>
                </div>

              </div>

              {/* Map controls bottom overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-2xl flex items-center justify-between border border-emerald-100 shadow-sm z-20">
                <div className="space-y-0.5">
                  <span className="block text-[9px] font-mono text-emerald-800 uppercase tracking-widest font-bold">Reputable Destination</span>
                  <p className="text-xs text-emerald-950 font-bold truncate max-w-44 sm:max-w-72">Near Palayi Road, Nileshwar</p>
                </div>

                <button
                  type="button"
                  onClick={handleDirectionsClick}
                  className="px-4 py-2 bg-emerald-850 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shadow-sm transition-all inline-flex items-center space-x-1.5"
                >
                  <Navigation className="h-3.5 w-3.5 fill-white" />
                  <span>Navigate</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: FAQ Accordion Lists (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-emerald-950">
              <HelpCircle className="h-6 w-6 text-emerald-800" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-xs hover:border-emerald-100 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-emerald-950 text-sm sm:text-base hover:bg-[#FAF9F5]/50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronDown className="h-5 w-5 text-emerald-850 transform rotate-180 transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-emerald-600/80 transition-transform duration-300" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-stone-50 text-stone-600 text-xs sm:text-sm leading-relaxed bg-[#FAF9F5]/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Instagram/Contact handle helper */}
            <div className="bg-stone-50/60 rounded-2xl p-6 border border-stone-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h5 className="font-serif font-bold text-emerald-950 text-sm sm:text-base">Have alternate designs or event themes?</h5>
                <p className="text-stone-500 text-xs">Reach out to share reference cake photos directly!</p>
              </div>

              <div className="flex gap-2">
                <a 
                  href={`https://instagram.com/${BAKERY_INFO.instagram}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 border border-emerald-200 hover:bg-emerald-100/30 text-emerald-900 rounded-xl text-xs font-semibold font-mono transition-all"
                >
                  📸 @hommade_delights
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
