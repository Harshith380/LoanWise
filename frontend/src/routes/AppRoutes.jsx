import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Eligibility from "../pages/Eligibility";
import EMICalculator from "../pages/EMICalculator";
import LoanComparison from "../pages/LoanComparison";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import LoanHistory from "../pages/LoanHistory";
import Profile from "../pages/Profile";
import FinancialProfile from "../pages/FinancialProfile";
import BankRecommendations from "../pages/BankRecommendations";
import ProtectedRoute from "../components/ProtectedRoute";
import BankDetails from "../pages/BankDetails";
// Admin Pages
import AdminDashboard from "../admin/pages/AdminDashboard";
import ManageUsers from "../admin/pages/ManageUsers";
import ManageApplications from "../admin/pages/ManageApplications";
import Analytics from "../admin/pages/Analytics";

function AppRoutes() {
  return (
    <Routes>

      {/* ========================= */}
      {/* Public Routes */}
      {/* ========================= */}

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ========================= */}
      {/* Admin Routes */}
      {/* ========================= */}

      {/* Redirect /admin -> /admin/dashboard */}
      <Route
        path="/admin"
        element={<Navigate to="/admin/dashboard" replace />}
      />

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/users"
        element={<ManageUsers />}
      />

      <Route
        path="/admin/applications"
        element={<ManageApplications />}
      />

      <Route
        path="/admin/analytics"
        element={<Analytics />}
      />

      {/* ========================= */}
      {/* Protected User Routes */}
      {/* ========================= */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/emi"
        element={
          <ProtectedRoute>
            <EMICalculator />
          </ProtectedRoute>
        }
      />

      <Route
        path="/compare"
        element={
          <ProtectedRoute>
            <LoanComparison />
          </ProtectedRoute>
        }
      />

      <Route
        path="/eligibility"
        element={
          <ProtectedRoute>
            <Eligibility />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <LoanHistory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/financial-profile"
        element={
          <ProtectedRoute>
            <FinancialProfile />
          </ProtectedRoute>
        }
      />
      <Route
  path="/bank-recommendations"
  element={<BankRecommendations />}
/>

<Route
  path="/bank-details"
  element={<BankDetails />}
/>

      {/* ========================= */}
      {/* 404 */}
      {/* ========================= */}

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;