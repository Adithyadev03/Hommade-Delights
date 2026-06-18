/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Cake, Star, ArrowRight, Clock, Sparkles, MapPin, Heart, Shield, Award } from 'lucide-react';
import { BAKERY_INFO } from './data';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import OrderBuilder from './components/OrderBuilder';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import CustomCakesGallery from './components/CustomCakesGallery';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedFlavor, setSelectedFlavor] = useState('');

  // Handle smooth scroll clicks from Header
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Callback from menu card customization trigger
  const handleSelectFlavor = (flavorName: string) => {
    setSelectedFlavor(flavorName);
    // Smoothly scroll to order builder block
    handleNavigate('order');
  };

  // Intersection Observer to update active navigation dots
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'gallery', 'order', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (section === 'hero' && window.scrollY < 200) {
          setActiveSection('hero');
          continue;
        }

        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;

          if (scrollPosition >= top && scrollPosition <= bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans select-text select-none sm:select-text selection:bg-emerald-100 selection:text-emerald-950">
      
      {/* Decorative Warm Backgrop Grid */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="relative pt-28 pb-20 sm:pb-24 sm:pt-36 bg-linear-to-b from-stone-50/50 via-[#FAF9F5] to-[#FAF9F5] overflow-hidden"
        >
          {/* Subtle Bakery Art Circles */}
          <div className="absolute top-28 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#D4DFD7]/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left text column (lg:col-span-7) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Reputation Badging */}
                <div className="inline-flex flex-wrap justify-center lg:justify-start items-center gap-2 p-1 bg-emerald-50 rounded-full border border-emerald-100">
                  <div className="flex items-center space-x-1 px-3 py-1 bg-emerald-800 text-white rounded-full text-xs font-bold shadow-xs">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span>5.0 Star Rated Custom Cakes</span>
                  </div>
                  <span className="text-xs text-emerald-900 font-medium px-2 font-mono">
                    ({BAKERY_INFO.reviewsCount} Google Reviews)
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-emerald-950 leading-tight">
                    Artisanal home cakes <br />
                    <span className="text-emerald-800 italic font-normal">made beautiful</span> <br className="hidden sm:inline" />
                    and tasted perfect.
                  </h1>
                  
                  <p className="max-w-2xl mx-auto lg:mx-0 text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed select-text">
                    Welcome to <strong>{BAKERY_INFO.name}</strong>, Nileshwar's premier home kitchen led by baker <strong>Anjana</strong>. Celebrating 7 years of crafting premium, preservative-free celebration cakes, tender coconut specialties, and customized wedding masterpieces.
                  </p>
                </div>

                {/* Local Area coordinates */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-xs sm:text-sm text-stone-600 font-medium">
                  <div className="flex items-center space-x-1.5 bg-white px-3 py-2 rounded-xl border border-stone-200/50 shadow-xs">
                    <MapPin className="h-4 w-4 text-emerald-800" />
                    <span>Palayi,Nileshwaram</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white px-3 py-2 rounded-xl border border-stone-200/50 shadow-xs">
                    <Award className="h-4 w-4 text-emerald-800" />
                    <span>7+ Years Baking Pride</span>
                  </div>
                </div>

                {/* Call actions */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3.5 pt-2">
                  <button
                    onClick={() => handleNavigate('order')}
                    type="button"
                    className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md shadow-emerald-950/10 hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Design Your Celebration Cake</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleNavigate('menu')}
                    type="button"
                    className="px-8 py-3.5 rounded-full text-sm font-semibold text-stone-800 bg-white hover:bg-emerald-50/50 hover:text-emerald-900 border border-stone-200/80 transition-all text-center"
                  >
                    Explore Flavors Menu
                  </button>
                </div>

                {/* Trust mini-banner details */}
                <div className="pt-6 border-t border-stone-200/60 flex items-center justify-center lg:justify-start space-x-6 text-xs text-stone-500 font-medium font-mono">
                  <div className="flex items-center space-x-1.5">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span>No artificial pre-mixes</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Heart className="h-4 w-4 text-rose-500" />
                    <span>Baked fresh on order only</span>
                  </div>
                </div>

              </div>

               {/* Right visuals image column (lg:col-span-5) */}
              <div className="lg:col-span-5 block">
                <div className="relative mx-auto max-w-sm sm:max-w-md">
                  
                  {/* Outer circle frame helper */}
                  <div className="absolute -inset-4 bg-emerald-50 rounded-3xl -rotate-2 transform scale-102"></div>
                  
                  {/* Main premium cake picture */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-100">
                    <img 
                      src="cover.jpg" 
                      alt="Hommade Delights Signature elegant chocolate frosting layered cake" 
                      className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                    {/* Popular accent tag overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-emerald-100 shadow-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold">Birthday Specials</p>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-emerald-950">Made with love ❤️</h4>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-lg">
                          <Cake className="h-5 w-5 text-emerald-800" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tiny floating review sticker */}
                  <div className="absolute -top-6 -right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-100 max-w-44 rotate-6 hover:rotate-0 transition-transform duration-300 scale-90 sm:scale-100">
                    <div className="flex text-yellow-500 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[10px] text-stone-600 italic leading-snug">
                      "Moist texture and perfect consistency for 7 years!"
                    </p>
                    <span className="block text-[8px] font-mono text-emerald-800 font-semibold mt-1">
                      - Regular Client
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BRANDS PILLARS / ABOUT JOURNEY SECTION */}
        <AboutSection />

        {/* DESSERTS MENU CATALOG SECTION */}
        <MenuSection onSelectFlavor={handleSelectFlavor} />

        {/* CUSTOM CAKES GALLERY SHOWCASE */}
        <CustomCakesGallery onSelectFlavor={handleSelectFlavor} />

        {/* CUSTOM CAKE ORDER MODEL BUILDER */}
        <OrderBuilder preselectedFlavor={selectedFlavor} />

        {/* VERIFIED MAPS CUSTOMER REVIEWS */}
        <ReviewsSection />

        {/* MAP DIRECTIONS & FREQUENTLY ASKED QUESTIONS */}
        <ContactSection />

      </main>

      {/* FOOTER BRANDS */}
      <Footer />

    </div>
  );
}
