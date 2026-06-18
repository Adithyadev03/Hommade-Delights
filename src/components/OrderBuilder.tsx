/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Cake, ShoppingBag, Send, Copy, Check, Calendar, Clock, DollarSign, Gift, ToggleLeft, User, Phone } from 'lucide-react';
import { BAKERY_INFO, SHAPES_LIST, FROSTING_STYLES, MENU_ITEMS } from '../data';
import { CustomOrderOptions } from '../types';

// Helper to calculate future date string for date-picker default and validation (today + offset Days)
const getFutureDateString = (offsetDays = 2) => {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().split('T')[0];
};

interface OrderBuilderProps {
  preselectedFlavor: string;
}

export default function OrderBuilder({ preselectedFlavor }: OrderBuilderProps) {
  // Setup initial form status
  const [formData, setFormData] = useState<CustomOrderOptions>({
    flavor: preselectedFlavor || (MENU_ITEMS[0]?.name || 'White Forest Cake'),
    size: '1 Kg',
    shape: 'Round',
    message: '',
    frostingStyle: 'Smooth / Minimal',
    customerName: '',
    customerPhone: '',
    deliveryDate: getFutureDateString(2),
    deliveryTime: 'Evening (4 PM - 8 PM)',
    notes: ''
  });

  const [estimatedPrice, setEstimatedPrice] = useState(700);
  const [copied, setCopied] = useState(false);
  const [successSent, setSuccessSent] = useState(false);

  // Sync preselected flavor
  useEffect(() => {
    if (preselectedFlavor) {
      setFormData(prev => ({ ...prev, flavor: preselectedFlavor }));
    }
  }, [preselectedFlavor]);

  const selectedItem = MENU_ITEMS.find(item => item.name === formData.flavor);

  // Synchronize size options and value when switching between cakes and boxed treats
  useEffect(() => {
    if (!selectedItem) return;
    const isBoxItem = selectedItem.category === 'brownies' || selectedItem.category === 'specialty';
    if (isBoxItem && !formData.size.includes('Box')) {
      setFormData(prev => ({ ...prev, size: '1 Box' }));
    } else if (!isBoxItem && formData.size.includes('Box')) {
      setFormData(prev => ({ ...prev, size: '1 Kg' }));
    }
  }, [formData.flavor, selectedItem]);

  // Calculate dynamic estimated price range
  useEffect(() => {
    let basePrice = 700;
    let isDualWeight = true;

    if (selectedItem) {
      isDualWeight = !!selectedItem.price500g;
      if (formData.size === '0.5 Kg' && selectedItem.price500g) {
        basePrice = selectedItem.price500g;
      } else {
        basePrice = selectedItem.price1kg;
      }
    } else {
      // Fallback for custom requests
      basePrice = 800;
    }

    let multiplier = 1.0;
    if (formData.size.includes('3')) multiplier = 3.0;
    else if (formData.size.includes('2')) multiplier = 2.0;
    else if (formData.size.includes('1.5')) multiplier = 1.5;
    else if (formData.size.includes('0.5')) multiplier = isDualWeight ? 1.0 : 0.5;
    else if (formData.size.includes('1')) multiplier = 1.0;

    let calculated = Math.round(basePrice * multiplier);
    setEstimatedPrice(calculated);
  }, [formData.flavor, formData.size, selectedItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Compose gorgeous WhatsApp text
  const getWhatsAppMessageText = () => {
    const items = [
      `🍰 *NEW CAKE ORDER - HOMMADE DELIGHTS* 🍰`,
      `=============================`,
      `👩‍🍳 *Baker:* Anjana`,
      `🏡 *Bakery:* Nileshwar, Kerala`,
      ``,
      `👤 *Customer Name:* ${formData.customerName || 'Pending'}`,
      `📞 *Phone:* ${formData.customerPhone || 'Pending'}`,
      ``,
      `🎂 *CAKE SPECIFICATIONS:*`,
      `-----------------------------`,
      `• *Flavor Select:* ${formData.flavor}`,
      `• *Cake Size:* ${formData.size}`,
      `• *Shape:* ${formData.shape}`,
      `• *Frosting Design Style:* ${formData.frostingStyle}`,
      `• *Custom Inscription on Cake:* "${formData.message || 'None'}"`,
      ``,
      `📅 *LOGISTICS:*`,
      `-----------------------------`,
      `• *Date Needed:* ${formData.deliveryDate || 'Not specified'}`,
      `• *Preferred Window:* ${formData.deliveryTime}`,
      formData.notes ? `• *Special Notes:* ${formData.notes}` : null,
      ``,
      `💵 *ESTIMATED QUOTATION:*`,
      `-----------------------------`,
      `💰 *Approximate cost:* ₹${estimatedPrice} INR*`,
      `_(Price may adjust based on extreme decorations or floral additions)_`,
      `=============================`,
      `📱 _Generated via Hommade Delights Web Assistant_`
    ].filter(line => line !== null);

    return items.join('\n');
  };

  const encodedMessage = encodeURIComponent(getWhatsAppMessageText());
  // Base WhatsApp dispatch URL using the listed Kerala phone number
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${BAKERY_INFO.whatsapp}&text=${encodedMessage}`;

  const handleCopyClipboard = () => {
    navigator.clipboard.writeText(getWhatsAppMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmitWhatsApp = () => {
    setSuccessSent(true);
  };

  return (
    <section id="order" className="py-20 lg:py-28 bg-[#FAF9F5] relative border-y border-stone-200/45">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-stone-100/80 text-emerald-900 rounded-full text-xs font-semibold uppercase tracking-wider border border-stone-200/60">
            <Cake className="h-4.5 w-4.5 text-emerald-700" />
            <span>Interactive Designer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950">
            Build Your Customized Masterpiece
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Select your preferred layers, size, and design details below. Our real-time price preview calculates an instant estimate. When fully satisfied, dispatch it directly to Anjana's WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Input Customization forms (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100/60 space-y-8">
            <h3 className="font-serif text-xl font-bold text-emerald-950 pb-4 border-b border-stone-100 flex items-center space-x-2">
              <ShoppingBag className="h-5.5 w-5.5 text-emerald-800" />
              <span>Customize Order Details</span>
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Category 1: Base Specs */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-widest text-emerald-800/80 font-bold">1. Select Cake Base</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Flavor Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Select Main Flavor</label>
                    <select
                      name="flavor"
                      value={formData.flavor}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-3 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer font-medium"
                    >
                      {MENU_ITEMS.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name} {item.price500g ? `(₹${item.price1kg}/Kg)` : `(₹${item.price1kg})`}
                        </option>
                      ))}
                      <option value="Custom Bespoke Flavor">Custom Request (Specify in Notes)</option>
                    </select>
                  </div>

                  {/* Size Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Portion / Weight Size</label>
                    <select
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-3 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer font-medium"
                    >
                      {selectedItem && (selectedItem.category === 'brownies' || selectedItem.category === 'specialty') ? (
                        <>
                          <option value="1 Box">1 Box ({selectedItem.unitName})</option>
                          <option value="2 Boxes">2 Boxes ({parseInt(selectedItem.unitName) ? parseInt(selectedItem.unitName) * 2 : ''} pieces)</option>
                          <option value="3 Boxes">3 Boxes ({parseInt(selectedItem.unitName) ? parseInt(selectedItem.unitName) * 3 : ''} pieces)</option>
                        </>
                      ) : (
                        <>
                          <option value="0.5 Kg">0.5 Kg (Perfect for small group of 3-4)</option>
                          <option value="1 Kg">1 Kg (Standard Family Celebration)</option>
                          <option value="1.5 Kg">1.5 Kg (Larger Anniversary size)</option>
                          <option value="2 Kg">2.0 Kg (Double Decker Setup)</option>
                          <option value="3 Kg">3.0 Kg (Grand Event Tier)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Cake Base Shape</label>
                  <select
                    name="shape"
                    value={formData.shape}
                    onChange={handleChange}
                    className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-3 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer font-medium"
                  >
                    {SHAPES_LIST.map((sh, idx) => (
                      <option key={idx} value={sh}>{sh}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Category 2: Aesthetics / Design coating */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-emerald-800/80 font-bold">2. Visual Aesthetics & Inscription</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Frosting Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Frosting Texture Coating</label>
                    <select
                      name="frostingStyle"
                      value={formData.frostingStyle}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-3 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer font-medium"
                    >
                      {FROSTING_STYLES.map((fs, idx) => (
                        <option key={idx} value={fs.name}>{fs.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input info */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Written Message On Cake</label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g., Happy 25th Anniversary Amma & Acha!"
                      className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-2.5 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Category 3: Contact & Delivery logistics */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs uppercase font-mono tracking-widest text-emerald-800/80 font-bold">3. Contact Info & Date Log</h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Your Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Shilpa Nair"
                        className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 pl-9 pr-3 py-2.5 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Customer Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Contact/WhatsApp Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
                      <input
                        type="tel"
                        name="customerPhone"
                        value={formData.customerPhone}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 9847XXXXXX"
                        className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 pl-9 pr-3 py-2.5 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Delivery Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Required Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-stone-400" />
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        min={getFutureDateString(1)}
                        required
                        className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 pl-9 pr-3 py-2.5 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Delivery Time Option */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-700">Delivery/Pickup Window</label>
                    <select
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleChange}
                      className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-2.5 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all cursor-pointer font-medium"
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes info */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-700">Special Requests / Colors / Reference Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g. Please add pastel pink details, ribbon base. Keep sugar low. Prepare for pickup."
                    className="w-full text-sm rounded-xl border border-stone-200 bg-stone-50/50 p-3 text-stone-800 outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium resize-none"
                  ></textarea>
                </div>
              </div>

            </form>
          </div>

          {/* Right: Recipe Card Preview & Pricing Summary (lg:col-span-12 or 5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* The Handwritten Style Recipe Order Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-md border-2 border-stone-200/60 relative overflow-hidden text-stone-800">
              
              {/* Bakery subtle line pattern background */}
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>
              
              {/* Receipts details */}
              <div className="space-y-6 pt-2">
                <div className="text-center space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#2E4E3A] font-bold">Official Booking slip</span>
                  <h4 className="font-serif text-2xl font-semibold text-emerald-950">Hommade Delights</h4>
                  <p className="text-[10px] font-mono text-stone-500">Nileshwar, Kasaragod, KL</p>
                </div>

                <div className="border-t border-b border-dashed border-stone-300 py-4 space-y-3 font-mono text-xs text-stone-700">
                  <div className="flex justify-between">
                    <span>BOOKING DATE:</span>
                    <span>{new Date().toLocaleDateString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CUSTOMER:</span>
                    <span className="font-semibold text-emerald-900 truncate max-w-44 text-right">
                      {(formData.customerName || 'Draft Guest').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>HANDLERS:</span>
                    <span>BAKER ANJANA</span>
                  </div>
                </div>

                {/* Selected Specifications list */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Selected Item:</span>
                    <span className="font-semibold text-stone-900 text-right text-xs sm:text-sm">{formData.flavor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Size / Portion:</span>
                    <span className="font-semibold text-stone-900">{formData.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Shape Choice:</span>
                    <span className="font-semibold text-stone-900">{formData.shape}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Frosting Look:</span>
                    <span className="font-semibold text-stone-900">{formData.frostingStyle}</span>
                  </div>

                  <div className="border-t border-stone-200/70 pt-3">
                    <span className="block text-xs text-stone-500">Inscribed Banner Message:</span>
                    <p className="text-stone-900 text-xs italic mt-1 bg-white p-2 rounded-lg border border-dashed border-stone-200">
                      "{formData.message || 'No inscription requested'}"
                    </p>
                  </div>
                </div>

                {/* Total dynamic Estimation panel */}
                <div className="bg-emerald-100/40 rounded-2xl p-4 border border-emerald-100 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-stone-500 uppercase tracking-wider">Estimated Quote</span>
                    <span className="font-serif text-2xl font-bold text-emerald-950">₹{estimatedPrice}</span>
                  </div>
                  <div className="text-right text-[10px] font-mono text-stone-500 max-w-44 leading-relaxed">
                    *Approximate Home Rate. Pay via UPI/Cash upon collection.
                  </div>
                </div>

                {/* Dispatch guidelines */}
                <div className="space-y-3 pt-2">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleCopyClipboard}
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border border-stone-300 text-stone-700 bg-white hover:bg-stone-50 text-xs font-semibold transition-all shadow-xs"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-600" />
                          <span className="text-emerald-700">Copied Slip!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-stone-500" />
                          <span>Copy Order Text</span>
                        </>
                      )}
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleSubmitWhatsApp}
                      className="flex-3 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-800/20 text-xs font-bold transition-all text-center"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send to Anjana</span>
                    </a>
                  </div>

                  {successSent && (
                    <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs font-medium border border-emerald-100 text-center animate-pulse">
                      🎉 Inquiry text prepared! WhatsApp has been opened in a new tab. Anjana will confirm availability and payment details soon.
                    </div>
                  )}
                </div>

              </div>
              
              {/* Elegant paper jagged edge effect */}
              <div className="absolute -bottom-1 left-0 right-0 flex justify-around">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-[#FAF9F5] rounded-full transform translate-y-2"></div>
                ))}
              </div>

            </div>

            {/* Quick guide helper */}
            <div className="bg-white rounded-2xl p-5 border border-emerald-100/70 shadow-xs flex items-start gap-3">
              <Gift className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-stone-600 space-y-1.5">
                <p className="font-semibold text-emerald-950">How home-ordering works:</p>
                <p>1. Fill out your requirements (preferred date is necessary!).</p>
                <p>2. Direct message (WhatsApp) dispatch starts the secure pricing review.</p>
                <p>3. Baker Anjana reviews your design notes and confirms booking schedule within a day.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
