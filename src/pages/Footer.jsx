import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#4f1a89] via-[#1e2a3d] to-[#007a70] text-white font-inter" data-aos="fade-up">
      {/* Newsletter */}
      <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 pt-24 pb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-light leading-snug mb-4">
          Stay Connected to <span className="text-[#B89433]">Luxury</span>
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Be the first to discover our latest masterpieces and exclusive events
        </p>
        <div className="flex justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 text-white px-6 py-3 rounded-full w-full text-base border border-white/20 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e]  text-base font-semibold  gap-2 hover:opacity-90 hover:from-[#a07e7e] hover:to-[#C87C38] text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl">
            Subscribe <FaArrowUpRightFromSquare size={14} />
          </button>
        </div>
      </div>

      {/* Grid Section */}
<div className="w-full border-t border-white/10" data-aos="fade-up"  
        data-aos-duration="2000">
  <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 pt-16 pb-12 flex flex-col md:flex-row gap-12 md:gap-24 xl:gap-32 flex-wrap md:flex-nowrap">

    {/* Column 1: Logo + Social */}
    <div className="space-y-6 md:w-[42%]">
      {/* Logo and Tagline */}
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-r from-[#C87C38] to-[#a07e7e] w-14 h-14 flex items-center justify-center rounded-2xl text-white text-2xl font-bold shadow-md">
          V
        </div>
        <div>
          <h4 className="text-2xl font-semibold bg-gradient-to-r from-[#C87C38] to-[#a07e7e] bg-clip-text text-transparent font-playfair">
            Vibgyor Events
          </h4>
          <p className="text-sm text-gray-300 tracking-wider font-medium mt-0.5 uppercase">
            Luxury Beyond Imagination
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-300 leading-relaxed tracking-wide max-w-[580px]">
        Creating extraordinary experiences that transcend the ordinary. Where every
        event becomes a masterpiece of memories, crafted with unparalleled precision
        and artistic vision.
      </p>

      {/* Social Icons */}
    <div className="flex gap-5 mt-5 ">
  {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => {
    const hoverTextColors = [
      "group-hover:text-[#1877F2]", // Facebook
      "group-hover:text-[#E1306C]", // Instagram solid pink (fallback)
      "group-hover:text-[#1DA1F2]", // Twitter
      "group-hover:text-[#0077B5]", // LinkedIn
    ];

    return (
      <div
        key={idx}
        className="group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition duration-300"
      >
        <Icon
          size={18}
          className={`text-white transition-colors duration-300 ${hoverTextColors[idx]}`}
        />
      </div>
    );
  })}
</div>

</div>


    {/* Column 2: Experiences */}
    <div className="md:w-[22%]">
      <h5 className="text-xl font-semibold mb-6 text-white font-playfair">Experiences</h5>
      <ul className="space-y-3 text-base text-gray-300">
        {[
          "Luxury Weddings",
          "Corporate Events",
          "Cultural Exhibitions",
          "Private Celebrations",
          "Brand Launches",
          "Musical Concerts",
        ].map((exp, idx) => (
          <li key={idx} className="hover:text-[#8A2BE2] cursor-pointer transition">
            {exp}
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3: Connect */}
    <div className="md:w-[30%]">
      <h5 className="text-xl font-semibold mb-6 text-white font-playfair">Connect</h5>
      <ul className="space-y-5 text-base text-gray-300">
        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center mt-1">
            <FaPhoneAlt className="text-white" size={18} />
          </div>
          <div>
            <p>+91 98765 43210</p>
            <span className="text-sm text-gray-400">Available 24/7</span>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center mt-1">
            <MdEmail className="text-white" size={20} />
          </div>
          <div>
            <p>hello@vibgyorevents.com</p>
            <span className="text-sm text-gray-400">Response within 2 hours</span>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#C87C38] to-[#a07e7e] flex items-center justify-center mt-1">
            <FaMapMarkerAlt className="text-white" size={18} />
          </div>
          <div>
            <p>Luxury Plaza, 5th Floor</p>
            <span className="text-sm text-gray-400">
              Mumbai, Maharashtra 400001<br />India
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>



      {/* Bottom Line */}
      <div className="border-t border-white/10 w-full">
        <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © 2024 Vibgyor Events. Crafted with in India. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
