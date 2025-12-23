import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import Admin from "./pages/Admin/Admin";
import AdminPages from "./pages/AdminPages/AdminPages";
import AddPage from "./pages/AddPage/AddPage";
import EditPage from "./pages/EditPage/EditPage";


const App = () => {
  const location = useLocation();

  // hide navbar/footer for admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <NavBar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        {/* Admin Layout Route */}
       
         <Route path="/admin" element={<Admin/>}>
        <Route path="pages" element={<AdminPages/>} />
        <Route path="add" element={<AddPage/>} />
        <Route path="edit/:id" element={<EditPage/>} />
      </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;


