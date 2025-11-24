import React, { useState } from 'react';

const FAQSection = () => {
  // Simple state for accordion
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Kann ich zwischen Kochen und Liefern mixen?",
      a: "Absolut. Du kannst sagen: 'Montag bis Mittwoch stressig (Lieferung), Wochenende koche ich selbst (Supermarkt).' Calcart passt den Warenkorb automatisch an."
    },
    {
      q: "Welche Supermärkte werden unterstützt?",
      a: "Wir arbeiten aktuell mit Schnittstellen zu REWE, Amazon Fresh und Flink. Discounter-Listen (Aldi/Lidl) erstellen wir zum Selbst-Einkaufen."
    },
    {
      q: "Was kostet die App?",
      a: "Die Basis-Version ist kostenlos. Für automatische Warenkorb-Sync und Meal-Delivery-Vorteile gibt es Calcart Premium."
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Häufige Fragen</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer transition-all duration-200 hover:border-emerald-200"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="font-semibold text-slate-900 pr-8">{faq.q}</h3>
                <span className={`text-emerald-500 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>
              <div 
                className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;