import { useState } from 'react';

export default function Favoritos() {
  const peliculas = ['Inception', 'Matrix', 'Interstellar', 'Avatar', 'Titanic'];
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (pelicula) => {
    if (!favoritos.includes(pelicula)) {
      setFavoritos([...favoritos, pelicula]);
    }
  };

  return (
    <div>
      <h2>Lista de Películas</h2>
      <ul>
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            {pelicula}
            <button onClick={() => agregarFavorito(pelicula)}>
              Añadir a favoritos
            </button>
          </li>
        ))}
      </ul>

      <h3>Favoritos</h3>
      <ul>
        {favoritos.map((fav, index) => (
          <li key={index}>{fav}</li>
        ))}
      </ul>
    </div>
  );
}
