import { Link } from "react-router-dom";
import { Plane, Mail, Phone, MapPin, Heart } from "lucide-react";

const ClientFooter = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-6 pt-20 pb-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight mb-6">
            <div className="bg-primary/20 p-2 rounded-xl backdrop-blur-sm">
              <Plane className="h-7 w-7 text-tropical-coral" />
            </div>
            TropicTrails
          </div>
          <p className="text-base text-primary-foreground/70 leading-relaxed max-w-sm">
            Your gateway to the ultimate Southeast Asian adventure. Discover breathtaking destinations, rich cultures, and seamless travel experiences.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xl font-bold mb-6 text-primary-foreground">Explore</h4>
          <ul className="space-y-4 text-base text-primary-foreground/70 font-medium">
            {["Singapore", "Malaysia", "Packages", "Gallery"].map((t) => (
              <li key={t}>
                <Link to={`/${t.toLowerCase()}`} className="hover:text-tropical-gold hover:translate-x-1 inline-block transition-all duration-300">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-xl font-bold mb-6 text-primary-foreground">Company</h4>
          <ul className="space-y-4 text-base text-primary-foreground/70 font-medium">
            {["About", "Testimonials", "FAQ", "Contact"].map((t) => (
              <li key={t}>
                <Link to={`/${t.toLowerCase()}`} className="hover:text-tropical-gold hover:translate-x-1 inline-block transition-all duration-300">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-xl font-bold mb-6 text-primary-foreground">Get in Touch</h4>
          <ul className="space-y-4 text-base text-primary-foreground/70 font-medium">
            <li>
              <a href="mailto:hello@tropictrails.com" className="flex items-center gap-3 hover:text-tropical-coral transition-colors">
                <div className="bg-primary-foreground/10 p-2 rounded-full">
                  <Mail className="h-4 w-4" />
                </div>
                hello@tropictrails.com
              </a>
            </li>
            <li>
              <a href="tel:+6591234567" className="flex items-center gap-3 hover:text-tropical-coral transition-colors">
                <div className="bg-primary-foreground/10 p-2 rounded-full">
                  <Phone className="h-4 w-4" />
                </div>
                +65 9123 4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-primary-foreground/10 p-2 rounded-full">
                <MapPin className="h-4 w-4" />
              </div>
              Singapore & Malaysia
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6 text-base text-primary-foreground/50 font-medium">
        <div className="md:flex-1 md:text-left text-center">
          <p>© 2026 TropicTrails. All rights reserved.</p>
        </div>
        
        <div className="flex items-center justify-center gap-1.5 text-sm md:flex-1 text-center">
          <span>Crafted with</span>
          <Heart className="h-4 w-4 text-tropical-coral fill-tropical-coral animate-pulse" /> 
          <span>by</span>
          <a href="https://www.zentroinfotech.com" target="_blank" rel="noopener noreferrer" className="hover:text-tropical-gold transition-colors font-semibold text-primary-foreground/80 hover:text-primary-foreground ml-1">
            Zentro Infotech
          </a>
        </div>

        <div className="flex gap-6 justify-center md:justify-end md:flex-1 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default ClientFooter;
