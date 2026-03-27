import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Shield, Heart, Clock } from "lucide-react";
import heroBeach from "@/components/assets/hero-beach.jpg";
import sgHero from "@/components/assets/singapore-hero.jpg";
import myHero from "@/components/assets/malaysia-hero.jpg";
import sgMerlion from "@/components/assets/singapore-merlion.jpg";
import myBatu from "@/components/assets/malaysia-batu.jpg";
import sgGardens from "@/components/assets/singapore-gardens.jpg";
import myLangkawi from "@/components/assets/malaysia-langkawi.jpg";
import streetFood from "@/components/assets/street-food.jpg";
import SectionHeading from "@/components/client/SectionHeading";
import DestinationCard from "@/components/client/DestinationCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const stats = [
  { icon: Compass, value: "150+", label: "Destinations" },
  { icon: Heart, value: "10K+", label: "Happy Travelers" },
  { icon: Shield, value: "98%", label: "Satisfaction" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const destinations = [
  { image: sgMerlion, title: "Merlion Park", location: "Singapore", rating: 4.8, price: "$25", link: "/singapore" },
  { image: sgGardens, title: "Gardens by the Bay", location: "Singapore", rating: 4.9, price: "$30", link: "/singapore" },
  { image: myBatu, title: "Batu Caves", location: "Malaysia", rating: 4.7, price: "$15", link: "/malaysia" },
  { image: myLangkawi, title: "Langkawi Island", location: "Malaysia", rating: 4.9, price: "$50", link: "/malaysia" },
  { image: streetFood, title: "Street Food Tour", location: "Singapore & Malaysia", rating: 4.8, price: "$20", link: "/packages" },
  { image: sgHero, title: "Marina Bay Sands", location: "Singapore", rating: 4.9, price: "$45", link: "/singapore" },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative h-[95vh] min-h-[700px] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBeach} alt="Tropical paradise" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
      </div>
      <div className="relative container mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-md border border-background/20 text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-glow"
          >
            <span className="w-2 h-2 rounded-full bg-tropical-gold animate-pulse" />
            Singapore & Malaysia
          </motion.div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[1.1] tracking-tight">
            Discover <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-gold to-tropical-coral">
              Southeast Asia's
            </span>
            <br/> Hidden Gems
          </h1>
          
          <p className="text-primary-foreground/90 text-lg md:text-xl mt-8 max-w-xl leading-relaxed font-medium">
            Explore breathtaking landscapes, vibrant cultures, and unforgettable
            experiences curated exclusively for you.
          </p>
          
          <div className="flex flex-wrap gap-5 mt-10">
            <Link
              to="/packages"
              className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold shadow-elevated transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">Explore Packages →</span>
            </Link>
            <Link
              to="/about"
              className="bg-background/10 backdrop-blur-md text-primary-foreground border border-primary-foreground/20 px-8 py-4 rounded-full font-bold hover:bg-background/20 transition-all hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-gradient-hero text-primary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <s.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-sm opacity-70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Popular Destinations */}
    <section className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Top Destinations"
          title="Popular Places to Visit"
          description="From iconic landmarks to hidden retreats, explore the most sought-after destinations in Singapore and Malaysia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((d, i) => (
            <motion.div
              key={d.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <DestinationCard {...d} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Countries */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Choose Your Adventure" title="Explore by Country" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: sgHero, name: "Singapore", desc: "A dazzling city-state where futuristic architecture meets rich heritage.", path: "/singapore" },
            { img: myHero, name: "Malaysia", desc: "From rainforests to stunning islands and vibrant cities.", path: "/malaysia" },
          ].map((c, i) => (
            <motion.div
              key={c.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link to={c.path} className="group relative block h-80 rounded-2xl overflow-hidden shadow-elevated">
                <img src={c.img} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-3xl font-bold text-primary-foreground">{c.name}</h3>
                  <p className="text-primary-foreground/80 mt-2">{c.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-gradient-coral text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Ready for Your Next Adventure?</h2>
        <p className="mt-4 text-lg opacity-80 max-w-lg mx-auto">
          Let us plan the perfect Southeast Asian getaway for you.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 bg-primary-foreground text-tropical-coral px-10 py-4 rounded-lg font-bold hover:shadow-elevated transition-shadow"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </div>
);

export default HomePage;
