import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/client/SectionHeading";

const testimonials = [
  { name: "Sarah Chen", country: "Australia", rating: 5, text: "Our Singapore trip was absolutely magical! TropicTrails arranged everything perfectly — from the Gardens by the Bay tour to the hawker food trail. Couldn't have asked for a better experience." },
  { name: "James Wilson", country: "UK", rating: 5, text: "Malaysia exceeded all expectations. The team organized a seamless trip through KL, Cameron Highlands, and Langkawi. The attention to detail was impressive." },
  { name: "Priya Sharma", country: "India", rating: 5, text: "The combo package covering both Singapore and Malaysia was incredible value. Every day was a new adventure. Highly recommend the street food tour!" },
  { name: "Kenji Tanaka", country: "Japan", rating: 4, text: "Very well-organized tours with knowledgeable guides. The booking process was smooth and the customer service was responsive and helpful." },
  { name: "Emily Rodriguez", country: "USA", rating: 5, text: "As a solo traveler, I felt completely safe and well taken care of. The team went above and beyond to make sure I had the best experience." },
  { name: "Ahmed Hassan", country: "UAE", rating: 5, text: "Family trip of a lifetime! The kids loved Sentosa and the adults enjoyed the cultural tours. Perfect balance for everyone." },
];

const TestimonialsPage = () => (
  <div>
    <section className="bg-gradient-coral text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold">Testimonials</h1>
        <p className="mt-4 text-lg opacity-80">What our travelers say about us.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Reviews" title="Loved by Travelers Worldwide" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl shadow-card bg-card relative"
            >
              <Quote className="h-8 w-8 text-tropical-coral/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-tropical-gold fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default TestimonialsPage;
