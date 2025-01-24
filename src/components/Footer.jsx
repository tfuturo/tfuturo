import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css' // Import Bootstrap icons

export default function Footer ({
  logo,
  socialLinks,
  sectionLinks,
  services,
  contactInfo,
  cta
}) {
  const navigate = useNavigate()

  const handleNavigateAndScroll = sectionId => {
    // Navigate to the root page
    navigate('/')

    // Wait briefly to ensure the page loads, then scroll to the section
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Adjust delay if necessary
  }

  return (
    <footer
      className='text-dark'
      style={{
        background:
          'linear-gradient(to bottom,rgb(243, 221, 224),rgb(255, 245, 246))', // Gradient background
        padding: '2rem 0'
      }}
    >
      <div className='container'>
        <div className='row'>
          {/* Section 1: Logo and Social Media */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <div className='mb-3'>
              <img
                src={logo}
                alt='Logo'
                className='img-fluid'
                style={{ maxWidth: '150px' }}
              />
            </div>
            <p>Encuéntranos en:</p>
            <div className='d-flex gap-3'>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className='text-dark'
                  style={{ fontSize: '1.5rem' }}
                  aria-label={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Links to Home Page Sections */}
          <div className='col-lg-4 col-md-6 mb-4'>
            <h5 className='fw-bold'>Accesos rápidos</h5>
            <ul className='list-unstyled'>
              <Nav.Link
                onClick={() => handleNavigateAndScroll('inicio')}
                className='fw-bold'
                style={{ cursor: 'pointer' }}
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigateAndScroll('servicios')}
                className="fw-bold"
                style={{ cursor: 'pointer' }}
              >
                Nuestros servicios
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigateAndScroll('acercade')}
                className="fw-bold"
                style={{ cursor: 'pointer' }}
              >
                ¿Quiénes somos?
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigateAndScroll('clientes')}
                className="fw-bold"
                style={{ cursor: 'pointer' }}
              >
                Clientes
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigateAndScroll('podcast')}
                className="fw-bold"
                style={{ cursor: 'pointer' }}
              >
                Podcast
              </Nav.Link>
              <Nav.Link
                onClick={() => handleNavigateAndScroll('blog')}
                className="fw-bold"
                style={{ cursor: 'pointer' }}
              >
                Blog
              </Nav.Link>
            </ul>
          </div>

          {/* Section 3: List of Services */}
          <div className='col-lg-4 col-md-12 mb-4'>
            <h5 className='fw-bold'>Nuestros servicios</h5>
            <ul className='list-unstyled'>
              {services.map((service, index) => (
                <li key={index} className='mb-2'>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className='text-light' />

        <div className='row'>
          {/* Contact Information */}
          <div className='col-lg-6 col-md-12 mb-3'>
            <h6 className='fw-bold'>Información de contacto</h6>
            <p>{contactInfo.address}</p>
            <p>
              Email:{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className='text-dark text-decoration-none'
              >
                {contactInfo.email}
              </a>
            </p>
            <p>Phone: {contactInfo.phone}</p>
          </div>

          {/* Call to Action */}
          <div className='col-lg-6 col-md-12 mb-3 text-lg-end text-md-start'>
            <a href={cta.url} className='btn btn-secondary'>
              {cta.text}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center mt-3'>
          <p>
            &copy; {new Date().getFullYear()} Tejiendo Futuro. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
