export default function NewsCard ({
  title,
  date,
  description,
  buttonText,
  buttonLink,
  image,
  shadowColor
}) {
  return (
    <div className='news-card p-3 text-center'>
      {/* Rhomboid Image */}
      <div
        className='news-card-image-wrapper mx-auto position-relative'
        style={{
          display: 'inline-block',
          filter: `drop-shadow(8px 8px 0px ${shadowColor})` // Apply shadow to the wrapper
        }}
      >
        <div
          className='news-card-image'
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '200px',
            height: '200px',
            clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' // Keep the clipping here
          }}
        ></div>
      </div>

      {/* Title */}
      <h5 className='mt-3 fw-bold'>{title}</h5>
      {/* Date */}
      <p className='text-muted mb-2'>{date}</p>
      {/* Description */}
      <p className='text-muted'>{description}</p>
      {/* Button */}
      <a href={buttonLink} className='btn btn-link text-primary'>
        {buttonText}
      </a>
    </div>
  )
}
