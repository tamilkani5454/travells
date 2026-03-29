import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/context";
import { motion } from "framer-motion";
import SectionHeading from "@/components/client/SectionHeading";
import PackageCard from "@/components/client/PackageCard";

const Country = () => {
    const { country } = useParams();
    const { packages, countries } = useContext(AppContext);
    
    const [countryData, setCountryData] = useState(null);
    const [countryPackages, setCountryPackages] = useState([]);

    useEffect(() => {
        if (countries && countries.length > 0) {
            const data = countries.find(c => c.country.toLowerCase() === country?.toLowerCase());
            setCountryData(data || null);
        }
        if (packages && packages.length > 0) {
            const pkgs = packages.filter(p => p.country.toLowerCase() === country?.toLowerCase());
            setCountryPackages(pkgs);
        }
    }, [country, countries, packages]);

    if (!countryData && countries && countries.length > 0) {
        return (
            <div className="py-40 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Destination Not Found</h2>
                <p className="text-muted-foreground">We couldn't find the country you're looking for.</p>
            </div>
        );
    }

    if (!countryData) return null; // Wait for data to load

    return (
        <div>
            <section className="relative h-[60vh] min-h-[400px] flex items-center">
                <img src={countryData.img} alt={countryData.country} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-foreground/50" />
                <div className="relative container mx-auto px-4">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl font-bold text-primary-foreground capitalize">
                        {countryData.country}
                    </motion.h1>
                    <p className="text-primary-foreground/80 text-lg mt-4 max-w-xl">{countryData.subtitle}</p>
                </div>
            </section>

            <section className="py-20 bg-gradient-ocean">
                <div className="container mx-auto px-4">
                    <SectionHeading subtitle="Must Visit" title={`Top Packages in ${countryData.country.charAt(0).toUpperCase() + countryData.country.slice(1)}`} description="Explore iconic landmarks, hidden gems, and the best local experiences." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countryPackages.length > 0 ? (
                            <PackageCard packages={countryPackages} />
                        ) : (
                            <p className="text-muted-foreground text-center col-span-full">No packages available for this destination yet.</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-sm font-semibold tracking-widest uppercase text-tropical-coral">
                            {countryData.title}
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 capitalize">{countryData.country}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{countryData.subtitle}</h3>
                            {countryData.description && countryData.description.map((desc, index) => (
                                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                                    {desc}
                                </p>
                            ))}
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-elevated">
                            <img src={countryData.img} alt={`${countryData.country} culture`} loading="lazy" className="w-full h-80 object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Country;