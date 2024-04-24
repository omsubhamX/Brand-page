import React, { useState } from 'react';

const SizeSelector = ({setQuantity,quantity}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  // const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL']; // Example sizes

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    localStorage.setItem('sizeSelector',e.target.value)
    setQuantity(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-8   ">
      <div className="flex justify-between">
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`w-14 h-14 rounded-md border border-gray-300 flex justify-center items-center cursor-pointer hover:border-blue-500 mr-2 ${
              selectedSize === size ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleSizeSelect(size)}
          >
            <span className="text-sm">{size}</span>
          </div>
        ))}
      </div>

      <div className="ml-8  py-4  ">
        <label htmlFor="quantity" className="block text-gray-700">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default SizeSelector;
