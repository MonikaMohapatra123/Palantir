

 import "./PageSections.css";
const SectionTwo = ({ data, isService }) => {
  if (!data) return null;

  return (
    <section
      className={`section section-two ${
        isService ? "light-theme" : "dark-theme"
      }`}
    >
      {data.items.map((item, i) => (
        <div className="split-row" key={i}>
          <div className="left">
            <h2>{item.title}</h2>
          </div>
          <div className="right">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default SectionTwo;

