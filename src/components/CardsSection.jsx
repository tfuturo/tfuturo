import React, { useState } from 'react';
import CardComponent from './CardComponent'; // Assuming you have the CardComponent in the same folder

export default function CardsSection({ sectionTitle, sectionText, cards, id }) {
  const [visibleCards, setVisibleCards] = useState(4); // Initially show 4 cards

  const handleLoadMore = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  };

  const visibleCardsList = cards.slice(0, visibleCards);

  return (
    <section className="py-5 bg-highlight-secondary" id={id}>
      <div className="container d-flex flex-column align-items-center text-center">
        {/* Section Title */}
        <h2 className="fw-bold mb-3">{sectionTitle}</h2>
        {/* Section Text */}
        <p className="text-muted mb-4">{sectionText}</p>
        {/* Cards Row */}
        <div className="row g-4 justify-content-center">
          {visibleCardsList.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center card-hover-animation"
            >
              <CardComponent
                icon={card.icon}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                backgroundColor={card.backgroundColor}
                titleColor={card.titleColor}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCards < cards.length && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Ver más
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
