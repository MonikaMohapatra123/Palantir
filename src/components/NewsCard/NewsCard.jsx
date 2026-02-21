import "./NewsCard.css";

const NewsCard = ({ item }) => {
  return (
    <div className="news-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <span>{item.date}</span>
    </div>
  );
};

export default NewsCard;