import NewsCard from "../NewsCard/NewsCard";


const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsCard key={item.id} item={item} />
       
      ))}
    </div>
  );
};

export default NewsList;