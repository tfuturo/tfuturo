/* eslint-disable react/prop-types */
import CardComponent from './CardComponent'; // Assuming you have the CardComponent in the same folder

export default function CardsSection({ sectionTitle, sectionText, cards, id }) {

  return (
    <section className="py-5 bg-highlight-secondary" id={id}>
      <div className="container d-flex flex-column align-items-center text-center">
        {/* Section Title */}
        a
        <h2 className="fw-bold mb-3">{sectionTitle}</h2>
        {/* Section Text */}
        <p className="text-muted mb-4">{sectionText}</p>
        {/* Cards Row */}
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
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

      </div>
    </section>
  );
}
