import { useState } from 'react';

export default function ResumenFormulario() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [edad, setEdad] = useState('');

  return (
    <div>
      <h2>Formulario con Resumen</h2>
      
      <p>
        <label>Nombre: </label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)}
        />
      </p>

      <p>
        <label>Apellidos: </label>
        <input 
          type="text" 
          value={apellidos} 
          onChange={(e) => setApellidos(e.target.value)}
        />
      </p>

      <p>
        <label>Edad: </label>
        <input 
          type="number" 
          value={edad} 
          onChange={(e) => setEdad(e.target.value)}
        />
      </p>

      {nombre && apellidos && edad && (
        <p>
          <strong>Resumen:</strong> Eres {nombre} {apellidos} y tienes {edad} años.
        </p>
      )}
    </div>
  );
}
