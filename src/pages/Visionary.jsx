import React, { useEffect, useState } from 'react';
import { Crown, Star, Heart, Clock, Globe } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Visionary() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({ years: 0, weddings: 0, countries: 0 });

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
        AOS.refresh();

        setIsVisible(true);

        // Animate counters
        const animateCounter = (target, setter, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.floor(start));
                }
            }, 16);
        };

        setTimeout(() => {
            animateCounter(15, (value) => setCounters(prev => ({ ...prev, years: value })));
            animateCounter(500, (value) => setCounters(prev => ({ ...prev, weddings: value })));
            animateCounter(50, (value) => setCounters(prev => ({ ...prev, countries: value })));
        }, 500);
    }, []);

    return (
        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden relative">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-[#A07e7e] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-[#c87c38] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#7A7A7A] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-40 right-10 w-24 h-24 bg-[#b89433] rounded-full opacity-20 animate-pulse"></div>
            </div>

            {/* Header */}
            <header className="relative z-10 pt-8" data-aos="fade-down">
                <div className="flex items-center justify-center mb-8">
                    <Crown className="w-8 h-8 text-[#b89433] mr-3" />
                    <h1 className="text-1.5xl font-bold text-[#b89433]">
                        MEET OUR VISIONARY
                    </h1>
                    <Crown className="w-8 h-8 text-[#b89433] ml-3" />
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-6 py-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto" data-aos="fade-up">

                    {/* Left Side - Circular Design */}
                    <div className="relative flex items-center justify-center" data-aos="zoom-in">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            {/* Outer Gradient Ring */}
                            <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-[#c87c38] via-[#b89433] to-[#A07e7e] p-2 animate-spin-slow">
                                <div className="w-full h-full rounded-full bg-[#FFFFFF] flex items-center justify-center">
                                    {/* Inner Content */}
                                    <div className="text-center">
                                        <div className="text-6xl font-bold text-[#7A7A7A] mb-4">
                                            AS
                                        </div>
                                        <Crown className="w-12 h-12 text-[#b89433] mx-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons */}
                            <div className="absolute top-4 left-4 w-12 h-12 bg-[#c87c38] rounded-full flex items-center justify-center animate-float">
                                <Crown className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute bottom-8 left-0 w-12 h-12 bg-[#b89433] rounded-full flex items-center justify-center animate-float-delayed">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} data-aos="fade-left">

                        {/* Title Section */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Crown className="w-8 h-8 text-[#7A7A7A]" />
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#c87c38] to-[#A07e7e] bg-clip-text text-transparent">
                                    Mr. Abhishek Shukla
                                </h2>
                            </div>
                            <p className="text-xl text-[#b89433] font-semibold">Founder & Visionary</p>
                        </div>

                        {/* Description */}
                        <div className="space-y-6 text-[#7A7A7A] leading-relaxed">
                            <p className="text-lg">
                                With <span className="font-semibold text-[#c87c38]">15+ years of experience</span> and expertise here is the
                                <span className="font-semibold text-[#b89433]"> V.E.C. (Vibgyor Events and Concepts)</span> most trusted by flocks all over with scrupulously delivered more than best to make the occasion indelible for each and every one celebrating moments.
                            </p>
                            <p className="text-lg">
                                With his undying spirit and guidance hundreds of wedding across the globe took place (of course lot more to be added.)
                            </p>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6 py-8" data-aos="fade-up">
                            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#A07e7e]/20">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#c87c38] to-[#b89433] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Clock className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#c87c38] mb-1">{counters.years}+</div>
                                <div className="text-sm text-[#7A7A7A] uppercase tracking-wide">Years Experience</div>
                            </div>

                            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#A07e7e]/20">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#b89433] to-[#c87c38] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#b89433] mb-1">{counters.weddings}+</div>
                                <div className="text-sm text-[#7A7A7A] uppercase tracking-wide">Weddings</div>
                            </div>

                            <div className="text-center group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#A07e7e]/20">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#A07e7e] to-[#c87c38] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-[#A07e7e] mb-1">{counters.countries}+</div>
                                <div className="text-sm text-[#7A7A7A] uppercase tracking-wide">Countries</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Visionary;
