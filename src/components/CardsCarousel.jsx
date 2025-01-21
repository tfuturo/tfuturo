import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent'; // Assuming you have the CardComponent in the same folder
import { Carousel } from 'react-bootstrap';

export default function CardsSection({ sectionTitle, sectionText, cards, id }) {
  const [groupSize, setGroupSize] = useState(getInitialGroupSize());

  function getInitialGroupSize() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    if (window.innerWidth >= 576) return 2;
    return 1;
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setGroupSize(3);
      else if (window.innerWidth >= 768) setGroupSize(2);
      else if (window.innerWidth >= 576) setGroupSize(2);
      else setGroupSize(1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupCards = (cards, groupSize) => {
    const grouped = [];
    for (let i = 0; i < cards.length; i += groupSize) {
      grouped.push(cards.slice(i, i + groupSize));
    }
    return grouped;
  };

  const groupedCards = groupCards(cards, groupSize);

  return (
    <section className='py-5' id={id}>
      <div className='container d-flex flex-column align-items-center text-center'>
        {/* Section Title */}
        <h2 className='fw-bold mb-3'>{sectionTitle}</h2>
        {/* Section Text */}
        <p className='text-muted mb-4'>{sectionText}</p>
        {/* Cards Carousel */}
        <Carousel
          interval={8000}
          className='w-100'
          nextIcon={
            <span
              className='carousel-control-next-icon'
              style={{ filter: 'invert(100%)' }}
            />
          }
          prevIcon={
            <span
              className='carousel-control-prev-icon'
              style={{ filter: 'invert(100%)' }}
            />
          }
          indicators={false}
        >
          {groupedCards.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div className='d-flex justify-content-center'>
                {group.map((card, cardIndex) => (
                  <div key={cardIndex} className='p-2'>
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
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
