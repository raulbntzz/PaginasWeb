import { useState } from 'react';

export default function Galeria() {
  const imagenes = [
    'https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/1920x1000/azure/2025-10/KenoZache_IMG_9418.jpg?h=33a55fdb&itok=-EB5W7Xk',
    'https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/1920x1000/azure/2025-06/KenoZache_IMG_0577.jpg?h=726e3bec&itok=xFXFG7IS',
    'https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/1920x1000/azure/2022-04/Koenigsegg%20Jesko%20Absolut%20-%20Side%202.JPG?h=287296ba&itok=mlTfKr2E',
    'https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/1920x1000/azure/2025-06/KenoZache_IMG_1797.jpg?h=6dd649fa&itok=D3nmSPag'
  ];

  const [indice, setIndice] = useState(0);

  const anterior = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  const siguiente = () => {
    if (indice < imagenes.length - 1) {
      setIndice(indice + 1);
    }
  };

  return (
    <div>
      <h2>Galería de Imágenes</h2>
      
      <img 
        src={imagenes[indice]} 
        alt={`Imagen ${indice + 1}`} 
        style={{ maxWidth: '800px', maxHeight: '600px', width: '100%' }}
      />
      
      <div>
        <button onClick={anterior} disabled={indice === 0}>
          Anterior
        </button>
        <span> {indice + 1} / {imagenes.length} </span>
        <button onClick={siguiente} disabled={indice === imagenes.length - 1}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
