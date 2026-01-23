import React from "react";
import "./FeaturedPosts.css";

const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <h2 className="section-title">Featured Posts</h2>

      {/* Top Featured */}
      <div className="featured-main">
        <div className="featured-image">
          <img
            src="./pic-1.jpg"
            alt="Palantir Featured"
          />
        </div>

        <div className="featured-content">
          <h3>Palantir Is Still Not a Data Company</h3>
          <p>
            There are plenty of misconceptions about who we are and what we do
            at Palantir. Contrary to popular belief, we are not a data company.
          </p>
          <p>
            Our mission is to build powerful software that helps organizations
            integrate, manage, and analyze their data securely and responsibly.
          </p>

          <a href="/" className="read-more">
            Read More <span>→</span>
          </a>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="featured-grid">
        <div className="featured-card">
          <img src="./pic-2.jpg" alt="" />
          <p>Protecting Data with Privacy First Principles</p>
        </div>

        <div className="featured-card">
          <img src="./pic-3.jpg" alt="" />
          <p>The Cybernetic Enterprise</p>
        </div>

        <div className="featured-card">
          <img src="./pic-4.jpg" alt="" />
          <p>How Palantir AIP Reduces Hallucinations</p>
        </div>

        <div className="featured-card">
          <img src="./pic-5.jpg" alt="" />
          <p>Ethical AI in Defense Decision Support Systems</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
