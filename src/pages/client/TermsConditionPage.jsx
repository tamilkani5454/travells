import { motion } from "framer-motion";
import heroBeach from "@/assets/hero-beach.jpg";

const TermsConditionPage = () => {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <img src={heroBeach} alt="Terms and Conditions" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            Terms & Conditions
          </motion.h1>
          <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            Please read these terms carefully before booking.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="mb-6">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and TropicTrails ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">2. Booking and Payments</h2>
            <p className="mb-6">
               All bookings are subject to availability. A deposit may be required to secure your booking, with the full balance due before the travel date. We accept various forms of payment, which will be specified during the booking process. Prices are subject to change without notice, but changes will not affect bookings that have already been confirmed.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">3. Cancellations and Refunds</h2>
            <p className="mb-6">
              Cancellation policies vary depending on the specific tour package booked. Please refer to your booking confirmation for details. Generally, cancellations made closer to the departure date will incur higher fees. Refunds, if applicable, will be processed according to our refund timeline and the payment method used.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">4. Travel Insurance</h2>
            <p className="mb-6">
               We strongly recommend that all travelers purchase comprehensive travel insurance prior to departure. Travel insurance should cover medical expenses, trip cancellation or interruption, loss of baggage, and other personal liabilities. We cannot be held responsible for costs or losses incurred due to the lack of adequate insurance.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">5. Passports, Visas, and Health</h2>
            <p className="mb-6">
              It is your responsibility to ensure you have the correct documentation for your travel, including a valid passport, any necessary visas, and health or vaccination certificates. We are not liable if you are refused entry into any country due to incorrect documentation.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">6. Liability</h2>
            <p className="mb-6">
              While we make every effort to ensure our tours run smoothly, we act only as an agent for the various independent suppliers that provide hotel accommodations, transportation, sightseeing activities, or other services connected with your tour. We are not liable for any negligence, willful act, or default of any supplier or third party.
            </p>

            <div className="mt-12 p-6 bg-muted/40 rounded-2xl border border-border text-sm">
              <p className="font-semibold text-foreground">Last Updated: March 2026</p>
              <p className="mt-2">By using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionPage;
