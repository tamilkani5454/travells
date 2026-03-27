import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/client/SectionHeading";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg opacity-80">Let's plan your dream trip together.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Get in Touch" title="We'd Love to Hear from You" />
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", info: "hello@tropictrails.com" },
                { icon: Phone, title: "Phone", info: "+65 9123 4567" },
                { icon: MapPin, title: "Office", info: "Singapore & Kuala Lumpur" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-hero text-primary-foreground flex items-center justify-center flex-shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{c.title}</h3>
                    <p className="text-muted-foreground text-sm">{c.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-coral text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow w-full sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
