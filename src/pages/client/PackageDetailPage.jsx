import { useParams, Link } from "react-router-dom";
import { Clock, Users, Star, Check, ArrowLeft } from "lucide-react";
import heroBeach from "@/components/assets/hero-beach.jpg";

const PackageDetailPage = () => {
  const { id } = useParams();
  
  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src={heroBeach} alt="Package" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-4 pb-10">
          <Link to="/packages" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm">
            <ArrowLeft className="h-4 w-4" /> Back to Packages
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">Package #{id}</h1>
          <div className="flex flex-wrap gap-4 mt-4 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 Days / 4 Nights</span>
            <span className="flex items-center gap-1"><Users className="h-4 w-4" /> 2-6 People</span>
            <span className="flex items-center gap-1 text-tropical-gold"><Star className="h-4 w-4 fill-current" /> 4.9</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience the best of Southeast Asia with our carefully crafted tour package. From iconic city landmarks to serene tropical beaches, this journey covers it all. Enjoy guided tours, authentic cuisine, and comfortable accommodations throughout your stay.
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
              <div className="text-center">
                <span className="text-sm text-muted-foreground">Starting from</span>
                <div className="text-4xl font-bold text-tropical-coral mt-1">$599</div>
                <span className="text-sm text-muted-foreground">per person</span>
              </div>
              <Link
                to="/contact"
                className="block mt-6 text-center bg-gradient-coral text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="block mt-3 text-center border border-border text-foreground py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetailPage;
