import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./admin/Dashboard";
import DriverHome from "./driver/Home";
import UserHome from "./user/Home";
import HospitalDashboard from "./hospital/Dashboard";
import Ambulances from "./admin/Ambulances";
import Drivers from "./admin/Drivers";
import Hospitals from "./admin/Hospitals";
import Reports from "./admin/Reports";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRole="Admin">
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/ambulances"
          element={
            <ProtectedRoute allowedRole="Admin">
              <DashboardLayout>
                <Ambulances />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/drivers"
          element={
            <ProtectedRoute allowedRole="Admin">
              <DashboardLayout>
                <Drivers />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/hospitals"
          element={
            <ProtectedRoute allowedRole="Admin">
              <DashboardLayout>
                <Hospitals />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRole="Admin">
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/driver/home"
          element={
            <ProtectedRoute allowedRole="Driver">
              <DashboardLayout>
                <DriverHome />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/home"
          element={
            <ProtectedRoute allowedRole="User">
              <DashboardLayout>
                <UserHome />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital/dashboard"
          element={
            <ProtectedRoute allowedRole="Hospital">
              <DashboardLayout>
                <HospitalDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
