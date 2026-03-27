import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Plane, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { 
    label: "Countries", 
    path: "#",
    children: [
      { label: "Singapore", path: "/singapore" },
      { label: "Malaysia", path: "/malaysia" }
    ]
  },
  { label: "Packages", path: "/packages" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "About", path: "/about" },
  { label: "Contact Us  ", path: "/contact" },
];

const ClientNavbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <Plane className="h-6 w-6 text-tropical-coral" />
          TropicTrails
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => {
            if (l.children) {
              return (
                <div key={l.label} className="relative group">
                  <button className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted flex items-center gap-1 cursor-pointer">
                    {l.label}
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card py-2 flex flex-col rounded-xl overflow-hidden border border-border shadow-lg">
                      {l.children.map(child => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`px-4 py-2 text-sm font-medium transition-colors ${
                            location.pathname === child.path
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === l.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => {
                if (l.children) {
                  return (
                    <div key={l.label} className="flex flex-col">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors w-full text-left"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col pl-4 overflow-hidden"
                          >
                            {l.children.map(child => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => {
                                  setOpen(false);
                                  setMobileDropdownOpen(false);
                                }}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors mt-1 ${
                                  location.pathname === child.path
                                    ? "bg-primary text-primary-foreground"
                                    : "text-foreground hover:bg-muted"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === l.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ClientNavbar;
