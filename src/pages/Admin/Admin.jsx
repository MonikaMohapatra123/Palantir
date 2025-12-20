// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./Admin.css";

// const Admin = () => {
//   return (
//     <div className="admin-layout">
//       <h2>Admin Panel</h2>

//       <nav className="admin-nav">
//         <Link to="pages">Manage Pages</Link>
//         <Link to="add">Add Page</Link>
//       </nav>

//       <Outlet />
//     </div>
//   );
// };

// export default Admin;
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="admin-layout">
      {/* Header */}
      <div className="admin-header">
        <h2>Admin Panel</h2>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Navigation */}
      <nav className="admin-nav">
        <Link to="pages">Manage Pages</Link>
        <Link to="add">Add Page</Link>
      </nav>

      {/* Child Routes */}
      <Outlet />
    </div>
  );
};

export default Admin;
