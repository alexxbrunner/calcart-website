import React, { useState } from 'react';
import BackgroundMesh from './BackgroundMesh';
import Header from './Header';
import HeroSection from './HeroSection';
import CitiesTicker from './CitiesTicker';
import BentoGrid from './BentoGrid';
import ProcessSection from './ProcessSection';
import FAQSection from './FAQ';

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

                <ProcessSection />
      
                {/* 5. Bento Features */}
                <BentoGrid />
                <FAQSection />
            </main>

            {/* Footer Simple */}
            <footer className="py-12 text-center text-slate-400 text-sm">
                <p>&copy; 2025 Calcart Inc. Made for better eating.</p>
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