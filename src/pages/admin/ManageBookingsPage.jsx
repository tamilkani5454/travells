import { Search } from "lucide-react";
import { useState } from "react";

const bookings = [
  { id: "BK001", customer: "Sarah Chen", email: "sarah@email.com", package: "Singapore City Explorer", date: "2026-04-10", people: 2, status: "Confirmed", amount: "$1,198" },
  { id: "BK002", customer: "James Wilson", email: "james@email.com", package: "KL & Highlands Escape", date: "2026-04-15", people: 4, status: "Pending", amount: "$1,996" },
  { id: "BK003", customer: "Priya Sharma", email: "priya@email.com", package: "Beach Paradise Combo", date: "2026-04-20", people: 2, status: "Confirmed", amount: "$1,798" },
  { id: "BK004", customer: "Kenji Tanaka", email: "kenji@email.com", package: "Foodie Trail", date: "2026-05-01", people: 6, status: "Cancelled", amount: "$1,794" },
  { id: "BK005", customer: "Emily Rodriguez", email: "emily@email.com", package: "Family Fun Package", date: "2026-05-05", people: 5, status: "Confirmed", amount: "$5,995" },
  { id: "BK006", customer: "Ahmed Hassan", email: "ahmed@email.com", package: "Adventure Seeker", date: "2026-05-10", people: 3, status: "Pending", amount: "$2,247" },
];

const statusColor = {
  Confirmed: "bg-tropical-emerald/10 text-tropical-emerald",
  Pending: "bg-tropical-gold/10 text-tropical-gold",
  Cancelled: "bg-destructive/10 text-destructive",
};

const ManageBookingsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = bookings.filter((b) => b.customer.toLowerCase().includes(search.toLowerCase()) || b.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search bookings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <div className="rounded-xl bg-card shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {["ID", "Customer", "Package", "Date", "People", "Status", "Amount"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{b.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-foreground font-medium">{b.customer}</div>
                    <div className="text-xs text-muted-foreground">{b.email}</div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{b.package}</td>
                  <td className="px-6 py-4 text-muted-foreground">{b.date}</td>
                  <td className="px-6 py-4 text-muted-foreground">{b.people}</td>
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
};

export default ManageBookingsPage;
