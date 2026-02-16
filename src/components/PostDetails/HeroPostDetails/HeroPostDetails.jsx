import "./HeroPostDetails.css";

const HeroPostDetails = ({ title }) => {
  return (
    <section className="hero-postdetails-section">
      <div className="hero-postdetails-overlay">
        <div className="hero-postdetails-content">
          <h1>{title}</h1>
          <p>Insights, Innovations & Industry Trends</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPostDetails;
