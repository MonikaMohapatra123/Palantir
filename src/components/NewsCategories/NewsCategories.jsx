import "./NewsCategories.css";

const NewsCategories = ({ categories, setSelectedCategory }) => {
  return (
    <div className="news-categories">
      {categories.map((cat, index) => (
        <button key={index} onClick={() => setSelectedCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default NewsCategories;