import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0); // Counter state
  const [step, setStep] = useState(1); // Default step value
  const [incrementValue, setIncrementValue] = useState(''); // Custom increment value
  const [decrementValue, setDecrementValue] = useState(''); // Custom decrement value
  const [isIncrementDisabled, setIsIncrementDisabled] = useState(false); // Control for increment box
  const [isDecrementDisabled, setIsDecrementDisabled] = useState(false); // Control for decrement box

  // Function to handle increment with default or custom value
  const increment = () => {
    if (incrementValue) {
      const value = parseInt(incrementValue, 10);
      if (!isNaN(value)) {
        setCounter(counter + value);
        setIncrementValue(''); // Clear the input
        setIsDecrementDisabled(false); // Enable decrement box
      }
    } else {
      setCounter(counter + step); // Use default step value
    }
  };

  // Function to handle decrement with default or custom value
  const decrement = () => {
    if (decrementValue) {
      const value = parseInt(decrementValue, 10);
      if (!isNaN(value)) {
        setCounter(Math.max(0, counter - value)); // Ensure value doesn’t go below 0
        setDecrementValue(''); // Clear the input
        setIsIncrementDisabled(false); // Enable increment box
      }
    } else {
      setCounter(Math.max(0, counter - step)); // Use default step value
    }
  };

  // Function to reset the counter
  const resetCounter = () => {
    setCounter(0);
    setStep(1);
    setIncrementValue('');
    setDecrementValue('');
    setIsIncrementDisabled(false);
    setIsDecrementDisabled(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <div className="text-4xl font-bold mb-4">{counter}</div>

        {/* Default Increment, Decrement, Reset Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={increment}
            disabled={incrementValue} // Disable when custom increment is active
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={decrement}
            disabled={decrementValue} // Disable when custom decrement is active
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={resetCounter}
          >
            Reset
          </button>
        </div>

        {/* Custom Increment Box */}
        <div className="mb-4">
          <label htmlFor="increment" className="block text-gray-700 mb-2">
            Custom Increment By:
          </label>
          <input
            type="number"
            id="increment"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            value={incrementValue}
            onChange={(e) => {
              setIncrementValue(e.target.value);
              setIsDecrementDisabled(true); // Disable decrement box
            }}
            disabled={isIncrementDisabled}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            onClick={increment}
            disabled={!incrementValue} // Enable only when a value is entered
          >
            Apply Increment
          </button>
        </div>

        {/* Custom Decrement Box */}
        <div className="mb-4">
          <label htmlFor="decrement" className="block text-gray-700 mb-2">
            Custom Decrement By:
          </label>
          <input
            type="number"
            id="decrement"
            className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
            value={decrementValue}
            onChange={(e) => {
              setDecrementValue(e.target.value);
              setIsIncrementDisabled(true); // Disable increment box
            }}
            disabled={isDecrementDisabled}
          />
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
            onClick={decrement}
            disabled={!decrementValue} // Enable only when a value is entered
          >
            Apply Decrement
          </button>
        </div>

        {/* Step Input for Default Increment/Decrement */}
        <div className="mt-4">
          <label htmlFor="step" className="block text-gray-700 mb-2">
            Set Default Step Value
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
