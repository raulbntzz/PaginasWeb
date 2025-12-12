import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={decrementar}>-</button>
      <button onClick={incrementar}>+</button>
      {count === 10 && <p>Máximo alcanzado</p>}
    </div>
  );
}
