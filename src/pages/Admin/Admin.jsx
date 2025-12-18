// import React from "react";
// import { Link } from "react-router-dom";
// import "./Admin.css";

// const Admin = () => {
//   return (
//     <div className="admin-container">
//       <h1>Admin Panel</h1>

//       <div className="admin-links">
//         <Link to="/admin/projects">Projects</Link>
//         <Link to="/admin/services">Services</Link>
//         <Link to="/admin/industries">Industries</Link>
//         <Link to="/admin/technologies">Technologies</Link>
//       </div>
//     </div>
//   );
// };

// export default Admin;



import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-layout">
      <h1>Admin Panel</h1>

      <nav className="admin-nav">
        <Link to="projects">Projects</Link>
        <Link to="services">Services</Link>
        <Link to="industries">Industries</Link>
        <Link to="technologies">Technologies</Link>
      </nav>

      {/* CONTENT WILL COME HERE */}
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

