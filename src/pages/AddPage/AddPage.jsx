// import React, { useState } from "react";
// import { createPage } from "../services/pageApi";
// import "./AddPage.css";

// const AddPage = () => {
//   const [formData, setFormData] = useState({
//     pageType: "",
//     category: "",
//     section1: { heading: "", description: "" },
//     section2: { heading: "", items: [{ title: "", description: "" }] },
//     section3: { heading: "", items: [{ title: "", description: "" }] },
//   });

//   /* ================= SECTION 2 ================= */
//   const handleSection2Change = (index, field, value) => {
//     const items = [...formData.section2.items];
//     items[index][field] = value;
//     setFormData({ ...formData, section2: { ...formData.section2, items } });
//   };

//   const addSection2Item = () => {
//     setFormData({
//       ...formData,
//       section2: {
//         ...formData.section2,
//         items: [...formData.section2.items, { title: "", description: "" }],
//       },
//     });
//   };

//   const removeSection2Item = (index) => {
//     setFormData({
//       ...formData,
//       section2: {
//         ...formData.section2,
//         items: formData.section2.items.filter((_, i) => i !== index),
//       },
//     });
//   };

//   /* ================= SECTION 3 ================= */
//   const handleSection3Change = (index, field, value) => {
//     const items = [...formData.section3.items];
//     items[index][field] = value;
//     setFormData({ ...formData, section3: { ...formData.section3, items } });
//   };

//   const addSection3Item = () => {
//     setFormData({
//       ...formData,
//       section3: {
//         ...formData.section3,
//         items: [...formData.section3.items, { title: "", description: "" }],
//       },
//     });
//   };

//   const removeSection3Item = (index) => {
//     setFormData({
//       ...formData,
//       section3: {
//         ...formData.section3,
//         items: formData.section3.items.filter((_, i) => i !== index),
//       },
//     });
//   };

//   /* ================= SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createPage(formData);
//     alert("Page added successfully");
//   };

//   return (
//     <form className="addPage-form" onSubmit={handleSubmit}>
//       <h2 className="addPage-title">Add Page</h2>

//       {/* Navbar Name */}
//       <label>Navbar Name</label>
//       <input
//         className="addPage-input"
//         placeholder="Enter Navbar Name (e.g. Projects)"
//         value={formData.pageType}
//         onChange={(e) =>
//           setFormData({ ...formData, pageType: e.target.value })
//         }
//         required
//       />

//       {/* Category */}
//       <label>Category</label>
//       <input
//         className="addPage-input"
//         placeholder="Enter Category (e.g. Thermal)"
//         value={formData.category}
//         onChange={(e) =>
//           setFormData({ ...formData, category: e.target.value })
//         }
//         required
//       />

//       {/* Section 1 */}
//       <h3 className="addPage-section-title">Section 1</h3>
//       <input
//         className="addPage-input"
//         placeholder="Heading"
//         value={formData.section1.heading}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section1: { ...formData.section1, heading: e.target.value },
//           })
//         }
//       />
//       <textarea
//         className="addPage-textarea"
//         placeholder="Description"
//         value={formData.section1.description}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section1: { ...formData.section1, description: e.target.value },
//           })
//         }
//       />

//       {/* Section 2 */}
//       <h3 className="addPage-section-title">Section 2</h3>
//       <input
//         className="addPage-input"
//         placeholder="Section 2 Heading"
//         value={formData.section2.heading}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section2: { ...formData.section2, heading: e.target.value },
//           })
//         }
//       />

//       {formData.section2.items.map((item, index) => (
//         <div className="addPage-itemBox" key={index}>
//           <input
//             className="addPage-input"
//             placeholder="Title"
//             value={item.title}
//             onChange={(e) =>
//               handleSection2Change(index, "title", e.target.value)
//             }
//           />
//           <textarea
//             className="addPage-textarea"
//             placeholder="Description"
//             value={item.description}
//             onChange={(e) =>
//               handleSection2Change(index, "description", e.target.value)
//             }
//           />
//           <button
//             type="button"
//             className="addPage-removeBtn"
//             onClick={() => removeSection2Item(index)}
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <button type="button" className="addPage-addBtn" onClick={addSection2Item}>
//         + Add Section 2 Item
//       </button>

//       {/* Section 3 */}
//       <h3 className="addPage-section-title">Section 3</h3>
//       <input
//         className="addPage-input"
//         placeholder="Section 3 Heading"
//         value={formData.section3.heading}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section3: { ...formData.section3, heading: e.target.value },
//           })
//         }
//       />

//       {formData.section3.items.map((item, index) => (
//         <div className="addPage-itemBox" key={index}>
//           <input
//             className="addPage-input"
//             placeholder="Title"
//             value={item.title}
//             onChange={(e) =>
//               handleSection3Change(index, "title", e.target.value)
//             }
//           />
//           <textarea
//             className="addPage-textarea"
//             placeholder="Description"
//             value={item.description}
//             onChange={(e) =>
//               handleSection3Change(index, "description", e.target.value)
//             }
//           />
//           <button
//             type="button"
//             className="addPage-removeBtn"
//             onClick={() => removeSection3Item(index)}
//           >
//             Remove
//           </button>
//         </div>
//       ))}

