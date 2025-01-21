import React from 'react';
import BlogCard from './BlogCard'; // Import the NewsCard component

export default function BlogSection({ sectionTitle, news }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center fw-bold mb-4">{sectionTitle}</h2>

        {/* News Cards */}
        <div className="row g-4 justify-content-center">
          {news.map((newsItem, index) => (
            <div key={index} className="col-12">
              <BlogCard
                title={newsItem.title}
                date={newsItem.date}
                description={newsItem.description}
                buttonText={newsItem.buttonText}
                buttonLink={newsItem.buttonLink}
                image={newsItem.image}
                shadowColor={newsItem.shadowColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
