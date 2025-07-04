import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import haldiimg from "../assets/haldi.png"

// Sample nested event detail data
const detail = {
 "0": {
  mainTitle: "Royal Weddings",
  sections: [
    {
      title: "Wedding",
      heading: "The Grandeur of Your Fairytale Union",
      subheading: "Where timeless elegance meets heartfelt traditions",
      image: "https://v3events.in/blog/wp-content/uploads/2025/05/wedding6.jpg",
      content:
        "Step into a royal romance crafted with meticulous detail. From the majestic mandap to designer ensembles, lavish floral setups to regal processions — we turn your big day into a royal fairytale. Every moment is curated to reflect your unique love story, with seamless planning and breathtaking design.",
    },
    {
      title: "Haldi",
      heading: "Sunshine & Smiles — A Haldi to Remember",
      subheading: "A vibrant celebration soaked in laughter and tradition",
      image: haldiimg,
      content:
        "We turn the Haldi ceremony into a canvas of color, joy, and cultural charm. From marigold-draped decor and upbeat music to turmeric rituals and playful water splashes — we capture the warmth, purity, and glow of this cherished pre-wedding celebration.",
    },
    {
      title: "Sangeet",
      heading: "A Night of Rhythm, Lights & Love",
      subheading: "Where dance floors light up with stories of togetherness",
      image: "https://i.pinimg.com/736x/f6/d7/4d/f6d74d405bdbd2cfb025bd6a8c24cbe1.jpg",
      content:
        "Sangeet is more than a party — it’s an emotional celebration of families bonding through music, dance, and laughter. With cinematic lighting, choreographed entries, heartfelt speeches, and DJ-curated beats, we create an unforgettable night that echoes joy and connection.",
    },
  ],
},

  "1": {
    mainTitle: "Corporate Events",
    sections: [
      {
        title: "Corporate",
        heading: "Where Ideas Meet Execution",
        subheading: "Delivering flawless business events and seminars.",
        image: "https://storage.unitedwebnetwork.com/files/1189/7a7dab9865d31598b26943a1b8083f6d.webp",
        content:
          "From product launches to annual meets, we craft impactful corporate events with precision. Our expertise ensures seamless execution and lasting impressions.",
      },
    ],
  },
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const experienceData = detail[id];

  if (!experienceData) {
    return <p className="text-center text-red-500 mt-10">Detail not found!</p>;
  }

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 ml-4 text-purple-600 flex items-center gap-2 hover:underline mt-12"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#58294e] mb-2">
          {experienceData.mainTitle}
        </h2>
      </div>

      {/* Render each section */}
      {experienceData.sections.map((card, index) => (
        <div
          key={index}
          className="mb-20"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          
          <motion.div
            layout
            className="relative bg-cover bg-center overflow-hidden transition-all duration-500 w-full max-w-6xl mx-auto rounded-xl shadow-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,${
                hoveredIndex === index ? 0.1 : 0.3
              }), rgba(0,0,0,${
                hoveredIndex === index ? 0.1 : 0.3
              })), url('${card.image}')`,
              height: hoveredIndex === index ? "420px" : "250px",
            }}
          >
            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 z-30">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-md">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </div>

            {/* Title Content */}
            <motion.div
              className="absolute left-0 w-full px-8 z-20 text-white"
              initial={false}
              animate={{
                top: hoveredIndex === index ? "20px" : "auto",
                bottom: hoveredIndex === index ? "auto" : "20px",
              }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-white text-4xl sm:text-3xl font-extrabold px-2 py-1 uppercase tracking-wider">
                {card.title}
              </span>
              <h2 className="mt-1 ml-2 text-xl sm:text-2xl font-bold max-w-[70%]">
                {card.subheading}
              </h2>
            </motion.div>

            {/* Hover Details */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  key="hoverContent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full bg-black/30 px-8 pt-5 pb-6 text-white z-10"
                >
                  <h3 className="text-xl font-semibold mb-2">{card.heading}</h3>
                  <h2 className="mt-1 ml-2 text-xl sm:text-2xl font-bold max-w-[70%]">
                {card.subheading}
              </h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    {card.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceDetail;
