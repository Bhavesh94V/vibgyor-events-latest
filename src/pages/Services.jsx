import React, { useEffect } from 'react';
import { ArrowLeft, Crown, Users, Mail, Palette, Music, Heart, Zap, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import event1 from "../assets/Services/services1.jpg"
import event2 from "../assets/Services/services2.jpg"
import event3 from "../assets/Services/services3.jpg"
import event4 from "../assets/Services/services4.jpg"
import event5 from "../assets/Services/services5.jpg"
import event6 from "../assets/Services/services6.jpg"

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }, []);

    const stats = [
        { number: '500+', label: 'EVENTS DELIVERED' },
        { number: '15', label: 'YEARS EXPERIENCE' },
        { number: '98%', label: 'CLIENT SATISFACTION' }
    ];

    const services = [
        {
            id: 1,
            icon: Crown,
            category: 'ROYAL CELEBRATIONS',
            title: 'Luxury Weddings',
            description: 'Transform your special day into a timeless masterpiece with our luxury wedding services. Every detail is meticulously crafted to create an unforgettable celebration of love.',
            priceRange: '₹15,00,000 - ₹50,00,000',
            features: [
                'Bespoke venue selection and design',
                'Premium catering with world-class chefs',
                'Custom floral arrangements and decor',
                'Professional photography and videography'
            ],
            gradient: 'from-purple-600 to-pink-600',
            bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
            image: event1
        },
        {
            id: 2,
            icon: Users,
            category: 'PROFESSIONAL EXCELLENCE',
            title: 'Corporate Events',
            description: 'Sophisticated corporate gatherings that elevate your brand presence and create lasting business relationships with unparalleled professionalism.',
            priceRange: '₹5,00,000 - ₹25,00,000',
            features: [
                'Strategic event planning and execution',
                'State-of-the-art AV technology',
                'Brand integration and messaging',
                'Professional networking facilitation'
            ],
            gradient: 'from-blue-600 to-cyan-600',
            bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
            image: event2
        },
        {
            id: 3,
            icon: Palette,
            category: 'ARTISTIC SHOWCASES',
            title: 'Cultural Exhibitions',
            description: 'Immersive cultural experiences that celebrate art, heritage, and creativity in stunning environments, bringing stories to life through thoughtful curation.',
            priceRange: '₹8,00,000 - ₹35,00,000',
            features: [
                'Expert curatorial services',
                'Interactive display design',
                'Artist coordination and management',
                'Cultural programming and workshops'
            ],
            gradient: 'from-orange-600 to-red-600',
            bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
            image: event3
        },
        {
            id: 4,
            icon: Music,
            category: 'SYMPHONIC EXPERIENCES',
            title: 'Musical Concerts',
            description: 'World-class musical performances with exceptional acoustics and atmospheric staging, creating unforgettable sonic journeys for discerning audiences.',
            priceRange: '₹12,00,000 - ₹40,00,000',
            features: [
                'Professional artist management',
                'State-of-the-art sound engineering',
                'Dynamic stage design and lighting',
                'Audience experience optimization'
            ],
            gradient: 'from-indigo-600 to-purple-600',
            bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
            image: event4
        },
        {
            id: 5,
            icon: Heart,
            category: 'INTIMATE GATHERINGS',
            title: 'Private Celebrations',
            description: 'Personalized celebrations that reflect your unique style and create cherished memories, designed with warmth and attention to every meaningful detail.',
            priceRange: '₹3,00,000 - ₹15,00,000',
            features: [
                'Personalized theme development',
                'Intimate venue selection',
                'Custom decoration and styling',
                'Product showcase design'
            ],
            gradient: 'from-pink-600 to-rose-600',
            bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
            image: event5
        },
        {
            id: 6,
            icon: Zap,
            category: 'MARKET DEBUTS',
            title: 'Brand Launches',
            description: 'Impactful brand launch events that create buzz and establish market presence with strategic storytelling and memorable experiences.',
            priceRange: '₹10,00,000 - ₹45,00,000',
            features: [
                'Strategic launch planning',
                'Influencer management',
                'Media and PR coordination',
                'Market impact assessment'
            ],
            gradient: 'from-green-600 to-teal-600',
            bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
            image: event6
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-800 to-black text-white">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white-900/20 to-blue-900/20"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-16">
                    {/* Back to Home Button */}
                    <button 
                        className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 mb-12"
                        data-aos="fade-right"
                    >
                        {/* <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm font-medium tracking-wide">BACK TO HOME</span> */}
                    </button>

                    {/* Main Title */}
                    <div className="text-center mb-16">
                        <h1 
                            className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8"
                            data-aos="fade-up"
                            data-aos-delay="50"
                        >
                            <span className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] font-serif text-[128px]  bg-clip-text text-transparent">
                                SERVICES
                            </span>
                        </h1>
                        <p 
                            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >
                            Crafting extraordinary experiences across every spectrum of celebration and sophistication
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {stats.map((stat, index) => (
                            <div 
                                key={index} 
                                className="text-center group"
                                data-aos="fade-up"
                                data-aos-delay={200 + (index * 100)}
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                                    {stat.number}
                                </div>
                                <div className="text-sm font-medium tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div 
                                key={service.id} 
                                className="group relative"
                                data-aos="fade-up"
                                data-aos-delay={index % 2 === 0 ? 100 : 200}
                            >
                                {/* Service Image Container */}
                                <div className={`relative h-[450px] rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        data-aos="zoom-in"
                                        data-aos-delay={index % 2 === 0 ? 150 : 250}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                                    <div className="absolute top-6 left-6">
                                        <div 
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                            data-aos="fade-right"
                                            data-aos-delay={index % 2 === 0 ? 200 : 300}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 right-6">
                                    </div>
                                    {/* Price Badge */}
                                    <div 
                                        className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm rounded-full px-4 py-2"
                                        data-aos="fade-up"
                                        data-aos-delay={index % 2 === 0 ? 250 : 350}
                                    >
                                        <span className="text-white text-sm font-medium">{service.priceRange}</span>
                                    </div>
                                </div>

                                {/* Service Details */}
                                <div className="p-8 mt-6 space-y-6">
                                    <div 
                                        data-aos="fade-up"
                                        data-aos-delay={index % 2 === 0 ? 300 : 400}
                                    >
                                        <div className={`text-xs font-bold tracking-widest mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                            {service.category}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 hover:text-[#B89433]">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div 
                                        className="space-y-3"
                                        data-aos="fade-up"
                                        data-aos-delay={index % 2 === 0 ? 350 : 450}
                                    >
                                        {service.features.map((feature, idx) => (
                                            <div 
                                                key={idx} 
                                                className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* <div 
                                        className="flex items-center gap-3 text-gray-400 hover:text-[#b89433] transition-colors duration-300 cursor-pointer"
                                        data-aos="fade-up"
                                        data-aos-delay={index % 2 === 0 ? 400 : 500}
                                    >
                                        <span className="font-medium">LEARN MORE</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;