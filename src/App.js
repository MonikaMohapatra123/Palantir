import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import NavBar from "./pages/NavBar/NavBar";

// Normal imports
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import PageDetails from "./pages/PageDetails/PageDetails";
import ServicePage from "./pages/ServicePage/ServicePage";
import ProjectsPage from "./pages/ProjectPage/ProjectPage";
import IndustriesPage from "./pages/IndustriesPage/IndustriesPage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";
import Blog from "./pages/Blog/Blog";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import News from "./pages/News/News";

// Admin pages
import Admin from "./pages/Admin/Admin";
import AdminPages from "./pages/AdminPages/AdminPages";
import AddPage from "./pages/AddPage/AddPage";
import EditPage from "./pages/EditPage/EditPage";

import PostDetails from "./components/PostDetails/PostDetails";
import MissionDetails from "./pages/MissionDetails/MissionDetails";
import GetStartedOverlay from "./pages/NavBar/GetStartedOverlay";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />

      {/* Hide Navbar on Admin */}
      {!isAdminRoute && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:pageType/:category" element={<PageDetails />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/technologies" element={<TechnologyPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/mission/:id" element={<MissionDetails />} />
        <Route path="/get-started" element={<GetStartedOverlay />} />
        <Route path="/newsroom" element={<News />} />

        <Route path="/admin" element={<Admin />}>
          <Route path="pages" element={<AdminPages />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;