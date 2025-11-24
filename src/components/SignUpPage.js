import React, { useState, useEffect, useCallback, useMemo } from 'react';

// --- DATA & CONSTANTS ---
const APP_NAME = 'Calcart';
const PHONE_MOCKUP = 'phone2.png'; // Ensure this image exists in public folder

const FEATURE_CARDS = [
  {
    id: 1,
    title: "Dein Geschmack. Deine Regeln.",
    icon: "🥗",
    description: "Kein 08/15 Plan. Wir lernen, was du magst. Vegan? Keto? Kein Koriander? Wir checken das.",
    color: "from-lime-400 to-emerald-500",
    size: "large" // New property for Bento Grid
  },
  {
    id: 2,
    title: "Smart Tracking",
    icon: "📉",
    description: "Verfolge deine Makros & Gewicht ohne Stress.",
    color: "from-teal-400 to-cyan-500",
    size: "small"
  },
  {
    id: 3,
    title: "Spar-Modus",
    icon: "💸",
    description: "Wir finden die günstigsten Preise für deine Zutaten.",
    color: "from-indigo-400 to-violet-500",
    size: "small"
  },
  {
    id: 4,
    title: "1-Click Delivery",
    icon: "🚚",
    description: "Einkaufszettel nerven. Lass dir alles direkt an die Haustür liefern.",
    color: "from-fuchsia-400 to-pink-500",
    size: "wide"
  }
];

const LAUNCH_CITIES = [
    { city: "Wien", code: "VIE" },
    { city: "Berlin", code: "BER" },
    { city: "München", code: "MUC" },
    { city: "Zürich", code: "ZRH" },
    { city: "Hamburg", code: "HAM" },
];

// --- ICONS ---
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

// --- COMPONENTS ---

// 1. Dynamic Background Mesh
const BackgroundMesh = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-200/40 blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-200/40 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-lime-100/60 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    </div>
);

// 2. Modern Navbar
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

// 3. Hero Section with Massive Typography & Glowing Mockup
const HeroSection = ({ onSubmit, email, setEmail, isSubmitting }) => {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-visible">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Jetzt verfügbar für Pre-Order
                    </div>
                    
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                        Ernährung, aber <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                            ohne Kopfzerbrechen.
                        </span>
                    </h1>
                    
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Calcart plant deine Woche, trackt deine Ziele und füllt deinen Kühlschrank. 
                        Alles in einer App. Alles automatisch.
                    </p>

                    <form onSubmit={onSubmit} className="max-w-md mx-auto lg:mx-0 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative flex gap-2 bg-white p-2 rounded-2xl shadow-xl ring-1 ring-slate-900/5">
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com" 
                                className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-800 placeholder:text-slate-400"
                                required
                            />
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="bg-slate-900 text-white rounded-xl px-6 py-3 font-semibold hover:bg-slate-800 transition-all flex items-center whitespace-nowrap"
                            >
                                {isSubmitting ? '...' : 'Join List'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                        <span className="flex items-center"><CheckIcon /> iOS & Android</span>
                        <span className="flex items-center"><CheckIcon /> Kostenlos starten</span>
                    </div>
                </div>

                {/* Hero Image / Mockup */}
                <div className="flex-1 relative w-full max-w-[400px] lg:max-w-full perspective-1000">
                     {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
                    
                    {/* The Phone */}
                    <div className="relative z-10 transform rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-out hover:scale-105">
                         
                        <img 
                            src={PHONE_MOCKUP} 
                            alt="App Interface" 
                            className="w-full drop-shadow-2xl rounded-[3rem] border-8 border-slate-900 bg-slate-900"
                        />
                        
                        {/* Floating Badge 1 */}
                        <div className="absolute top-20 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-lg">🔥</div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase">Kalorien</p>
                                    <p className="text-slate-900 font-bold">1.850 / 2.200</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge 2 */}
                        <div className="absolute bottom-32 -right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float animation-delay-2000">
                             <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-lg">🥗</div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase">Lieferung</p>
                                    <p className="text-slate-900 font-bold">Morgen, 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 4. The "Bento Grid" Features Section
const BentoGrid = () => {
    const [hovered, setHovered] = useState(null);

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

// 5. Marquee Cities Section
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

// --- MAIN PAGE ---

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Smooth Scroll Helper
    const scrollToSignup = () => {
        const input = document.querySelector('input[type="email"]');
        if(input) input.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Willkommen auf der Warteliste! 🚀");
            setEmail("");
        }, 1500);
    };

    return (
        <div className="min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
            {/* 1. Global Background */}
            <BackgroundMesh />

            {/* 2. Navigation */}
            <Header onSignUpClick={scrollToSignup} />

            <main>
                {/* 3. Hero */}
                <HeroSection 
                    onSubmit={handleSubmit} 
                    email={email} 
                    setEmail={setEmail} 
                    isSubmitting={isSubmitting} 
                />

                {/* 4. Cities Marquee */}
                <CitiesTicker />

                {/* 5. Bento Features */}
                <BentoGrid />
            </main>

            {/* Footer Simple */}
            <footer className="py-12 text-center text-slate-400 text-sm">
                <p>&copy; 2024 Calcart Inc. Made for better eating.</p>
            </footer>
            
            {/* Custom Animations Styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite; }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee { animation: marquee 30s linear infinite; }
            `}</style>
        </div>
    );
};

export default SignUpPage;