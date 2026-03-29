import { motion } from "framer-motion";
import heroBeach from "@/assets/hero-beach.jpg";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <img src={heroBeach} alt="Privacy Policy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground"
          >
            Privacy Policy
          </motion.h1>
          <p className="mt-4 text-primary-foreground/80 max-w-lg mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <h2 className="text-2xl font-display font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="mb-6">
              Welcome to TropicTrails. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">2. The Data We Collect</h2>
            <p className="mb-6">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">3. How We Use Your Data</h2>
            <p className="mb-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">4. Data Security</h2>
            <p className="mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-display font-semibold text-foreground mb-4 mt-8">5. Your Legal Rights</h2>
            <p className="mb-6">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>

            <div className="mt-12 p-6 bg-muted/40 rounded-2xl border border-border text-sm">
              <p className="font-semibold text-foreground">Last Updated: March 2026</p>
              <p className="mt-2">If you have any questions about this privacy policy, please contact us at <a href="mailto:hello@tropictrails.com" className="text-primary hover:underline font-medium">hello@tropictrails.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
