import { useState } from "react";
import { motion } from "framer-motion";
import galleryBg from "@/assets/gallery-bg.png";
import sgHero from "@/assets/singapore-hero.jpg";
import myHero from "@/assets/malaysia-hero.jpg";
import sgMerlion from "@/assets/singapore-merlion.jpg";
import myBatu from "@/assets/malaysia-batu.jpg";
import sgGardens from "@/assets/singapore-gardens.jpg";
import myLangkawi from "@/assets/malaysia-langkawi.jpg";
import streetFood from "@/assets/street-food.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import SectionHeading from "@/components/client/SectionHeading";

const allImages = [
  { src: sgHero, alt: "Singapore skyline", category: "Singapore" },
  { src: myHero, alt: "Petronas Towers", category: "Malaysia" },
  { src: sgMerlion, alt: "Merlion", category: "Singapore" },
  { src: myBatu, alt: "Batu Caves", category: "Malaysia" },
  { src: sgGardens, alt: "Gardens by the Bay", category: "Singapore" },
  { src: myLangkawi, alt: "Langkawi", category: "Malaysia" },
  { src: streetFood, alt: "Street food", category: "Culture" },
  { src: heroBeach, alt: "Beach", category: "Nature" },
];

const categories = ["All", "Singapore", "Malaysia", "Culture", "Nature"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allImages : allImages.filter((i) => i.category === filter);

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <img src={galleryBg} alt="Gallery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Photo Gallery
          </motion.h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg mx-auto">A visual journey through Southeast Asia.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Gallery" title="Captured Moments" />

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-card"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
