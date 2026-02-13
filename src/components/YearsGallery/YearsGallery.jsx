import { useState } from "react";
import "./YearsGallery.css";

const yearsData = [
  {
    id: "year1",
    year: "2020",
    title: "Our Beginning",
    content: "In 2020, we started our journey with small but meaningful steps.",
    image: "/pic-5.jpg"
  },
  {
    id: "year2",
    year: "2021",
    title: "Growing Strong",
    content: "In 2021, we expanded our team and launched new projects.",
    image: "/pic-4.jpg"
  },
  {
    id: "year3",
    year: "2022",
    title: "Going Global",
    content: "In 2022, we reached international clients and scaled up operations.",
    image: "/pic-3.jpg"
  }
];

export default function YearsGallery() {
  const [activeYear, setActiveYear] = useState(yearsData[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % yearsData.length);
    setActiveYear(yearsData[(currentImageIndex + 1) % yearsData.length]);
  };

  return (
    <section className="years-wrapper">
      {/* LEFT: Year list */}
      <div className="years-left">
        <h2>Our Timeline</h2>

        <ul className="years-list">
          {yearsData.map((year) => (
            <li
              key={year.id}
              className={activeYear.id === year.id ? "active" : ""}
              onClick={() => {
                setActiveYear(year);
                setCurrentImageIndex(yearsData.indexOf(year));
              }}
            >
              <span className="year">{year.year}</span>
              <span className="year-title">{year.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Content + Image in one row */}
      <div className="years-right">
        <div className="year-row">
          {/* TEXT */}
          <div className="year-text">
            <span className="year-meta">{activeYear.year}</span>
            <h3>{activeYear.title}</h3>
            <p>{activeYear.content}</p>
          </div>

          {/* IMAGE */}
          <div className="year-image-wrapper" onClick={handleImageClick}>
            <img
              src={activeYear.image}
              alt={activeYear.title}
              className="year-image"
            />
            <span className="click-tip">Click image</span>
          </div>
        </div>
      </div>
    </section>
  );
}
