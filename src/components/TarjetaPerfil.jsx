import { useState } from 'react';

export default function TarjetaPerfil() {
  const [editando, setEditando] = useState(false);
  const [nombre, setNombre] = useState('Juan Pérez');
  const [edad, setEdad] = useState('25');
  const [ciudad, setCiudad] = useState('Madrid');

  const [tempNombre, setTempNombre] = useState(nombre);
  const [tempEdad, setTempEdad] = useState(edad);
  const [tempCiudad, setTempCiudad] = useState(ciudad);

  const handleEditar = () => {
    setTempNombre(nombre);
    setTempEdad(edad);
    setTempCiudad(ciudad);
    setEditando(true);
  };

  const handleGuardar = () => {
    setNombre(tempNombre);
    setEdad(tempEdad);
    setCiudad(tempCiudad);
    setEditando(false);
  };

  return (
    <div>
      <h2>Tarjeta de Perfil</h2>
      
      {!editando ? (
        <div>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Edad:</strong> {edad}</p>
          <p><strong>Ciudad:</strong> {ciudad}</p>
          <button onClick={handleEditar}>Editar</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Nombre:</strong>
            <input 
              type="text" 
              value={tempNombre} 
              onChange={(e) => setTempNombre(e.target.value)} 
            />
          </p>
          <p>
            <strong>Edad:</strong>
            <input 
              type="text" 
              value={tempEdad} 
              onChange={(e) => setTempEdad(e.target.value)} 
            />
          </p>
          <p>
            <strong>Ciudad:</strong>
            <input 
              type="text" 
              value={tempCiudad} 
              onChange={(e) => setTempCiudad(e.target.value)} 
            />
          </p>
          <button onClick={handleGuardar}>Guardar</button>
        </div>
      )}
    </div>
  );
}
