import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";


const DestinationCard = ({ image, title, location, rating, price, link }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="rounded-xl overflow-hidden shadow-card bg-card group"
  >
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-3 right-3 bg-tropical-coral text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
        From {price}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
        <MapPin className="h-3.5 w-3.5" /> {location}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1 text-tropical-gold">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium text-foreground">{rating}</span>
        </div>
        <Link
          to={link}
          className="text-sm font-medium text-primary hover:text-tropical-coral transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  </motion.div>
);

export default DestinationCard;
