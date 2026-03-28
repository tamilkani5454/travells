import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const location = useLocation();

  // Close mobile sidebar on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-foreground text-primary-foreground transition-all duration-300 transform
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
          ${isDesktopCollapsed ? "lg:w-16" : "w-64"}
        `}
      >
        <div className={`flex items-center h-16 border-b border-primary-foreground/10 shrink-0 ${isDesktopCollapsed ? "lg:justify-center px-4 lg:px-0" : "justify-between px-4"}`}>
          {/* Logo */}
          <Link
            to="/admin"
            className={`flex items-center gap-2 font-display text-lg font-bold text-white transition-opacity ${isDesktopCollapsed ? "lg:hidden" : ""}`}
          >
            <Plane className="h-5 w-5 text-tropical-coral" /> <span>Admin</span>
          </Link>

          {/* Collapsed Desktop Logo */}
          <Link
            to="/admin"
            className={`hidden items-center justify-center w-full transition-opacity ${isDesktopCollapsed ? "lg:flex" : "hidden"}`}
            title="Admin"
          >
            <Plane className="h-5 w-5 text-tropical-coral" />
          </Link>

          {/* Mobile Close Button */}
          <button onClick={() => setIsMobileOpen(false)} className="p-1 text-primary-foreground/70 hover:text-white transition-colors lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 space-y-1 px-3 overflow-y-auto overflow-x-hidden custom-scrollbar">
          {links.map((l) => {
            const active = location.pathname === l.path;
            return (
              <Link
                key={l.path}
                to={l.path}
                title={isDesktopCollapsed ? l.label : ""}
                className={`flex items-center gap-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDesktopCollapsed ? "lg:justify-center px-0 lg:px-0" : "px-3"
                } ${
                  active
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-white"
                }`}
              >
                <l.icon className="h-5 w-5 flex-shrink-0" />
                <span className={`whitespace-nowrap transition-opacity duration-200 ${isDesktopCollapsed ? "lg:hidden lg:opacity-0" : "opacity-100"}`}>
                  {l.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-primary-foreground/10 shrink-0">
          <Link
            to="/"
            title={isDesktopCollapsed ? "Back to Site" : ""}
            className={`flex items-center gap-3 text-sm font-medium text-primary-foreground/70 hover:text-white transition-colors ${
              isDesktopCollapsed ? "lg:justify-center" : ""
            }`}
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span className={`whitespace-nowrap transition-opacity duration-200 ${isDesktopCollapsed ? "lg:hidden lg:opacity-0" : "opacity-100"}`}>
              Back to Site
            </span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 h-16 bg-card border-b border-border flex items-center px-4 lg:px-6 gap-4 shrink-0 transition-all duration-300">
          {/* Mobile Toggle */}
          <button onClick={() => setIsMobileOpen(true)} className="p-2 -ml-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors lg:hidden">
            <Menu className="h-5 w-5" />
          </button>

          {/* Desktop Toggle */}
          <button onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)} className="hidden lg:block p-2 -ml-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Menu className="h-5 w-5" />
          </button>

          <h2 className="font-display text-lg font-semibold text-foreground truncate">
            {links.find((l) => l.path === location.pathname)?.label || "Admin"}
          </h2>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
