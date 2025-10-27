import React, { useState, useEffect } from 'react';
import './Hero.css'; // Asegúrate de crear este archivo CSS
import Hero from '../../assets/hero_1.png'

const images = [
  Hero,
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  // Agrega más rutas de imágenes aquí
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    // Resetear animaciones al cambiar de imagen
    setAnimateText(false);
    setAnimateButton(false);

    const textTimer = setTimeout(() => {
      setAnimateText(true);
    }, 500); // Aparece el texto "BILLETERA MUTUAL CAF" después de 0.5s

    const buttonTimer = setTimeout(() => {
      setAnimateButton(true);
    }, 1500); // Aparece el resto del texto y el botón después de 1.5s

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
    };
  }, [currentImageIndex]);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className={`hero-title ${animateText ? 'animate-fade-in' : ''}`}>
            BILLETERA MUTUAL CAF
          </h1>
          <p className={`hero-description ${animateButton ? 'animate-slide-up' : ''}`}>
            Te presentamos un nuevo servicio, más rápido y seguro, al alcance de tu mano. Nuestra billetera online!
            ¡Resuelve todo desde tu teléfono, estés donde estés!
          </p>
          <button className={`hero-button ${animateButton ? 'animate-slide-up' : ''}`}>
            CONOCE MÁS
          </button>
        </div>

        <div className="hero-navigation">
          <button className="nav-arrow prev-arrow" onClick={goToPrevImage}>
            <span className="arrow-icon">&lt;</span>
            <span className="arrow-text">PREV</span>
          </button>
          <button className="nav-arrow next-arrow" onClick={goToNextImage}>
            <span className="arrow-icon">&gt;</span>
            <span className="arrow-text">NEXT</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;