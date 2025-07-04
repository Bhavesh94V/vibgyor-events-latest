import React, { useEffect } from "react";
import { Crown, Check, ArrowRight } from "lucide-react";
import sideimg from "../assets/Wedding/wed1.jpg";
import bgImage from "../assets/Wedding/bgImage.jpg"
import RoyalParticles from "./RoyalParticles";
import AOS from "aos";
import "aos/dist/aos.css";
import event1 from "../assets/Wedding/wed1.jpg"
import event2 from "../assets/Wedding/wed2.webp"
import event3 from "../assets/Wedding/wed3.jpg"
import event4 from "../assets/Wedding/wed4.jpg"


const services = [
  "Bespoke venue selection and royal transformation",
  "Custom floral arrangements with exotic blooms",
  "Premium catering with Michelin-starred chefs",
  "Professional cinematic photography and videography",
  "Luxury transportation and guest accommodation",
  "Traditional and contemporary entertainment",
  "Personal wedding concierge service",
  "Complete wedding planning and coordination",
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

export default function RoyalWeddingSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="w-full">
      <div className="relative z-10">
        <RoyalParticles intensity={0.3} />
        <section
          className="relative h-auto md:h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="bg-black/70 w-full h-full backdrop-blur-sm flex items-center py-12 md:py-0">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
              {/* Left */}
              <div 
                className="md:w-1/2 space-y-6 text-start md:text-left"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="flex items-center justify-start gap-4">
                  <Crown className="text-[#B89433] w-8 h-8" />
                  <h4 className="text-[#B89433] tracking-widest font-serif font-light uppercase text-base sm:text-lg">
                    Majestic Celebrations
                  </h4>
                </div>

                <h1 className="text-[52px] sm:text-[48px] md:text-[90px] leading-[1.2] font-serif font-light">
                  ROYAL <br />
                  <span className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] bg-clip-text text-transparent">
                    WEDDINGS
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mx-auto md:mx-0 max-w-[90%]">
                  Transform your special day into a timeless royal affair with
                  unparalleled luxury and elegance that transcends ordinary
                  celebrations. Every detail crafted to perfection.
                </p>

                <div className="flex font-serif font-light flex-col md:flex-row justify-center md:justify-start gap-6 md:gap-20 mt-6">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">89+</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Celebrations
                    </p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">15+</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Years
                    </p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">100%</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      Satisfaction
                    </p>
                  </div>
                </div>

                <button 
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white font-serif font-light rounded-full shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  BEGIN YOUR JOURNEY
                </button>
              </div>

              {/* Right */}
              <div 
                className="md:w-1/2 flex justify-center items-center mt-12"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="relative">
                  <img
                    src= {sideimg}
                    alt="Royal Wedding"
                    className="rounded-2xl w-[250px] sm:w-[300px] md:w-[450px] h-auto max-h-[600px] object-cover shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center shadow-lg">
                    <Crown className="text-white w-7 h-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-black text-white py-20 px-4 sm:px-6 overflow-hidden">
          <RoyalParticles intensity={0.3} />

          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
            <div 
              className="max-w-7xl p-10 mx-auto text-center space-y-4"
              data-aos="fade-up"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light">
                Royal Services
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Every aspect of your celebration is carefully curated and
                flawlessly executed
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-2 sm:px-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index % 4)}
                >
                  <div className="flex flex-col items-start gap-4">
                    <Check className="text-[#B89433] w-6 h-6" />
                    <p className="text-sm sm:text-start text-gray-100">
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black/90 text-white py-20 px-4 sm:px-6">
          <div 
            className="max-w-7xl mx-auto text-center space-y-4"
            data-aos="fade-up"
          >
            <h2 className="text-3xl sm:text-5xl font-serif font-light">
              Royal Portfolio
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Witness the magic of our royal celebrations
            </p>
          </div>

          <div className="mt-12 grid gap-8 grid-cols-1 font-serif font-light sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                title: "Palace of Dreams",
                description:
                  "A majestic celebration that redefined luxury wedding experiences",
                location: "Udaipur Palace",
                year: "2024",
                image:
                 event1,
              },
              {
                title: "Royal Garden Affair",
                description: "An enchanting garden wedding with regal elegance",
                location: "Jodhpur Heritage",
                year: "2024",
                image:
                 event2,
              },
              {
                title: "Golden Sunset Ceremony",
                description:
                  "Golden Sunset Ceremony A golden hour celebration in the heart of the desert",
                location: "Jaisalmer Fort",
                year: "2023",
                image:
                 event3,
              },
              {
                title: "Ethereal Palace Wedding",
                description:
                  " A fairy tale wedding in South India's crown jewel",
                location: "Jaisalmer Fort",
                year: "2023",
                image:
                  event4,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl font-serif font-light overflow-hidden shadow-lg group hover:shadow-2xl transition"
                data-aos="zoom-in"
                data-aos-delay={100 * (index % 4)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent px-6 py-4 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <a href="#" className="text-[#B89433] hover:underline">
                      {item.location}
                    </a>
                    <span className="text-gray-400">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="bg-[#0b0b0b] text-white py-20 px-4">
          <div 
            className="text-center space-y-4 max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-light">
              Royal Packages
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Choose your perfect celebration package
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border border-gray-700
  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transition-all duration-300 group
  hover:bg-gradient-to-br hover:from-purple-900/40 hover:to-blue-900/40
  hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]`}
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                {index === 1 && pkg.badge && (
                  <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white text-sm px-4 py-2 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                  {pkg.title}
                </h3>
                <p className="text-[#B89433] text-3xl font-semibold text-center">
                  {pkg.price}
                </p>
                <p className="text-gray-300 text-sm font-semibold text-center mt-2">
                  {pkg.subtitle}
                </p>

                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-[#B89433] w-4 h-4" />
                      <span className="text-sm text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 text-sm font-semibold rounded-full transition-all duration-300
  bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm text-white border border-gray-500
   hover:bg-gradient-to-r from-[#C87C38] to-[#a07e7e]`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </section> */}

        <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 text-white py-20 px-4 text-center overflow-hidden">
          <RoyalParticles intensity={0.3} className="absolute inset-0 z-0" />

          <div 
            className="relative z-10 max-w-4xl mx-auto space-y-6 shadow-none"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium">
              Ready for Your Royal Wedding?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Let us transform your dream into a magnificent reality with our
              royal wedding expertise
            </p>
            <button 
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white font-bold text-sm sm:text-base px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              START PLANNING <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}