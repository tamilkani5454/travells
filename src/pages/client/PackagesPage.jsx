import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import sgHero from "@/components/assets/singapore-hero.jpg";
import myHero from "@/components/assets/malaysia-hero.jpg";
import heroBeach from "@/components/assets/hero-beach.jpg";
import sgGardens from "@/components/assets/singapore-gardens.jpg";
import myLangkawi from "@/components/assets/malaysia-langkawi.jpg";
import streetFood from "@/components/assets/street-food.jpg";
import SectionHeading from "@/components/client/SectionHeading";

const packages = [
  { id: 1, image: sgHero, title: "Singapore City Explorer", days: "4 Days / 3 Nights", people: "2-6", rating: 4.9, price: "$599", desc: "Explore Marina Bay, Sentosa, and more." },
  { id: 2, image: myHero, title: "KL & Highlands Escape", days: "5 Days / 4 Nights", people: "2-8", rating: 4.8, price: "$499", desc: "Petronas Towers, Batu Caves, Cameron Highlands." },
  { id: 3, image: heroBeach, title: "Beach Paradise Combo", days: "7 Days / 6 Nights", people: "2-4", rating: 5.0, price: "$899", desc: "Singapore + Langkawi beach holiday." },
  { id: 4, image: streetFood, title: "Foodie Trail", days: "3 Days / 2 Nights", people: "2-10", rating: 4.7, price: "$299", desc: "Hawker centres, night markets, cooking class." },
  { id: 5, image: sgGardens, title: "Family Fun Package", days: "6 Days / 5 Nights", people: "4-8", rating: 4.8, price: "$1,199", desc: "Theme parks, gardens, and cultural tours." },
  { id: 6, image: myLangkawi, title: "Adventure Seeker", days: "5 Days / 4 Nights", people: "2-6", rating: 4.9, price: "$749", desc: "Diving, trekking, and island hopping." },
];

const PackagesPage = () => (
  <div>
    <section className="bg-gradient-hero text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Tour Packages</h1>
        <p className="mt-4 text-lg opacity-80 max-w-lg mx-auto">Curated travel experiences for every type of explorer.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Our Packages" title="Choose Your Perfect Trip" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden shadow-card bg-card hover:shadow-elevated transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-tropical-gold text-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {pkg.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{pkg.desc}</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{pkg.days}</span>
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" />{pkg.people}</span>
                  <span className="flex items-center gap-1 text-tropical-gold"><Star className="h-4 w-4 fill-current" />{pkg.rating}</span>
                </div>
                <Link
                  to={`/packages/${pkg.id}`}
                  className="block mt-5 text-center bg-gradient-hero text-primary-foreground py-2.5 rounded-lg font-semibold hover:shadow-glow transition-shadow"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default PackagesPage;
