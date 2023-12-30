'use client'

import React, { useState, useEffect } from 'react';

const InputField = ({value, disabled, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect( () => {
    setInputValue(value)
  }, [value])

  const handleInputChange = (event) => {
     // Remove leading zeros
     const { value } = event.target;
     const sanitizedValue = value.replace(/^0+/, '');
    setInputValue(sanitizedValue);
    onChange(sanitizedValue);
  };

  return (
    <div className="flex items-center">
      <input
        type="number"
        className="bg-gray-800 border p-2 rounded-md text-white focus:outline-none focus:shadow-outline"
        placeholder="Loading..."
        value={inputValue}
        onChange={handleInputChange}
        readOnly={disabled}
      />
    </div>
  );
};

export default InputField;
