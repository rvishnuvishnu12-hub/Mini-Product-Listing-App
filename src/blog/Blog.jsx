import React from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Top 10 Sneakers You Must Have in 2025",
    date: "Dec 10, 2025",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    desc: "Discover the trending sneakers that combine comfort, style, and performance for everyday wear.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Sports Shoes",
    date: "Dec 05, 2025",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    desc: "A complete guide to selecting sports shoes based on your activity and foot type.",
  },
  {
    id: 3,
    title: "Fashion Tips: Styling Sneakers with Casual Wear",
    date: "Nov 28, 2025",
    author: "Admin",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552",
    desc: "Learn how to style sneakers effortlessly with jeans, chinos, and casual outfits.",
  },
];

const Blog = () => {
  return (
    <div>
      <PageHeader title="Blog Page" curPage="Blogs" />

      <section className="blog-section padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {blogData.map((blog) => (
              <div key={blog.id} className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="blog-item">
                  {/* Blog Image */}
                  <div className="blog-thumb">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-100"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="blog-content p-3">
                    <span className="blog-meta">
                      {blog.date} | By {blog.author}
                    </span>
                    <h5 className="mt-2">{blog.title}</h5>
                    <p>{blog.desc}</p>
                    <button>   Read More →      </button>
                     
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
