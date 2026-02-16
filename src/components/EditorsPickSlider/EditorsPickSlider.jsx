import { Link } from "react-router-dom";
import "./EditorsPickSlider.css";

const EditorsPickSlider = () => {
  const sections = [
    {
      sectionTitle: "Engineering & Technology",
      cards: [
        { id: 1, title: "Building with Palantir AIP", image: "/pic-5.jpg" },
        { id: 2, title: "Machine Learning for Search", image: "/pic-4.jpg" },
        { id: 3, title: "Ontology: Meaning in Data", image: "/pic-3.jpg" },
        { id: 4, title: "Drone Navigation Systems", image: "/pic-2.jpg" },
      ],
    },
    {
      sectionTitle: "AI & Innovation",
      cards: [
        { id: 5, title: "AI in Healthcare", image: "/p-1.jpg" },
        { id: 6, title: "Future of Robotics", image: "/p-2.jpg" },
        { id: 7, title: "Smart Automation", image: "/p-3.jpg" },
        { id: 8, title: "Advanced AI Models", image: "/pic-5.jpg" },
      ],
    },
  ];

  return (
    <div className="engineering-wrapper">
      {sections.map((section, index) => (
        <section className="engineering" key={index}>
          <h2 className="engineering-title">{section.sectionTitle}</h2>

          <div className="engineering-grid">
            {section.cards.map((card) => (
              <Link
                to={`/post/${card.id}`}
                className="engineering-card"
                key={card.id}
              >
                <img src={card.image} alt={card.title} />
                <p>{card.title}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default EditorsPickSlider;
