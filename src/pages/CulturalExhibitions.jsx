import React, { useEffect } from "react";
// No need to import Link or useNavigate if using a plain <a> tag for simple home navigation.
// If you MUST use client-side routing without full page reload, you would re-introduce Link from react-router-dom
// and replace the <a> tag with <Link to="/">...</Link> while keeping the inline SVG.

import { Crown, Check, ArrowRight, Palette } from "lucide-react"; // Keep these for other parts of your component
import { MdOutlineColorLens } from "react-icons/md";
import { Star } from 'lucide-react'
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa'
import  bgimg from "../assets/Cultural/culture1.webp"
import sideimg from "../assets/Cultural/culture2.jpg"
import event1 from "../assets/Cultural/culture3.jpeg"
import event2 from "../assets/Cultural/culture4.jpg"
import event3 from "../assets/Cultural/culture5.jpg"
import event4 from "../assets/Cultural/culture6.jpg"
// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  "Curatorial expertise and artistic direction",
  "Interactive display design and technology",
  "Immersive lighting and atmospheric design",
  "Artist coordination and management",
  "Educational program development",
  "Digital integration and virtual experiences",
  "Cultural programming and events",
  "Complete exhibition management",
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

export default function CulturalExhibitions() {
  const bgImage = bgimg; // Placeholder for your original background
  const sideImage = sideimg

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
            BACK TO HOME
          </a>


          {/* Main inner container with taller height */}
          <div className="bg-black/70 w-full min-h-[160vh] flex items-center py-12 md:py-0 transition-all duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
              {/* Left */}
              <div className="md:w-1/2 space-y-6 text-start md:text-left" data-aos="fade-right" data-aos-duration="1000">
                <div className="flex items-center justify-start gap-4" data-aos="fade-right" data-aos-delay="200">
                  <MdOutlineColorLens className="text-[#b89433] w-8 h-8" />
                  <h4 className="text-[#b89433] tracking-widest font-serif font-light uppercase text-base sm:text-lg">
                    Artistic Showcases
                  </h4>
                </div>

                <h1 className="text-[52px] sm:text-[48px] md:text-[90px] leading-[1.2] font-serif text-[#FFFFFF]" data-aos="fade-right" data-aos-delay="300">
                  CULTURAL <br />
                  <span className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] bg-clip-text text-transparent text-[#b89433]">
                    EXHIBITIONS
                  </span>
                </h1>

                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-lg" data-aos="fade-right" data-aos-delay="400">
                  Immersive cultural experiences that celebrate art, heritage, and creativity in stunning
                  environments. We transform spaces into galleries that tell stories and inspire souls.
                </p>

                <div className="flex font-serif font-light flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-20 mt-6 text-gray-300" data-aos="fade-up" data-aos-delay="500">
                  <div>
                    <p className="text-xl sm:text-2xl text-white">45+</p>
                    <p className="text-xs uppercase tracking-wide">Exhibitions</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl text-white">200k+</p>
                    <p className="text-xs uppercase tracking-wide">Visitors</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl text-white">95%</p>
                    <p className="text-xs uppercase tracking-wide">Satisfaction</p>
                  </div>
                </div>

                <button
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3
            bg-gradient-to-r from-[#c87c38] to-[#A07e7e]
            text-white font-sans font-medium rounded-full shadow-lg
            hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                  data-aos="fade-up" data-aos-delay="600"
                >
                  CREATE CULTURAL MAGIC
                </button>
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


        {/* section:2 */}
        <section className="relative bg-[#1a1a1a] text-white py-20 px-4 sm:px-6 overflow-hidden">
          <div className="max-w-7xl p-10 mx-auto text-center space-y-4" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
              Cultural Services
            </h2>
            <p className="text-base sm:text-lg  text-gray-300">
              Comprehensive cultural exhibition solutions that bring art and heritage to life
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
              Exhibition Portfolio
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Discover our cultural exhibitions that have captivated audiences worldwide
            </p>
          </div>

          <div className="mt-12 grid gap-6 grid-cols-1 font-serif font-light sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: "Heritage Unveiled",
                description:
                  "A magnificent showcase of India's cultural heritage through contemporary art",
                location: "National Gallery, Delhi",
                year: "2024",
                image:
                  event1, // replace with actual image
              },
              {
                title: "Modern Masters Exhibition",
                description: "Contemporary artists redefining traditional boundaries",
                location: "Mumbai Art District",
                year: "2024",
                image:
                 event2, // replace with actual image
              },
              {
                title: "Digital Renaissance",
                description:
                  "Where technology meets artistic expression in immersive displays",
                location: "Bangalore Tech Museum",
                year: "2023",
                image:
                  event3, // replace with actual image
              },
              {
                title: "Artisan Stories",
                description:
                  " Celebrating traditional craftsmanship in modern settings",
                location: "Jaipur Cultural Center",
                year: "2023",
                image:
                 event4, // replace with actual image
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
              Exhibition Packages
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Tailored solutions <span className="font-semibold text-white">for</span> every cultural vision and budget
            </p>
          </div>

          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            
            <div
              className="flex flex-col h-full rounded-2xl p-8 border border-gray-700 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transition-all duration-300"
              data-aos="fade-up" data-aos-delay="100"
            >
              <h3 className="text-2xl font-serif mb-2 text-center">Cultural Essence</h3>
              <p className="text-4xl font-light text-[#b89433] mb-2 text-center">₹12,00,000</p>
              <p className="text-white/70 text-center text-sm">Essential exhibition setup with artistic flair</p>
              <ul className="mt-6 space-y-4 flex-1">
                {[
                  "Basic curatorial services",
                  "Standard lighting",
                  "Artist coordination",
                  "Educational materials",
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
              <h3 className="text-2xl font-serif text-center mb-2">Artistic Grandeur</h3>
              <p className="text-4xl font-light text-[#b89433] mb-2 text-center">₹25,00,000</p>
              <p className="text-white/70 text-center text-sm">Enhanced cultural experience with immersive elements</p>
              <ul className="mt-6 space-y-4 flex-1">
                {[
                  "Premium curation",
                  "Interactive displays",
                  "Immersive lighting",
                  "Cultural programming",
                  "Digital integration",
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
              <h3 className="text-2xl font-serif mb-2 text-center">Cultural Masterpiece</h3>
              <p className="text-4xl font-light text-[#b89433] mb-2 text-center">₹45,00,000</p>
              <p className="text-white/70 text-center text-sm">Ultimate cultural showcase with cutting-edge technology</p>
              <ul className="mt-6 space-y-4 flex-1">
                {[
                  "Bespoke exhibition design",
                  "Advanced technology",
                  "International artists",
                  "VR experiences",
                  "Cultural legacy",
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
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6" data-aos="fade-up">Cultural Impact</h2> {/* Adjusted margin-bottom for spacing */}

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
                <p className="text-white text-lg italic mb-6">"Our experience with them was exceptional. The exhibition was beautifully curated, attracting a diverse audience and receiving rave reviews. Truly a masterpiece!"</p> {/* Placeholder for review text */}
                <p className="text-white text-xl font-semibold mb-1">Dr. Priya Sharma</p>
                <p className="text-[#b89433] text-md">Art Historian</p>
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
                <p className="text-white text-lg italic mb-6">"The team delivered an outstanding cultural event. Their attention to detail, innovative design, and seamless execution made it a memorable experience for all visitors."</p> {/* Placeholder for review text */}
                <p className="text-white text-xl font-semibold mb-1">Rajesh Kumar</p>
                <p className="text-[#b89433] text-md">Museum Director</p>
              </div>
            </div>
          </div>
        </div>



       
      </div>
    </div>
  );
}