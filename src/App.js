import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import Loader from "./components/Loader/Loader";

// Lazy imports
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const PageDetails = lazy(() => import("./pages/PageDetails/PageDetails"));
const ServicePage = lazy(() => import("./pages/ServicePage/ServicePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectPage/ProjectPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage/IndustriesPage"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage/TechnologyPage"));
const Blog = lazy(() => import("./pages/Blog/Blog"));
const CaseStudies = lazy(() => import("./pages/CaseStudies/CaseStudies"));

// Admin pages
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AdminPages = lazy(() => import("./pages/AdminPages/AdminPages"));
const AddPage = lazy(() => import("./pages/AddPage/AddPage"));
const EditPage = lazy(() => import("./pages/EditPage/EditPage"));

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <Suspense fallback={<Loader />}>
      {/* Navbar - hidden on admin */}
      {!isAdminRoute && <NavBar />
}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:pageType/:category" element={<PageDetails />} />

        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/technologies" element={<TechnologyPage />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />}>
          <Route path="pages" element={<AdminPages />} />
          <Route path="add" element={<AddPage />} />
          <Route path="edit/:id" element={<EditPage />} />
        </Route>
      </Routes>

      {/* Footer - hidden on admin */}
      {!isAdminRoute && <Footer />}
    </Suspense>
  );
};

export default App;
