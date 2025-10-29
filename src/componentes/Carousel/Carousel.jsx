// src/components/Carousel.js
import React, { useState, useRef } from 'react';
import './Carousel.css'; // Crearemos este archivo más tarde
import Card from '../Card/Card';

const cards = [
    {
        id: 1,
        tittle: "Bodega Don Angelo",
        description: "bla",
        imageUrl: 'bodega_angelo.jpg',     
   },
    {
        id: 2,
        tittle: "Nutricion: Tamara Petrella",
        description: "bla",
        imageUrl: 'tamara_petrella.jpg'
    },
    {
        id: 3,
        tittle: "El Quincho de Nacho",
        description: "bla",
        imageUrl: 'quincho_nacho.jpg'
    },
    {
        id: 3,
        tittle: "El Quincho de Nacho",
        description: "bla",
        imageUrl: 'quincho_nacho.jpg'
    }
]
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null); // Para referenciar el contenedor de las tarjetas
    
  // Función para mover el carrusel a la izquierda
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  // Función para mover el carrusel a la derecha
  const handleNext = () => {
    // Aquí asumimos que children es un array de elementos
    setCurrentIndex((prevIndex) => Math.min(cards.length - 1, prevIndex + 1));
  };

  // Calcula el estilo de transformación para mover el carrusel
  const transformStyle = {
    transform: `translateX(-${currentIndex * 100 / 2}%)`, // Ajustar el 100% según el ancho de tus tarjetas
    // Esto es un ejemplo, el cálculo exacto depende del CSS de tus tarjetas y su espaciado
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Nuestros Servicios</h2>
        <div className="carousel-nav">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            &lt; {/* Flecha izquierda */}
          </button>
          <button onClick={handleNext} disabled={currentIndex === cards.length - 1}>
            &gt; {/* Flecha derecha */}
          </button>
        </div>
      </div>
      <div className="carousel-track-wrapper">
        <div className="carousel-track" ref={carouselRef} style={transformStyle}>
          {cards.map((element) => (
            <Card
                id= {element.id}
                title={element.tittle}
                description={element.description}
                imageUrl={element.imageUrl}
            />

          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;