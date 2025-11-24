import React, { useState } from 'react';

const FAQSection = () => {
  // Simple state for accordion
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Wie funktioniert Calcart genau?",
      a: "Jeden Sonntag erstellt unsere KI einen personalisierten Wochenplan basierend auf deinem Budget, deinen Ernährungszielen (z.B. Abnehmen, Muskelaufbau) und deinen Vorlieben. Du entscheidest dann, ob du selbst kochen oder liefern lassen möchtest. Bei Option A füllen wir automatisch deinen Warenkorb bei Supermärkten wie REWE oder Flink. Bei Option B schlagen wir passende Restaurants oder Meal-Prep-Services vor."
    },
    {
      q: "Kann ich zwischen Kochen und Liefern mixen?",
      a: "Absolut! Du kannst für jeden Tag individuell entscheiden. Zum Beispiel: 'Montag bis Mittwoch bin ich gestresst (Lieferung), Donnerstag und Wochenende koche ich selbst.' Calcart passt deinen Warenkorb und dein Budget automatisch an. Du behältst die volle Flexibilität."
    },
    {
      q: "Welche Supermärkte und Lieferdienste werden unterstützt?",
      a: "Aktuell arbeiten wir mit REWE, Edeka, Amazon Fresh und Flink für Lebensmittellieferungen. Für Restaurants integrieren wir Lieferando und Uber Eats. Discounter-Listen (Aldi/Lidl) erstellen wir zum Selbst-Einkaufen. Weitere Partner folgen nach dem Launch."
    },
    {
      q: "Berücksichtigt Calcart mein Budget?",
      a: "Ja! Du gibst dein Wochenbudget an (z.B. 50-80€) und Calcart optimiert deinen Plan entsprechend. Die KI findet automatisch die günstigsten Preise bei verschiedenen Anbietern und schlägt Budget-freundliche Alternativen vor, ohne dass du auf deine Ernährungsziele verzichten musst."
    },
    {
      q: "Was kostet die App?",
      a: "Die Basis-Version mit manueller Planung und Tracking ist kostenlos. Calcart Premium (ab 9,99€/Monat) bietet automatische Warenkorb-Synchronisation, Preisverlauf-Analysen, erweiterte Rezept-Bibliothek und bevorzugte Lieferslots bei Partnern. Early Access Mitglieder erhalten 3 Monate Premium kostenlos."
    },
    {
      q: "Kann ich eigene Rezepte hinzufügen?",
      a: "Ja! Du kannst eigene Rezepte hochladen oder aus deiner Familiensammlung importieren. Unsere KI analysiert die Nährwerte automatisch und integriert sie in deinen Wochenplan. So kombinierst du deine Lieblingsgerichte mit optimaler Ernährung."
    },
    {
      q: "Funktioniert Calcart auch für spezielle Ernährungsformen?",
      a: "Definitiv! Calcart unterstützt Vegan, Vegetarisch, Low Carb, Keto, Paleo, Glutenfrei, Laktosefrei und viele weitere Ernährungsformen. Du kannst auch individuelle Allergien und Unverträglichkeiten angeben. Die KI berücksichtigt das automatisch bei jedem Plan."
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
                className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
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