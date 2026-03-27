import { motion } from "framer-motion";
import sgHero from "@/components/assets/singapore-hero.jpg";
import sgMerlion from "@/components/assets/singapore-merlion.jpg";
import sgGardens from "@/components/assets/singapore-gardens.jpg";
import SectionHeading from "@/components/client/SectionHeading";
import DestinationCard from "@/components/client/DestinationCard";

const spots = [
  { image: sgMerlion, title: "Merlion Park", location: "Marina Bay", rating: 4.8, price: "$0", link: "/packages" },
  { image: sgGardens, title: "Gardens by the Bay", location: "Bay South", rating: 4.9, price: "$28", link: "/packages" },
  { image: sgHero, title: "Marina Bay Sands", location: "Bayfront", rating: 4.9, price: "$45", link: "/packages" },
];

const SingaporePage = () => (
  <div>
    <section className="relative h-[60vh] min-h-[400px] flex items-center">
      <img src={sgHero} alt="Singapore" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative container mx-auto px-4">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">
          Singapore
        </motion.h1>
        <p className="text-primary-foreground/80 text-lg mt-4 max-w-xl">The Lion City — where innovation meets tradition in a stunning tropical metropolis.</p>
      </div>
    </section>

    <section className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Must Visit" title="Top Attractions in Singapore" description="Explore iconic landmarks and hidden gems across the island nation." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spots.map((s) => <DestinationCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Culture & Cuisine" title="Experience Singapore's Rich Heritage" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">A Melting Pot of Cultures</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Singapore's unique blend of Chinese, Malay, Indian, and Western influences creates a vibrant cultural tapestry. From Chinatown to Little India, every neighbourhood tells a story.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Don't miss the legendary hawker centres where Michelin-starred meals cost less than $5. Try Hainanese chicken rice, laksa, and chilli crab for an authentic taste of Singapore.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={sgGardens} alt="Singapore culture" loading="lazy" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SingaporePage;
