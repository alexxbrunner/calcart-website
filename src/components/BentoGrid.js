import React from 'react';
import { ArrowRight } from './ui/UtilityComponents';

const BentoGrid = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Alles drin. <br className="md:hidden"/>
            <span className="text-emerald-500">Außer Ausreden.</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Technologie, die dir hilft, besser zu essen. Nicht nur eine weitere Rezept-App.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Large Card */}
          <div 
            className={`md:col-span-2 row-span-1 md:row-span-2 rounded-[2rem] p-8 md:p-12 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lime-100 to-emerald-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🥗</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Dein persönlicher Food-AI.</h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                  Wir analysieren deinen Geschmack und deine Ziele. Der Algorithmus plant Mahlzeiten, die du tatsächlich essen willst.
                </p>
              </div>
              <div className="mt-8">
                <span className="text-emerald-600 font-bold flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all">
                  Mehr erfahren <ArrowRight />
                </span>
              </div>
            </div>
          </div>

          {/* Tall Card */}
          <div className="md:col-span-1 md:row-span-2 rounded-[2rem] p-8 bg-slate-900 text-white relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-500/20 to-transparent"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 bg-slate-700/50 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl mb-6 border border-white/10">📉</div>
              <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
              <p className="text-slate-400 mb-8">Visualisiere deine Erfolge in Echtzeit.</p>
              
              {/* Abstract Chart Graphic */}
              <div className="mt-auto h-48 flex items-end justify-between gap-2 px-2 pb-4">
                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-emerald-500 rounded-t-sm opacity-80 group-hover:opacity-100 transition-all duration-700"
                    style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Wide Card */}
          <div className="md:col-span-3 rounded-[2rem] p-8 md:p-10 bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-xl shadow-emerald-200 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">1-Click Supermarkt Lieferung</h3>
                <p className="text-emerald-50 text-lg opacity-90">Nie wieder Schlange stehen. Wir füllen deinen Kühlschrank.</p>
              </div>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg">
                Liefergebiet prüfen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;

