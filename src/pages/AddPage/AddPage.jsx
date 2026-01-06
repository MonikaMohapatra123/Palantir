
// import React, { useState } from "react";
// import { createPage } from "../services/pageApi";
// import "./AddPage.css";

// const AddPage = () => {
//   const [formData, setFormData] = useState({
//     pageType: "",
//     category: "",

//     section1: {
//       heading: "",
//       description: "",
//     },

//     section2: {
//       heading: "",
//       items: [{ title: "", description: "" }],
//     },

//     section3: {
//       heading: "",
//       items: [{ title: "", description: "" }],
//     },
//   });

//   /* ================= SECTION 2 ================= */

//   const handleSection2Change = (index, field, value) => {
//     const items = [...formData.section2.items];
//     items[index][field] = value;

//     setFormData({
//       ...formData,
//       section2: { ...formData.section2, items },
//     });
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
//     const items = formData.section2.items.filter((_, i) => i !== index);
//     setFormData({
//       ...formData,
//       section2: { ...formData.section2, items },
//     });
//   };

//   /* ================= SECTION 3 ================= */

//   const handleSection3Change = (index, field, value) => {
//     const items = [...formData.section3.items];
//     items[index][field] = value;

//     setFormData({
//       ...formData,
//       section3: { ...formData.section3, items },
//     });
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
//     const items = formData.section3.items.filter((_, i) => i !== index);
//     setFormData({
//       ...formData,
//       section3: { ...formData.section3, items },
//     });
//   };

//   /* ================= SUBMIT ================= */

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createPage(formData);
//     alert("Page added successfully");
//   };

//   return (
//     <form className="add-form" onSubmit={handleSubmit}>
//       <h2>Add Page</h2>

//       {/* ================= NAVBAR TYPE ================= */}
//       <label>Navbar Name</label>
//       <select
//         value={formData.pageType}
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             pageType: e.target.value,
//             category: "",
//           })
//         }
//         required
//       >
//         <option value="">Select Navbar</option>
//         <option value="Projects">Projects</option>
//         <option value="Services">Services</option>
//         <option value="Equipments">Equipments</option>
//       </select>

//       {/* ================= CATEGORY ================= */}
//       <label>Category</label>
//       <select
//         value={formData.category}
//         onChange={(e) =>
//           setFormData({ ...formData, category: e.target.value })
//         }
//         required
//       >
//         <option value="">Select Category</option>

//         {formData.pageType === "Projects" && (
//           <>
//             <option value="Thermal">Thermal</option>
//             <option value="Solar">Solar</option>
//           </>
//         )}

//         {formData.pageType === "Services" && (
//           <>
//             <option value="EPC">EPC</option>
//             <option value="Maintenance">Maintenance</option>
//           </>
//         )}

//         {formData.pageType === "Equipments" && (
//           <>
//             <option value="CoolingTower">Cooling Tower</option>
//             <option value="Boiler">Boiler</option>
//           </>
//         )}
//       </select>

//       {/* ================= SECTION 1 ================= */}
//       <h3>Section 1</h3>
//       <input
//         placeholder="Heading"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section1: { ...formData.section1, heading: e.target.value },
//           })
//         }
//       />

//       <textarea
//         placeholder="Description"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section1: { ...formData.section1, description: e.target.value },
//           })
//         }
//       />

//       {/* ================= SECTION 2 ================= */}
//       <h3>Section 2</h3>
//       <input
//         placeholder="Section 2 Heading"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section2: { ...formData.section2, heading: e.target.value },
//           })
//         }
//       />

//       {formData.section2.items.map((item, index) => (
//         <div className="item-box" key={index}>
//           <input
//             placeholder="Title"
//             value={item.title}
//             onChange={(e) =>
//               handleSection2Change(index, "title", e.target.value)
//             }
//           />
//           <textarea
//             placeholder="Description"
//             value={item.description}
//             onChange={(e) =>
//               handleSection2Change(index, "description", e.target.value)
//             }
//           />
//           <button type="button" onClick={() => removeSection2Item(index)}>
//             Remove
//           </button>
//         </div>
//       ))}

