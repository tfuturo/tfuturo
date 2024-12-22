import CardComponent from '../components/CardComponent'
import CardsSection from '../components/CardsSection'
import ClientsSection from '../components/ClientSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NewsSection from '../components/NewsSection'
import PodcastSection from '../components/PodcastSection'
import ProfileComponent from '../components/ProfileComponent'

const Home = () => {
  const cardData = [
    {
      icon: 'bi bi-star',
      title: 'Transformación Organizacional y Cambio Cultural',
      text: 'FFacilitamos la adaptación al cambio dentro de las organizaciones, fomentando culturas dinámicas que promuevan la innovación y el crecimiento.',
      buttonText: 'Ver más',
      buttonLink: 'services/service1',
      backgroundColor: 'primary',
      titleColor: 'dark'
    },
    {
      icon: 'bi bi-people',
      title: 'Desarrollo de Líderes Conscientes e Innovación',
      text: 'Facilitamos la adaptación al cambio dentro de las organizaciones, fomentando culturas dinámicas que promuevan la innovación y el crecimiento.',
      buttonText: 'Ver más',
      buttonLink: 'services/service1',
      backgroundColor: 'secondary',
      titleColor: 'dark'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Diseño de Procesos y Sistema RH',
      text: 'Facilitamos la adaptación al cambio dentro de las organizaciones, fomentando culturas dinámicas que promuevan la innovación y el crecimiento.',
      buttonText: 'Ver más',
      buttonLink: 'services/service1',
      backgroundColor: 'primary',
      titleColor: 'dark'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Coaching y Mentoring Ejecutivo',
      text: 'Facilitamos la adaptación al cambio dentro de las organizaciones, fomentando culturas dinámicas que promuevan la innovación y el crecimiento.',
      buttonText: 'Ver más',
      buttonLink: 'services/service1',
      backgroundColor: 'secondary',
      titleColor: 'dark'
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Capacitación De Equipos',
      text: 'Facilitamos la adaptación al cambio dentro de las organizaciones, fomentando culturas dinámicas que promuevan la innovación y el crecimiento.',
      buttonText: 'Ver más',
      buttonLink: 'services/service1',
      backgroundColor: 'primary',
      titleColor: 'dark'
    }
  ]

  const profileData = {
    name: 'Tam Bloch',
    title: '',
    description: [
      'Facilito espacios de escucha empática y autentica, donde las personas se animan a explorar su potencial, desafiar las normas y crecer con valentía, propiciando la innovación. Me guía la misma honestidad y espontaneidad que ofrezco al acompañarlas.”',
      'Soy psicóloga, agilista, y técnica en recreación y tiempo libre. Con más de 10 años de experiencia en diversas empresas.',
      'Mi enfoque ha sido el desarrollo de talento, de power skills y lideres para contribuir a los procesos de cambio organizacional.'
    ],
    photo: 'Tam.png',
    graphic: 'graphic_right.png',
    layout: 'left'
  }
  const profileData1 = {
    name: 'Benjamin Cobo',
    title: '',
    description: [
      'Soy psicólogo y coach con más de 18 años de experiencia en diversas empresas multinacionales y países. Mi enfoque ha sido liderar procesos de cambio cultural y transformación organizacional, trabajando codo a codo con líderes para implementar estrategias efectivas de cambio y gesti{on de talento.',
      'Acompaño a personas y organizaciones en su proceso de transformación y en el desarrollo de power skills necesarias para enfrentar un entorno de cambio constante.'
    ],
    photo: 'Benja.png',
    graphic: 'graphic_left.png',
    layout: 'right'
  }

  const podcastData = {
    sectionTitle: '¿Ya nos escuchas?',
    sectionDescription:
      'Tenemos un podcast que busca conectar al mundo HR de Latam con los desafíos que cruzan fronteras con personas referentes para todo el continente, pero con propuestas y soluciones simples.',
    lastEpisodeText: 'Nuestro último episodio:',
    lastEpisodeEmbed:
      'https://www.youtube.com/embed/ywDhxxOuysc?si=d4E_B4e-xxuFxFoW', // Replace with your YouTube video ID
    linksText: 'Para seguirnos, vernos y escucharnos, encuéntranos en:',
    podcastLinks: {
      spotify: 'https://open.spotify.com/',
      youtube: 'https://youtube.com/',
      linkedin: 'https://linkedin.com/'
    },
    sideImage: 'podcast.png' // Replace with a podcast image
  }

  const clientsData = {
    sectionTitle: 'Algunas transformaciones y clientes',
    clients: [
      {
        name: 'Client 1',
        logo: 'image 5.png',
        url: 'https://example.com/client1'
      },
      {
        name: 'Client 2',
        logo: 'image 6.png',
        url: 'https://example.com/client2'
      },
      {
        name: 'Client 3',
        logo: 'image 7.png',
        url: 'https://example.com/client3'
      },
      {
        name: 'Client 4',
        logo: 'image 8.png',
        url: 'https://example.com/client4'
      },
      {
        name: 'Client 5',
        logo: 'image 9.png',
        url: 'https://example.com/client5'
      },
      {
        name: 'Client 4',
        logo: 'image 10.png',
        url: 'https://example.com/client4'
      },
      {
        name: 'Client 5',
        logo: 'image 11.png',
        url: 'https://example.com/client5'
      },
      {
        name: 'Client 4',
        logo: 'image 12.png',
        url: 'https://example.com/client4'
      },
      {
        name: 'Client 5',
        logo: 'image 14.png',
        url: 'https://example.com/client5'
      }
    ],
    ctaText: 'Contáctanos e inicia tu transformación',
    ctaLink: '/contact'
  }

  const newsData = {
    sectionTitle: 'Latest News',
    news: [
      {
        title: 'La felicidad en el trabajo',
        date: '20-11-2024',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttonText: 'Ver más',
        buttonLink: '#',
        image: 'news1.png',
        shadowColor: '#E3007E'
      },
      {
        title: '¿Por qué algunos aman los lunes?',
        date: '15-11-2024',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonText: 'Ver más',
        buttonLink: '#',
        image: 'news2.png',
        shadowColor: '#007BFF'
      },
      {
        title: 'El futuro ha llegado',
        date: '02-11-2024',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttonText: 'Ver más',
        buttonLink: '#',
        image: 'news3.png',
        shadowColor: '#007BFF'
      }
      // Add more news items here
    ]
  }

  return (
    <div>
      <HeroSection
        heading='Transformando Ideas en Futuro'
        text='Queremos ser protagonistas, no solo espectadores de lo que trae el futuro. Aspiramos a ser el hilo conductor que entrelaza a las personas con sus habilidades, trabajando juntos para tejer el entramado de su propio futuro.'
        ctaText='Trabajemos juntos'
        ctaLink='#services'
        backgroundImage='HeroBack.png'
        alignment='right'
      />

      <CardsSection
        sectionTitle='Te ayudamos a generar el cambio'
        sectionText='Facilitamos y provocamos soluciones innovadoras, auténticas y coherentes que impulsen el crecimiento personal y organizacional. Conoce nuestros servicios.'
        cards={cardData}
        id='services'
      />
      <div className='container d-flex flex-column align-items-center text-center py-5'>
        {/* Section Title */}
        <h2 className='fw-bold mb-3'>¿Quiénes somos?</h2>

        <ProfileComponent {...profileData} />
        <ProfileComponent {...profileData1} />
      </div>

      <ClientsSection {...clientsData} />

      <PodcastSection {...podcastData} />

      <NewsSection {...newsData} />
    </div>
  )
}

export default Home
