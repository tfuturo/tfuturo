import React from 'react';
import NewsCard from './NewsCard'; // Import the NewsCard component

export default function NewsSection({ sectionTitle, news }) {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center fw-bold mb-4">{sectionTitle}</h2>

        {/* News Cards */}
        <div className="row g-4 justify-content-center">
          {news.map((newsItem, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <NewsCard
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
