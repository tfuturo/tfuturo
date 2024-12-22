import React from 'react';

export default function StepsSection({ title, description, steps, color }) {
  const titleColorClass = `text-${color}`;
  const numberBackgroundColorClass = `bg-${color}`;
  const numberTextColorClass = color === 'primary' ? 'text-white' : 'text-dark';

  return (
    <section className="py-5">
      <div className="container">
        {/* Title */}
        <h2 className={`fw-bold text-center mb-3 ${titleColorClass}`}>{title}</h2>
        {/* Description */}
        <p className="text-center text-muted mb-5">{description}</p>
        {/* Steps */}
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-12 d-flex mb-4">
              {/* Number */}
              <div
                className={`d-flex justify-content-center align-items-center ${numberBackgroundColorClass} ${numberTextColorClass}`}
                style={{
                  minWidth: '60px',
                  minHeight: '60px',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  borderRadius: '10px',
                  marginRight: '15px',
                }}
              >
                {index + 1}
              </div>
              {/* Step Content */}
              <div>
                <h5 className={`fw-bold mb-1 ${titleColorClass}`}>{step.title}</h5>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
