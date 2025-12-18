import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./AddProject.css";

const AddProject = () => {
  const { category } = useParams();

  const [formData, setFormData] = useState({
    pageType: "projects",
    category,

    section1: {
      heading: "",
      description: "",
    },

    section2: {
      heading: "",
      items: [{ title: "", description: "" }],
    },

    section3: {
      heading: "",
      items: [{ title: "", description: "" }],
    },
  });

  const handleSubmit = async () => {
    await axios.post(
      "https://palantir-backend-phi.vercel.app/api/pages",
      formData
    );
    alert("Project Saved");
  };

  return (
    <div className="add-project">
      <h2>Add Project</h2>

      {/* SECTION 1 */}
      <h3>Section 1</h3>
      <input
        placeholder="Heading"
        onChange={(e) =>
          setFormData({
            ...formData,
            section1: { ...formData.section1, heading: e.target.value },
          })
        }
      />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setFormData({
            ...formData,
            section1: { ...formData.section1, description: e.target.value },
          })
        }
      />

      {/* SECTION 2 */}
      <h3>Section 2</h3>
      <input
        placeholder="Section 2 Heading"
        onChange={(e) =>
          setFormData({
            ...formData,
            section2: { ...formData.section2, heading: e.target.value },
          })
        }
      />

      <input
        placeholder="Item Title"
        onChange={(e) => {
          const items = [...formData.section2.items];
          items[0].title = e.target.value;
          setFormData({
            ...formData,
            section2: { ...formData.section2, items },
          });
        }}
      />

      <textarea
        placeholder="Item Description"
        onChange={(e) => {
          const items = [...formData.section2.items];
          items[0].description = e.target.value;
          setFormData({
            ...formData,
            section2: { ...formData.section2, items },
          });
        }}
      />

      {/* SECTION 3 */}
      <h3>Section 3</h3>
      <input
        placeholder="Section 3 Heading"
        onChange={(e) =>
          setFormData({
            ...formData,
            section3: { ...formData.section3, heading: e.target.value },
          })
        }
      />

      <input
        placeholder="Item Title"
        onChange={(e) => {
          const items = [...formData.section3.items];
          items[0].title = e.target.value;
          setFormData({
            ...formData,
            section3: { ...formData.section3, items },
          });
        }}
      />

      <textarea
        placeholder="Item Description"
        onChange={(e) => {
          const items = [...formData.section3.items];
          items[0].description = e.target.value;
          setFormData({
            ...formData,
            section3: { ...formData.section3, items },
          });
        }}
      />

      <button onClick={handleSubmit}>Save Project</button>
    </div>
  );
};

export default AddProject;
