import { useState } from 'react';

export default function Encuesta() {
  const opciones = ['React', 'Astro', 'Vue'];
  const [votos, setVotos] = useState({ React: 0, Astro: 0, Vue: 0 });
  const [yaVoto, setYaVoto] = useState(false);

  const votar = (opcion) => {
    if (!yaVoto) {
      setVotos({ ...votos, [opcion]: votos[opcion] + 1 });
      setYaVoto(true);
    }
  };

  const totalVotos = votos.React + votos.Astro + votos.Vue;

  const calcularPorcentaje = (voto) => {
    if (totalVotos === 0) return 0;
    return ((voto / totalVotos) * 100).toFixed(1);
  };

  return (
    <div>
      <h2>Encuesta: ¿Cuál prefieres?</h2>
      
      {!yaVoto ? (
        <div>
          {opciones.map((opcion) => (
            <button key={opcion} onClick={() => votar(opcion)}>
              {opcion}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>¡Gracias por votar!</p>
          <h3>Resultados:</h3>
          {opciones.map((opcion) => (
            <p key={opcion}>
              {opcion}: {votos[opcion]} votos ({calcularPorcentaje(votos[opcion])}%)
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
