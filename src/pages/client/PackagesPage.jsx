import { motion } from "framer-motion";
import packagesBg from "@/assets/packages-bg.png";
import SectionHeading from "@/components/client/SectionHeading";
import PackageCard from "@/components/client/PackageCard";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const PackagesPage = () => {
  const { packages } = useContext(AppContext);
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard packages={packages} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default PackagesPage;
