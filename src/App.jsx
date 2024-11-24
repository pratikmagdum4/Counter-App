import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  // Fetch initial counter value from backend
  useEffect(() => {
    axios.get('http://localhost:5000/counter').then((response) => {
      setCounter(response.data.counter);
    });
  }, []);

  // Function to handle counter updates
  const updateCounter = (newValue) => {
    if (newValue >= 0) {
      axios.post('http://localhost:5000/counter', { value: newValue }).then((response) => {
        setCounter(response.data.counter);
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <div className="text-4xl font-bold mb-4">{counter}</div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => updateCounter(counter + step)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => updateCounter(counter - step)}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => updateCounter(0)}
          >
            Reset
          </button>
        </div>
        <div className="mt-4">
          <label htmlFor="step" className="block text-gray-700 mb-2">
            Set Step Value
          </label>
          <input
            type="number"
            id="step"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
