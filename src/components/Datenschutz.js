import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p className="text-sm text-slate-500 italic">Stand: November 2024</p>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website und unsere App nutzen. Personenbezogene Daten sind alle 
              Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Calcart GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland<br /><br />
              E-Mail: datenschutz@calcart.de<br />
              Telefon: +49 (0) 30 12345678
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Datenerfassung auf unserer Website</h2>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Welche Daten erfassen wir?</h3>
            <p>
              Wir erheben und verarbeiten folgende Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Kontaktdaten:</strong> E-Mail-Adresse, Name (optional)</li>
              <li><strong>Nutzungsdaten:</strong> Ernährungsziele, Vorlieben, Allergien, Budget</li>
              <li><strong>Gesundheitsdaten:</strong> Gewicht, Körpergröße, Aktivitätslevel (freiwillig)</li>
              <li><strong>Technische Daten:</strong> IP-Adresse, Browser-Typ, Geräteinformationen</li>
              <li><strong>Nutzungsverhalten:</strong> App-Interaktionen, besuchte Seiten</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Zweck der Datenverarbeitung</h2>
            <p>
              Wir verwenden Ihre Daten für folgende Zwecke:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Erstellung personalisierter Ernährungspläne</li>
              <li>Bereitstellung und Verbesserung unserer Dienste</li>
              <li>Kommunikation mit Ihnen (Newsletter, Updates)</li>
              <li>Kundenservice und Support</li>
              <li>Analyse und Optimierung der App-Nutzung</li>
              <li>Erfüllung rechtlicher Verpflichtungen</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Rechtsgrundlage der Verarbeitung</h2>
            <p>
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung</li>
              <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Ihre Einwilligung</li>
              <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen</li>
              <li><strong>Art. 9 Abs. 2 lit. a DSGVO:</strong> Gesundheitsdaten (mit ausdrücklicher Einwilligung)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Weitergabe von Daten</h2>
            <p>
              Wir geben Ihre Daten nur weiter, wenn:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
              <li>Es für die Vertragserfüllung erforderlich ist (z.B. Weitergabe an Supermärkte)</li>
              <li>Eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
              <li>Es zur Wahrung berechtigter Interessen notwendig ist</li>
            </ul>
            <p className="mt-4">
              <strong>Drittanbieter-Services:</strong> Wir nutzen folgende Dienstleister:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Cloud-Hosting (AWS/Google Cloud)</li>
              <li>Zahlungsdienstleister (Stripe, PayPal)</li>
              <li>E-Mail-Versand (SendGrid)</li>
              <li>Analytics (Google Analytics - anonymisiert)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Cookies und Tracking</h2>
            <p>
              Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Sie können 
              Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und 
              einzeln über deren Annahme entscheiden. Einige Funktionen unserer Website funktionieren 
              möglicherweise nicht ohne Cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Speicherdauer</h2>
            <p>
              Wir speichern Ihre Daten nur so lange, wie es für die Zwecke erforderlich ist oder 
              gesetzliche Aufbewahrungsfristen bestehen. Nach Löschung Ihres Accounts werden Ihre 
              Daten innerhalb von 30 Tagen vollständig gelöscht (außer bei gesetzlichen Aufbewahrungspflichten).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Ihre Rechte</h2>
            <p>
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Welche Daten wir über Sie speichern</li>
              <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Korrektur falscher Daten</li>
              <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> "Recht auf Vergessenwerden"</li>
              <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong></li>
              <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Export Ihrer Daten</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Widerspruch gegen Verarbeitung</li>
              <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</strong></li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <strong>datenschutz@calcart.de</strong>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. 
              Zuständig ist die Behörde Ihres Aufenthaltsortes oder unseres Firmensitzes.
            </p>
            <p className="mt-2">
              <strong>Zuständige Aufsichtsbehörde:</strong><br />
              Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
              Friedrichstr. 219<br />
              10969 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Datensicherheit</h2>
            <p>
              Wir verwenden moderne Sicherheitsmaßnahmen zum Schutz Ihrer Daten:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
              <li>Verschlüsselte Datenspeicherung</li>
              <li>Regelmäßige Sicherheitsaudits</li>
              <li>Zugriffsbeschränkungen für Mitarbeiter</li>
              <li>Regelmäßige Backups</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">12. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte 
              Rechtslagen oder Änderungen unserer Dienste anzupassen. Bei wesentlichen Änderungen 
              werden wir Sie per E-Mail informieren.
            </p>
          </div>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
            <p className="text-sm">
              <strong>Fragen zum Datenschutz?</strong><br />
              Kontaktieren Sie unseren Datenschutzbeauftragten:<br />
              E-Mail: datenschutz@calcart.de<br />
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

export default Datenschutz;

