import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [calculation, setCalculation] = useState('');
  const [displayValue, setDisplayValue] = useState('0');
  const [history, setHistory] = useState([]);

  const handleSend = async () => {
    if (!calculation) return;
    try {
      const response = await fetch("http://calculatrice-vidal-guillot-polytech-dijon.kiowy.net/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calculation }),
      });
      const data = await response.json();
      setHistory(prev => [...prev, { calculation, id: data.id }]);
      handleGetResult(data.id);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleGetResult = async (id) => {
    try {
      const response = await fetch(`http://calculatrice-vidal-guillot-polytech-dijon.kiowy.net/api/result/${id}`);
      const data = await response.json();
      if (data.result) {
        setDisplayValue(data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleNumber = (num) => {
    const newCalculation = calculation + num;
    setCalculation(newCalculation);
    setDisplayValue(newCalculation); // Update display as we type
  };

  const handleOperator = (op) => {
    if (!calculation || /[\+\-\*\/]$/.test(calculation)) return;
    setCalculation(prev => prev + op);
    setDisplayValue(prev => prev + op);
  };

  const clear = () => {
    setCalculation('');
    setDisplayValue('0');
  };

  return (
    <div className="calculator-container">

      <div className="display">
        <div className="current-calculation">{calculation || '0'}</div>
        <div className="result">{displayValue}</div>
      </div>
      <div className="keypad">
        <button className="button clear" onClick={clear}>AC</button>
        {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn, index) => (
          <button
            key={index}
            className={`button ${['÷', '×', '-', '+', '='].includes(btn) ? 'operator' : ''}`}
            onClick={() => {
              if (btn === '=') {
                handleSend();
              } else if (btn === '×') {
                handleOperator('*');
              } else if (btn === '÷') {
                handleOperator('/');
              } else if (['÷', '×', '-', '+'].includes(btn)) {
                handleOperator(btn);
              } else {
                handleNumber(btn);
              }
            }}
          >
            {btn}
          </button>
        ))}
      </div>
      <div className="history">
        <h2>History</h2>
        {history.map((item, index) => (
          <div 
            key={index}
            className="history-item"
            onClick={() => {
              handleGetResult(item.id);
              setCalculation(item.calculation);
            }}
          >
            {item.calculation} et est égal à {eval(item.calculation)}
          </div>
        ))}
      </div>
    </div>
  );
}