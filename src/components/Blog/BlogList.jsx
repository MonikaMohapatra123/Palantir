import BlogCard from "./BlogCard";
import "./BlogList.css";

const BlogList = () => {
  const blogs = [
    {
      title: "Modern Web Development Trends",
      description:
        "Explore the latest tools and frameworks shaping the future of web development.",
      date: "12 Jan 2026",
      image: "./pic-1.jpg",
    },
    {
      title: "Why React is So Popular",
      description:
        "Understand why React remains the top choice for frontend developers.",
      date: "18 Jan 2026",
      image: "./pic-2.jpg",
    },
    {
      title: "Tips for Clean UI Design",
      description:
        "Learn essential UI/UX principles to build clean and user-friendly designs.",
      date: "21 Jan 2026",
      image: "./pic-3.jpg",
    },
  ];

  return (
    <section className="blog-list">
      {blogs.map((blog, index) => (
        <BlogCard key={index} {...blog} />
      ))}
    </section>
  );
};

export default BlogList;
