import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";
import AdminLogin from "./components/AdminLogin";
import CustomerLogin from "./components/CustomerLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [adminUsername, setAdminUsername] = useState("");
  const [customerUsername, setCustomerUsername] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (username) => {
    setAdminUsername(username);
    setIsAdminLoggedIn(true);
    navigate("/admin-dashboard");
  };

  const handleCustomerLogin = (username) => {
    setCustomerUsername(username);
    setIsCustomerLoggedIn(true);
    navigate("/customer-dashboard");
  };

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/admin-login"
        element={<AdminLogin onLogin={handleAdminLogin} />}
      />
      <Route
        path="/customer-login"
        element={<CustomerLogin onLogin={handleCustomerLogin} />}
      />
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute
            element={() => <AdminDashboard username={adminUsername} />}
            isAuthenticated={isAdminLoggedIn}
            redirectTo="/admin-login"
          />
        }
      />
      <Route
        path="/customer-dashboard"
        element={
          <PrivateRoute
            element={() => <CustomerDashboard username={customerUsername} />}
            isAuthenticated={isCustomerLoggedIn}
            redirectTo="/customer-login"
          />
        }
      />
    </Routes>
  );
};

export default App;