//       <button type="button" onClick={addSection2Item}>
//         + Add Section 2 Item
//       </button>

//       {/* ================= SECTION 3 ================= */}
//       <h3>Section 3</h3>
//       <input
//         placeholder="Section 3 Heading"
//         onChange={(e) =>
//           setFormData({
//             ...formData,
//             section3: { ...formData.section3, heading: e.target.value },
//           })
//         }
//       />

//       {formData.section3.items.map((item, index) => (
//         <div className="item-box" key={index}>
//           <input
//             placeholder="Title"
//             value={item.title}
//             onChange={(e) =>
//               handleSection3Change(index, "title", e.target.value)
//             }
//           />
//           <textarea
//             placeholder="Description"
//             value={item.description}
//             onChange={(e) =>
//               handleSection3Change(index, "description", e.target.value)
//             }
//           />
//           <button type="button" onClick={() => removeSection3Item(index)}>
//             Remove
//           </button>
//         </div>
//       ))}

//       <button type="button" onClick={addSection3Item}>
//         + Add Section 3 Item
//       </button>

//       <button type="submit">Save Page</button>
//     </form>
//   );
// };

// export default AddPage;
import React, { useState } from "react";
import { createPage } from "../services/pageApi";
import "./AddPage.css";

const AddPage = () => {
  const [formData, setFormData] = useState({
    pageType: "",
    category: "",
    section1: { heading: "", description: "" },
    section2: { heading: "", items: [{ title: "", description: "" }] },
    section3: { heading: "", items: [{ title: "", description: "" }] },
  });

  /* SECTION 2 */
  const handleSection2Change = (index, field, value) => {
    const items = [...formData.section2.items];
    items[index][field] = value;
    setFormData({ ...formData, section2: { ...formData.section2, items } });
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

  /* SECTION 3 */
  const handleSection3Change = (index, field, value) => {
    const items = [...formData.section3.items];
    items[index][field] = value;
    setFormData({ ...formData, section3: { ...formData.section3, items } });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPage(formData);
    alert("Page added successfully");
  };

  return (
    <form className="addPage-form" onSubmit={handleSubmit}>
      <h2 className="addPage-title">Add Page</h2>

      <label>Navbar Name</label>
      <select
        className="addPage-select"
        value={formData.pageType}
        onChange={(e) =>
          setFormData({ ...formData, pageType: e.target.value, category: "" })
        }
        required
      >
        <option value="">Select Navbar</option>
        <option value="Projects">Projects</option>
        <option value="Services">Services</option>
        <option value="Equipments">Equipments</option>
      </select>

      <label>Category</label>
      <select
        className="addPage-select"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        {formData.pageType === "Projects" && (
          <>
            <option value="Thermal">Thermal</option>
            <option value="Solar">Solar</option>
          </>
        )}
        {formData.pageType === "Services" && (
          <>
            <option value="EPC">EPC</option>
            <option value="Maintenance">Maintenance</option>
          </>
        )}
        {formData.pageType === "Equipments" && (
          <>
            <option value="CoolingTower">Cooling Tower</option>
            <option value="Boiler">Boiler</option>
          </>
        )}
      </select>

      <h3 className="addPage-section-title">Section 1</h3>
      <input className="addPage-input" placeholder="Heading" />
      <textarea className="addPage-textarea" placeholder="Description" />

      <h3 className="addPage-section-title">Section 2</h3>
      <input className="addPage-input" placeholder="Section 2 Heading" />

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
          <button
            type="button"
            className="addPage-removeBtn"
            onClick={() => removeSection2Item(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        className="addPage-addBtn"
        onClick={addSection2Item}
      >
        + Add Section 2 Item
      </button>

      <h3 className="addPage-section-title">Section 3</h3>

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
          <button
            type="button"
            className="addPage-removeBtn"
            onClick={() => removeSection3Item(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        className="addPage-addBtn"
        onClick={addSection3Item}
      >
        + Add Section 3 Item
      </button>

      <button type="submit" className="addPage-saveBtn">
        Save Page
      </button>
    </form>
  );
};

export default AddPage;

