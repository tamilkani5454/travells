import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import heroBg from "@/assets/hero-beach.jpg";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      navigate("/admin");
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Tropical Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
      </div>

      {/* Back to Client Site */}
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors text-sm font-medium bg-background/10 px-4 py-2 rounded-full border border-primary-foreground/10 hover:bg-background/20 backdrop-blur-md">
          <ArrowLeft className="w-4 h-4" /> Return to Website
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-card/95 backdrop-blur-xl border border-border overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          
          <div className="h-2 w-full bg-gradient-hero" />

          <div className="p-8 sm:p-10">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
                <Plane className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="text-center mb-10">
              <h1 className="text-2xl sm:text-3xl font-black font-display text-foreground mb-2">Welcome Back</h1>
              <p className="text-muted-foreground text-sm font-medium">Log into the TropicTrails Admin Center</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-foreground font-medium shadow-sm"
                    placeholder="admin@tropictrails.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-foreground">Password</label>
                  <a href="#" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">Forgot Password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-foreground font-medium shadow-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground font-bold py-4 rounded-xl shadow-md hover:shadow-glow transition-all active:scale-[0.98] disabled:opacity-70 mt-4 group"
              >
                {isLoading ? (
                  <span className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In to Dashboard 
                    <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="bg-muted/50 p-4 border-t border-border mt-2 text-center">
             <p className="text-xs font-medium text-muted-foreground">Secure connection established • App version 1.2.0</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
