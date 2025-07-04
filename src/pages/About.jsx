import React, { useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineColorLens } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import person1 from "../assets/About/img1.webp"
import person2 from "../assets/About/img2.webp"
import person3 from "../assets/About/img3.webp"
import bgimg from "../assets/About/img4.webp"
import sideimg from "../assets/About/img5.jpeg"
import event from "../assets/About/img6.jpeg"

export default function About() {
    const socialIcons = {
        facebook: FaFacebookF,
        instagram: FaInstagram,
        twitter: FaTwitter,
        linkedin: FaLinkedinIn,
    };
    const observerRef = useRef(null);

    useEffect(() => {
        // Create intersection observer for scroll animations
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        entry.target.classList.remove('animate-out');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all elements with scroll-animate class
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el) => observerRef.current.observe(el));


        AOS.init({
            duration: 1000, // global duration for animations
            once: false,    // whether animation should happen only once - while scrolling down
        });
        AOS.refresh(); // reinitialize AOS on component updates if needed

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const values = [
        {
            name: "Passion",
            description: "Every event is crafted with genuine love and dedication.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
        },
        {
            name: "Excellence",
            description: "We strive for perfection in every detail, no matter how small.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.329 1.16l1.519 4.674c.3.921-.755 1.688-1.539 1.169l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.519-1.838-.248-1.539-1.169l1.519-4.674a1 1 0 00-.329-1.16l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" />
                </svg>
            ),
        },
        {
            name: "Collaboration",
            description: "Working together to bring your vision to life.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
        },
        {
            name: "Innovation",
            description: "Constantly pushing boundaries to create unique experiences.",
            iconBgColor: "bg-[#b89433]",
            icon: (
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
    ];

    const teamMembers = [
        {
            name: "Priya Sharma",
            role: "Founder & Creative Director",
            description: "With over 15 years in event management, Priya brings artistic vision and strategic thinking to every project.",
            image: person1
        },
        {
            name: "Rajesh Kumar",
            role: "Operations Manager",
            description: "Rajesh ensures flawless execution with his meticulous attention to detail and operational expertise.",
            image: person2
        },
        {
            name: "Anita Desai",
            role: "Design Specialist",
            description: "Anita transforms spaces into magical environments that perfectly capture the essence of each event.",
            image: person3
        },
    ];

    // New image links from Pexels
    const bgImage = bgimg
    const sideImage = sideimg;


    return (
        <>
            {/* section:1 (from CulturalExhibitions.jsx) */}
            <section
                className="relative min-h-[100vh] bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundColor: "black",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                }}
            >



                {/* Main inner container with taller height */}
                <div className="bg-black/70 w-full min-h-[100vh] flex items-center py-12 md:py-0 transition-all duration-500 ease-in-out">
                    <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
                        {/* Left */}
                        <div className="md:w-1/2 space-y-6 text-start md:text-left" data-aos="fade-right" data-aos-duration="1000">
                            <div className="flex items-center justify-start gap-4" data-aos="fade-right" data-aos-delay="200">
                                <MdOutlineColorLens className="text-[#b89433] w-8 h-8" />
                                <h4 className="text-[#b89433] tracking-widest font-serif font-light uppercase text-base sm:text-lg">
                                    Our Legacy
                                </h4>
                            </div>

                            <h1 className="text-[52px] sm:text-[48px] md:text-[90px] leading-[1.2] font-serif text-[#FFFFFF]" data-aos="fade-right" data-aos-delay="300">
                                ABOUT <br />
                                <span className="bg-gradient-to-r from-[#c87c38] to-[#A07e7e] bg-clip-text text-transparent text-[#b89433]">
                                    VIBGYOR EVENTS
                                </span>
                            </h1>

                            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg" data-aos="fade-right" data-aos-delay="400">
                                Born from a passion for creating extraordinary moments, Vibgyor Events has
                                been transforming celebrations into unforgettable experiences for over a
                                decade.
                            </p>

                            <div className="flex font-serif font-light flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-20 mt-6 text-gray-300" data-aos="fade-up" data-aos-delay="500">
                                <div>
                                    <p className="text-xl sm:text-2xl text-white">45+</p>
                                    <p className="text-xs uppercase tracking-wide">Events</p>
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl text-white">200k+</p>
                                    <p className="text-xs uppercase tracking-wide">Guests</p>
                                </div>
                                <div>
                                    <p className="text-xl sm:text-2xl text-white">95%</p>
                                    <p className="text-xs uppercase tracking-wide">Satisfaction</p>
                                </div>
                            </div>

                           
                        </div>

                        {/* Right */}
                        <div className="md:w-1/2 flex justify-center items-center py-8 md:py-0" data-aos="fade-left" data-aos-duration="1000">
                            <div className="relative">
                                <img
                                    src={sideImage}
                                    alt="Royal Wedding"
                                    className="rounded-2xl w-[500px] sm:w-[500px] md:w-[600px] h-auto max-h-[700px] object-cover shadow-[0_0_40px_rgba(255,255,255,0.2)] max-w-full"
                                    data-aos="zoom-in" data-aos-delay="700"
                                />
                                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center shadow-lg" data-aos="zoom-in" data-aos-delay="800">
                                    <MdOutlineColorLens className="text-white w-9 h-9" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <div className="bg-white py-16 px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Left Column: Mission and Vision Text */}
                    <div className="scroll-animate animate-out relative rounded-xl overflow-hidden shadow-lg bg-gray-100 hidden lg:block h-full min-h-[550px]">
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <img
                                src= {event}
                                alt="Our Mission"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    

                    {/* Right Column: Image */}
                    <div className="space-y-14 mt-12">
                        {/* Our Mission */}
                        <div className="scroll-animate animate-out">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl md:text-2xl font-bold text-[#b89433]">Our Mission</h2>
                            </div>
                            <p className="text-lg text-[#3A2F25] leading-relaxed">
                                To create extraordinary experiences that transcend expectations,
                                bringing people together through meticulously crafted events that
                                celebrate life's most precious moments. We believe every gathering
                                has the potential to become a masterpiece of memories.
                            </p>
                        </div>

                        {/* Our Vision */}
                        <div className="scroll-animate animate-out">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-4.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl md:text-2xl font-bold text-[#b89433]">Our Vision</h2>
                            </div>
                            <p className="text-lg text-[#3A2F25] leading-relaxed">
                                To be recognized as the premier event management company that sets
                                the standard for elegance, innovation, and excellence. We envision a
                                world where every celebration becomes a work of art, leaving lasting
                                impressions on all who experience them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h2 className="scroll-animate animate-out text-center text-5xl md:text-4xl sm:text-3xl font-normal text-[#7A7A7A] mb-12 font-serif">
                        Our Core Values
                    </h2>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="scroll-animate animate-out bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Icon Container */}
                                <div className={`w-20 h-20 ${value.iconBgColor} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-6`}>
                                    {value.icon}
                                </div>

                                {/* Value Name */}
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {value.name}
                                </h3>

                                {/* Value Description */}
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="bg-white py-16 px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="max-w-7xl mx-auto">
                    {/* Main Heading */}
                    <h2 className="scroll-animate animate-out text-center text-5xl md:text-4xl sm:text-3xl font-normal text-[#7A7A7A] mb-12 font-serif">
                        Meet Our Team
                    </h2>

                    {/* Team Members */}
                    <div className="flex flex-wrap justify-center gap-10">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="scroll-animate animate-out p-10 flex flex-col items-center text-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-xs"
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                {/* Member Image */}
                                <div className="w-72 h-72 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden mb-6 shadow-md transform hover:scale-105 transition-all duration-300 group">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Member Details */}
                                <h3 className="text-2xl font-semibold text-[#b89433] mt-0 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-lg text-[#7A7A7A] mb-4 font-medium">
                                    {member.role}
                                </p>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                                    {member.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Counter Section */}
            <section className="bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center text-center space-y-12 md:space-y-0 md:space-x-8">
                    {[
                        { number: "500+", label: "Events Crafted", gradient: "from-[#c87c38] to-[#A07e7e]" },
                        { number: "100,000+", label: "Happy Guests", gradient: "from-[#c87c38] to-[#A07e7e]" },
                        { number: "50+", label: "Cities Reached", gradient: "from-[#c87c38] to-[#A07e7e]" },
                        { number: "10+", label: "Years of Excellence", gradient: "from-[#c87c38] to-[#A07e7e]" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="scroll-animate animate-out flex flex-col items-center"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <p className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} text-transparent bg-clip-text`}>
                                {stat.number}
                            </p>
                            <p className="text-xl md:text-2xl text-gray-300 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        
        </>
    )
}