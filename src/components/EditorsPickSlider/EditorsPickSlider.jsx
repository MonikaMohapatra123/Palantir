import { Link } from "react-router-dom";
import "./EditorsPickSlider.css";

const EditorsPickSlider = () => {
  const sections = [
    {
      sectionTitle: "Engineering & Technology",
      link: "/case-studies",
      cards: [
        { title: "Building with Palantir AIP", image: "/pic-5.jpg" },
        { title: "Machine Learning for Search", image: "/pic-4.jpg" },
        { title: "Ontology: Meaning in Data", image: "/pic-3.jpg" },
        { title: "Drone Navigation Systems", image: "/pic-2.jpg" },
      ],
    },
    {
      sectionTitle: "AI & Innovation",
      link: "/case-studies",
      cards: [
        { title: "AI in Healthcare", image: "/p-1.jpg" },
        { title: "Future of Robotics", image: "/p-2.jpg" },
        { title: "Smart Automation", image: "/p-3.jpg" },
        { title: "Advanced AI Models", image: "/pic-5.jpg" },
      ],
    },
  ];

  return (
    <div className="engineering-wrapper">
      {sections.map((section, index) => (
        <section className="engineering" key={index}>
          <h2 className="engineering-title">
            {section.sectionTitle}
          </h2>

          <div className="engineering-grid">
            {section.cards.map((card, i) => (
              <div className="engineering-card" key={i}>
                <img src={card.image} alt={card.title} />
                <p>{card.title}</p>
              </div>
            ))}
          </div>

          <div className="engineering-footer">
            <Link to={section.link}>
              See all {section.sectionTitle} posts →
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default EditorsPickSlider;
