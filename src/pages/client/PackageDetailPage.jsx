import { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, Star, Check, ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "@/context/context";
import heroBeach from "@/assets/hero-beach.jpg";

const PackageDetailPage = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { packages } = useContext(AppContext);
  
  // Look up the package dynamically if possible, else fallback
  const pkg = packages?.find(p => p.id === Number(id)) || null;
  const displayTitle = pkg ? pkg.title : `Package #${id}`;
  const displayDays = pkg ? pkg.days : "5 Days / 4 Nights";
  const displayPeople = pkg ? pkg.people : "2-6 People";
  const displayRating = pkg ? pkg.rating : "4.9";
  const displayImg = pkg ? pkg.image : heroBeach;
  
  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src={displayImg} alt={displayTitle} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-4 pb-10">
          <Link to="/packages" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm w-fit">
            <ArrowLeft className="h-4 w-4" /> Back to Packages
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{displayTitle}</h1>
          <div className="flex flex-wrap gap-4 mt-4 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {displayDays}</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {displayPeople}</span>
            <span className="flex items-center gap-1 text-tropical-gold"><Star className="h-4 w-4 fill-current" /> {displayRating}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience the best of {pkg?.country || "Southeast Asia"} with our carefully crafted tour package. From iconic city landmarks to serene tropical beaches, this journey covers it all. Enjoy guided tours, authentic cuisine, and comfortable accommodations throughout your stay.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Airport transfers", "Hotel accommodation", "Daily breakfast", "Guided city tour", "Entrance fees", "Travel insurance", "Local SIM card", "24/7 support"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-tropical-emerald flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Itinerary</h2>
              <div className="space-y-4">
                {["Arrival & City Tour", "Cultural Exploration", "Nature & Adventure", "Beach & Relaxation", "Departure"].map((day, i) => (
                  <div key={day} className="flex gap-4 items-start p-4 rounded-xl bg-muted">
                    <div className="w-10 h-10 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Day {i + 1}: {day}</h4>
                      <p className="text-sm text-muted-foreground mt-1">Full day of activities with experienced guides and comfortable transport.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-24 rounded-xl shadow-elevated bg-card p-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="block w-full text-center bg-gradient-coral text-primary-foreground py-3.5 rounded-lg font-bold shadow-sm hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Enquiry Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-card w-full max-w-lg max-h-[90vh] flex flex-col rounded-2xl shadow-elevated overflow-hidden relative"
            >
              <div className="flex justify-between items-center p-6 border-b border-border bg-muted/30 shrink-0">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Enquire about {displayTitle}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto">
                <form 
                  className="space-y-4" 
                  onSubmit={(e) => { 
                    e.preventDefault(); 
                    alert("Thank you! Your enquiry has been sent. We'll get back to you soon."); 
                    setIsModalOpen(false); 
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Name <span className="text-destructive">*</span></label>
                      <input 
                        type="text" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">City of Residence <span className="text-destructive">*</span></label>
                      <input 
                        type="text" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        placeholder="E.g. New York" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email <span className="text-destructive">*</span></label>
                      <input 
                        type="email" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone Number <span className="text-destructive">*</span></label>
                      <input 
                        type="tel" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        placeholder="+1 234 567 890" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">WhatsApp</label>
                      <input 
                        type="tel" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        placeholder="+1 234 567 890" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Travel Destination <span className="text-destructive">*</span></label>
                      <input 
                        type="text" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        defaultValue={pkg?.country || ""}
                        placeholder="Destination" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Date of Travel <span className="text-destructive">*</span></label>
                      <input 
                        type="date" 
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">No. of People <span className="text-destructive">*</span></label>
                      <input 
                        type="number" 
                        min="1"
                        className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow" 
                        placeholder="e.g. 2" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                    <textarea 
                      className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow h-24 resize-none" 
                      placeholder="Any specific requests or requirements?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:shadow-glow hover:opacity-90 transition-all mt-4"
                  >
                    Send Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackageDetailPage;
