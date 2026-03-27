import { useState } from "react";
import { Save } from "lucide-react";

const AdminSettingsPage = () => {
  const [settings, setSettings] = useState({
    siteName: "TropicTrails",
    email: "hello@tropictrails.com",
    phone: "+65 9123 4567",
    currency: "USD",
    bookingEnabled: true,
    emailNotifications: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <div className="rounded-xl bg-card shadow-card p-6 space-y-6">
        <h3 className="font-display text-lg font-semibold text-foreground border-b border-border pb-4">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Site Name</label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Contact Email</label>
            <input
              type="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
            <input
              type="text"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Currency</label>
            <select
              value={settings.currency}
              onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="USD">USD</option>
              <option value="SGD">SGD</option>
              <option value="MYR">MYR</option>
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-card shadow-card p-6 space-y-6">
        <h3 className="font-display text-lg font-semibold text-foreground border-b border-border pb-4">Preferences</h3>
        <div className="space-y-4">
          {[
            { key: "bookingEnabled", label: "Enable Bookings", desc: "Allow users to make new bookings" },
            { key: "emailNotifications", label: "Email Notifications", desc: "Send booking confirmation emails" },
          ].map((pref) => (
            <div key={pref.key} className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <div>
                <p className="font-medium text-foreground">{pref.label}</p>
                <p className="text-sm text-muted-foreground">{pref.desc}</p>
              </div>
              <button
                onClick={() => setSettings({ ...settings, [pref.key]: !settings[pref.key] })}
                className={`w-12 h-7 rounded-full transition-colors flex items-center px-1 ${
                  settings[pref.key] ? "bg-primary" : "bg-border"
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-primary-foreground transition-transform ${settings[pref.key] ? "translate-x-5" : ""}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className="flex items-center gap-2 bg-gradient-hero text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-shadow"
      >
        <Save className="h-4 w-4" />
        {saved ? "Saved!" : "Save Settings"}
      </button>
    </div>
  );
};

export default AdminSettingsPage;