//       <button type="button" className="addPage-addBtn" onClick={addSection3Item}>
//         + Add Section 3 Item
//       </button>

//       <button type="submit" className="addPage-saveBtn">
//         Save Page
//       </button>
//     </form>
//   );
// };

// export default AddPage;




import React, { useState } from "react";
import { createPage } from "../services/pageApi";
import "./AddPage.css";

/* ================= INITIAL STATE FUNCTION ================= */
const getInitialFormState = () => ({
  pageType: "",
  category: "",
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

const AddPage = () => {
  const [formData, setFormData] = useState(getInitialFormState());

  /* ================= SECTION 2 ================= */
  const handleSection2Change = (index, field, value) => {
    const updatedItems = formData.section2.items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );

    setFormData({
      ...formData,
      section2: { ...formData.section2, items: updatedItems },
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
    setFormData({
      ...formData,
      section2: {
        ...formData.section2,
        items: formData.section2.items.filter((_, i) => i !== index),
      },
    });
  };

  /* ================= SECTION 3 ================= */
  const handleSection3Change = (index, field, value) => {
    const updatedItems = formData.section3.items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );

    setFormData({
      ...formData,
      section3: { ...formData.section3, items: updatedItems },
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
    setFormData({
      ...formData,
      section3: {
        ...formData.section3,
        items: formData.section3.items.filter((_, i) => i !== index),
      },
    });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPage(formData);
      alert("Page added successfully");

      /* ✅ RESET FORM PROPERLY */
      setFormData(getInitialFormState());
    } catch (error) {
      console.error(error);
      alert("Failed to add page");
    }
  };

  return (
    <form className="addPage-form" onSubmit={handleSubmit}>
      <h2 className="addPage-title">Add Page</h2>

      {/* Navbar Name */}
      <label>Navbar Name</label>
      <input
        className="addPage-input"
        placeholder="Enter Navbar Name"
        value={formData.pageType}
        onChange={(e) =>
          setFormData({ ...formData, pageType: e.target.value })
        }
        required
      />

      {/* Category */}
      <label>Category</label>
      <input
        className="addPage-input"
        placeholder="Enter Category"
        value={formData.category}
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
        required
      />

      {/* Section 1 */}
      <h3 className="addPage-section-title">Section 1</h3>
      <input
        className="addPage-input"
        placeholder="Heading"
        value={formData.section1.heading}
        onChange={(e) =>
          setFormData({
            ...formData,
            section1: { ...formData.section1, heading: e.target.value },
          })
        }
      />
      <textarea
        className="addPage-textarea"
        placeholder="Description"
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
      <h3 className="addPage-section-title">Section 2</h3>
      <input
        className="addPage-input"
        placeholder="Section 2 Heading"
        value={formData.section2.heading}
        onChange={(e) =>
          setFormData({
            ...formData,
            section2: { ...formData.section2, heading: e.target.value },
          })
        }
      />

      {formData.section2.items.map((item, index) => (
        <div className="addPage-itemBox" key={index}>
          <input
            className="addPage-input"
            placeholder="Title"
            value={item.title}
            onChange={(e) =>
              handleSection2Change(index, "title", e.target.value)
            }
          />
          <textarea
            className="addPage-textarea"
            placeholder="Description"
            value={item.description}
            onChange={(e) =>
              handleSection2Change(index, "description", e.target.value)
            }
          />
          {formData.section2.items.length > 1 && (
            <button
              type="button"
              className="addPage-removeBtn"
              onClick={() => removeSection2Item(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" className="addPage-addBtn" onClick={addSection2Item}>
        + Add Section 2 Item
      </button>

      {/* Section 3 */}
      <h3 className="addPage-section-title">Section 3</h3>
      <input
        className="addPage-input"
        placeholder="Section 3 Heading"
        value={formData.section3.heading}
        onChange={(e) =>
          setFormData({
            ...formData,
            section3: { ...formData.section3, heading: e.target.value },
          })
        }
      />

      {formData.section3.items.map((item, index) => (
        <div className="addPage-itemBox" key={index}>
          <input
            className="addPage-input"
            placeholder="Title"
            value={item.title}
            onChange={(e) =>
              handleSection3Change(index, "title", e.target.value)
            }
          />
          <textarea
            className="addPage-textarea"
            placeholder="Description"
            value={item.description}
            onChange={(e) =>
              handleSection3Change(index, "description", e.target.value)
            }
          />
          {formData.section3.items.length > 1 && (
            <button
              type="button"
              className="addPage-removeBtn"
              onClick={() => removeSection3Item(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" className="addPage-addBtn" onClick={addSection3Item}>
        + Add Section 3 Item
      </button>

      <button type="submit" className="addPage-saveBtn">
        Save Page
      </button>
    </form>
  );
};

export default AddPage;

