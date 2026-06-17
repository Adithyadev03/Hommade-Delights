/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Star, ThumbsUp, Share2, PenLine, Heart, Sparkles, MessageCircleCode } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data';
import { Review } from '../types';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  // Review form states
  const [authorName, setAuthorName] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<Record<string, boolean>>({});

  // Initialize from storage or defaults
  useEffect(() => {
    const saved = localStorage.getItem('hommade_delights_reviews');
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        setReviews(INITIAL_REVIEWS);
      }
    } else {
      setReviews(INITIAL_REVIEWS);
    }
  }, []);

  const saveReviews = (updatedReviews: Review[]) => {
    setReviews(updatedReviews);
    localStorage.setItem('hommade_delights_reviews', JSON.stringify(updatedReviews));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const colors = [
      'bg-indigo-100 text-indigo-800',
      'bg-amber-100 text-amber-800',
      'bg-emerald-100 text-emerald-800',
      'bg-rose-100 text-rose-800',
      'bg-cyan-100 text-cyan-800'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newReview: Review = {
      id: `local-${Date.now()}`,
      author: authorName,
      rating: formRating,
      text: reviewText,
      date: "Just now",
      avatarColor: randomColor,
      isLocal: true,
      response: {
        author: "Anjana (Owner)",
        text: "Thankyou so much for your kind words! ❤️ Happy to bake for you again.",
        date: "Just now"
      }
    };

    const newSet = [newReview, ...reviews];
    saveReviews(newSet);
    
    // Reset form
    setAuthorName('');
    setFormRating(5);
    setReviewText('');
    setShowForm(false);
  };

  const handleHelpfulToggle = (reviewId: string) => {
    if (voted[reviewId]) {
      // Undo
      setHelpfulVotes(prev => ({ ...prev, [reviewId]: (prev[reviewId] || 1) - 1 }));
      setVoted(prev => ({ ...prev, [reviewId]: false }));
    } else {
      // Add vote
      setHelpfulVotes(prev => ({ ...prev, [reviewId]: (prev[reviewId] || 0) + 1 }));
      setVoted(prev => ({ ...prev, [reviewId]: true }));
    }
  };

  // Compute stats helper
  const totalReviewsCount = 11 + reviews.length; // 11 old other reviews + our current visible list
  const averageRatingValue = 5.0; // They have a clean 5.0 perfect score!

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-stone-100/80 rounded-full text-[11px] font-mono tracking-wider text-emerald-800 uppercase border border-stone-200">
            <Heart className="h-3 w-3 text-rose-600 fill-rose-600" />
            <span>Community Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-955">
            Delighting Hearts For 7 Years
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Read what our wonderful, loyal customers have to say about Anjana's baking skills. We hold a perfect, continuous 5.0-star rating built on trust, consistency, and divine taste.
          </p>
        </div>

        {/* Reputation Dashboard Bento Grid / Box style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-100">
          
          {/* Average rating summary box (lg:col-span-4) */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-3 pb-6 lg:pb-0 lg:border-r border-stone-200/60 lg:pr-8">
            <div className="text-stone-500 font-mono text-xs uppercase tracking-wider">Overall Rating</div>
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <span className="font-serif text-5xl sm:text-6xl font-bold text-emerald-950">5.0</span>
              <div>
                <div className="flex text-amber-555 text-[#E6B15B]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#E6B15B]" />
                  ))}
                </div>
                <span className="text-xs text-stone-500 font-medium font-mono">{totalReviewsCount} Google Reviews</span>
              </div>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Based on continuous, verified client bookings across Thiruvananthapuram and Nileshwar, Kerala.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowForm(!showForm)}
                className="w-full lg:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl text-white bg-emerald-800 hover:bg-emerald-900 text-xs font-bold shadow-md shadow-emerald-950/10 transition-all font-sans"
              >
                <PenLine className="h-4 w-4" />
                <span>Write a Baking Review</span>
              </button>
            </div>
          </div>

          {/* Stars detail chart grid spacer (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-stone-500 font-mono text-xs uppercase tracking-wider mb-2 text-center lg:text-left">Rating Distribution</div>
            {[
              { stars: 5, pct: 100, count: totalReviewsCount },
              { stars: 4, pct: 0, count: 0 },
              { stars: 3, pct: 0, count: 0 },
              { stars: 2, pct: 0, count: 0 },
              { stars: 1, pct: 0, count: 0 },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center text-xs text-stone-600">
                <span className="w-4 font-mono font-bold">{row.stars}</span>
                <Star className="h-3.5 w-3.5 fill-[#E6B15B] text-[#E6B15B] mx-1 flex-shrink-0" />
                <div className="flex-grow h-2 bg-stone-200/70 rounded-full overflow-hidden mx-3">
                  <div className="h-full bg-[#E6B15B] rounded-full" style={{ width: `${row.pct}%` }}></div>
                </div>
                <span className="w-8 text-right font-mono text-stone-400">{row.count}</span>
              </div>
            ))}
          </div>

          {/* Highlights box (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-stone-50/60 rounded-2xl p-5 border border-stone-200/55 flex flex-col justify-between h-full space-y-4">
            <p className="text-xs text-emerald-900 leading-normal italic">
              "Ordered from Hommade Delights recently and was genuinely impressed."
            </p>
            <p className="text-xs text-emerald-950 leading-normal italic">
              "My go to cake place for all of the events and family functions."
            </p>
            <div className="pt-2 border-t border-emerald-200/50 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-emerald-800 font-semibold font-bold">
              <span>Verified Quotes</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>

        </div>

        {/* Dynamic New Review Form Dropdown */}
        {showForm && (
          <div className="max-w-2xl mx-auto mb-16 bg-[#FAF9F5] rounded-3xl p-6 sm:p-8 border border-stone-200/60 shadow-xs animate-in fade-in slide-in-from-top-4 duration-300">
            <h3 className="font-serif text-lg font-bold text-emerald-900 mb-4 flex items-center space-x-2 pb-3 border-b border-stone-200/60">
              <PenLine className="h-5 w-5 text-emerald-800" />
              <span>Tell Anjana how much you loved the cake!</span>
            </h3>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Reviewer Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700">Your Name</label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    required
                    placeholder="e.g., RoShNi ShYaM"
                    className="w-full text-sm rounded-xl border border-stone-200 bg-white p-2.5 text-stone-800 outline-none focus:border-emerald-500 font-medium"
                  />
                </div>

                {/* Stars select */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-700 block">Your Rating (1 to 5 Stars)</label>
                  <div className="flex items-center space-x-1.5 h-10">
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <button
                        key={starValue}
                        type="button"
                        onClick={() => setFormRating(starValue)}
                        className="hover:scale-110 transition-transform"
                      >
                        <Star 
                          className={`h-6.5 w-6.5 transition-colors ${
                            starValue <= formRating 
                              ? 'fill-[#E6B15B] text-[#E6B15B]' 
                              : 'text-stone-300 hover:text-amber-400'
                          }`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono font-bold text-emerald-800 ml-2">({formRating} Stars)</span>
                  </div>
                </div>
              </div>

              {/* Review Text block */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700">Detailed Feedback</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  required
                  rows={3}
                  placeholder="Tell others about the moist texture, sweetness blend, presentation, or Anjana's cooperative nature..."
                  className="w-full text-sm rounded-xl border border-stone-200 bg-white p-3 text-stone-800 outline-none focus:border-emerald-500 font-medium resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-stone-200 text-stone-600 bg-white hover:bg-stone-50 rounded-xl text-xs font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 hover:py-2 bg-emerald-800 hover:bg-emerald-950 text-white rounded-xl text-xs font-bold shadow-md transition-all"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Existing & New Reviews Feed */}
        <div className="max-w-4xl mx-auto space-y-8">
          {reviews.map((rev) => {
            const hasVoted = voted[rev.id];
            const displayHelpfulVotes = (helpfulVotes[rev.id] || 0) + (rev.id === 'rev-1' ? 4 : rev.id === 'rev-2' ? 2 : 5);

            return (
              <div 
                key={rev.id} 
                className={`bg-stone-50/50 rounded-2xl p-6 sm:p-8 border border-stone-100 hover:border-emerald-100/70 transition-all duration-300 space-y-5 relative ${
                  rev.isLocal ? 'border-emerald-200 bg-emerald-50/10' : ''
                }`}
              >
                {/* Local marker tag */}
                {rev.isLocal && (
                  <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                    Your Post
                  </span>
                )}

                {/* Profile row */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-3.5">
                    {/* Placeholder colored initials avatar */}
                    <div className={`h-11 w-11 rounded-full flex items-center justify-center font-serif font-bold text-sm shadow-xs ${rev.avatarColor}`}>
                      {rev.author.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-emerald-950 text-sm sm:text-base">{rev.author}</h4>
                      <div className="flex items-center space-x-2 mt-0.5">
                        <div className="flex text-[#E6B15B]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3.5 w-3.5 ${i < rev.rating ? 'fill-[#E6B15B] text-[#E6B15B]' : 'text-stone-200'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-mono font-medium text-stone-400">• {rev.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Body content */}
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-normal">
                  {rev.text}
                </p>

                {/* Bottom Interactive actions: Helpful vote, Share */}
                <div className="flex items-center space-x-4 pt-1 text-xs font-mono text-stone-500 font-medium">
                  <button
                    type="button"
                    onClick={() => handleHelpfulToggle(rev.id)}
                    className={`inline-flex items-center space-x-1.5 hover:text-emerald-800 transition-colors ${
                      hasVoted ? 'text-[#2E4E3A] hover:text-[#2E4E3A] bg-emerald-55 bg-emerald-100/70 px-2.5 py-1 rounded-lg border border-emerald-100' : ''
                    }`}
                  >
                    <ThumbsUp className={`h-3.5 w-3.5 ${hasVoted ? 'fill-emerald-600' : ''}`} />
                    <span>{hasVoted ? 'Helpful Vote Added' : 'Helpful'} ({displayHelpfulVotes})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(`"${rev.text}" - Client feedback for Hommade Delights`);
                      alert('Feedback copied to share!');
                    }}
                    className="inline-flex items-center space-x-1.5 hover:text-emerald-800 transition-colors"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    <span>Share</span>
                  </button>
                </div>

                {/* Nested response from Baker Anjana owner */}
                {rev.response && (
                  <div className="bg-emerald-100/30 rounded-xl p-4 ml-2 sm:ml-8 border-l-4 border-emerald-700 font-sans space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3 text-rose-600 fill-rose-600 animate-pulse" />
                        <span className="text-xs font-bold text-emerald-950">{rev.response.author}</span>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400">{rev.response.date}</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed italic">
                      {rev.response.text}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
