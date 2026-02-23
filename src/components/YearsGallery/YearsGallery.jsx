import { useState } from "react";
import "./YearsGallery.css";

const yearsData = [
  {
    id: "year1",
    year: "2020",
    title: "Our Beginning",
    content:
      "In 2020, we started our journey with small but meaningful steps.",
    image: "/p-2.jpg",
  },
  {
    id: "year2",
    year: "2021",
    title: "Growing Strong",
    content:
      "In 2021, we expanded our team and launched new projects.",
    image: "/p-3.jpg",
  },
  {
    id: "year3",
    year: "2022",
    title: "Going Global",
    content:
      "In 2022, we reached international clients and scaled up operations.",
    image: "/pic-3.jpg",
  },
];

export default function YearsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeYear = yearsData[currentIndex];

  // When clicking image → go to next year
  const handleImageClick = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % yearsData.length
    );
  };

  // When clicking year from left side
  const handleYearClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="years-wrapper">
      
      {/* LEFT SIDE */}
      <div className="years-left">
        <h2>Our Timeline</h2>

        <ul className="years-list">
          {yearsData.map((item, index) => (
            <li
              key={item.id}
              className={currentIndex === index ? "active" : ""}
              onClick={() => handleYearClick(index)}
            >
              <span className="year">{item.year}</span>
              <span className="year-title">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="years-right">
        <div className="year-row">
          
          {/* TEXT */}
          <div className="year-text">
            <span className="year-meta">{activeYear.year}</span>
            <h3>{activeYear.title}</h3>
            <p>{activeYear.content}</p>
          </div>

          {/* IMAGE */}
          <div
            className="year-image-wrapper"
            onClick={handleImageClick}
          >
            <img
              src={activeYear.image}
              alt={activeYear.title}
              className="year-image"
            />
            <span className="click-tip">
              Click image to view next
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
