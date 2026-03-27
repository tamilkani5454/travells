import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Client layout & pages
import ClientLayout from "@/components/client/ClientLayout";
import HomePage from "@/pages/client/HomePage";
import SingaporePage from "@/pages/client/SingaporePage";
import MalaysiaPage from "@/pages/client/MalaysiaPage";
import PackagesPage from "@/pages/client/PackagesPage";
import PackageDetailPage from "@/pages/client/PackageDetailPage";
import GalleryPage from "@/pages/client/GalleryPage";
import TestimonialsPage from "@/pages/client/TestimonialsPage";
import AboutPage from "@/pages/client/AboutPage";
import ContactPage from "@/pages/client/ContactPage";
import FAQPage from "@/pages/client/FAQPage";

// Admin layout & pages
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageToursPage from "@/pages/admin/ManageToursPage";
import ManageBookingsPage from "@/pages/admin/ManageBookingsPage";
import ManageUsersPage from "@/pages/admin/ManageUsersPage";
import AdminSettingsPage from "@/pages/admin/AdminSettingsPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Client Routes */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/singapore" element={<SingaporePage />} />
            <Route path="/malaysia" element={<MalaysiaPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:id" element={<PackageDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/tours" element={<ManageToursPage />} />
            <Route path="/admin/bookings" element={<ManageBookingsPage />} />
            <Route path="/admin/users" element={<ManageUsersPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;

