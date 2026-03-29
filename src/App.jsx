import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Client layout & pages
import ClientLayout from "@/components/client/ClientLayout";
import HomePage from "@/pages/client/HomePage";
import PackagesPage from "@/pages/client/PackagesPage";
import PackageDetailPage from "@/pages/client/PackageDetailPage";
import CustomTourPage from "@/pages/client/CustomTourPage";
import GalleryPage from "@/pages/client/GalleryPage";
import TestimonialsPage from "@/pages/client/TestimonialsPage";
import AboutPage from "@/pages/client/AboutPage";
import ContactPage from "@/pages/client/ContactPage";
import FAQPage from "@/pages/client/FAQPage";
import PrivacyPolicyPage from "@/pages/client/PrivacyPolicyPage";
import TermsConditionPage from "@/pages/client/TermsConditionPage";

// Admin layout & pages
import AdminLayout from "@/components/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageToursPage from "@/pages/admin/ManageToursPage";
import ManageBookingsPage from "@/pages/admin/ManageBookingsPage";
import ManageUsersPage from "@/pages/admin/ManageUsersPage";
import AdminSettingsPage from "@/pages/admin/AdminSettingsPage";

import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import Country from "./pages/client/Country";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        {/* Client Routes */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:country" element={<Country />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:id" element={<PackageDetailPage />} />
          <Route path="/custom-tour" element={<CustomTourPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsConditionPage />} />
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
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;

