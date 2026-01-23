import "./EditorsPickSlider.css";

const EditorsPickSlider = () => {
  const picks = [
    {
      title: "Design Trends That Will Dominate 2026",
      tag: "Editor's Pick",
      image: "./girl1.jpg",
    },
    {
      title: "Building Scalable React Architecture",
      tag: "Popular",
      image: "./girl.jpg",
    },
    {
      title: "Why UX Matters More Than Ever",
      tag: "Trending",
      image: "./pic-3.jpg",
    },
  ];

  return (
    <section className="editors">
      <div className="editors-header">
        <h2>Editor’s Picks</h2>
        <p>Hand-picked articles curated by our editorial team</p>
      </div>

      <div className="editors-slider">
        {picks.map((item, index) => (
          <div className="editors-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="editors-overlay">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorsPickSlider;
