import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Map, Calendar, Users, PlaneTakeoff, Plus, Minus } from "lucide-react";

const CustomTourPage = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Create Your <span className="text-transparent bg-clip-text bg-gradient-hero">Custom Tour</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us about your dream vacation in Singapore or Malaysia, and our travel experts will craft the perfect itinerary tailored just for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden border border-border"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gradient-hero p-8 text-primary-foreground flex flex-col justify-between h-full">
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">Why Book Custom?</h3>
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <Map className="h-6 w-6 shrink-0 text-tropical-gold" />
                    <span>Personalized itinerary based on your interests</span>
                  </li>
                  <li className="flex gap-3">
                    <Calendar className="h-6 w-6 shrink-0 text-tropical-gold" />
                    <span>Flexible dates and duration</span>
                  </li>
                  <li className="flex gap-3">
                    <Users className="h-6 w-6 shrink-0 text-tropical-gold" />
                    <span>Private guides and exclusive experiences</span>
                  </li>
                  <li className="flex gap-3">
                    <PlaneTakeoff className="h-6 w-6 shrink-0 text-tropical-gold" />
                    <span>Seamless travel arrangements</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 p-5 bg-black/10 rounded-xl backdrop-blur-sm border border-white/10">
                <h4 className="font-bold mb-2">Can we customize the Singapore & Malaysia tour package?</h4>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  Definitely. We specialize in customized Singapore & Malaysia tour packages based on your budget, travel dates, and sightseeing preferences.
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Destination</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none">
                      <option>Singapore</option>
                      <option>Malaysia</option>
                      <option>Both</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Trip Start</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Trip End</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      Adults <span className="text-xs text-muted-foreground font-normal">(13+ yrs)</span>
                    </label>
                    <div className="flex items-center justify-between px-4 py-1.5 rounded-xl border border-border bg-background text-foreground h-[50px]">
                      <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold w-8 text-center">{adults}</span>
                      <button type="button" onClick={() => setAdults(adults + 1)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      Children <span className="text-xs text-muted-foreground font-normal">(&lt; 12 yrs)</span>
                    </label>
                    <div className="flex items-center justify-between px-4 py-1.5 rounded-xl border border-border bg-background text-foreground h-[50px]">
                      <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-semibold w-8 text-center">{children}</span>
                      <button type="button" onClick={() => setChildren(children + 1)} className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Tell us about your trip</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none" placeholder="e.g. Destinations, specific places you want to visit, your preferred travel style..."></textarea>
                </div>

                <button className="w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-gradient-hero text-primary-foreground font-bold text-lg hover:shadow-glow transition-all active:scale-[0.98]">
                  Submit Request <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomTourPage;
