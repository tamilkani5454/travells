import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import SectionHeading from "@/components/client/SectionHeading";

const values = [
  { icon: Target, title: "Tailored Experiences", desc: "Every trip is custom-designed to match your preferences and budget." },
  { icon: Eye, title: "Local Expertise", desc: "Our guides are locals who know every hidden gem and secret spot." },
  { icon: Heart, title: "Passion for Travel", desc: "We genuinely love what we do and it shows in every itinerary." },
  { icon: Award, title: "Award-Winning Service", desc: "Recognized for excellence in tourism across Southeast Asia." },
];

const AboutPage = () => (
  <div>
    <section className="relative h-[50vh] min-h-[350px] flex items-center">
      <img src={heroBeach} alt="About us" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
          About TropicTrails
        </motion.h1>
        <p className="text-primary-foreground/80 text-lg mt-4 max-w-xl mx-auto">Crafting unforgettable Southeast Asian travel experiences since 2015.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Our Story" title="Why Choose Us?" description="We're a team of passionate travelers and local experts dedicated to showcasing the best of Singapore and Malaysia." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-muted"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-ocean">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {[
          { num: "10+", label: "Years Experience" },
          { num: "50K+", label: "Happy Travelers" },
          { num: "200+", label: "Tour Packages" },
        ].map((s) => (
          <div key={s.label} className="p-8 rounded-xl bg-card shadow-card">
            <div className="text-4xl font-bold text-tropical-coral">{s.num}</div>
            <div className="text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default AboutPage;
