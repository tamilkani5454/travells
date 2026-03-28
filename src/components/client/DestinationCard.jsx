import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";


const DestinationCard = ({ image, title, location, rating, price, link }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="relative rounded-2xl shadow-elevated group flex flex-col h-full bg-card/60 backdrop-blur-sm"
  >
    {/* Animated glowing border inset */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tropical-coral to-tropical-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10" />
    <div className="absolute inset-[1px] rounded-2xl bg-card z-0" />
    
    <div className="relative z-10 flex flex-col h-full rounded-2xl overflow-hidden border border-border group-hover:border-transparent transition-colors duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-xl text-foreground text-sm font-black px-4 py-1.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 isolate">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-coral to-tropical-gold">From {price}</span>
        </div>
      </div>
    <div className="relative z-10 p-6 flex flex-col flex-1 bg-card/40 backdrop-blur-md">
      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-tropical-coral group-hover:to-tropical-gold transition-all duration-300">{title}</h3>
      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-2 font-medium">
        <MapPin className="h-4 w-4 text-tropical-coral" /> {location}
      </div>
      <div className="flex items-center justify-between mt-auto pt-6">
        <div className="flex items-center gap-1.5 bg-tropical-gold/15 text-tropical-gold px-3 py-1 rounded-full border border-tropical-gold/20">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-bold">{rating}</span>
        </div>
        <Link
          to={link}
          className="text-sm font-bold text-primary transition-colors flex items-center gap-1 group/link hover:text-tropical-coral"
        >
          View Tour 
          <motion.span
            className="inline-block"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >→</motion.span>
        </Link>
      </div>
    </div>
    </div>
  </motion.div>
);

export default DestinationCard;
