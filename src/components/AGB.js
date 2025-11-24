import React from 'react';
import { Link } from 'react-router-dom';

const AGB = () => {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p className="text-sm text-slate-500 italic">Stand: November 2024</p>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Nutzung der 
              Calcart-App und der damit verbundenen Dienstleistungen zwischen der Calcart GmbH (nachfolgend 
              "Anbieter" oder "Calcart") und dem Nutzer (nachfolgend "Nutzer" oder "Sie").
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Vertragsgegenstand</h2>
            <p>
              Calcart ist eine digitale Plattform für personalisierte Ernährungsplanung. Der Dienst umfasst:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>KI-gestützte Erstellung individueller Wochen-Ernährungspläne</li>
              <li>Tracking von Makronährstoffen und Kalorien</li>
              <li>Integration mit Supermärkten und Lieferdiensten</li>
              <li>Rezeptdatenbank und -verwaltung</li>
              <li>Budget-Optimierung für Lebensmitteleinkäufe</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Vertragsschluss und Registrierung</h2>
            <p>
              3.1 Der Vertrag kommt durch die Registrierung und Bestätigung Ihrer E-Mail-Adresse zustande.<br />
              3.2 Sie müssen mindestens 18 Jahre alt sein, um Calcart zu nutzen.<br />
              3.3 Sie sind verpflichtet, bei der Registrierung wahrheitsgemäße Angaben zu machen.<br />
              3.4 Der Nutzer ist für die Geheimhaltung seiner Zugangsdaten selbst verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Leistungsumfang und Verfügbarkeit</h2>
            <p>
              4.1 Calcart bietet eine kostenlose Basisversion und kostenpflichtige Premium-Funktionen.<br />
              4.2 Der Anbieter bemüht sich um eine hohe Verfügbarkeit, garantiert diese jedoch nicht.<br />
              4.3 Wartungsarbeiten können zu vorübergehenden Einschränkungen führen.<br />
              4.4 Der Anbieter behält sich vor, den Leistungsumfang anzupassen oder zu erweitern.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Preise und Zahlung</h2>
            <p>
              5.1 Die Preise für Premium-Funktionen werden in der App transparent dargestellt.<br />
              5.2 Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.<br />
              5.3 Die Abrechnung erfolgt monatlich oder jährlich im Voraus.<br />
              5.4 Zahlungen erfolgen über die von Apple/Google bereitgestellten In-App-Kaufsysteme oder per Lastschrift.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Widerrufsrecht</h2>
            <p>
              Verbrauchern steht gemäß § 355 BGB ein Widerrufsrecht zu. Die Widerrufsfrist beträgt vierzehn Tage 
              ab dem Tag des Vertragsschlusses. Für digitale Inhalte erlischt das Widerrufsrecht, wenn der 
              Verbraucher ausdrücklich zugestimmt hat, dass mit der Ausführung vor Ablauf der Widerrufsfrist 
              begonnen wird.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Kündigung</h2>
            <p>
              7.1 Das kostenlose Basiskonto kann jederzeit ohne Angabe von Gründen gekündigt werden.<br />
              7.2 Premium-Abonnements können zum Ende der jeweiligen Laufzeit gekündigt werden.<br />
              7.3 Die Kündigung erfolgt über die App oder schriftlich per E-Mail an info@calcart.de.<br />
              7.4 Bei Verstoß gegen diese AGB behält sich Calcart eine außerordentliche Kündigung vor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Haftung und Gewährleistung</h2>
            <p>
              8.1 Calcart übernimmt keine Haftung für die Richtigkeit oder Vollständigkeit der bereitgestellten 
              Ernährungsinformationen.<br />
              8.2 Die App ersetzt keine medizinische oder ernährungswissenschaftliche Beratung.<br />
              8.3 Bei gesundheitlichen Problemen oder Vorerkrankungen konsultieren Sie bitte einen Arzt oder 
              Ernährungsberater.<br />
              8.4 Haftungsansprüche bei Vorsatz oder grober Fahrlässigkeit bleiben unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Drittanbieter-Integrationen</h2>
            <p>
              9.1 Calcart integriert Dienste von Dritten (Supermärkte, Lieferdienste).<br />
              9.2 Für diese Dienste gelten die AGB und Datenschutzrichtlinien der jeweiligen Anbieter.<br />
              9.3 Calcart übernimmt keine Haftung für die Leistungen dieser Drittanbieter.<br />
              9.4 Kaufverträge kommen direkt zwischen Nutzer und Drittanbieter zustande.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung und den 
              Vorgaben der DSGVO. Weitere Informationen finden Sie in unserer separaten Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Änderungen der AGB</h2>
            <p>
              11.1 Calcart behält sich vor, diese AGB jederzeit zu ändern.<br />
              11.2 Nutzer werden über Änderungen per E-Mail oder In-App-Benachrichtigung informiert.<br />
              11.3 Widersprechen Sie nicht innerhalb von 4 Wochen, gelten die Änderungen als angenommen.<br />
              11.4 Im Falle eines Widerspruchs endet die Nutzung zum nächstmöglichen Zeitpunkt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">12. Schlussbestimmungen</h2>
            <p>
              12.1 Es gilt das Recht der Bundesrepublik Deutschland.<br />
              12.2 Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen 
              unberührt.<br />
              12.3 Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von Calcart.
            </p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-sm">
              <strong>Kontakt bei Fragen:</strong><br />
              Calcart GmbH<br />
              E-Mail: info@calcart.de<br />
              Telefon: +49 (0) 30 12345678
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AGB;

