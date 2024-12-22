import React from 'react';

export default function ClientsSection({ sectionTitle, clients, ctaText, ctaLink }) {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        {/* Section Title */}
        <h2 className="fw-bold mb-4">{sectionTitle}</h2>

        {/* Client Logos */}
        <div className="row justify-content-center g-4">
          {clients.map((client, index) => (
            <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
              <a href={client.url} target="_blank" rel="noreferrer">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="img-fluid"
                  style={{ maxHeight: '100px', objectFit: 'contain' }}
                />
              </a>
            </div>
          ))}
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
