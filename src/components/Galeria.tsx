import { useState } from 'react';
import './Galeria.css';

interface Image {
  id: number;
  src: string;
  webp: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  { id: 1, src: '/images/accesibilidad1.jpg', webp: '/images/accesibilidad1.webp', alt: 'Accesibilidad web ilustración', category: 'web' },
  { id: 2, src: '/images/accesibilidad2.jpg', webp: '/images/accesibilidad2.webp', alt: 'Accesibilidad web ilustración', category: 'web' },
  { id: 3, src: '/images/accesibilidad3.jpg', webp: '/images/accesibilidad3.webp', alt: 'Accesibilidad en la ciudad', category: 'ciudad' },
  { id: 4, src: '/images/accesibilidad4.jpg', webp: '/images/accesibilidad4.webp', alt: 'Accesibilidad en la ciudad', category: 'ciudad' },
  { id: 5, src: '/images/accesibilidad5.jpg', webp: '/images/accesibilidad5.webp', alt: 'Accesibilidad en los deportes', category: 'deportes' },
  { id: 6, src: '/images/accesibilidad6.jpg', webp: '/images/accesibilidad6.webp', alt: 'Accesibilidad en los deportes', category: 'deportes' },
];

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const filteredImages = selectedCategory === 'todas' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-container">
      {/* Filtros */}
      <div className="filters" role="group" aria-label="Filtros de categoría">
        <button 
          className={selectedCategory === 'todas' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('todas')}
          aria-pressed={selectedCategory === 'todas'}
        >
          Todas
        </button>
        <button 
          className={selectedCategory === 'web' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('web')}
          aria-pressed={selectedCategory === 'web'}
        >
          Web
        </button>
        <button 
          className={selectedCategory === 'ciudad' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('ciudad')}
          aria-pressed={selectedCategory === 'ciudad'}
        >
          Ciudad
        </button>
        <button 
          className={selectedCategory === 'deportes' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setSelectedCategory('deportes')}
          aria-pressed={selectedCategory === 'deportes'}
        >
          Deportes
        </button>
      </div>

      {/* Grid de imágenes */}
      <div className="gallery-grid" role="list">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            role="listitem"
          >
            <picture>
              <source srcSet={image.webp} type="image/webp" />
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
                className="gallery-image"
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}
