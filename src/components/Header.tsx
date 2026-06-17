/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Clock, Cake, Star, ArrowRight } from 'lucide-react';
import { BAKERY_INFO } from '../data';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Our Story' },
    { id: 'menu', label: 'Dessert Menu' },
    { id: 'order', label: 'Design Your Cake' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Find Us' }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FDFDFB]/95 backdrop-blur-md shadow-sm border-b border-stone-200/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            type="button"
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2 text-left group"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 group-hover:scale-105 transition-transform duration-300">
                <Cake className="h-5.5 w-5.5 text-emerald-700" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-emerald-500 animate-pulse" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-emerald-950">
                {BAKERY_INFO.name}
              </span>
              <span className="block text-[10px] uppercase font-mono tracking-widest text-emerald-700 font-medium">
                Artisanal Home Bakery
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-emerald-900 bg-emerald-100/85'
                    : 'text-emerald-800/80 hover:text-emerald-950 hover:bg-stone-100/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-medium border border-emerald-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Clock className="h-3.5 w-3.5 text-emerald-600" />
              <span>{BAKERY_INFO.openMessage}</span>
            </div>

            <button
              onClick={() => handleNavClick('order')}
              type="button"
              className="inline-flex items-center space-x-1 px-4.5 py-2 rounded-full text-xs sm:text-sm font-medium text-white bg-emerald-800 hover:bg-emerald-900 shadow-md shadow-emerald-950/10 hover:shadow-lg transition-all"
            >
              <span>Order on WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-full text-[11px] font-medium border border-emerald-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <Clock className="h-3 w-3 text-emerald-600" />
              <span>{BAKERY_INFO.openMessage}</span>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-emerald-900 hover:bg-emerald-100/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FAF9F5]/98 backdrop-blur-lg border-b border-stone-200 shadow-lg px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-emerald-900 bg-emerald-100'
                    : 'text-emerald-800/80 hover:text-emerald-950 hover:bg-emerald-100/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-emerald-100/60 flex flex-col items-stretch space-y-3">
            <div className="flex items-center justify-between px-4 py-2 bg-emerald-100/35 rounded-xl">
              <span className="text-xs text-emerald-800 font-medium">Bakery Reputation</span>
              <div className="flex items-center font-bold text-emerald-800 text-sm">
                <Star className="h-4.5 w-4.5 fill-yellow-400 text-yellow-500 mr-1" />
                <span>5.0 / 5.0 (14 reviews)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('order')}
              className="w-full justify-center inline-flex items-center space-x-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md transition-all"
            >
              <Cake className="h-4.5 w-4.5" />
              <span>Customize & Order Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
