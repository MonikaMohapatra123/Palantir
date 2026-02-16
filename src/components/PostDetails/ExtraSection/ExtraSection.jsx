import "./ExtraSection.css";

const ExtraSection = ({ text }) => {
  return (
    <section className="extra-section">
      <div className="extra-container">
        
        <h2 className="extra-title">Deep Dive & Insights</h2>
        <p className="extra-subtitle">
          Explore additional technical insights and practical applications.
        </p>

        <div className="extra-content-box">
          <p className="extra-main-text">
            {text}
          </p>

          <div className="extra-grid">

            <div className="extra-card">
              <h3>Practical Applications</h3>
              <p>
                Learn how this technology is implemented in real-world
                business environments to drive efficiency and innovation.
              </p>
            </div>

            <div className="extra-card">
              <h3>Technical Architecture</h3>
              <p>
                Understand the backend systems, data flow, and
                infrastructure that power scalable AI solutions.
              </p>
            </div>

            <div className="extra-card">
              <h3>Future Scope</h3>
              <p>
                Discover upcoming advancements and how this domain
                is evolving in the next few years.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ExtraSection;
