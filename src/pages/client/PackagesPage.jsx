import { motion } from "framer-motion";
import packagesBg from "@/assets/packages-bg.png";
import sgHero from "@/assets/singapore-hero.jpg";
import myHero from "@/assets/malaysia-hero.jpg";
import heroBeach from "@/assets/hero-beach.jpg";
import sgGardens from "@/assets/singapore-gardens.jpg";
import myLangkawi from "@/assets/malaysia-langkawi.jpg";
import streetFood from "@/assets/street-food.jpg";
import SectionHeading from "@/components/client/SectionHeading";
import PackageCard from "@/components/client/PackageCard";

const packages = [
  { id: 1, image: sgHero, title: "Singapore City Explorer", days: "4 Days / 3 Nights", people: "2-6", rating: 4.9, desc: "Explore Marina Bay, Sentosa, and more." },
  { id: 2, image: myHero, title: "KL & Highlands Escape", days: "5 Days / 4 Nights", people: "2-8", rating: 4.8, desc: "Petronas Towers, Batu Caves, Cameron Highlands." },
  { id: 3, image: heroBeach, title: "Beach Paradise Combo", days: "7 Days / 6 Nights", people: "2-4", rating: 5.0, desc: "Singapore + Langkawi beach holiday." },
  { id: 4, image: streetFood, title: "Foodie Trail", days: "3 Days / 2 Nights", people: "2-10", rating: 4.7, desc: "Hawker centres, night markets, cooking class." },
  { id: 5, image: sgGardens, title: "Family Fun Package", days: "6 Days / 5 Nights", people: "4-8", rating: 4.8, desc: "Theme parks, gardens, and cultural tours." },
  { id: 6, image: myLangkawi, title: "Adventure Seeker", days: "5 Days / 4 Nights", people: "2-6", rating: 4.9, desc: "Diving, trekking, and island hopping." },
];

const PackagesPage = () => (
  <div>
    <section className="relative h-[50vh] min-h-[350px] flex items-center">
      <img src={packagesBg} alt="Tour Packages" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
          Tour Packages
        </motion.h1>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg mx-auto">Curated travel experiences for every type of explorer.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Our Packages" title="Choose Your Perfect Trip" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PackageCard packages={packages} />
        </div>
      </div>
    </section>
  </div>
);

export default PackagesPage;
