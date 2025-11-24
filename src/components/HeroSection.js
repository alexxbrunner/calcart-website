import React from 'react';
import { PHONE_MOCKUP } from '../data/landingPageData'; // Ensure this path is correct
import { CheckIcon } from './ui/UtilityComponents'; // Ensure this path is correct

// --- Internal Mini-Components ---

// 1. Avatar Pile (Social Proof)
const AvatarPile = () => (
  <div className="flex items-center gap-4 animate-fade-in delay-300">
    <div className="flex -space-x-3">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
          <img 
            src={`https://i.pravatar.cc/100?img=${i + 10}`} 
            alt="User" 
            className="w-full h-full object-cover" 
          />
        </div>
      ))}
    </div>
    <div className="flex flex-col justify-center">
      <div className="flex text-amber-400 text-sm">
        {'★'.repeat(5)}
      </div>
      <p className="text-xs text-slate-500 font-medium">
        <span className="text-slate-900 font-bold">5.000+</span> Pre-Orders
      </p>
    </div>
  </div>
);

// 2. High-End Widget (The floating cards)
const FloatingWidget = ({ icon, label, value, colorClass, positionClass, delayClass }) => (
  <div className={`absolute ${positionClass} ${delayClass} animate-float z-20`}>
    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-xl border border-white/40 p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 transition-transform duration-300 cursor-default">
      <div className={`${colorClass} p-2.5 rounded-xl shadow-inner`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{label}</p>
        <p className="text-slate-900 font-bold text-sm tabular-nums">{value}</p>
      </div>
    </div>
  </div>
);

// --- Main Hero Component ---

const HeroSection = ({ onSubmit, email, setEmail, isSubmitting }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      
      {/* Background Ambience (Subtle Noise + Spotlight) */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* --- LEFT: Text Content --- */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-emerald-100/50 backdrop-blur-md text-emerald-800 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm hover:shadow-md transition-all cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Early Access v1.0
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 text-balance">
            Ernährung, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 animate-gradient-x">
              auf Autopilot.
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance font-medium">
            Calcart ist dein persönlicher Ernährungs-Manager. Wir planen, tracken und kaufen für dich ein. 
            <span className="hidden sm:inline"> Schluss mit Decision Fatigue im Supermarkt.</span>
          </p>

          {/* Input Form */}
          <form onSubmit={onSubmit} className="max-w-md mx-auto lg:mx-0 relative group mb-10">
            {/* Glow Effect behind input */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <div className="relative flex p-1.5 bg-white rounded-2xl shadow-xl ring-1 ring-slate-900/5 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.com" 
                className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                required
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-slate-900 text-white rounded-xl px-6 py-3 font-semibold text-sm hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap shadow-lg shadow-slate-900/20"
              >
                {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : 'Join Waitlist'}
              </button>
            </div>
          </form>

          {/* Trust/Social Proof */}
          <div className="flex justify-center lg:justify-start">
             <AvatarPile />
          </div>
        </div>

        {/* --- RIGHT: The Device (Mockup) --- */}
        <div className="flex-1 relative w-full max-w-[360px] lg:max-w-full">
          
          {/* Pure Phone Mockup */}
          <div className="relative">
            <img 
              src={PHONE_MOCKUP} 
              alt="App Interface" 
              className="w-full h-auto"
            />

            {/* Floating Widget 1: Calories */}
            <FloatingWidget 
                positionClass="top-24 -left-12"
                delayClass=""
                colorClass="bg-orange-50 text-orange-500"
                icon={<span className="text-lg">🔥</span>}
                label="Daily Goal"
                value="1.850 / 2.200"
            />

            {/* Floating Widget 2: Delivery */}
            <FloatingWidget 
                positionClass="bottom-32 -right-8"
                delayClass="animation-delay-2000"
                colorClass="bg-emerald-50 text-emerald-500"
                icon={<span className="text-lg">🥗</span>}
                label="Delivery"
                value="Morgen, 18:00"
            />
          </div>
        </div>
      </div>
      
      {/* CSS for custom animations if not in tailwind.config */}
      <style jsx>{`
        .animation-delay-2000 { animation-delay: 2s; }
        .text-balance { text-wrap: balance; }
      `}</style>
    </section>
  );
};

export default HeroSection;