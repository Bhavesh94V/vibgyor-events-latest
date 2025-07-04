import React, { useEffect, useState } from "react";
import { Crown, Star, Sparkles, Phone, Mail, MapPin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const res = await fetch("http://localhost:5100/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.ok) {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          alert("❌ Failed: " + data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("❌ Server error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Crown className="absolute top-20 left-16 w-8 h-8 text-purple-500/20 animate-pulse" />
        <Star className="absolute top-32 right-16 w-9 h-9 text-blue-500/20 animate-pulse" />
        <Star className="absolute bottom-40 right-32 w-7 h-7 text-blue-500/15" />
        <Sparkles className="absolute top-24 left-1/2 w-7 h-7 text-teal-500/20 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        {/* Header */}
        <div className="text-center pb-20 mt-10" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#8A2BE2]/10 to-[#0056B3]/10 rounded-full border border-[#8A2BE2]/20 backdrop-blur-sm mb-8">
            <Crown className="w-5 h-5 text-white" />
            <span className="text-white font-medium tracking-wide">
              Royal Consultation
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to create something <span className="text-[#B89433] font-semibold">extraordinary</span>?<br />
            Let’s bring your dream to life with <span className="text-[#B89433] font-semibold">royal elegance</span>.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col lg:flex-row gap-10" data-aos="fade-up">
          {/* Contact Form */}
          <div className="lg:w-1/2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            {/* Form Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-4xl font-serif text-white">Send us a Message</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your royal name"
                    className={`w-full bg-gray-700/50 border ${errors.name ? "border-red-500" : "border-gray-600"} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="your.email@example.com"
                    className={`w-full bg-gray-700/50 border ${errors.email ? "border-red-500" : "border-gray-600"} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="What's this about?"
                  className={`w-full bg-gray-700/50 border ${errors.subject ? "border-red-500" : "border-gray-600"} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500`}
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about your royal event..."
                  className={`w-full bg-gray-700/50 border ${errors.message ? "border-red-500" : "border-gray-600"} rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none`}
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C87C38] to-[#a07e7e] text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Send Royal Message</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6" data-aos="fade-left">
            {/* Crown Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#C87C38] to-[#a07e7e] rounded-xl flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-4xl font-serif text-white">Royal Contact</h2>
            </div>

            {/* Phone */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Royal Hotline</h3>
                  <p className="text-[#B89433] font-medium">+91 98765 43210</p>
                  <p className="text-gray-300">+91 87654 32109</p>
                  <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Royal Mail</h3>
                  <p className="text-[#B89433] font-medium">hello@vibgyorevents.com</p>
                  <p className="text-gray-300">info@vibgyorevents.com</p>
                  <p className="text-gray-400 text-sm mt-1">We reply in royal hours</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Royal Palace</h3>
                  <p className="text-gray-300">123 Event Plaza, Royal Floor</p>
                  <p className="text-gray-300">Bandra West, Mumbai</p>
                  <p className="text-gray-300">Maharashtra 400050, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
