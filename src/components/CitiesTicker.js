import React from 'react';
import { LAUNCH_CITIES } from '../data/landingPageData';

const CitiesTicker = () => (
  <div className="py-12 bg-white border-y border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-6">
      <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">Bald verfügbar in</p>
    </div>
    <div className="relative flex overflow-x-hidden group">
      <div className="animate-marquee whitespace-nowrap flex gap-12 items-center">
        {[...LAUNCH_CITIES, ...LAUNCH_CITIES, ...LAUNCH_CITIES].map((city, i) => (
          <span key={i} className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-400 uppercase opacity-50 hover:opacity-100 hover:from-slate-800 hover:to-slate-900 transition-all cursor-default">
            {city.city} <span className="text-lg align-top text-emerald-500">{city.code}</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default CitiesTicker;

