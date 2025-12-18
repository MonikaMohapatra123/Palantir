import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./pages/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import Admin from "./pages/Admin/Admin";
import AddProject from "./pages/AddProject/AddProject";
import EditProject from "./pages/EditProject/EditProject";
import AdminProjects from "./pages/AdminProject/AdminProjects";

const App = () => {
  const location = useLocation();

  // check if current route is admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Show Navbar only if NOT admin */}
      {!isAdminRoute && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/projects/add/:category" element={<AddProject />} />
        <Route path="/admin/projects/edit/:category" element={<EditProject />} />
      </Routes>

      {/* Show Footer only if NOT admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
