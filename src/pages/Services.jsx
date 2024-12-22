import React from 'react'
import ServiceHero from '../components/ServiceHero'

import CardsSection from '../components/CardsSection'

const Services = () => {
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


  return (
    <div>
      <ServiceHero
        title='Nuestros servicios'
        backgroundColor='highlight-primary' // Bootstrap 'primary' color or any hex color
      />
      
      <CardsSection
              sectionTitle='Te ayudamos a generar el cambio'
              sectionText='Facilitamos y provocamos soluciones innovadoras, auténticas y coherentes que impulsen el crecimiento personal y organizacional. Conoce nuestros servicios.'
              cards={cardData}
              id='services'
            />
    </div>
  )
}

export default Services
