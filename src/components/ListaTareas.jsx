import { useState } from 'react';

export default function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <p>Total de tareas: {tareas.length}</p>
      
      <input 
        type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Añadir</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
