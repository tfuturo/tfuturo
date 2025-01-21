export default function BlogCard({
    title,
    date,
    description,
    buttonText,
    buttonLink,
    image,
    shadowColor,
  }) {
    return (
      <div
        className="news-card d-flex align-items-center p-3"
        style={{
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
          marginBottom: '1.5rem',
        }}
      >
        {/* Image Section */}
        <a
          className="news-card-image-wrapper position-relative"
          href={buttonLink}
          style={{
            flexShrink: 0,
            width: '150px',
            height: '150px',
            filter: `drop-shadow(4px 4px 0px ${shadowColor})`,
            marginRight: '1.5rem',
          }}
        >
          <div
            className="news-card-image"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
            }}
          ></div>
        </a>
  
        {/* Content Section */}
        <div className="news-card-content">
          {/* Title */}
          <h5 className="fw-bold mb-2">{title}</h5>
          {/* Date */}
          <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
            {date}
          </p>
          {/* Description */}
          <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>
            {description}
          </p>
          {/* Button */}
          <a
            href={buttonLink}
            className="btn btn-primary text-uppercase"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              borderRadius: '4px',
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  }
  