import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./EditProject.css";

const EditProject = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://palantir-backend-phi.vercel.app/api/pages/projects/${category}`
      )
      .then((res) => setData(res.data));
  }, [category]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    await axios.delete(
      `https://palantir-backend-phi.vercel.app/api/pages/projects/${category}`
    );

    alert("Project Deleted");
    navigate("/admin/projects");
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="edit-project">
      <h2>Edit Project</h2>

      <input
        value={data.section1.heading}
        onChange={(e) =>
          setData({
            ...data,
            section1: { ...data.section1, heading: e.target.value },
          })
        }
      />

      <textarea
        value={data.section1.description}
        onChange={(e) =>
          setData({
            ...data,
            section1: { ...data.section1, description: e.target.value },
          })
        }
      />

      <button
        onClick={() =>
          axios.put(
            `https://palantir-backend-phi.vercel.app/api/pages/projects/${category}`,
            data
          )
        }
      >
        Update
      </button>

      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default EditProject;
