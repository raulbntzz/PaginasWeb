import { useState, useEffect } from 'react';

export default function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo = null;
    
    if (activo) {
      intervalo = setInterval(() => {
        setSegundos(s => s + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [activo]);

  const iniciar = () => setActivo(true);
  const pausar = () => setActivo(false);
  const reiniciar = () => {
    setActivo(false);
    setSegundos(0);
  };

  return (
    <div>
      <h2>Cronómetro</h2>
      <p>Tiempo: {segundos} segundos</p>
      
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}
