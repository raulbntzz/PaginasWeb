import { useState, useEffect } from 'react';
import './Carrusel.css';

const carouselImages = [
  { id: 1, src: '/images/accesibilidad1.jpg', webp: '/images/accesibilidad1.webp', alt: 'Accesibilidad web ilustración' },
  { id: 2, src: '/images/accesibilidad3.jpg', webp: '/images/accesibilidad3.webp', alt: 'Accesibilidad en la ciudad' },
  { id: 3, src: '/images/accesibilidad5.jpg', webp: '/images/accesibilidad5.webp', alt: 'Accesibilidad en los deportes' },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-viewport" role="region" aria-label="Carrusel de imágenes">
        <picture>
          <source srcSet={carouselImages[currentIndex].webp} type="image/webp" />
          <img 
            src={carouselImages[currentIndex].src} 
            alt={carouselImages[currentIndex].alt}
            className="carousel-image"
          />
        </picture>

        <button 
          className="carousel-btn carousel-prev"
          onClick={goToPrevious}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <button 
          className="carousel-btn carousel-next"
          onClick={goToNext}
          aria-label="Imagen siguiente"
        >
          ›
        </button>
      </div>

      <div className="carousel-controls">
        <button 
          className="btn carousel-autoplay"
          onClick={toggleAutoPlay}
          aria-label={isAutoPlay ? 'Pausar reproducción automática' : 'Iniciar reproducción automática'}
          aria-pressed={isAutoPlay}
        >
          {isAutoPlay ? 'Pausar' : 'Auto'}
        </button>

        <div className="carousel-indicators" role="tablist" aria-label="Seleccionar imagen">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>

        <p className="carousel-counter" aria-live="polite">
          {currentIndex + 1} / {carouselImages.length}
        </p>
      </div>
    </div>
  );
}
