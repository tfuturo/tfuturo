import React, { useRef, useState, useEffect } from 'react';

export default function InfiniteCarousel({ sectionTitle, clients, ctaText, ctaLink }) {
  const carouselRef = useRef(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const placeholder = '/path-to-placeholder-logo.jpg';

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = Array.from(carouselRef.current.children).reduce(
        (acc, child) => {
          const childStyle = window.getComputedStyle(child)
          const marginLeft = parseFloat(childStyle.marginLeft)
          const marginRight = parseFloat(childStyle.marginRight)
          return acc + child.offsetWidth + marginLeft + marginRight
        },
        0
      );
      setCarouselWidth(totalWidth / 2);
      setDuration(totalWidth ? totalWidth / 125 : 0);
    }
  }, [clients]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="py-5 ">
      <div className="container text-center">
        {/* Section Title */}
        <h2 className="fw-bold mb-4">{sectionTitle}</h2>

        {/* Continuous Carousel */}
        <div className="carousel-container overflow-hidden position-relative">
          <style>
            {`
              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${carouselWidth}px); }
              }

              .carousel-track {
                display: flex;
                animation: slide ${duration}s linear infinite;
              }

              .carousel-track.paused {
                animation-play-state: paused;
              }

              .carousel-track img {
                transition: transform 0.5s ease;
              }

              .carousel-track img:hover {
                transform: scale(1.1);
              }
            `}
          </style>
          <div
            className={`carousel-track ${isHovered ? 'paused' : ''}`}
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {clients.map((client, index) => (
              <a
                href={client.url}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = placeholder;
                  }}
                  className="m-2 mx-3"
                  style={{ height: '100px' }}
                />
              </a>
            ))}
            {clients.map((client, index) => (
              <a
                href={client.url}
                target="_blank"
                rel="noreferrer"
                key={`Repeat-${index}`}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = placeholder;
                  }}
                  className="m-2 mx-3"
                  style={{ height: '100px'}}
                />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <a href={ctaLink} className="btn btn-primary btn-lg">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
