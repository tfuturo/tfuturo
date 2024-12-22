import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/router'
import Header from './components/Heaader'
import Footer from './components/Footer'

function App () {
  const footerData = {
    logo: 'Logo_Negro.png', // Replace with your logo URL
    socialLinks: [
      {
        url: 'https://facebook.com',
        icon: 'bi bi-facebook',
        label: 'Facebook'
      },
      {
        url: 'https://instagram.com',
        icon: 'bi bi-instagram',
        label: 'Instagram'
      },
      {
        url: 'https://linkedin.com',
        icon: 'bi bi-linkedin',
        label: 'LinkedIn'
      },
      { url: 'https://twitter.com', icon: 'bi bi-twitter', label: 'Twitter' }
    ],
    sectionLinks: [
      { text: 'Inicio', url: '/' },
      { text: 'Servicios', url: '/services' },
      { text: 'Noticias', url: '/news' }
    ],
    services: ['Transformación Organizacional y Cambio Cultural', 'Desarrollo de Líderes Conscientes e Innovación', 'Diseño de Procesos y Sistema RH', 'Coaching y Mentoring Ejecutivo'],
    contactInfo: {
      email: 'info@tfuturo.com',
      phone: '+1-800-123-4567'
    },
    cta: {
      text: 'Contáctanos',
      url: '/contact'
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Footer {...footerData} />
      </BrowserRouter>
    </>
  )
}

export default App
