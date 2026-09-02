import { Routes, Route } from "react-router-dom"; //In Next.js rrd package is not required

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Suppliers from "../pages/Suppliers";
import Customers from "../pages/Customers";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

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

      <Route
        path="/suppliers"
        element={<Suppliers />}
      />

      <Route
        path="/customers"
        element={<Customers />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      {/* Inline component */}
      <Route path="/contact-us" element = { <h2>Contact Us!!!!! </h2> } />

      {/* Unmatching route */}
      <Route path="*" element={ <Dashboard /> } />

    </Routes>
  );
};

export default AppRoutes;