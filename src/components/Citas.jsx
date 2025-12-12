import { useState } from 'react';

export default function Citas() {
  const citas = [
    'La vida es lo que pasa mientras estás ocupado haciendo otros planes.',
    'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
    'No cuentes los días, haz que los días cuenten.',
    'La única forma de hacer un gran trabajo es amar lo que haces.',
    'El futuro pertenece a quienes creen en la belleza de sus sueños.'
  ];

  const [citaActual, setCitaActual] = useState(citas[0]);
  const [ultimoIndice, setUltimoIndice] = useState(0);

  const nuevaCita = () => {
    let nuevoIndice;
    do {
      nuevoIndice = Math.floor(Math.random() * citas.length);
    } while (nuevoIndice === ultimoIndice);
    
    setCitaActual(citas[nuevoIndice]);
    setUltimoIndice(nuevoIndice);
  };

  return (
    <div>
      <h2>Citas Aleatorias</h2>
      <p>"{citaActual}"</p>
      <button onClick={nuevaCita}>Nueva cita</button>
    </div>
  );
}
