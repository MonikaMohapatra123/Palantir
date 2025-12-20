import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin-layout">
      <h2>Admin Panel</h2>

      <nav className="admin-nav">
        <Link to="pages">Manage Pages</Link>
        <Link to="add">Add Page</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Admin;
