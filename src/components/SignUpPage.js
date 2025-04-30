import React, { useState, useEffect } from 'react';

// SVG Icons with improved accessibility
const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className="w-5 h-5 ml-1"
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
    <path fillRule="evenodd" d="M8.625 0.75a3.375 3.375 0 00-3.375 3.375v16.5a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375v-16.5a3.375 3.375 0 00-3.375-3.375h-6.75zM7.5 4.125c0-.621.504-1.125 1.125-1.125h6.75c.621 0 1.125.504 1.125 1.125v16.5c0 .621-.504 1.125-1.125 1.125h-6.75a1.125 1.125 0 01-1.125-1.125v-16.5z" clipRule="evenodd" />
  </svg>
);

const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const AppleIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mr-2 hover:scale-110 transition-transform"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83z"></path>
    <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
  </svg>
);

const AndroidIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="mr-2 hover:scale-110 transition-transform"
    aria-hidden="true"
  >
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path>
  </svg>
);

// Remove ThreeDModel component
const PHONE_MOCKUP = 'phone2.png';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [activeFeature, setActiveFeature] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExistsModal, setShowExistsModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close mobile menu when clicking on a link
  const handleMobileNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    // Scroll to section if ID provided
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Email submitted:', email);
    
    // Post email to API endpoint
    fetch('https://webapp-sever.vercel.app/api/calcart/email-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        metadata: {
          source: 'calcart',
          signup_date: new Date().toISOString(),
          page: 'landing_page'
        }
      })
    })
    .then(response => {
      console.log('Response status:', response.status);
      if (!response.ok && response.status !== 400) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Email submission response data:', data);
      
      if (data.success) {
        // Check if the message indicates user already exists
        if (data.message.includes('already subscribed')) {
          setShowExistsModal(true);
        } else {
          // For new signups or reactivations
          setShowSuccessPopup(true);
          setTimeout(() => setShowSuccessPopup(false), 5000); // Hide popup after 5 seconds
        }
        
        // Clear the form in any case
        setEmail('');
      } else {
        // Handle validation errors or other non-server errors
        alert(data.message || 'Es gab ein Problem beim Speichern deiner E-Mail. Bitte versuche es später noch einmal.');
      }
    })
    .catch(error => {
      console.error('Failed to submit email - detailed error:', error);
      alert('Es gab ein Problem beim Speichern deiner E-Mail. Bitte versuche es später noch einmal.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  // Modal for already existing email
  const ExistsModal = () => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={() => setShowExistsModal(false)}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Du bist schon dabei!</h3>
          </div>
          <button 
            onClick={() => setShowExistsModal(false)}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          Diese E-Mail ist bei uns schon angemeldet. Du bekommst also schon alle wichtigen Neuigkeiten von uns!
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-4">
          <p className="text-sm text-blue-700">
            Keine E-Mails von uns bekommen? Schau mal in deinem Spam-Ordner oder schreib uns.
          </p>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={() => setShowExistsModal(false)}
            className="bg-gradient-to-r from-calcart-green to-emerald-500 text-white px-4 py-2 rounded-md shadow-md hover:shadow-lg font-medium hover:scale-105 active:scale-95 transition-transform"
          >
            Alles klar
          </button>
        </div>
      </div>
    </div>
  );

  const featureCards = [
    {
      id: 1,
      title: "Mahlzeiten nach deinem Geschmack",
      icon: "🍲",
      description: "Bekomme Speisepläne, die zu dir passen. Wir planen nach deinen Vorlieben, Zielen und Budget. Einfach und passend zu dir!",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 2,
      title: "Deine Gewichtsziele im Blick",
      icon: "⚖️",
      description: "Verfolge deine Fortschritte ganz einfach. Setze realistische Ziele und sieh deine Erfolge in bunten Diagrammen.",
      color: "from-sky-400 to-blue-500"
    },
    {
      id: 3,
      title: "Günstig einkaufen",
      icon: "🛒",
      description: "Spare Geld mit smarten Einkaufslisten. Kaufe Zutaten, die in dein Budget passen und trotzdem gesund und lecker sind.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      title: "Rezepte, die zu dir passen",
      icon: "📝",
      description: "Finde leckere Rezepte, die zu deinem Geschmack passen. Egal ob Anfänger oder Profi in der Küche - wir haben was für dich.",
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 5,
      title: "Direkt liefern lassen",
      icon: "🚚",
      description: "Lass alle Zutaten direkt zu dir liefern. Keine Lust zu kochen? Bestell dir fertige Mahlzeiten mit nur einem Klick.",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div 
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-lg p-4 max-w-md w-[90%] border-l-4 border-calcart-green"
        >
          <div className="flex flex-col sm:flex-row items-start">
            <div className="bg-green-100 rounded-full p-2 mb-2 sm:mb-0 sm:mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-medium">Super! Du bist dabei!</h3>
              <p className="text-gray-600 text-sm mt-1">Wir halten dich auf dem Laufenden. Bald bekommst du die ersten Infos von uns!</p>
            </div>
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="ml-auto text-gray-400 hover:text-gray-600 p-1 flex-shrink-0"
              aria-label="Schließen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Already Exists Modal */}
      {showExistsModal && <ExistsModal />}

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="bg-white h-full w-4/5 max-w-xs p-6 shadow-xl transform transition-transform duration-300 ease-in-out"
          style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-calcart-green to-emerald-400 rounded-xl w-9 h-9 flex items-center justify-center mr-2 shadow-lg">
                <span className="text-white text-lg font-bold">C</span>
              </div>
              <span className="text-gray-900 text-lg font-medium">Calcart</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              onClick={() => handleMobileNavClick()} 
              className="text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Startseite
            </a>
            <a 
              href="#features"
              onClick={() => handleMobileNavClick('features')} 
              className="text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Funktionen
            </a>
            <a 
              href="#" 
              onClick={() => handleMobileNavClick()} 
              className="text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Städte
            </a>
            <a 
              href="#about" 
              onClick={() => handleMobileNavClick('about')} 
              className="text-gray-900 font-medium py-2 border-b border-gray-100"
            >
              Über uns
            </a>
          </nav>
          
          <div className="mt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                // Scroll to the signup form
                document.querySelector('input[type="email"]').scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-calcart-green to-emerald-500 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all text-center hover:scale-105 active:scale-95"
            >
              Frühzeitig anmelden
            </button>
          </div>
        </div>
      </div>

      {/* Navigation - Glass morphism style */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 
          "bg-white/80 backdrop-blur-lg shadow-md py-3" : 
          "bg-transparent py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center hover:scale-105 transition-transform"
          >
            <div className="bg-gradient-to-br from-calcart-green to-emerald-400 rounded-xl w-9 h-9 flex items-center justify-center mr-2 shadow-lg">
              <span className="text-white text-lg font-bold">C</span>
            </div>
            <span className="text-gray-900 text-lg font-medium">Calcart</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative group hover:scale-105 transition-transform"
            >
              Startseite
              <span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green w-0 group-hover:w-full transition-all duration-200" 
              />
            </a>
            <a 
              href="#features" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative group hover:scale-105 transition-transform"
            >
              Funktionen
              <span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green w-0 group-hover:w-full transition-all duration-200" 
              />
            </a>
            <a 
              href="#" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative group hover:scale-105 transition-transform"
            >
              Städte
              <span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green w-0 group-hover:w-full transition-all duration-200" 
              />
            </a>
            <a 
              href="#about" 
              className="text-gray-900 text-sm font-medium hover:text-calcart-green transition-colors relative group hover:scale-105 transition-transform"
            >
              Über uns
              <span 
                className="absolute -bottom-1 left-0 h-0.5 bg-calcart-green w-0 group-hover:w-full transition-all duration-200" 
              />
            </a>
          </div>
          
          <a 
            href="#" 
            className="hidden md:flex items-center justify-center bg-gradient-to-r from-calcart-green to-emerald-500 text-white text-sm font-medium py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Frühzeitig anmelden
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left: Hero Text & CTA */}
          <div className="w-full lg:w-1/2 lg:max-w-xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
             Kein Bock mehr auf <span className="text-transparent bg-clip-text bg-gradient-to-r from-calcart-green to-emerald-400">Diät-Stress?</span>
            </h1>
            <p className="text-gray-600 mt-4 mb-6 text-base max-w-xl leading-relaxed">
              Nach einem langen Tag noch überlegen, was du essen sollst? Keine Zeit zum Einkaufen? Und dann noch auf Kalorien achten? Schluss damit. Calcart plant deine Mahlzeiten passend zu deinen Zielen und deinem Lifestyle. Zutaten vom Supermarkt direkt zu dir nach Hause liefern lassen oder – wenn's schnell gehen muss – fertige Mahlzeiten von Restaurants in deiner Nähe bestellen. Gesund essen war noch nie so unkompliziert.
            </p>
            
            {/* CTA Form with improved mobile responsiveness */}
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 mb-2 w-full max-w-lg"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail-Adresse"
                  className="w-full px-4 py-3 sm:py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-calcart-green focus:border-transparent transition-colors bg-white/80 backdrop-blur-sm"
                  required
                  aria-label="E-Mail-Adresse"
                  disabled={isSubmitting}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-calcart-green/20 to-emerald-300/20 rounded-md blur-md opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-calcart-green to-emerald-500 text-white px-5 py-3 sm:py-2 text-sm rounded-md font-medium shadow-md hover:shadow-lg transition-all whitespace-nowrap flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gespeichert...
                  </span>
                ) : (
                  <>
                    Melde dich an
                    <ArrowIcon />
                  </>
                )}
              </button>
            </form>
            
            {/* Success counter accent */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-xs">✅</span>
              <p className="text-gray-500 text-xs">Über 5.000 Voranmeldungen bereits</p>
            </div>
            
            {/* Privacy consent */}
            <p className="text-gray-500 text-xs mb-5 max-w-lg">
              Mit deiner Anmeldung stimmst du unseren <a href="#" className="text-calcart-green underline">Datenschutzregeln</a> und <a href="#" className="text-calcart-green underline">Nutzungsbedingungen</a> zu. Du bekommst nur wichtige Infos und kannst dich jederzeit abmelden.
            </p>

            {/* USP Banner - Moved below email input */}
            <div className="bg-gradient-to-r from-calcart-green/10 to-emerald-500/10 rounded-md p-3 mb-6 border-l-4 border-calcart-green">
              <div className="flex items-start gap-3">
                <div className="text-xl mt-0.5">🚚</div>
                <div>
                  <h3 className="text-gray-900 text-sm font-medium mb-1">Essen, wie's in deinen Alltag passt</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">Zutaten liefern lassen und selbst kochen oder bei Zeitmangel fertige Gerichte bestellen – du entscheidest je nach Tagesplan. Kein Stress, keine Kompromisse.</p>
                </div>
              </div>
            </div>
            
            {/* Store badges with improved design */}
            <div className="mb-6">
              <p className="text-gray-500 text-xs mb-2">Bald verfügbar für:</p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="flex items-center bg-black text-white text-xs px-3 py-1.5 rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <AppleIcon /> App Store
                </a>
                <a 
                  href="#" 
                  className="flex items-center bg-green-600 text-white text-xs px-3 py-1.5 rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <AndroidIcon /> Android
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-100 to-emerald-50 rounded-2xl backdrop-blur-lg shadow-lg"></div>
              <img
                src={PHONE_MOCKUP}
                alt="Calcart App"
                className="relative z-10 w-auto h-[600px] max-h-[90vh] object-contain transform hover:scale-105 transition-transform duration-500 shadow-xl rounded-xl"
              />
              {/* Add glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-calcart-green/20 to-emerald-400/20 rounded-2xl blur-xl opacity-70 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Cities Section */}
      <section className="py-10 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
              Wo wir bald durchstarten
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              Sei von Anfang an dabei. Meld dich an und erfahre als Erste(r), wenn wir in deiner Stadt loslegen.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-6">
            {[
              { city: "Wien", country: "Österreich", icon: "🇦🇹" },
              { city: "München", country: "Deutschland", icon: "🇩🇪" },
              { city: "Zürich", country: "Schweiz", icon: "🇨🇭" },
              { city: "Berlin", country: "Deutschland", icon: "🇩🇪" },
              { city: "Köln", country: "Deutschland", icon: "🇩🇪" },
              { city: "Frankfurt", country: "Deutschland", icon: "🇩🇪" },
              { city: "Hamburg", country: "Deutschland", icon: "🇩🇪" }
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-md p-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-xl mb-1">{location.icon}</div>
                <div className="text-sm font-medium text-gray-900">{location.city}</div>
                <div className="text-xs text-gray-500">{location.country}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1 bg-white rounded-md px-3 py-2 shadow-sm border border-gray-100">
              <span className="text-xs text-gray-600">Weitere Städte folgen in Kürze</span>
              <a
                href="#"
                className="text-xs text-calcart-green font-medium hover:translate-x-1 transition-transform"
              >
          
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-br from-white/80 to-green-50/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
              Was <span className="text-transparent bg-clip-text bg-gradient-to-r from-calcart-green to-emerald-400">dich</span> erwartet
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              So macht Calcart dein Leben leichter - check diese Features aus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <div 
                key={card.id}
                className={`bg-white/90 backdrop-blur-md rounded-lg overflow-hidden shadow-md transition-all group hover:shadow-lg hover:-translate-y-2`}
                onMouseEnter={() => setActiveFeature(card.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`h-1 bg-gradient-to-r ${card.color}`}></div>
                <div className="p-4">
                  <div className="flex items-center mb-3 gap-2">
                    <div className="text-xl">{card.icon}</div>
                    <h3 className="text-base font-medium text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {card.id === 1 ? "Dein Geschmack, deine Regeln. Wir planen Speisen, die zu dir passen – egal ob Low Carb, vegan oder du einfach nur Bananen hasst. Auf dein Ziel und Budget abgestimmt." : 
                     card.id === 2 ? "Schluss mit den ständigen Gewichtsschwankungen. Tracke deine Fortschritte ohne Stress und sieh in coolen Grafiken, wie du vorankommst." :
                     card.id === 3 ? "Gutes Essen muss nicht teuer sein. Unsere smarten Listen zeigen dir, wo du sparen kannst, ohne bei der Qualität Abstriche zu machen." :
                     card.id === 4 ? "Von schnellen 15-Minuten-Gerichten bis zum Sonntagsbraten – für jedes Level und jeden Geschmack ist was dabei. Auch wenn du nur eine Mikrowelle bedienen kannst." :
                     "Keine Lust auf Einkaufsmarathon nach der Arbeit? Lass dir alles liefern oder bestell fertige Mahlzeiten mit einem Klick, wenn's mal schnell gehen muss."}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coming Soon - Sport Communities */}
          <div className="mt-12 mb-8">
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
                    Coming soon: Sport-Communities! Connect mit Gleichgesinnten, nimm an Challenges teil und hol dir die Extra-Motivation. Gemeinsam durchziehen ist einfacher als allein – egal ob Laufgruppe oder Home-Workout nach Feierabend. Ein bisschen Social Pressure kann manchmal Wunder wirken.
                  </p>
                  <button
                    className="inline-flex items-center text-sm text-blue-600 font-medium hover:translate-x-1 transition-transform"
                    onClick={() => {
                      document.querySelector('input[type="email"]').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      });
                      // Set focus on the email input after scrolling
                      setTimeout(() => {
                        const emailInput = document.querySelector('input[type="email"]');
                        if (emailInput) emailInput.focus();
                      }, 800);
                    }}
                  >
                    Für frühen Zugang anmelden <ArrowIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-right">
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-calcart-green/10 to-emerald-500/10 text-calcart-green text-sm font-medium py-2 px-5 rounded-md hover:bg-gradient-to-r hover:from-calcart-green/20 hover:to-emerald-500/20 transition-all group hover:scale-105"
            >
              <span>Alle Funktionen entdecken</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
                Wer <span className="text-transparent bg-clip-text bg-gradient-to-r from-calcart-green to-emerald-400">steckt dahinter?</span>
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
                    Wir sind auch genervt von kompliziertem Ernährungskram. Deshalb machen wir's einfach – mit Calcart wird gesundes Essen zum No-Brainer.
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Keto, Low Carb, Paleo, Vegan... wer soll da noch durchblicken? Wir bringen Ordnung in den Diät-Dschungel und liefern praktische Lösungen statt nur Theorie. Mit Calcart hast du quasi einen persönlichen Ernährungscoach in der Tasche, der zu deinem Leben passt – nicht umgekehrt.
                  </p>
                  
                  <div className="bg-emerald-50 border-l-4 border-calcart-green p-4 rounded-r-md">
                    <p className="text-gray-800 text-sm font-medium italic">
                      Genug mit den Ausreden! Mit uns wird gesunde Ernährung so einfach, dass es keinen Grund mehr gibt, es nicht zu tun.
                    </p>
                  </div>
                  
                  <div className="mt-10 mb-6 space-y-6">
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-5">
                      <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-calcart-green shadow-md flex-shrink-0">
                        <img 
                          src={process.env.PUBLIC_URL + '/img/team/Alex.jpg'} 
                          alt="Alexander Brunner - Gründer von Calcart" 
                          className="absolute w-full h-full object-cover object-center"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = 'https://via.placeholder.com/150?text=AB';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Alexander Brunner</h3>
                        <p className="text-calcart-green font-medium text-sm mb-2">Gründer & Chef</p>
                        <p className="text-gray-600 text-sm">
                          Alex hat Calcart gegründet, damit gesundes Essen für jeden einfach wird. 
                          Er kennt sich gut mit Technik aus und liebt gesundes Essen. Er leitet das Team und entwickelt die Ideen für Calcart.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating action button for mobile */}
      <button
        className="fixed bottom-4 right-4 md:hidden bg-gradient-to-r from-calcart-green to-emerald-500 text-white w-10 h-10 rounded-md shadow-md flex items-center justify-center z-50 hover:scale-110 active:scale-90 transition-transform"
      >
        <PhoneIcon />
      </button>
    </div>
  );
};

export default SignUpPage; 