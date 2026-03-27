import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";


const DestinationCard = ({ image, title, location, rating, price, link }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-2xl overflow-hidden shadow-elevated bg-card/60 backdrop-blur-sm border border-border group flex flex-col h-full"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-foreground text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
        From {price}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-2 font-medium">
        <MapPin className="h-4 w-4 text-tropical-coral" /> {location}
      </div>
      <div className="flex items-center justify-between mt-auto pt-6">
        <div className="flex items-center gap-1.5 bg-tropical-gold/10 text-tropical-gold px-3 py-1 rounded-full">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-bold">{rating}</span>
        </div>
        <Link
          to={link}
          className="text-sm font-bold text-primary hover:text-tropical-coral transition-colors flex items-center gap-1"
        >
          View Tour →
        </Link>
      </div>
    </div>
  </motion.div>
);

export default DestinationCard;
