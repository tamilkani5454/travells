import { motion } from "framer-motion";
import myHero from "@/assets/malaysia-hero.jpg";
import myBatu from "@/assets/malaysia-batu.jpg";
import myLangkawi from "@/assets/malaysia-langkawi.jpg";
import streetFood from "@/assets/street-food.jpg";
import SectionHeading from "@/components/client/SectionHeading";
import DestinationCard from "@/components/client/DestinationCard";

const spots = [
  { image: myBatu, title: "Batu Caves", location: "Selangor", rating: 4.7, link: "/packages" },
  { image: myLangkawi, title: "Langkawi Island", location: "Kedah", rating: 4.9, link: "/packages" },
  { image: streetFood, title: "Penang Food Trail", location: "Penang", rating: 4.8, link: "/packages" },
];

const MalaysiaPage = () => (
  <div>
    <section className="relative h-[60vh] min-h-[400px] flex items-center">
      <img src={myHero} alt="Malaysia" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">
          Malaysia
        </motion.h1>
        <p className="text-primary-foreground/80 text-lg mt-4 max-w-xl">Truly Asia — a paradise of rainforests, beaches, and multicultural wonders.</p>
      </div>
    </section>

    <section className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Must Visit" title="Top Attractions in Malaysia" description="Discover ancient caves, pristine islands, and world-famous cuisines." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((s) => <DestinationCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Nature & Adventure" title="Malaysia's Natural Wonders" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={myLangkawi} alt="Langkawi" loading="lazy" className="w-full h-80 object-cover" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">From Rainforests to Coral Reefs</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Home to one of the oldest rainforests in the world, Malaysia offers unparalleled biodiversity. Trek through Taman Negara or dive in Sipadan for world-class marine life.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Cameron Highlands offer cool retreats with tea plantations, while Langkawi's duty-free island paradise beckons beach lovers from around the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default MalaysiaPage;
