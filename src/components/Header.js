import React, { useState, useEffect } from 'react';
import { APP_NAME } from '../data/landingPageData';

const Header = ({ onSignUpClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
            C
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">{APP_NAME}</span>
        </div>
        
        <button 
          onClick={onSignUpClick}
          className="hidden md:flex bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          Early Access
        </button>
      </div>
    </nav>
  );
};

export default Header;

