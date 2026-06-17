/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Sparkles, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { BAKERY_INFO } from '../data';

export default function AboutSection() {
  const pillars = [
    {
      title: "100% Home Kitchen Baked",
      desc: "Every single order is hand-baked in Anjana's clean, certified home culinary workspace in Nileshwar, fresh from scratch."
    },
    {
      title: "No Added Preservatives",
      desc: "Our creations contain absolutely zero chemical helpers or pre-mixes. We use authentic pure butter, high-fat cream, and real fruits."
    },
    {
      title: "Customized Memories",
      desc: "Whether a grand wedding in TVM, a memory in Nileshwar, or kids' birthdays, each cake is fully customized in color, message, and form."
    },
    {
      title: "Local Kerala Touch",
      desc: "We infuse local treasures, specially hand-scooped fresh tender coconut (Karikku) directly from local gardens."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-[#FDFDFB] to-stone-100/30 relative overflow-hidden">
      {/* Decorative Warm Accents */}
      <div className="absolute top-20 -left-48 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 -right-48 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Visual Stacking Gallery */}
          <div className="lg:col-span-5 space-y-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
                alt="Chef Anjana preparing fresh cake frosting" 
                className="w-full h-80 lg:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <span className="text-xs uppercase font-mono tracking-widest text-[#B2CBB8] font-medium">Meet the Baker</span>
                <p className="font-serif text-lg font-semibold">Anjana</p>
                <p className="text-xs text-stone-200">Founder & Chief Cake Designer</p>
              </div>
            </div>

            {/* Little floating ribbon badge */}
            <div className="absolute -bottom-4 -right-4 bg-emerald-800 text-white p-4.5 rounded-2xl shadow-xl border-2 border-white max-w-48 text-center rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="block text-2xl font-bold font-serif text-emerald-250">7+</span>
              <span className="block text-[10px] uppercase font-mono tracking-widest font-semibold leading-tight mt-1 text-stone-100">
                Years of Sweet Perfection
              </span>
            </div>
            
            {/* Secondary atmospheric image */}
            <div className="hidden sm:block absolute -top-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-lg border-2 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
              <img 
                src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80" 
                alt="Fresh high quality baking raw ingredients" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: About Narratives */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-100/70 text-emerald-900 rounded-full text-xs font-semibold uppercase tracking-wider border border-emerald-200/50">
                <Heart className="h-3.5 w-3.5 text-rose-600 fill-rose-600 animate-pulse" />
                <span>Our Bakery Journey</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-950 tracking-tight leading-tight">
                Continuing the Sweet Magic in Nileshwar
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                Anjana’s passion for baking started 7 years ago as a small, specialized home venture. While serving premium events and milestone occasions, she developed a sterling reputation for absolute reliability and taste. Initially baking in <span className="font-semibold text-emerald-900 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">TVM (Thiruvananthapuram)</span>, she delivered iconic parent anniversary cakes and customized birthday specials that became central to family memories.
              </p>
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                Now operating from <span className="font-semibold text-emerald-900 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">Nileshwar, Kerala</span> on Ganapathiyar Temple Road, Anjana continues to cast her sweet spells. Each cake is designed individually, matching client custom visions with absolute moist cake texture and stunning clean decor.
              </p>
            </div>

            {/* Structured pillars bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-3 hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-5.5 w-5.5 text-emerald-750" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-emerald-950 text-sm sm:text-base">{pillar.title}</h4>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5 leading-normal">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Accent */}
            <div className="pt-6 border-t border-stone-200/50 flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-stone-100/60 border border-stone-200/50 flex items-center justify-center">
                <Award className="h-5 w-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-widest font-mono">Baking Credential</p>
                <p className="text-sm font-semibold text-stone-800">★ Perfect 5.0 Continuous Rating based on verified local reviews</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
