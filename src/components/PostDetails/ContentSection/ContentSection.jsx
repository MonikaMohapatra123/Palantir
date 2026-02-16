import "./ContentSection.css";

const ContentSection = ({ text }) => {
  return (
    <section className="content-section">
      <div className="content-container">
        <h2 className="content-heading">Overview</h2>

        <p className="content-paragraph">
          {text}
        </p>

        <div className="content-divider"></div>

        <div className="content-highlights">
          <div className="highlight-box">
            <h3>Key Insights</h3>
            <p>
              Discover powerful strategies, real-world applications,
              and emerging trends shaping the future.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Why It Matters</h3>
            <p>
              Understanding these concepts helps businesses stay
              competitive and future-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
