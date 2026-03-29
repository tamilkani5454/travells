import { TrendingUp, Users, DollarSign, MapPin, Eye, MoreVertical } from "lucide-react";
import { dummyPackages } from "../../assets/dummy";
import { motion } from "framer-motion";

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
  Confirmed: "bg-tropical-emerald/15 text-tropical-emerald border-tropical-emerald/20",
  Pending: "bg-tropical-gold/15 text-tropical-gold border-tropical-gold/20",
  Cancelled: "bg-destructive/15 text-destructive border-destructive/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } 
  }),
};

const AdminDashboard = () => {  
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div 
            key={s.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-xl bg-card shadow-card p-6 border border-border/50 hover:shadow-elevated transition-shadow group relative overflow-hidden flex flex-col justify-between h-32"
          >
            {/* Background Glow */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${s.color} opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none`} />
            
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
                <p className="text-3xl font-bold font-display text-foreground mt-1">{s.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${s.color} text-primary-foreground flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                <s.icon className="h-6 w-6" />
              </div>
            </div>
            
            <div className="relative z-10 flex items-center gap-2 mt-4">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.change.startsWith('+') ? 'bg-tropical-emerald/10 text-tropical-emerald' : 'bg-destructive/10 text-destructive'}`}>
                {s.change}
              </span>
              <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Bookings Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="rounded-xl bg-card shadow-card overflow-hidden border border-border/50"
      >
        <div className="px-6 py-5 border-b border-border/50 flex justify-between items-center bg-muted/20">
          <h3 className="font-display text-lg font-bold text-foreground">Recent Bookings Overview</h3>
          <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-border/50">
              <tr>
                {["Booking ID", "Customer Details", "Tour Package", "Travel Date", "Amount", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {recentBookings.map((b) => (
                <tr key={b.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="px-6 py-4 font-bold text-foreground">{b.id}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{b.customer}</td>
                  <td className="px-6 py-4 text-muted-foreground">{b.package}</td>
                  <td className="px-6 py-4 text-muted-foreground">{b.date}</td>
                  <td className="px-6 py-4 font-bold text-foreground">{b.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${statusColor[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="px-6 py-4">
                     <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                       <Eye className="h-4 w-4" />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminDashboard;
