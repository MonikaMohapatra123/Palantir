import "./NewsHero.css";

const NewsHero = ({ hero }) => {
  return (
    <div
      className="news-hero"
      style={{ backgroundImage: `url(${hero.backgroundImage})` }}
    >
      <h1>{hero.title}</h1>
      <p>{hero.description}</p>
    </div>
  );
};

export default NewsHero;