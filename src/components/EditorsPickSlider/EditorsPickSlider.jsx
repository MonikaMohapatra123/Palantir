import { Link } from "react-router-dom";
import "./EditorsPickSlider.css";

const EditorsPickSlider = () => {
  const picks = [
    {
      title: "Building with Palantir AIP",
      image: "/pic-5.jpg",
    },
    {
      title: "User-Centered Machine Learning for Visual Search",
      image: "/pic-4.jpg",
    },
    {
      title: "Ontology: Finding meaning in data",
      image: "/pic-3.jpg",
    },
    {
      title: "The Future of Drone Navigation",
      image: "/pic-2.jpg",
    },
  ];

  return (
    <section className="engineering">
      <h2 className="engineering-title">Engineering & Technology</h2>

      <div className="engineering-grid">
        {picks.map((item, index) => (
          <div className="engineering-card" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="engineering-footer">
        {/* Use Link to navigate to Case Studies page */}
        <Link to="/case-studies">See all Engineering & Tech posts →</Link>
      </div>
    </section>
  );
};

export default EditorsPickSlider;
