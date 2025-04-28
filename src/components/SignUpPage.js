import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// SVG Icons with improved accessibility
const ArrowIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5 ml-1"
    whileHover={{ x: 3 }}
    transition={{ type: "spring", stiffness: 400 }}
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </motion.svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
    <path fillRule="evenodd" d="M8.625 0.75a3.375 3.375 0 00-3.375 3.375v16.5a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375v-16.5a3.375 3.375 0 00-3.375-3.375h-6.75zM7.5 4.125c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-6.75a1.125 1.125 0 01-1.125-1.125v-16.5z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </motion.svg>
);

const AppleIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mr-2"
    whileHover={{ scale: 1.1 }}
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"></path>
    <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
  </motion.svg>
);

const AndroidIcon = () => (
  <motion.svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mr-2"
    whileHover={{ scale: 1.1 }}
    aria-hidden="true"
  >
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path>
  </motion.svg>
);

// Remove ThreeDModel component
const PHONE_MOCKUP = 'phone.png';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [activeFeature, setActiveFeature] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission logic
  };

  const featureCards = [
    {
      id: 1,
      title: "Persönliche Mahlzeitenplanung",
      icon: "🍲",
      description: "Erhalten Sie maßgeschneiderte Speisepläne basierend auf Ihren Ernährungsvorlieben, Gesundheitszielen und Budgetvorgaben. Wir erstellen Pläne, die zu Ihnen passen.",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 2,
      title: "Gewichtsverfolgung",
      icon: "⚖️",
      description: "Verfolgen Sie Ihre Fortschritte mit unseren intelligenten Tracking-Tools. Setzen Sie realistische Ziele und sehen Sie Ihre Erfolge durch personalisierte Diagramme und Analysen.",
      color: "from-sky-400 to-blue-500"
    },
    {
      id: 3,
      title: "Budgetfreundliches Einkaufen",
      icon: "🛒",
      description: "Sparen Sie Geld mit intelligenten Einkaufslisten, die Ihnen helfen, Zutaten zu kaufen, die in Ihr Budget passen und gleichzeitig Nährwert und Geschmack maximieren.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      title: "Rezeptempfehlungen",
      icon: "📝",
      description: "Entdecken Sie köstliche Rezepte, die auf Ihre Geschmacksvorlieben, Ernährungsbedürfnisse und Kochfähigkeiten zugeschnitten sind, mit Optionen für alle Lebensstile.",
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 5,
      title: "Direkte Supermarktbestellung",
      icon: "🚚",
      description: "Bestellen Sie alle Rezeptzutaten direkt von Ihren bevorzugten Supermärkten in der Nähe. Keine Lust zu kochen? Bestellen Sie einfach von lokalen Restaurants mit einem Klick.",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Navigation - Glass morphism style */}
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 
          "bg-white/80 backdrop-blur-lg shadow-md py-3" : 
          "bg-transparent py-5"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-br from-calcart-green to-emerald-400 rounded-full w-9 h-9 flex items-center justify-center mr-2 shadow-lg">
              <span className="text-white text-lg font-bold">C</span>
            </div>
            <span className="text-gray-900 text-lg font-medium">Calcart</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="#" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative"
              whileHover={{ scale: 1.05 }}
            >
              Startseite
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green" 
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            <motion.a 
              href="#features" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative"
              whileHover={{ scale: 1.05 }}
            >
              Funktionen
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green" 
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative"
              whileHover={{ scale: 1.05 }}
            >
              Städte
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green" 
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative"
              whileHover={{ scale: 1.05 }}
            >
              Über uns
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green" 
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          </div>
          
          <motion.a 
            href="#" 
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-calcart-green to-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frühzeitig anmelden
          </motion.a>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: Hero Text & CTA */}
          <motion.div 
            className="w-full lg:w-1/2 lg:max-w-xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
             Abnehmen? Planung und Einkaufen <span className="text-transparent bg-clip-text bg-gradient-to-r from-calcart-green to-emerald-400">sollten nicht im Weg stehen</span>
            </h1>
            <p className="text-gray-600 mt-4 mb-6 text-base max-w-xl leading-relaxed">
              Wir wissen alle, dass Planung und Einkaufen das Schlimmste an gesunder Ernährung sind. Calcart nimmt Ihnen diese Last ab und macht gesundes Essen einfach, praktisch und budgetfreundlich.
            </p>
            
            {/* CTA Form with micro-interactions */}
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 mb-2 max-w-lg"
            >
              <motion.div 
                className="flex-1 relative"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full px-4 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-calcart-green focus:border-transparent transition-colors bg-white/80 backdrop-blur-sm"
                  required
                  aria-label="E-Mail-Adresse"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-calcart-green/20 to-emerald-300/20 rounded-md blur-md opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
              </motion.div>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-calcart-green to-emerald-500 text-white px-5 py-2 text-sm rounded-md font-medium shadow-md hover:shadow-lg transition-all whitespace-nowrap flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Frühzeitig anmelden
                <ArrowIcon />
              </motion.button>
            </motion.form>
            
            {/* Privacy consent */}
            <p className="text-gray-500 text-xs mb-5 max-w-lg">
              Mit Ihrer Anmeldung stimmen Sie unseren <a href="#" className="text-calcart-green underline">Datenschutzbestimmungen</a> und <a href="#" className="text-calcart-green underline">Nutzungsbedingungen</a> zu. Wir versenden nur relevante Informationen und Sie können sich jederzeit abmelden.
            </p>

            {/* USP Banner - Moved below email input */}
            <motion.div 
              className="bg-gradient-to-r from-calcart-green/10 to-emerald-500/10 rounded-md p-3 mb-6 border-l-4 border-calcart-green"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="text-xl mt-0.5">🚚</div>
                <div>
                  <h3 className="text-gray-900 text-sm font-medium mb-1">Direkt vom Supermarkt bestellen</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Alle Rezepte können über Ihre bevorzugten Supermärkte in der Nähe bestellt werden. Keine Lust zu kochen? Bestellen Sie einfach fertige Mahlzeiten von lokalen Restaurants mit einem Klick.</p>
                </div>
              </div>
            </motion.div>
            
            {/* Store badges with improved design */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-gray-500 text-xs mb-2">Bald verfügbar für:</p>
              <div className="flex gap-3">
                <motion.a 
                  href="#" 
                  className="flex items-center bg-black text-white text-xs px-3 py-1.5 rounded-md shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AppleIcon /> App Store
                </motion.a>
                <motion.a 
                  href="#" 
                  className="flex items-center bg-green-600 text-white text-xs px-3 py-1.5 rounded-md shadow-sm hover:shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AndroidIcon /> Android
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right: Phone Mockup */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-50 rounded-2xl backdrop-blur-lg shadow-lg"></div>
              <img
                src={PHONE_MOCKUP}
                alt="Calcart App"
                className="relative z-10 w-auto h-[450px] max-h-[80vh] object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Launch Cities Section */}
      <section className="py-10 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
              Bald verfügbar in diesen Städten
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Werden Sie Teil der Calcart-Gemeinschaft. Melden Sie sich jetzt an, um als Erster über unseren Start in Ihrer Stadt informiert zu werden.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { city: "Wien", country: "Österreich", icon: "🇦🇹" },
              { city: "München", country: "Deutschland", icon: "🇩🇪" },
              { city: "Zürich", country: "Schweiz", icon: "🇨🇭" },
              { city: "Berlin", country: "Deutschland", icon: "🇩🇪" },
              { city: "Köln", country: "Deutschland", icon: "🇩🇪" },
              { city: "Frankfurt", country: "Deutschland", icon: "🇩🇪" },
              { city: "Hamburg", country: "Deutschland", icon: "🇩🇪" }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-md p-3 shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
              >
                <div className="text-xl mb-1">{location.icon}</div>
                <div className="text-sm font-medium text-gray-900">{location.city}</div>
                <div className="text-xs text-gray-500">{location.country}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-1 bg-white rounded-md px-3 py-2 shadow-sm border border-gray-100"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-gray-600">Weitere Städte folgen in Kürze</span>
              <span className="text-gray-400">•</span>
              <motion.a
                href="#"
                className="text-xs text-calcart-green font-medium"
                whileHover={{ x: 2 }}
              >
                Stadt vorschlagen
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-br from-white/80 to-green-50/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-calcart-green to-emerald-400">Leistungsstarke</span> Funktionen
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Entdecken Sie, wie Calcart Ihre Beziehung zu Lebensmitteln und Ernährung mit diesen innovativen Funktionen verbessert.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <motion.div 
                key={card.id}
                className={`bg-white/90 backdrop-blur-md rounded-lg overflow-hidden shadow-md transition-all group hover:shadow-lg`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: card.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                onHoverStart={() => setActiveFeature(card.id)}
                onHoverEnd={() => setActiveFeature(null)}
              >
                <div className={`h-1 bg-gradient-to-r ${card.color}`}></div>
                <div className="p-4">
                  <div className="flex items-center mb-3 gap-2">
                    <div className="text-xl">{card.icon}</div>
                    <h3 className="text-base font-medium text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <motion.a 
                    href="#" 
                    className="text-calcart-green text-sm font-medium flex items-center group-hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    Mehr erfahren <ArrowIcon />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Coming Soon - Sport Communities */}
          <motion.div 
            className="mt-12 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-16 h-16 rounded-lg shadow-md flex items-center justify-center shrink-0">
                  <span className="text-3xl" aria-hidden="true">🏃</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">Sport Communities</h3>
                    <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Q3 2025</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Ab dem dritten Quartal 2025 werden wir Sport-Communities einführen. Verbinden Sie sich mit Gleichgesinnten, nehmen Sie an Herausforderungen teil und teilen Sie Ihre Erfolge. Trainieren Sie gemeinsam, motivieren Sie sich gegenseitig und erreichen Sie Ihre Fitnessziele in einer unterstützenden Gemeinschaft.
                  </p>
                  <motion.button
                    className="inline-flex items-center text-sm text-blue-600 font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Für frühen Zugang anmelden <ArrowIcon />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="#" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-calcart-green/10 to-emerald-500/10 text-calcart-green text-sm font-medium py-2 px-5 rounded-md hover:bg-gradient-to-r hover:from-calcart-green/20 hover:to-emerald-500/20 transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Alle Funktionen entdecken</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <ArrowIcon />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
                Über <span className="text-transparent bg-clip-text bg-gradient-to-r from-calcart-green to-emerald-400">uns</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-white to-green-50 rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="shrink-0">
                  <div className="bg-gradient-to-br from-calcart-green to-emerald-400 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-md">
                    <span className="text-white text-2xl md:text-3xl font-bold">C</span>
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <p className="text-gray-700 text-base md:text-lg font-medium mb-4 leading-relaxed">
                    Wir sind ein kleines Team, aber mit einer Mission: Allen Menschen die Möglichkeit zu geben, einen persönlichen Ernährungsberater zu haben.
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    In einer Welt voller Diättrends und widersprüchlicher Ernährungsratschläge wollen wir Klarheit und Personalisierung bieten. Mit Calcart steht jedem eine maßgeschneiderte Ernährungsberatung zur Verfügung – direkt in der Tasche, rund um die Uhr. Wir nutzen Technologie nicht nur, um Informationen zu liefern, sondern um echte, alltagstaugliche Lösungen zu schaffen, die zu Ihrem Leben passen.
                  </p>
                  
                  <div className="bg-emerald-50 border-l-4 border-calcart-green p-4 rounded-r-md">
                    <p className="text-gray-800 text-sm font-medium italic">
                      Es gibt jetzt keine Ausreden mehr. Gesunde Ernährung war noch nie so einfach, zugänglich und auf Ihre Bedürfnisse zugeschnitten.
                    </p>
                  </div>
                  
                  <div className="mt-8 flex justify-center md:justify-start gap-4">
                    <motion.a
                      href="#" 
                      className="text-sm text-gray-600 hover:text-calcart-green flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      <span>Team kennenlernen</span>
                      <ArrowIcon />
                    </motion.a>
                    <span className="text-gray-300">|</span>
                    <motion.a
                      href="#" 
                      className="text-sm text-gray-600 hover:text-calcart-green flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      <span>Karriere</span>
                      <ArrowIcon />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating action button for mobile */}
      <motion.button
        className="fixed bottom-4 right-4 md:hidden bg-gradient-to-r from-calcart-green to-emerald-500 text-white w-10 h-10 rounded-md shadow-md flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <PhoneIcon />
      </motion.button>
    </div>
  );
};

export default SignUpPage; 