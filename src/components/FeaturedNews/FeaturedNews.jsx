import "./FeaturedNews.css";

const FeaturedNews = ({ news }) => {
  return (
    <div className="featured-news">
      <img src={news.image} alt={news.title} />
      <div>
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <span>{news.date} | {news.author}</span>
      </div>
    </div>
  );
};

export default FeaturedNews;