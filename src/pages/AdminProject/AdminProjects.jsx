// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminProjects.css";

// const AdminProjects = () => {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("thermal");

//   return (
//     <div>
//       <h2>Projects Admin</h2>

//       <select value={category} onChange={(e) => setCategory(e.target.value)}>
//         <option value="thermal">Thermal</option>
//         <option value="solar">Solar</option>
//       </select>

//       <button onClick={() => navigate(`/admin/projects/add/${category}`)}>
//         Add / Update Project
//       </button>

//       <button onClick={() => navigate(`/admin/projects/edit/${category}`)}>
//         Edit Project
//       </button>
//     </div>
//   );
// };

// export default AdminProjects;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminProject.css";

const AdminProjects = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("thermal");

  return (
    <div className="admin-projects">
      <h2>Projects Admin</h2>

      <label>Select Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="thermal">Thermal</option>
        <option value="solar">Solar</option>
      </select>

      <div className="btn-group">
        <button onClick={() => navigate(`/admin/projects/add/${category}`)}>
          Add Project
        </button>

        <button onClick={() => navigate(`/admin/projects/edit/${category}`)}>
          Edit Project
        </button>
      </div>
    </div>
  );
};

export default AdminProjects;
