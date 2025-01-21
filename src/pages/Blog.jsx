import React from 'react'
import BlogSection from '../components/BlogSection'

const Contacto = () => {

  const newsData = {
    sectionTitle: 'Últimas publicaciones',
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
    <div id='contact'>
      <BlogSection {...newsData} />
    </div>
  )
}

export default Contacto
