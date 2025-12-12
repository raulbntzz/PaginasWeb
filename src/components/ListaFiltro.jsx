import { useState } from 'react';

export default function ListaFiltro() {
  const nombres = ['Ana', 'Carlos', 'María', 'Pedro', 'Lucía', 'Javier', 'Sofía', 'Miguel'];
  const [filtro, setFiltro] = useState('');

  const nombresFiltrados = nombres.filter(nombre => 
    nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <h2>Lista con Filtro</h2>
      
      <input 
        type="text" 
        value={filtro} 
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Buscar nombre..."
      />

      <ul>
        {nombresFiltrados.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}
