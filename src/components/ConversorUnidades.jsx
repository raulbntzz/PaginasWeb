import { useState } from 'react';

export default function ConversorUnidades() {
  const [metros, setMetros] = useState('');

  const centimetros = metros ? metros * 100 : 0;
  const kilometros = metros ? metros / 1000 : 0;

  return (
    <div>
      <h2>Conversor de Unidades</h2>
      
      <p>
        <label>Metros: </label>
        <input 
          type="number" 
          value={metros} 
          onChange={(e) => setMetros(e.target.value)}
          placeholder="Introduce metros"
        />
      </p>

      <p>Centímetros: {centimetros}</p>
      <p>Kilómetros: {kilometros}</p>
    </div>
  );
}
