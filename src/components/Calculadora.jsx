import { useState } from 'react';

export default function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const sumar = () => setResultado(parseFloat(num1) + parseFloat(num2));
  const restar = () => setResultado(parseFloat(num1) - parseFloat(num2));
  const multiplicar = () => setResultado(parseFloat(num1) * parseFloat(num2));
  const dividir = () => setResultado(parseFloat(num1) / parseFloat(num2));

  return (
    <div>
      <h2>Calculadora</h2>
      
      <input 
        type="number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      
      <input 
        type="number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />

      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>×</button>
        <button onClick={dividir}>÷</button>
      </div>

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}
