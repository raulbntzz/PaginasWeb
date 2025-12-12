import { useState, useEffect } from 'react';

export default function Semaforo() {
  const [colorActivo, setColorActivo] = useState('rojo');

  useEffect(() => {
    const intervalo = setInterval(() => {
      setColorActivo(prev => {
        if (prev === 'rojo') return 'amarillo';
        if (prev === 'amarillo') return 'verde';
        return 'rojo';
      });
    }, 2000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Semáforo Interactivo</h2>
      
      <div>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: colorActivo === 'rojo' ? 'red' : 'gray',
          margin: '10px'
        }}></div>
        
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: colorActivo === 'amarillo' ? 'yellow' : 'gray',
          margin: '10px'
        }}></div>
        
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: colorActivo === 'verde' ? 'green' : 'gray',
          margin: '10px'
        }}></div>
      </div>

      <button onClick={() => setColorActivo('rojo')}>Rojo</button>
      <button onClick={() => setColorActivo('amarillo')}>Amarillo</button>
      <button onClick={() => setColorActivo('verde')}>Verde</button>
    </div>
  );
}
