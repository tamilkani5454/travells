import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";

const PackageCard = ({ packages }) => (
  packages.map((pkg, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl overflow-hidden shadow-card bg-card hover:shadow-elevated transition-shadow"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={pkg.image} alt={pkg.title} loading="lazy" className="w-full h-full object-cover" />
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
          Book Now
        </Link>
      </div>
    </motion.div>
  ))
);

export default PackageCard;
