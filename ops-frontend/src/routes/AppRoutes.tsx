import { Routes, Route } from "react-router-dom"; //In Next.js rrd package is not required

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import SupplierPage from "../pages/SupplierPage";
import SupplierRegistrationPage from "../pages/SupplierRegistrationPage";
import Customers from "../pages/Customers";
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";
import AddOperation from "../practise/AddOperation"

const AppRoutes = () => {
  return (
    <Routes>

      {/* WIP - Parent-Child Routes */}

      {/* Root route */}
      <Route path="/" element={<Dashboard />} />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route path="/suppliers" element={<SupplierPage />} />
      <Route path="/register-supplier" element={<SupplierRegistrationPage />} />
      <Route path="/practise-add-operation" element={<AddOperation />} />

      <Route
        path="/customers"
        element={<Customers />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route path="/login" element={<LoginPage />} />

      {/* Inline component */}
      <Route path="/contact-us" element = { <h2>Contact Us!!!!! </h2> } />

      {/* Unmatching route */}
      <Route path="*" element={ <Dashboard /> } />

    </Routes>
  );
};

export default AppRoutes;