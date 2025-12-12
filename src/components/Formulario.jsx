import { useState } from 'react';

export default function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  const handleEnviar = (e) => {
    e.preventDefault();
    
    if (!nombre || !email || !mensaje) {
      setError('Todos los campos son obligatorios');
      setExito(false);
      return;
    }

    setError('');
    setExito(true);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      
      <form onSubmit={handleEnviar}>
        <p>
          <label>Nombre: </label>
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
        </p>

        <p>
          <label>Email: </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </p>

        <p>
          <label>Mensaje: </label>
          <textarea 
            value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </p>

        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{color: 'red'}}>{error}</p>}
      {exito && <p style={{color: 'green'}}>Formulario enviado</p>}
    </div>
  );
}
