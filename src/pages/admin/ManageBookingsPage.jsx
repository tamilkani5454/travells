import { Search, Eye, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const bookings = [
  { id: "BK001", customer: "Sarah Chen", email: "sarah@email.com", package: "Singapore City Explorer", date: "2026-04-10", people: 2, status: "Confirmed", amount: "$1,198" },
  { id: "BK002", customer: "James Wilson", email: "james@email.com", package: "KL & Highlands Escape", date: "2026-04-15", people: 4, status: "Pending", amount: "$1,996" },
  { id: "BK003", customer: "Priya Sharma", email: "priya@email.com", package: "Beach Paradise Combo", date: "2026-04-20", people: 2, status: "Confirmed", amount: "$1,798" },
  { id: "BK004", customer: "Kenji Tanaka", email: "kenji@email.com", package: "Foodie Trail", date: "2026-05-01", people: 6, status: "Cancelled", amount: "$1,794" },
  { id: "BK005", customer: "Emily Rodriguez", email: "emily@email.com", package: "Family Fun Package", date: "2026-05-05", people: 5, status: "Confirmed", amount: "$5,995" },
  { id: "BK006", customer: "Ahmed Hassan", email: "ahmed@email.com", package: "Adventure Seeker", date: "2026-05-10", people: 3, status: "Pending", amount: "$2,247" },
];

const statusColor = {
  Confirmed: "bg-tropical-emerald/15 text-tropical-emerald border-tropical-emerald/20",
  Pending: "bg-tropical-gold/15 text-tropical-gold border-tropical-gold/20",
  Cancelled: "bg-destructive/15 text-destructive border-destructive/20",
};

const ManageBookingsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = bookings.filter((b) => b.customer.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-card p-4 rounded-xl shadow-sm border border-border/50">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search booking ID or customer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
          />
        </div>
        
        <div className="flex gap-2">
           <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors border border-border">
             Export CSV
           </button>
        </div>
      </div>

      <div className="rounded-xl bg-card shadow-card overflow-hidden border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-border/50">
              <tr>
                {["Booking Info", "Customer Details", "Package", "Pax", "Status", "Amount", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-foreground text-sm">{b.id}</span>
                      <span className="text-xs font-medium text-muted-foreground bg-primary/10 w-fit px-2 py-0.5 rounded-md text-primary">{b.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-foreground font-bold">{b.customer}</div>
                    <div className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">{b.email}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-muted-foreground">{b.package}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-foreground border border-border">
                      {b.people}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${statusColor[b.status]}`}>{b.status}</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-foreground text-base">{b.amount}</td>
                  <td className="px-6 py-4">
                     <div className="flex items-center gap-1 opacity-10 md:opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-2 rounded-lg text-tropical-sky hover:bg-tropical-sky/10 transition-colors cursor-pointer" title="View Details">
                         <Eye className="h-4 w-4" />
                       </button>
                       <button className="p-2 rounded-lg text-tropical-emerald hover:bg-tropical-emerald/10 transition-colors cursor-pointer" title="Edit Booking">
                         <Edit className="h-4 w-4" />
                       </button>
                     </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-muted-foreground font-medium">
                     No bookings found matching "{search}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default ManageBookingsPage;
