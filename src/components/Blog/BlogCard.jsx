import "./BlogCard.css";

const BlogCard = ({ title, description, date, image }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} />
      <div className="blog-card-content">
        <span className="blog-date">{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
