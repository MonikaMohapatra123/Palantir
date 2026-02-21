import React, { useState } from "react";
import data from "../../Json/data.json";
import NewsCategories from "../../components/NewsCategories/NewsCategories";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import NewsList from "../../components/NewsList/NewsList";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./News.css";
import NewsHero from "../../components/NewsHero/NewsHero";

const News = () => {
  const newsData = data["4"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews =
    selectedCategory === "All"
      ? newsData.newsList
      : newsData.newsList.filter(
          (item) => item.category === selectedCategory
        );

  const featured = filteredNews.find((item) => item.featured);

  return (
    <div className="news-page">
      <NewsHero hero={newsData.heroSection} />
    

      <div className="news-container">
        <NewsCategories
          categories={newsData.categories}
          setSelectedCategory={setSelectedCategory}
        />

        {featured && <FeaturedNews news={featured} />}

        <NewsList news={filteredNews} />
      </div>

      <Newsletter data={newsData.newsletterSection} />
    </div>
  );
};

export default News;