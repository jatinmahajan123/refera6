import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import DashboardPage from "./pages/DashboardPage";
import CampaignPage from "./pages/CampaignPages";
import Layout from "./components/layout";
import PromotersView from "./components/promoters";
import PromoterProfile from "./components/profileview";
import SummerReferralDashboard from "./components/summerrdash";
import LeadsView from "./components/LeadView";
import LeadDetail from "./components/LeadDetail";
import PayoutLayout from "./components/PayoutLayout";
import AllPayouts from "./components/Allpayouts";
import Disputes from "./components/Disputes";
import PayoutSettings from "./components/PayoutSettings";
import Dashboard from "./components/Dashboard"
import AIAgentChat from "./components/AIAgentChat";

// Import Components
import SettingsLayout from "./components/SettingsLyout";
import UserProfilePage from "./components/userProfilePage";
import BusinessProfilePage from "./components/BuisnessprofilePage";
import AISettingsPage from "./components/AiSettingsPage";
import EmailPhoneSetupPage from "./components/EmailPhoneSetup";
import SubscriptionUsagePage from "./components/SubscriptionUsagePage";

const queryClient = new QueryClient();

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();
  
  if (!isLoggedIn) {
    // Redirect to login page if not logged in, preserve the intended destination
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};

// AuthLayout wraps the Layout and adds authentication protection
const AuthLayout: React.FC = () => {
  return (
    <ProtectedRoute>
      <Layout />
    </ProtectedRoute>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          
          {/* Protected routes inside the sidebar layout */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="ai-agent" element={<AIAgentChat />} />
            <Route path="platformsetup" element={<DashboardPage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="campaign" element={<CampaignPage />} />
            <Route
              path="/campaign/summer-referral"
              element={<SummerReferralDashboard />}
            />
            <Route path="promoters" element={<PromotersView />} />
            <Route
              path="/promoter-profile/:promoterName"
              element={<PromoterProfile />}
            />
            <Route path="/" element={<Navigate to="/promoters" replace />} />
            <Route path="/leads" element={<LeadsView />} />
            <Route path="/leads/:id" element={<LeadDetail />} />
            
            {/* Payout Page Tabs */}
            <Route path="/payouts" element={<PayoutLayout />}>
              <Route path="all" element={<AllPayouts />} />
              <Route path="disputes" element={<Disputes />} />
              <Route path="settings" element={<PayoutSettings />} />
              <Route index element={<Navigate to="/payouts/all" replace />} />
            </Route>
            
            {/* Settings routes */}
            <Route path="/settings" element={<SettingsLayout />}>
              <Route index element={<Navigate to="/settings/user-profile" replace />} />
              <Route path="user-profile" element={<UserProfilePage />} />
              <Route path="business-profile" element={<BusinessProfilePage />} />
              <Route path="ai-settings" element={<AISettingsPage />} />
              <Route path="email-phone" element={<EmailPhoneSetupPage />} />
              <Route path="subscription" element={<SubscriptionUsagePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
