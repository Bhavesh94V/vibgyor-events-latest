import React, { useRef, useEffect, useState } from "react";
import { FaUser, FaCalendarAlt, FaCrown, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa"; // Added FaPaperPlane
import { gsap } from "gsap";
import { Power3, Back } from "gsap";
import axios from 'axios';

const ConsultationForm = () => {
  const containerRef = useRef();
  const formContentRef = useRef(); // Ref for the changing form fields area
  const iconsRef = useRef([]);
  iconsRef.current = []; // Initialize array for icon refs

  // State to manage the current step of the form
  const [currentStep, setCurrentStep] = useState(1);
  // State to hold form data (for demonstrating input values, not full validation)
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    phone_number: "",
    EventType: "",
    BudgetRange: "",
    AdditionalRequirements: "",
    PreferredDate: "",
    city: "",
    GuestCount: "",
    subject: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // GSAP animation for initial load and step transitions
  useEffect(() => {
    // Initial entrance animation for the main container
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: Power3.easeOut, delay: 0.2 }
    );

    // Initial animation for icons (or re-animate on step change for a subtle effect)
    gsap.fromTo(iconsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: Back.easeOut.config(1.7), delay: 0.5 }
    );

  }, []); // Empty dependency array means this runs once on mount

  // GSAP animation for form content transitions between steps
  useEffect(() => {
    // Animate out current content, then animate in new content
    // Target children of the form content div for the animation
    gsap.fromTo(formContentRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: Power3.easeOut, stagger: 0.1 }
    );
  }, [currentStep]); // Rerun animation whenever currentStep changes

  // const handleNext = () => {
  //   if (currentStep < 4) {
  //     setCurrentStep(prevStep => prevStep + 1);
  //   } else {
  //     // Logic for submitting the form on the last step
  //     alert("Form Submitted! (Check console for data)");
  //     console.log("Form Data:", formData);
  //   }
  // };



  const handleNext = async () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      try {
        const response = await axios.post("http://localhost:5100/api/forms", formData);
        console.log("Submitted:", response.data);
        alert("Your consultation has been submitted!");

        // Reset form
        setFormData({
          FullName: "",
          email: "",
          phone_number: "",
          EventType: "",
          BudgetRange: "",
          AdditionalRequirements: "",
          PreferredDate: "",
          city: "",
          GuestCount: "",
          subject: "",
          message: ""
        });
        setCurrentStep(1);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Function to add elements to the iconsRef array
  const addToIconsRef = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  // Helper function to render form fields based on the current step
  const renderFormFields = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="flex flex-col">
              <label htmlFor="FullName" className="mb-2 text-lg font-medium text-white/90">Full Name</label>
              <input
                type="text"
                id="FullName"
                name="FullName"
                placeholder="Enter your full name"
                value={formData.FullName}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-lg font-medium text-white/90">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="phone_number" className="mb-2 text-lg font-medium text-white/90">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                placeholder="+1 (555) 123-4567"
                value={formData.phone_number}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
              />
            </div>
          </>
        );
      case 2: // Event Details
        return (
          <>
            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="EventType" className="mb-2 text-lg font-medium text-white/90">Event Type</label>
              <select
                id="EventType"
                name="EventType"
                value={formData.EventType}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 appearance-none custom-select-arrow"
              >
               <option value=""className=" text-black font-bold" >Select event type</option>
                <option value="Wedding" className=" text-black">Wedding</option>
                <option value="Corporate Event" className=" text-black">Corporate Event</option>
                <option value="Private Party" className=" text-black">Private Party</option>
                <option value="Birthday" className=" text-black">Birthday Celebration</option>
                <option value="Anniversary" className=" text-black">Anniversary</option>
                <option value="Other" className=" text-black">Other</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="PreferredDate" className="mb-2 text-lg font-medium text-white/90">Preferred Date</label>
              <input
                type="date"
                id="PreferredDate"
                name="PreferredDate"
                placeholder="dd-mm-yyyy"
                value={formData.PreferredDate}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 date-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="GuestCount" className="mb-2 text-lg font-medium text-white/90">Guest Count</label>
              <select
                id="GuestCount"
                name="GuestCount"
                value={formData.GuestCount}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 appearance-none custom-select-arrow"
              >
               <option value="" className=" text-black font-bold">Number of guests</option>
                <option value="1-50" className=" text-black">1-50</option>
                <option value="51-100" className=" text-black">51-100</option>
                <option value="101-200" className=" text-black">101-200</option>
                <option value="201-500" className=" text-black">201-500</option>
                <option value="500+" className=" text-black">500+</option>
              </select>
            </div>
          </>
        );
      case 3: // Budget Range, city, Additional Requirements
        return (
          <>
            <div className="flex flex-col">
              <label htmlFor="BudgetRange" className="mb-2 text-lg font-medium text-white/90">Budget Range</label>
              <select
                id="BudgetRange"
                name="BudgetRange"
                value={formData.BudgetRange}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 appearance-none custom-select-arrow"
              >
                <option value="" className=" text-black font-bold">Select budget range</option>
                <option value="Under 10,000"  className=" text-black">Under 10,000</option>
                <option value="10,000 - 25,000"  className=" text-black">10,000 - 25,000</option>
                <option value="25,000 - 50,000"  className=" text-black">25,000 - 50,000</option>
                <option value="50,000 - 100,000"  className=" text-black">50,000 - 100,000</option>
                <option value="Over 100,000"  className=" text-black">Over 100,000</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="city" className="mb-2 text-lg font-medium text-white/90">city</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City, State/Country"
                value={formData.city}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="AdditionalRequirements" className="mb-2 text-lg font-medium text-white/90">Additional Requirements</label>
              <textarea
                id="AdditionalRequirements"
                name="AdditionalRequirements"
                placeholder="Tell us about your vision, special requirements, or any specific details..."
                rows="4"
                value={formData.AdditionalRequirements}
                onChange={handleChange}
                className="bg-white/10 px-5 py-3 rounded-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
              ></textarea>
            </div>
          </>
        );
      case 4: // Ready to Begin Your Royal Journey?
        return (
          <div className="sm:col-span-2 text-center py-8">
            <FaCrown className="text-yellow-400 text-7xl mx-auto mb-6" />
            <h3 className="text-3xl font-extrabold text-white mb-4">Ready to Begin Your Royal Journey?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Our luxury event consultants will contact you within 24 hours to schedule your personalized consultation.
            </p>
            <div className="bg-white/10 p-8 rounded-xl text-left max-w-xl mx-auto border border-white/20">
              <h4 className="text-xl font-semibold mb-4 text-white">What happens next:</h4>
              <ul className="list-disc list-inside text-white/90 space-y-2 text-base">
                <li>Personal consultation call within 24 hours</li>
                <li>Detailed proposal and timeline creation</li>
                <li>Site visit and venue recommendations</li>
                <li>Dedicated event planning team assignment</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#240046] via-[#3c096c] to-[#9d4edd] overflow-hidden flex flex-col items-center py-10 px-4 font-sans">
      {/* Moving Square Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="w-[6px] h-[6px] bg-white/10 absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Consultation Form Section */}
      <div ref={containerRef} className="container mx-auto py-20 px-6 text-center text-white z-10 w-full lg:px-12 xl:px-24">
        <FaCrown className="text-light text-6xl mx-auto mb-6" />
        <h1 className="text-[6.5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.2vw] xl:text-[3vw] font-extrabold bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-transparent bg-clip-text mb-4 whitespace-nowrap">
          Book Your Royal Consultation
        </h1>
        <p className="text-white/80 text-lg sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Begin your journey to an extraordinary event. Our luxury consultants will craft a bespoke experience tailored to your vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 items-start">
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-xl p-10 border border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold">Consultation Request</h2>
              <span className="text-sm bg-gradient-to-r from-[#C87C38] to-[#a07e7e] rounded-full px-4 py-1 font-medium">Step {currentStep} of 4</span>
            </div>

            {/* Step Icons with dynamic highlighting and connecting lines */}
            <div className="flex justify-around items-center mb-10 relative">
              {/* Static background line that spans the full width of the icons area */}
              <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/30 z-0 mx-auto transform -translate-y-1/2" style={{ width: 'calc(100% - 2.5rem)' }}></div> {/* Adjusted width */}

              {[FaUser, FaCalendarAlt, FaCrown, FaMapMarkerAlt].map((Icon, i) => (
                <React.Fragment key={i}>
                  <div
                    ref={addToIconsRef}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg relative z-10 transition-colors duration-300
                      ${i + 1 <= currentStep ? 'bg-[#B89433] text-black' : 'bg-white/20 text-white'}`
                    }
                  >
                    <Icon className={i + 1 === currentStep ? "text-black" : ""} />
                  </div>
                  {/* Progress Line Segment (only between icons) */}
                  {i < 3 && ( // Only render lines between icons
                    <div
                      className={`h-[2px] absolute transition-all duration-500 ease-in-out z-0`}
                      style={{
                        left: `calc(${(i / 3) * 100}% + 2.5rem)`, // Start after the previous icon, accounting for icon width
                        width: `calc(100% / 3 - 2.5rem)`, // Adjusted width to fit exactly between circles
                        background: i + 1 < currentStep ? 'linear-gradient(to right, #facc15, #f472b6)' : 'transparent',
                        transformOrigin: 'left',
                        transform: `scaleX(${i + 1 <= currentStep ? 1 : 0})`
                      }}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base" ref={formContentRef}>
              {renderFormFields()}
            </form>

            <div className="sm:col-span-2 flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                className={`bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-black px-8 py-3 rounded-md font-semibold text-lg shadow-md hover:opacity-90 transition-all duration-300"
              >
                {currentStep === 4 ? 'Submit Request' : 'Next Step'}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 space-y-5">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              {[
                { Icon: FaEnvelope, text: "vibgyor@Gmail.com" },
                { Icon: FaClock, text: "Mon‑Fri: 9AM–7PM EST" },
                { Icon: FaMapMarkerAlt, text: "Ahemadavad" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-base text-white/90">
                  <item.Icon className="text-[#B89433] text-lg" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            {/* Why Choose Us? */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 space-y-5">
              <h3 className="text-xl font-semibold">Why Choose Us?</h3>
              {[
                { Icon: FaCrown, title: "Royal Treatment", desc: "Personalized luxury service" },
                { Icon: FaUser, title: "Expert Team", desc: "Award‑winning event planners" },
                { Icon: FaCalendarAlt, title: "Flawless Execution", desc: "Every detail perfected" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <item.Icon className="text-[#B89433] mt-1 text-lg" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-white/60 text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section (inserted as requested, without modifying your structure) */}
      {/* This div will appear below the main form content, but still within the top-level containerRef div */}


      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Custom styling for select dropdown arrow */
        .custom-select-arrow {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M6 9l6 6 6-6'%3e%3c/path%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 0.7rem center;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem; /* Make space for the arrow */
        }

        /* Hide the default arrow for date input (some browsers show one) */
        .date-input::-webkit-calendar-picker-indicator {
          filter: invert(1); /* Makes the calendar icon white */
          cursor: pointer;
        }
        .date-input {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        /* Style for placeholder text in select */
        .custom-select-arrow option[disabled]:first-child {
          color: #ffffff99; /* Corresponds to placeholder-white/60 */
        }
        .custom-select-arrow:valid {
          color: white; /* Make selected option text white */
        }
      `}</style>




    </div>


  );
};

export default ConsultationForm;