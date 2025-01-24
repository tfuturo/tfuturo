import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';

export default function Header() {
  const navigate = useNavigate();

  const handleNavigateAndScroll = (sectionId) => {
    // Navigate to the root page
    navigate('/');

    // Wait briefly to ensure the page loads, then scroll to the section
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Adjust delay if necessary
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" sticky="top" className="py-3 px-5">
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand onClick={() => navigate('/')} className="fw-bold" style={{ cursor: 'pointer' }}>
            <img
              src={logo}
              alt="Company Logo"
              className="w-100"
              style={{ maxWidth: '150px' }}
            />
          </Navbar.Brand>

          {/* Mobile Toggle */}
          <Navbar.Toggle aria-controls="navbarNav" />

          {/* Navbar Content */}
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link onClick={() => handleNavigateAndScroll('inicio')} className="fw-bold" style={{ cursor: 'pointer' }}>
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
            </Nav>

            {/* Social Media Links */}
            <div className="d-flex align-items-center">
              <Nav.Link
                href="https://www.linkedin.com/company/tejiendofuturo/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 h4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/@TejiendoFuturoStream"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 h4"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </Nav.Link>
              <Nav.Link
                href="https://open.spotify.com/show/74nAr7lA8z2bgiPKWkxZ07"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 h4"
                aria-label="Spotify"
              >
                <i className="bi bi-spotify"></i>
              </Nav.Link>
            </div>

            {/* Call to Action Button */}
            <Button as="a" href="/citas" variant="primary" className="ms-3">
              Citas para coaching
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
