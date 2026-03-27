import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/client/SectionHeading";

const faqs = [
  { q: "What destinations do you cover?", a: "We specialize in Singapore and Malaysia, covering major cities, islands, highlands, and cultural sites across both countries." },
  { q: "How do I book a tour package?", a: "You can browse our packages page and click 'Book Now' on your preferred package. Alternatively, contact us directly for a customized itinerary." },
  { q: "Are your prices per person or per group?", a: "Our listed prices are per person based on double-sharing. Group and solo traveler rates are available upon request." },
  { q: "What's included in the tour packages?", a: "Most packages include accommodation, airport transfers, guided tours, entrance fees, daily breakfast, and travel insurance." },
  { q: "Can I customize my itinerary?", a: "Absolutely! We love creating bespoke travel experiences. Contact us with your preferences and we'll craft the perfect trip." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 30 days before departure. 50% refund for cancellations 15-29 days prior. No refund for cancellations within 14 days." },
  { q: "Do I need a visa for Singapore or Malaysia?", a: "Many nationalities can visit visa-free. We'll advise you on visa requirements based on your nationality during the booking process." },
  { q: "Is travel insurance included?", a: "Basic travel insurance is included in all packages. We recommend upgrading to comprehensive coverage for additional peace of mind." },
];

const FAQPage = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">FAQ</h1>
          <p className="mt-4 text-lg opacity-80">Answers to frequently asked questions.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading subtitle="Help Center" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
