import { motion } from "framer-motion";
import packagesBg from "@/assets/packages-bg.png";
import SectionHeading from "@/components/client/SectionHeading";
import PackageCard from "@/components/client/PackageCard";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/context";

const PackagesPage = () => {
  const { packages, countries } = useContext(AppContext);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [filteredPackages, setFilteredPackages] = useState([]);

  // Use dynamically loaded countries to create the filter list
  const availableCountries = ["All", ...countries.map(c => c.country)];

  useEffect(() => {
    if (selectedCountry === "All") {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(packages.filter(p => p.country.toLowerCase() === selectedCountry.toLowerCase()));
    }
  }, [packages, selectedCountry]);

  return (
    <div>
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <img src={packagesBg} alt="Tour Packages" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Tour Packages
          </motion.h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-lg mx-auto">Curated travel experiences for every type of explorer.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Packages" title="Choose Your Perfect Trip" />
          
          {/* Country Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {availableCountries.map((country, index) => (
              <button
                key={index}
                onClick={() => setSelectedCountry(country)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm ${
                  selectedCountry === country
                    ? "bg-primary text-primary-foreground shadow-glow scale-105"
                    : "bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary hover:shadow-md"
                }`}
              >
                <span className="capitalize">{country}</span>
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <PackageCard packages={filteredPackages} />
          </motion.div>
          
          {filteredPackages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-20 bg-muted/20 rounded-2xl border border-border/50 mt-8"
            >
              <p className="text-muted-foreground text-lg mb-2">No packages found for {selectedCountry}.</p>
              <button 
                onClick={() => setSelectedCountry("All")}
                className="text-primary font-medium hover:underline"
              >
                View all packages
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default PackagesPage;
