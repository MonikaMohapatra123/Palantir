// import React, { useEffect, useState } from "react";
// import { getAllPages, deletePage } from "../services/pageApi";
// import { useNavigate } from "react-router-dom";
// import "./AdminPages.css";

// const AdminPages = () => {
//   const [pages, setPages] = useState([]);
//   const navigate = useNavigate();

//   const fetchPages = async () => {
//     const res = await getAllPages();
//     setPages(res.data);
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this page?")) {
//       await deletePage(id);
//       fetchPages();
//     }
//   };

//   useEffect(() => {
//     fetchPages();
//   }, []);

//   return (
//     <div className="admin-pages">
//       <h3>All Pages</h3>

//       {pages.map((p) => (
//         <div className="page-card" key={p._id}>
//           <p><b>Type:</b> {p.pageType}</p>
//           <p><b>Category:</b> {p.category}</p>

//           <div className="btns">
//             <button onClick={() => navigate(`/admin/edit/${p._id}`)}>
//               Edit
//             </button>
//             <button onClick={() => handleDelete(p._id)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminPages;








import React, { useEffect, useState } from "react";
import { getAllPages, deletePage } from "../services/pageApi";
import { useNavigate } from "react-router-dom";
import "./AdminPages.css";

const AdminPages = () => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const fetchPages = async () => {
    const res = await getAllPages();
    setPages(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this page?")) {
      await deletePage(id);
      fetchPages();
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div className="admin-pages">
      <h3 className="admin-pages-title">All Pages</h3>

      {pages.map((p) => (
        <div className="admin-page-card" key={p._id}>
          <p className="admin-page-text">
            <b>Type:</b> {p.pageType}
          </p>
          <p className="admin-page-text">
            <b>Category:</b> {p.category}
          </p>

          <div className="admin-page-btns">
            <button
              className="admin-page-btn admin-edit-btn"
              onClick={() => navigate(`/admin/edit/${p._id}`)}
            >
              Edit
            </button>

            <button
              className="admin-page-btn admin-delete-btn"
              onClick={() => handleDelete(p._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPages;
