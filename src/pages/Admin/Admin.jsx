import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="admin-layout">

      <div className="admin-header">
        <h2>Admin Panel</h2>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <nav className="admin-nav">
        <Link to="pages">Manage Pages</Link>
        <Link to="add">Add Page</Link>
      </nav>

      <Outlet />

    </div>
  );
};

export default Admin;