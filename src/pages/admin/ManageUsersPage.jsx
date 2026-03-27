import { Search } from "lucide-react";
import { useState } from "react";

const users = [
  { id: 1, name: "Sarah Chen", email: "sarah@email.com", joined: "2025-06-15", bookings: 3, role: "Customer" },
  { id: 2, name: "James Wilson", email: "james@email.com", joined: "2025-08-20", bookings: 1, role: "Customer" },
  { id: 3, name: "Priya Sharma", email: "priya@email.com", joined: "2025-09-10", bookings: 5, role: "Customer" },
  { id: 4, name: "Admin User", email: "admin@tropictrails.com", joined: "2024-01-01", bookings: 0, role: "Admin" },
  { id: 5, name: "Emily Rodriguez", email: "emily@email.com", joined: "2026-01-15", bookings: 2, role: "Customer" },
  { id: 6, name: "Ahmed Hassan", email: "ahmed@email.com", joined: "2026-02-28", bookings: 1, role: "Customer" },
];

const ManageUsersPage = () => {
  const [search, setSearch] = useState("");
  const filtered = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users..."
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
                {["Name", "Email", "Joined", "Bookings", "Role"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((u) => (
                <tr key={u.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{u.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{u.email}</td>
                  <td className="px-6 py-4 text-muted-foreground">{u.joined}</td>
                  <td className="px-6 py-4 text-foreground">{u.bookings}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${u.role === "Admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                      {u.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;
