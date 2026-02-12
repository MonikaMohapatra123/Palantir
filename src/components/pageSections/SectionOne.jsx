import "./PageSections.css";

const SectionOne = ({ data, isService }) => {
  if (!data) return null;

  const scrollToForm = () => {
    const formSection = document.getElementById("palantir-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className={`section-one ${isService ? "light-theme" : "dark-theme"}`}
    >
      <div className="section-one-inner">
        {/* LEFT TITLE */}
        <h1 className="section-one-title fade-title">
          {data.heading}
        </h1>

        {/* RIGHT CONTENT */}
        <div className="section-one-right fade-right">
          <p className="section-one-description">
            {data.description}
          </p>

          <div
            className="section-one-link"
            onClick={scrollToForm}
            style={{ cursor: "pointer" }}
          >
            Get Started <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
