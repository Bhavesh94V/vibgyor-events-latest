import React, { useEffect } from "react";
// No need to import Link or useNavigate if using a plain <a> tag for simple home navigation.
// If you MUST use client-side routing without full page reload, you would re-introduce Link from react-router-dom
// and replace the <a> tag with <Link to="/">...</Link> while keeping the inline SVG.

import { Crown, Check, ArrowRight, Palette } from "lucide-react"; // Keep these for other parts of your component
import { FaRegHeart } from "react-icons/fa6";import { Star } from 'lucide-react'
import { GiPolarStar } from "react-icons/gi";
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa'

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import bgimg from "../assets/Private/private1.jpeg"
import sideimg from "../assets/Private/private2.jpg"
import event1 from "../assets/Private/private3.jpg"
import event2 from "../assets/Private/private4.jpg"
import event3 from "../assets/Private/private5.jpg"
import event4 from "../assets/Private/private6.webp"

const services = [
  "Personalized event conceptualization and design",
  "Intimate venue selection and transformation",
  "Bespoke decor and floral arrangements",
  "Customized catering and menu curation",
  "Personal entertainment and performances",
  "Memory curation and keepsake creation",
  "Photography and videography services",
  "Complete celebration coordination",
];

const packages = [
  {
    title: "Royal Heritage",
    price: "₹15,00,000",
    subtitle: "Classic elegance with traditional royal elements",
    features: [
      "Heritage venue decoration",
      "Traditional catering",
      "Photography package",
      "Basic coordination",
    ],
    highlight: false,
  },
  {
    title: "Imperial Grandeur",
    price: "₹35,00,000",
    subtitle: "Luxurious celebration with premium amenities",
    features: [
      "Premium venue design",
      "Gourmet catering",
      "Cinematic videography",
      "Full coordination",
      "Entertainment",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Maharaja Splendor",
    price: "₹75,00,000",
    subtitle: "Ultimate luxury with bespoke everything",
    features: [
      "Bespoke venue transformation",
      "Celebrity chef",
      "Luxury experiences",
      "Personal concierge",
      "Royal treatment",
    ],
    highlight: true,
  },
];

export default function Private() {
  const bgImage = bgimg; // Placeholder for your original background
  const sideImage = sideimg; // Placeholder for your original side image

  useEffect(() => {
    AOS.init({
      duration: 1000, // global duration for animations
      once: false,    // whether animation should happen only once - while scrolling down
    });
    AOS.refresh(); // reinitialize AOS on component updates if needed
  }, []);

  return (
    // Added overflow-x-hidden here
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <div className="relative z-10">
        {/* section:1 */}
        <section
          className="relative min-h-[160vh] bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundColor: "black",
            backgroundSize: '100% 80%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
          }}
        >
          {/* Back to Home Link - EXACTLY as in the image */}
          <a
            href="/"
            className="absolute top-8 left-8 flex items-center gap-2 text-white text-sm font-medium z-50 group hover:text-[#b89433] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {/* BACK TO HOME */}
          </a>


          {/* Main inner container with taller height */}
          <div className="bg-black/70 w-full min-h-[160vh] flex items-center py-12 md:py-0 transition-all duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
              {/* Left */}
              <div className="md:w-1/2 space-y-6 text-start md:text-left" data-aos="fade-right" data-aos-duration="1000">
                <div className="flex items-center justify-start gap-4" data-aos="fade-right" data-aos-delay="200">
                  <GiPolarStar className="text-[#b89433] w-8 h-8" />
                  <h4 className="text-[#b89433] tracking-widest font-serif font-light uppercase text-base sm:text-lg">
                    Intimate Luxury
                  </h4>
                </div>

                <h1 className="text-[52px] sm:text-[48px] md:text-[90px] leading-[1.2] font-serif text-[#FFFFFF]" data-aos="fade-right" data-aos-delay="300">
                 PRIVATE <br />
                  <span className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] bg-clip-text text-transparent text-[#b89433]">
                    CELEBRATION
                  </span>
                </h1>

                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg" data-aos="fade-right" data-aos-delay="400">
                  Personalized celebrations that reflect your unique style and create cherished memories for generations. Every intimate moment crafted with love, attention, and extraordinary care.
                </p>

                <div className="flex font-serif font-light flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-20 mt-6 text-gray-300" data-aos="fade-up" data-aos-delay="500">
                  <div>
                    <p className="text-xl sm:text-2xl text-white">156+</p>
                    <p className="text-xs uppercase tracking-wide">Celebrations</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl text-white">10+</p>
                    <p className="text-xs uppercase tracking-wide">Years</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl text-white">100%</p>
                    <p className="text-xs uppercase tracking-wide">Joy</p>
                  </div>
                </div>

                <button
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3
            bg-gradient-to-r from-[#c87c38] to-[#A07e7e]
            text-white font-sans font-medium rounded-full shadow-lg
            hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                  data-aos="fade-up" data-aos-delay="600"
                >
                  CREATE YOUR CELEBRATION
                </button>
              </div>

              {/* Right */}
             <div className="md:w-1/2 flex justify-center items-center py-8 md:py-0" data-aos="fade-left" data-aos-duration="1000">
<div className="relative">
  <img
    src={sideImage}
    alt="Royal Wedding"
    // Set a fixed height, for example, h-[750px] or h-[780px]
    className="rounded-2xl w-[500px] sm:w-[500px] md:w-[600px] h-[750px] object-cover shadow-[0_0_40px_rgba(255,255,255,0.2)] max-w-full"
    data-aos="zoom-in" data-aos-delay="700"
  />
  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center shadow-lg" data-aos="zoom-in" data-aos-delay="800">
    <FaRegHeart className="text-white w-9 h-9" />
  </div>
</div>
</div>
            </div>
          </div>
        </section>


        {/* section:2 */}
        <section className="relative bg-[#1a1a1a] text-white py-20 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl p-10 mx-auto text-center space-y-4" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              Celebration Services
            </h2>
            <p className="text-base sm:text-lg  text-gray-300">
             Intimate and personalized services that make every moment special and memorable
            </p>
          </div>


          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-2 sm:px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a]/60 hover:bg-[#1a1a1a]/80
                 border border-white/10 backdrop-blur-md
                 rounded-xl p-6 text-center shadow-[0_0_10px_rgba(255,255,255,0.05)]
                 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
                 transition-all duration-300"
                data-aos="fade-up" data-aos-delay={index * 100} // Stagger the animation
              >
                <div className="flex flex-col items-start gap-4">
                  <Check className="text-[#b89433] w-6 h-6" />
                  <p className="text-sm sm:text-start text-white/80 leading-relaxed tracking-wider">
                    {service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* section:3 */}
        <section className="bg-black/85 text-white py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto text-center space-y-4" data-aos="fade-up">
            <h2 className="text-3xl sm:text-5xl font-serif font-light">
             Celebration Stories
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Discover the intimate celebrations that have touched hearts and created lasting memories
            </p>
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 font-serif font-light sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: "Golden Anniversary Gala",
                description:
                  "An intimate 50th anniversary celebration with family and close friends",
                location: "Private Estate, Goa",
                year: "2024",
                image:
                 event1
              },
              {
                title: "Milestone Birthday Soirée",
                description: "A sophisticated 60th birthday celebration with personalized touches",
                location: "Luxury Villa, Udaipur",
                year: "2024",
                image:
                 event2
              },
              {
                title: "Engagement Garden Party",
                description:
                  "A romantic engagement celebration in an enchanted garden setting",
                location: "Heritage Bungalow, Mumbai",
                year: "2023",
                image:
                  event3
              },
              {
                title: "Artisan Stories",
                description:
                  " Celebrating traditional craftsmanship in modern settings",
                location: "Jaipur Cultural Center",
                year: "2023",
                image:
                 event4
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl font-serif font-light overflow-hidden shadow-lg group hover:shadow-2xl transition ${index === 0
                  ? "h-[400px] sm:h-[400px] md:h-[400px]" // Height for the first div
                  : "h-[370px] sm:h-[370px] md:h-[370px]" // Standard height for other divs
                  } ${index === 1 ? "mt-4" : ""}`} // Add margin-top only to the second image's div
                data-aos="zoom-in-up" data-aos-delay={index * 150} // Stagger the animation
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent px-6 py-4 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <a href="#" className="text-[#b89433] hover:underline">
                      {item.location}
                    </a>
                    <span className="text-gray-400">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* section:4 */}
        {/* <section className="bg-[#1a1a1a] text-white py-20 px-4">
       
          <div className="text-center space-y-4 max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-light">
              Celebration Packages
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
             Thoughtfully designed packages for every intimate celebration <span className="font-semibold text-white">for</span> every cultural vision and budget
            </p>
          </div>

          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            
            <div
              className="flex flex-col h-full rounded-2xl p-8 border border-gray-700 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transition-all duration-300"
              data-aos="fade-up" data-aos-delay="100"
            >
              <h3 className="text-2xl font-serif mb-2 text-center">Intimate Elegance</h3>
              <p className="text-4xl font-light text-[#b89433] mb-2 text-center">₹5,00,000</p>
              <p className="text-white/70 text-center text-sm">Perfect for small gatherings with personal touches</p>
              <ul className="mt-6 space-y-4 flex-1">
                {[
                  "Venue styling",
                  "Custom catering",
                  "Photography",
                  "Personal coordination",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#b89433] w-5 h-5" />
                    <span className="text-lg text-gray-200 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-3 text-lg font-medium rounded-full transition-all duration-300 bg-gray-700/50 text-white border border-gray-600 hover:bg-gray-600/70">
                Select Package
              </button>
            </div>

            
            <div
              className="relative flex flex-col h-full p-10 rounded-3xl border-2 border-[#b89433] bg-gradient-to-b from-[#b89433]/10 to-transparent transition-all duration-500 ring-2 ring-[#b89433]/50 scale-105"
              data-aos="zoom-in" data-aos-delay="300"
            >
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#c87c38] to-[#A07e7e] text-white px-6 py-2 rounded-full text-sm font-medium">
                Most Popular
              </span>
              <h3 className="text-2xl font-serif text-center mb-2">Luxury Celebration</h3>
              <p className="text-4xl font-light text-[#b89433] mb-2 text-center">₹12,00,000</p>
              <p className="text-white/70 text-center text-sm">Enhanced private experience with premium amenities</p>
              <ul className="mt-6 space-y-4 flex-1">
                {[
                  "Premium venue design",
                  "Gourmet catering",
                  "Entertainment",
                  "Memory curation",
                  "Full coordination",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#b89433] w-5 h-5" />
                    <span className="text-lg text-gray-100 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-3 text-lg font-medium rounded-full transition-all duration-300 bg-gradient-to-r from-[#c87c38] to-[#A07e7e] text-white">
                Select Package
              </button>
            </div>

           
            <div
              className="flex flex-col h-full rounded-2xl p-8 border border-gray-700 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transition-all duration-300"
              data-aos="fade-up" data-aos-delay="500"
            >
              <h3 className="text-2xl font-serif mb-2 text-center">Bespoke Experience</h3>
              <p className="text-4xl font-light text-[#b89433] mb-2 text-center">₹25,00,000</p>
              <p className="text-white/70 text-center text-sm">Ultimate personalized celebration crafted to perfection</p>
              <ul className="mt-6 space-y-4 flex-1">
                {[
                  "Completely customized",
                  "Celebrity entertainment",
                  "Luxury experiences",
                  "Personal concierge",
                  "Legacy creation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#b89433] w-5 h-5" />
                    <span className="text-lg text-gray-200 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-3 text-lg font-medium rounded-full transition-all duration-300 bg-gray-700/50 text-white border border-gray-600 hover:bg-gray-600/70">
                Select Package
              </button>
            </div>
          </div>
        </section> */}


        {/* section:5 */}
        <div className="bg-black/85 text-white py-20 px-6"> {/* Using a custom dark gray hex code for precise match */}
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6" data-aos="fade-up">Cherished Memories</h2> {/* Adjusted margin-bottom for spacing */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Review Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500" data-aos="fade-right" data-aos-delay="200">
                <div className="flex justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-white text-lg italic mb-6">"  "</p> {/* Placeholder for review text */}
                <p className="text-white text-xl font-semibold mb-1">Meera & Vikram Patel</p>
                <p className="text-[#b89433] text-md">25th Anniversary</p>
              </div>

              {/* Review Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500" data-aos="fade-left" data-aos-delay="400">
                <div className="flex justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-white text-lg italic mb-6">"  "</p> {/* Placeholder for review text */}
                <p className="text-white text-xl font-semibold mb-1">Sunita Sharma</p>
                <p className="text-[#b89433] text-md">60th Birthday</p>
              </div>
            </div>
          </div>
        </div>



        {/* section:6 */}
        {/* <section className="relative bg-gradient-to-r from-[#00332E] via-[#1E1442] to-[#0C093D] text-white py-20 px-6 text-center font-serif" data-aos="fade-up">
        
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6" data-aos="fade-up" data-aos-delay="100">
            Ready to Showcase Culture?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Let us create an immersive cultural experience that celebrates art, heritage, and human creativity
          </p>

          <div className="flex justify-center items-center mt-10" data-aos="zoom-in" data-aos-delay="300">
            <button className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white px-12 py-4 text-lg font-medium tracking-wider uppercase rounded-full transition-all duration-500 shadow-2xl flex items-center gap-3">
              CREATE EXHIBITION
              <FaArrowRight className="text-white text-base mt-[2px]" />
            </button>
          </div>
        </section> */}

        
      </div>
    </div>
  );
}