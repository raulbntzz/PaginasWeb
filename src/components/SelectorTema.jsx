import { useState, useEffect } from 'react';

export default function SelectorTema() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  useEffect(() => {
    const guardado = localStorage.getItem('temaOscuro');
    if (guardado !== null) {
      setTemaOscuro(guardado === 'true');
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = temaOscuro ? '#333' : '#fff';
    document.body.style.color = temaOscuro ? '#fff' : '#000';
    localStorage.setItem('temaOscuro', temaOscuro);
  }, [temaOscuro]);

  return (
    <div>
      <h2>Selector de Tema</h2>
      <p>Tema actual: {temaOscuro ? 'Oscuro' : 'Claro'}</p>
      <button onClick={() => setTemaOscuro(!temaOscuro)}>
        Cambiar a tema {temaOscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
}
