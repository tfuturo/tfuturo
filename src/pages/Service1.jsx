import React from 'react'
import StepsSection from '../components/StepsSection'
import ServiceHero from '../components/ServiceHero'
import Contacto from './Contacto'
import ClientsSection from '../components/ClientSection'

const Service1 = () => {
  const stepsContent = [
    {
      title: 'Adaptación Rápida al Cambio',
      description:
        'En un mundo de constante evolución, es vital contar con líderes que no solo gestionen el cambio, sino que lo impulsen. Con nuestro enfoque, tus equipos estarán listos para enfrentar cualquier reto con agilidad y confianza.'
    },
    {
      title: 'Cultura de Innovación',
      description:
        'Promovemos una mentalidad abierta y creativa que inspira nuevas ideas y soluciones. Tu empresa se convertirá en un catalizador de innovación.'
    },
    {
      title: 'Liderazgo Consciente',
      description:
        'Formamos líderes que saben equilibrar la toma de decisiones estratégicas con la empatía y la inteligencia emocional.'
    },
    {
      title: 'Crecimiento Sostenible',
      description:
        'Creamos una base sólida para un crecimiento sostenible a largo plazo, ayudando a mantener el éxito de manera constante.'
    },
    {
      title: 'Resiliencia Organizacional',
      description:
        'Equipamos a tu empresa con herramientas para superar cualquier adversidad, fortaleciendo su capacidad para prosperar en un entorno competitivo.'
    }
  ]

  
  const clientsData = {
    sectionTitle: 'Algunos casos de éxito',
    clients: [
      {
        name: 'Client 1',
        logo: '../image 5.png',
        url: 'https://example.com/client1'
      },
      {
        name: 'Client 2',
        logo: '../image 6.png',
        url: 'https://example.com/client2'
      },
      {
        name: 'Client 3',
        logo: '../image 7.png',
        url: 'https://example.com/client3'
      },
      {
        name: 'Client 4',
        logo: '../image 8.png',
        url: 'https://example.com/client4'
      },
      {
        name: 'Client 5',
        logo: '../image 14.png',
        url: 'https://example.com/client5'
      }
    ],
    ctaText: 'Contáctanos e inicia tu transformación',
    ctaLink: '#contact'
  }

  return (
    <div>
      <ServiceHero
        title='Transform Your Business with Innovative Solutions'
        backgroundColor='highlight-primary' // Bootstrap 'primary' color or any hex color
      />
      ;
      <StepsSection
        title='Impulsa el futuro de tu organización con líderes preparados para transformar.'
        description='Nuestro servicio no solo forma líderes, sino que transforma culturas organizacionales, permitiendo a tu empresa alcanzar nuevos niveles de éxito. A continuación, descubre cómo tu organización se beneficia al desarrollar líderes conscientes e innovadores:'
        steps={stepsContent}
        color='primary'
      />
    <ClientsSection {...clientsData} />
      
      <Contacto />
    </div>
  )
}

export default Service1
