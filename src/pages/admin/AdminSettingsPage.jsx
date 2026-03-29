import { useState } from "react";
import { Save, CheckCircle2, Globe, Bell, CreditCard, Shield, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const AdminSettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: "TropicTrails",
    email: "hello@tropictrails.com",
    phone: "+65 9123 4567",
    currency: "USD",
    bookingEnabled: true,
    emailNotifications: true,
    smsAlerts: false,
    maintenanceMode: false,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl space-y-8 pb-10"
    >
      {/* General Configuration */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-card shadow-card p-6 sm:p-8 space-y-6 border border-border/50">
        <div className="flex items-center gap-3 border-b border-border/50 pb-4">
          <div className="w-10 h-10 rounded-xl bg-tropical-sky/10 text-tropical-sky flex items-center justify-center">
             <Globe className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">General Settings</h3>
            <p className="text-sm text-muted-foreground">Manage your core brand identity and contact information.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-foreground mb-2">Site Title</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all shadow-sm"
              placeholder="e.g. My Amazing Travel Co"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">Support Email</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">Support Phone Number</label>
            <input
              type="text"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all shadow-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold text-foreground mb-2">Default Currency</label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
              <select
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground font-medium focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all shadow-sm appearance-none"
              >
                <option value="USD">USD ($) - US Dollar</option>
                <option value="SGD">SGD (S$) - Singapore Dollar</option>
                <option value="MYR">MYR (RM) - Malaysian Ringgit</option>
                <option value="EUR">EUR (€) - Euro</option>
              </select>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Preferences & Toggles */}
      <motion.div variants={itemVariants} className="rounded-2xl bg-card shadow-card p-6 sm:p-8 space-y-6 border border-border/50">
         <div className="flex items-center gap-3 border-b border-border/50 pb-4">
          <div className="w-10 h-10 rounded-xl bg-tropical-coral/10 text-tropical-coral flex items-center justify-center">
             <Shield className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">System Preferences</h3>
            <p className="text-sm text-muted-foreground">Control features and notifications engine.</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { key: "bookingEnabled", label: "Accept New Bookings", desc: "Allow users to submit new trip requests from the website.", icon: CreditCard, color: "text-tropical-emerald" },
            { key: "emailNotifications", label: "Email Notifications", desc: "Send automated booking confirmation emails to clients.", icon: Bell, color: "text-tropical-sky" },
            { key: "smsAlerts", label: "SMS Admin Alerts", desc: "Receive an SMS instantly when a high-value custom tour is requested.", icon: Smartphone, color: "text-tropical-gold" },
          ].map((pref) => (
            <div key={pref.key} className={`flex items-center justify-between p-5 rounded-xl border transition-all ${settings[pref.key] ? 'bg-primary/5 border-primary/20' : 'bg-background border-border hover:bg-muted/30'}`}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-background border border-border shadow-sm ${pref.color}`}>
                  <pref.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{pref.label}</p>
                  <p className="text-sm font-medium text-muted-foreground leading-snug max-w-[250px] sm:max-w-sm mt-0.5">{pref.desc}</p>
                </div>
              </div>
              
              <button
                onClick={() => setSettings({ ...settings, [pref.key]: !settings[pref.key] })}
                className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                  settings[pref.key] ? "bg-primary shadow-glow" : "bg-muted-foreground/30 hover:bg-muted-foreground/40"
                }`}
              >
                <span className="sr-only">Toggle {pref.label}</span>
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-background shadow ring-0 transition duration-200 ease-in-out ${settings[pref.key] ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Action Bar */}
      <motion.div 
        variants={itemVariants}
        className="sticky bottom-6 z-10 flex items-center justify-between p-4 px-6 bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl shadow-elevated"
      >
        <p className="text-sm font-medium text-muted-foreground hidden sm:block">
           Unsaved changes will be lost if you leave.
        </p>
        <button
          onClick={handleSave}
          disabled={saved}
          className={`relative overflow-hidden flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold transition-all ml-auto sm:ml-0 ${
            saved 
            ? "bg-tropical-emerald text-emerald-950 scale-[0.98]" 
            : "bg-gradient-hero text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 active:scale-[0.98]"
          }`}
        >
          {saved ? (
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex gap-2 items-center">
               <CheckCircle2 className="h-5 w-5" />
               Saved Successfully!
             </motion.div>
          ) : (
            <>
              <Save className="h-5 w-5" />
              Save Configuration
            </>
          )}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AdminSettingsPage;
