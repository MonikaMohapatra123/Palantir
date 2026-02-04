import "./PageSections.css";

const SectionOne = ({ data, isService }) => {
  if (!data) return null;

  return (
    <section className={`section-one ${isService ? "light-theme" : "dark-theme"}`}>
      <div className="section-one-inner">

        {/* LEFT BIG TITLE */}
        <h1 className="section-one-title">{data.heading}</h1>

        {/* RIGHT CONTENT */}
        <div className="section-one-right">
          <p className="section-one-description">
            {data.description}
          </p>

          <div className="section-one-link">
            Get Started <span>→</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionOne;
