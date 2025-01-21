import React from 'react'

export default function CardComponent ({
  icon,
  title,
  text,
  buttonText,
  buttonLink,
  backgroundColor = 'primary',
  titleColor = 'danger'
}) {
  return (
    <div
      className='card text-center h-100'
      style={{
        width: '18rem',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        border: 'none'
      }}
    >
      {/* Curved Solid Background */}
      <div
        className={`bg-${backgroundColor}`}
        style={{
          height: '100px',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%'
        }}
      ></div>

      {/* Icon */}
      <div
        className='d-flex justify-content-center align-items-center rounded-circle bg-dark text-white'
        style={{
          width: '50px',
          height: '50px',
          margin: '-25px auto 15px',
          zIndex: '1'
        }}
      >
        <i className={icon}></i>
      </div>

      {/* Content */}
      <div
        className='card-body d-flex flex-column justify-content-between align-items-center'
        style={{ paddingTop: '0' }}
      >
        <a href={buttonLink} className='link-underline link-underline-opacity-0'>
        <h5 className={`card-title fw-bold text-${titleColor}`}>{title}</h5>
        </a>
        <p className='card-text text-muted text-center'>{text}</p>
        <a
          href={buttonLink}
          className={`btn btn-${backgroundColor} text-white`}
          style={{ borderRadius: '20px' }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}
