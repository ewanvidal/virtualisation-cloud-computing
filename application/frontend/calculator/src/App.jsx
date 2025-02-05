import './App.css';

import React, { useState } from 'react';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import CardContent from './components/ui/CardContent';
import Input from './components/ui/Input';

export default function App() {
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const [calc_id, setCalc_id] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!calculation) return alert("Please enter a calculation");
    setLoading(true);
    try {
      console.log("Sending calculation to the API:", calculation);
      const response = await fetch("http://calculatrice-vidal-guillot-polytech-dijon.kiowy.net/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calculation }),
      });
      const data = await response.json();
      setCalc_id(data.id);
      setResult(`Calculation sent with id: ${data.id}`);
    } catch (error) {
      console.error(error);
      setResult("Error while sending the calculation");
    } finally {
      setLoading(false);
    }
  };

  const handleGetResult = async () => {
    if (!calc_id) return alert("Please enter a calculation ID");
    setLoading(true);
    try {
      const response = await fetch(`http://calculatrice-vidal-guillot-polytech-dijon.kiowy.net/api/result/${calc_id}`);
      const data = await response.json();
      if (data.result) {
        setResult(`Result for id ${calc_id} : ${data.result}`);
      } else {
        setResult("No result found for this id");
      }
    } catch (error) {
      console.error(error);
      setResult("Error while getting the result");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold text-center">Vidalculator 🤓☝️</h1>

          <Input
            type="text"
            placeholder="Calulation to send (e.g. 2+2*2)"
            value={calculation}
            onChange={(e) => setCalculation(e.target.value)}
            className="p-2 border rounded w-full"
          />

          <Button
            onClick={handleSend}
            className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            disabled={loading}
          >
            Envoyer le calcul
          </Button>

          <Input
            type="text"
            placeholder="Calculation ID to get the result"
            value={calc_id}
            onChange={(e) => setCalc_id(e.target.value)}
            className="p-2 border rounded w-full"
          />

          <Button
            onClick={handleGetResult}
            className="w-full bg-green-500 text-white rounded p-2 hover:bg-green-600"
            disabled={loading}
          >
            Get the result
          </Button>

          {result && (
            <div className="p-2 bg-gray-200 rounded text-center text-lg font-semibold">
              {result}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
