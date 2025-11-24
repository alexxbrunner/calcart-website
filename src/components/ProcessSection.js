import React from 'react';

const ProcessSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm">Der Workflow</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Dein neues <span className="italic font-serif text-slate-500">Sonntags-Ritual</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Jeden Sonntag erhältst du deinen perfekten Wochenplan. Du entscheidest, wie die Woche läuft.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent -translate-x-1/2"></div>

          {/* Step 1: The Trigger */}
          <div className="relative z-10 flex justify-center mb-16">
            <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/40 rounded-2xl p-6 text-center max-w-md transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                So.
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Der Plan droppt</h3>
              <p className="text-slate-500 text-sm mt-2">
                Deine KI analysiert dein <strong className="text-slate-700">Budget + deine Ziele</strong> und findet den optimalen Ernährungsplan für die Woche.
              </p>
            </div>
          </div>

          {/* The Split Paths */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-24 relative">
            
            {/* Path A: Supermarket */}
            <div className="relative group">
              <div className="md:text-right">
                <div className="bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex md:justify-end mb-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-2xl">🛒</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Option A: Selbst kochen</h3>
                  <p className="text-slate-600 mb-4">
                    Du hast Zeit und Lust zu kochen? Wir füllen deinen Warenkorb bei <strong>REWE, Edeka oder Flink</strong>.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-2 md:pl-8">
                    <li className="flex items-center md:justify-end gap-2">Günstigste Preise finden <span className="text-emerald-500">✓</span></li>
                    <li className="flex items-center md:justify-end gap-2">Keine Reste übrig <span className="text-emerald-500">✓</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Path B: Delivery */}
            <div className="relative group">
              <div className="md:text-left">
                <div className="bg-gradient-to-br from-white to-cyan-50/50 border border-cyan-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-start mb-4">
                    <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-2xl">🍱</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Option B: Liefern lassen</h3>
                  <p className="text-slate-600 mb-4">
                    Keine Zeit? Bestell direkt bei <strong>Restaurants in deiner Nähe</strong> oder lass dir Meal-Prep-Boxen liefern.
                  </p>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> Passt zu deinem Plan</li>
                    <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> Makros tracken wir</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;