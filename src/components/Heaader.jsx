import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-secondary py-3 px-5 container-fluid d-flex justify-content-between align-items-center content fixed-top' style={{ height: '100px' }}>
        {/* Logo */}
        <Link className="navbar-brand fw-bold col-5 col-sm-3 col-md-2 col-xl-1" to="/">
          <img
            src={logo}
            alt="Company Logo"
            className='w-100'
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse p-4" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold ${location.pathname === '/services' ? 'active' : ''}`}
                to="/services"
              >
                Nuestros servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold ${location.pathname === '/news' ? 'active' : ''}`}
                to="/news"
              >
                Noticias
              </Link>
            </li>
          </ul>

          {/* Social Media Icons & CTA */}
          <div className="d-flex align-items-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 h4"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2  h4"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 h4"
            >
              <i className="bi bi-instagram"></i>
            </a>

            {/* Call to Action Button */}
            <Link className="btn btn-primary ms-3" to="/contact">
              Contáctanos
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
