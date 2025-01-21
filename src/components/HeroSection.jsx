
export default function HeroSection({ 
  heading, 
  text, 
  ctaText, 
  ctaLink, 
  backgroundImage, 
  alignment = 'center' 
}) {
  const alignmentClass = {
    left: 'text-start ms-lg-5',
    center: 'text-center mx-auto',
    right: 'text-end me-lg-5',
  }[alignment];

  const containerClass = {
    left: 'col-lg-7',
    center: 'col-lg-10',
    right: 'col-lg-7 offset-lg-5',
  }[alignment];

  return (
    <section
      className="d-flex align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
      }}
    >
      <div className="container">
        <div className="row">
          <div className={`${containerClass} ${alignmentClass}`}>
            <h1 className="display-4 fw-bold">{heading}</h1>
            <p className="h5 my-4">{text}</p>
            <a href={ctaLink} className="btn btn-primary btn-lg">
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
