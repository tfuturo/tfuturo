import React from 'react';

export default function ProfileComponent({ 
  name, 
  title, 
  description, 
  photo, 
  graphic, // New parameter for the background graphic
  layout = 'left' // 'left' or 'right'
}) {
  return (
    <div className={`profile-component container my-5`}>
      <div 
        className={`row align-items-center justify-content-center ${layout === 'right' ? 'flex-row-reverse' : ''}`}
        style={{ height: 'auto', minHeight: '100%' }}
      >
        {/* Photo and Graphic */}
        <div 
          className="col-lg-4 position-relative d-flex align-items-end justify-content-center"
          style={{ height: '100%' }}
        >
          <img 
            src={graphic} 
            alt="Background graphic" 
            className="position-absolute w-100" 
            style={{ objectFit: 'cover', zIndex: 0 }}
          />
          <img 
            src={photo} 
            alt={`${name}'s photo`} 
            className="img-fluid profile-photo position-relative"
            style={{ objectFit: 'contain', zIndex: 1, maxHeight: '100%' }} 
          />
        </div>
        
        {/* Text Content */}
        <div 
          className="col-lg-7 text-center text-lg-start px-5 d-flex flex-column justify-content-center"
          style={{ height: '100%' }}
        >
          <h3 className="fw-bold display-4">{name}</h3>
          {title && <p className="text-muted">{title}</p>}
          <div className="profile-description">
            {description.map((para, index) => (
              <p key={index} className="mb-2">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
