import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard, Map, CalendarCheck, Users, Settings, Menu, X, Plane, LogOut,
} from "lucide-react";

const links = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Manage Tours", path: "/admin/tours", icon: Map },
  { label: "Bookings", path: "/admin/bookings", icon: CalendarCheck },
  { label: "Users", path: "/admin/users", icon: Users },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col bg-foreground text-primary-foreground transition-all duration-300 ${
          collapsed ? "w-0 lg:w-16 -translate-x-full lg:translate-x-0" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-primary-foreground/10">
          {!collapsed && (
            <Link to="/admin" className="flex items-center gap-2 font-display text-lg font-bold">
              <Plane className="h-5 w-5 text-tropical-coral" /> Admin
            </Link>
          )}
          <button onClick={() => setCollapsed(!collapsed)} className="p-1 lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 py-4 space-y-1 px-2">
          {links.map((l) => {
            const active = location.pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-primary-foreground/70 hover:bg-primary-foreground/10"
                }`}
              >
                <l.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{l.label}</span>}
              </Link>
            );
          })}
        </nav>
        {!collapsed && (
          <div className="p-4 border-t border-primary-foreground/10">
            <Link to="/" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground">
              <LogOut className="h-4 w-4" /> Back to Site
            </Link>
          </div>
        )}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-card border-b border-border flex items-center px-4 gap-4">
          <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-lg hover:bg-muted">
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <h2 className="font-display text-lg font-semibold text-foreground">
            {links.find((l) => l.path === location.pathname)?.label || "Admin"}
          </h2>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Overlay */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-foreground/50 lg:hidden z-40"
          onClick={() => setCollapsed(true)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
