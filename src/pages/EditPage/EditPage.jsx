import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { updatePage } from "../services/pageApi";
import "./EditPage.css";

const EditPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  /* ========== FETCH PAGE BY ID ========== */
  useEffect(() => {
    const fetchPage = async () => {
      const res = await axios.get(
        "https://palantir-backend-phi.vercel.app/api/pages"
      );
      const page = res.data.find((p) => p._id === id);
      setFormData(page);
    };

    fetchPage();
  }, [id]);

  if (!formData) return <p>Loading...</p>;

  /* ========== SECTION 2 HANDLERS ========== */
  const handleSection2Change = (index, field, value) => {
    const items = [...formData.section2.items];
    items[index][field] = value;

    setFormData({
      ...formData,
      section2: { ...formData.section2, items },
    });
  };

  const addSection2Item = () => {
    setFormData({
      ...formData,
      section2: {
        ...formData.section2,
        items: [...formData.section2.items, { title: "", description: "" }],
      },
    });
  };

  const removeSection2Item = (index) => {
    const items = formData.section2.items.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      section2: { ...formData.section2, items },
    });
  };

  /* ========== SECTION 3 HANDLERS ========== */
  const handleSection3Change = (index, field, value) => {
    const items = [...formData.section3.items];
    items[index][field] = value;

    setFormData({
      ...formData,
      section3: { ...formData.section3, items },
    });
  };

  const addSection3Item = () => {
    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        items: [...formData.section3.items, { title: "", description: "" }],
      },
    });
  };

  const removeSection3Item = (index) => {
    const items = formData.section3.items.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      section3: { ...formData.section3, items },
    });
  };

  /* ========== UPDATE PAGE ========== */
  const handleUpdate = async () => {
    await updatePage(id, formData);
    alert("Page updated successfully");
  };

  return (
    <div className="edit-form">
      <h2>Edit Page</h2>

      {/* Page Info */}
      <input
        value={formData.pageType}
        onChange={(e) =>
          setFormData({ ...formData, pageType: e.target.value })
        }
        placeholder="Page Type"
      />

      <input
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
        placeholder="Category"
      />

      {/* Section 1 */}
      <h3>Section 1</h3>
      <input
        value={formData.section1.heading}
        onChange={(e) =>
          setFormData({
            ...formData,
            section1: {
              ...formData.section1,
              heading: e.target.value,
            },
          })
        }
      />

      <textarea
        value={formData.section1.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            section1: {
              ...formData.section1,
              description: e.target.value,
            },
          })
        }
      />

      {/* Section 2 */}
      <h3>Section 2</h3>
      <input
        value={formData.section2.heading}
        onChange={(e) =>
          setFormData({
            ...formData,
            section2: {
              ...formData.section2,
              heading: e.target.value,
            },
          })
        }
      />

      {formData.section2.items.map((item, index) => (
        <div className="item-box" key={index}>
          <input
            value={item.title}
            onChange={(e) =>
              handleSection2Change(index, "title", e.target.value)
            }
            placeholder="Title"
          />
          <textarea
            value={item.description}
            onChange={(e) =>
              handleSection2Change(index, "description", e.target.value)
            }
            placeholder="Description"
          />
          <button onClick={() => removeSection2Item(index)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={addSection2Item}>
        + Add Section 2 Item
      </button>

      {/* Section 3 */}
      <h3>Section 3</h3>
      <input
        value={formData.section3.heading}
        onChange={(e) =>
          setFormData({
            ...formData,
            section3: {
              ...formData.section3,
              heading: e.target.value,
            },
          })
        }
      />

      {formData.section3.items.map((item, index) => (
        <div className="item-box" key={index}>
          <input
            value={item.title}
            onChange={(e) =>
              handleSection3Change(index, "title", e.target.value)
            }
          />
          <textarea
            value={item.description}
            onChange={(e) =>
              handleSection3Change(index, "description", e.target.value)
            }
          />
          <button onClick={() => removeSection3Item(index)}>Remove</button>
        </div>
      ))}

      <button type="button" onClick={addSection3Item}>
        + Add Section 3 Item
      </button>

      <button className="save-btn" onClick={handleUpdate}>
        Update Page
      </button>
    </div>
  );
};

export default EditPage;
