import { TrendingUp, Users, DollarSign, MapPin } from "lucide-react";

const stats = [
  { label: "Total Bookings", value: "1,248", change: "+12.5%", icon: TrendingUp, color: "bg-gradient-hero" },
  { label: "Active Users", value: "8,432", change: "+8.2%", icon: Users, color: "bg-gradient-coral" },
  { label: "Revenue", value: "$124,500", change: "+15.3%", icon: DollarSign, color: "bg-gradient-gold" },
  { label: "Destinations", value: "48", change: "+3", icon: MapPin, color: "bg-gradient-hero" },
];

const recentBookings = [
  { id: "BK001", customer: "Sarah Chen", package: "Singapore City Explorer", date: "2026-03-25", status: "Confirmed", amount: "$599" },
  { id: "BK002", customer: "James Wilson", package: "KL & Highlands Escape", date: "2026-03-24", status: "Pending", amount: "$499" },
  { id: "BK003", customer: "Priya Sharma", package: "Beach Paradise Combo", date: "2026-03-23", status: "Confirmed", amount: "$899" },
  { id: "BK004", customer: "Kenji Tanaka", package: "Foodie Trail", date: "2026-03-22", status: "Cancelled", amount: "$299" },
  { id: "BK005", customer: "Emily Rodriguez", package: "Family Fun Package", date: "2026-03-21", status: "Confirmed", amount: "$1,199" },
];

const statusColor = {
  Confirmed: "bg-tropical-emerald/10 text-tropical-emerald",
  Pending: "bg-tropical-gold/10 text-tropical-gold",
  Cancelled: "bg-destructive/10 text-destructive",
};

const AdminDashboard = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((s) => (
        <div key={s.label} className="rounded-xl bg-card shadow-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
              <p className="text-xs text-tropical-emerald mt-1">{s.change}</p>
            </div>
            <div className={`w-12 h-12 rounded-lg ${s.color} text-primary-foreground flex items-center justify-center`}>
              <s.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="rounded-xl bg-card shadow-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h3 className="font-display text-lg font-semibold text-foreground">Recent Bookings</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              {["ID", "Customer", "Package", "Date", "Status", "Amount"].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {recentBookings.map((b) => (
              <tr key={b.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-medium text-foreground">{b.id}</td>
                <td className="px-6 py-4 text-foreground">{b.customer}</td>
                <td className="px-6 py-4 text-muted-foreground">{b.package}</td>
                <td className="px-6 py-4 text-muted-foreground">{b.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[b.status]}`}>{b.status}</span>
                </td>
                <td className="px-6 py-4 font-semibold text-foreground">{b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
