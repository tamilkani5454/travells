import { Link } from "react-router-dom";
import { Plane, Mail, Phone, MapPin } from "lucide-react";

const ClientFooter = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display text-xl font-bold mb-4">
            <Plane className="h-6 w-6 text-tropical-coral" />
            TropicTrails
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Your gateway to the best of Singapore & Malaysia. Unforgettable
            experiences, handpicked destinations, and seamless travel.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Singapore", "Malaysia", "Packages", "Gallery"].map((t) => (
              <li key={t}>
                <Link to={`/${t.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["About", "Testimonials", "FAQ", "Contact"].map((t) => (
              <li key={t}>
                <Link to={`/${t.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@tropictrails.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +65 9123 4567</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Singapore & Malaysia</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-50">
        © 2026 TropicTrails. All rights reserved.
      </div>
    </div>
  </footer>
);

export default ClientFooter;
