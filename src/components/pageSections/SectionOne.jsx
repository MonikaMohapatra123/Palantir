
 import "./PageSections.css";
const SectionOne = ({ data, isService }) => {
  if (!data) return null;

  return (
    <section
      className={`section-one ${
        isService ? "light-theme" : "dark-theme"
      }`}
    >
      <div className="section-one-inner">
        <h1 className="section-one-title">{data.heading}</h1>
        <p className="section-one-description">
          {data.description}
        </p>
      </div>
    </section>
  );
};
export default SectionOne;
