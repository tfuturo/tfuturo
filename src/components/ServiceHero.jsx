import React from 'react';

export default function ServiceHero({ title, backgroundColor }) {
  return (
    <section
      className="d-flex justify-content-center align-items-center text-center"
      style={{
        height: '60vh',
        backgroundColor: `var(--bs-${backgroundColor})`,
        color: backgroundColor === 'light' ? 'black' : 'white',
      }}
    >
      <div className="container">
        <h1
          className="fw-bold"
          style={{
            fontSize: '4rem', // Larger than the default h1 size
            lineHeight: '1.2',
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
