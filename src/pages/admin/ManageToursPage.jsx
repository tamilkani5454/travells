import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";

const initialTours = [
  { id: 1, name: "Singapore City Explorer", country: "Singapore", price: "$599", duration: "4D/3N", status: "Active" },
  { id: 2, name: "KL & Highlands Escape", country: "Malaysia", price: "$499", duration: "5D/4N", status: "Active" },
  { id: 3, name: "Beach Paradise Combo", country: "Both", price: "$899", duration: "7D/6N", status: "Active" },
  { id: 4, name: "Foodie Trail", country: "Both", price: "$299", duration: "3D/2N", status: "Draft" },
  { id: 5, name: "Family Fun Package", country: "Both", price: "$1,199", duration: "6D/5N", status: "Active" },
  { id: 6, name: "Adventure Seeker", country: "Malaysia", price: "$749", duration: "5D/4N", status: "Active" },
];

const ManageToursPage = () => {
  const [search, setSearch] = useState("");
  const tours = initialTours.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:shadow-glow transition-shadow">
          <Plus className="h-4 w-4" /> Add Tour
        </button>
      </div>

      <div className="rounded-xl bg-card shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                {["Name", "Country", "Price", "Duration", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tours.map((t) => (
                <tr key={t.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{t.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{t.country}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">{t.price}</td>
                  <td className="px-6 py-4 text-muted-foreground">{t.duration}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${t.status === "Active" ? "bg-tropical-emerald/10 text-tropical-emerald" : "bg-muted text-muted-foreground"}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-muted text-tropical-sky"><Edit className="h-4 w-4" /></button>
                      <button className="p-1.5 rounded-lg hover:bg-muted text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
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

export default ManageToursPage;
