import React, { useState } from 'react';
import blackShoe from '../assets/black.png';
import blueShoe from '../assets/hero.png';
import greenShoe from '../assets/green.png';
import redShoe from '../assets/red.png';

const ColorSelector = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState('blue'); // Set initial state to 'blue'

  const colors = ['black', 'blue', 'green', 'red']; // Example colors
  const shoeImages = {
    black: blackShoe,
    blue: blueShoe,
    green: greenShoe,
    red: redShoe,
  }; // Example shoe images

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorChange(shoeImages[color]); // Call the parent function to update the shoe image
  };
  return (
    <div className="flex  items-center ">
      <div className="flex justify-between">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-full border border-gray-300 cursor-pointer hover:border-blue-500 mr-2 ${
              selectedColor === color ? 'border-blue-500' : ''
            }`}
            style={{ backgroundColor: color, width: '50px', height: '50px', margin: '0 5px', padding: '0' }}
              onClick={() => handleColorSelect(color)}
          >
            {/* <img src={shoeImages[color]} alt={color} className="w-full h-full object-cover" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};        

export default ColorSelector;