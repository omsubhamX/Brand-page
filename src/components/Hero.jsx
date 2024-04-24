import React, { useState } from "react";
import ConfirmationModal from "../components/ConfirmationModal"; // Import the ConfirmationModal component
import SizeSelector from '../components/SizeSelector';
import ColorSelector from "../components/ColorSelector"; // Import the ColorSelector component
import amazon from '../assets/amazon.png';
import flipkart from '../assets/flipkart.png';
import hero from '../assets/hero.png';


const HeroSection = () => {
  const [showAmazonModal, setShowAmazonModal] = useState(false); // State to control Amazon modal visibility
  const [showFlipkartModal, setShowFlipkartModal] = useState(false); // State to control Flipkart modal visibility
  const [shoeImage, setShoeImage] = useState(hero); // State to control shoe image
  const [quantity, setQuantity] = useState(1);

  const handleAmazonClick = () => {
    setShowAmazonModal(true); // Show the Amazon modal when Amazon is clicked
  };

  const handleFlipkartClick = () => {
    setShowFlipkartModal(true); // Show the Flipkart modal when Flipkart is clicked
  };

  const handleColorChange = (image) => {
    setShoeImage(image); // Update the shoe image when color is changed
  };

  const handleCart = ()=>{
    localStorage.setItem('Quantity',quantity)

    
  }

  return (
    <main className="hero container relative flex ">
      <div className="hero-content">
        <div className="absolute top-20 right-0">
          <h1 className="font-poppins text-lg italic mb-8">
            <span className="text-red-500">YOUR</span>{" "}
            <span className="text-blue-500">FEET</span>{" "}
            <span className="text-green-500">DESERVE</span>{" "}
            <span className="text-yellow-500">THE</span>{" "}
            <span className="text-purple-500">BEST</span>
          </h1>
        </div>

        <div className="flex flex-col items-end absolute top-5 right-0 transform translate-y-1/2">
          <p className="font-poppins text-gray-800 font-bold text-lg italic mb-2">
            "From city streets to rugged terrain,<br />
            Comfort and quality, our shoes  <br />
            Step up your game, with every design, <br />
            Elevate your journey, make each moment shine" <br />          </p>

            <br />
          
       <p  className="font-dancingScript text-xl font-bold text-gray-800">    Discover the perfect fit for your lifestyle <br />
            and unleash your true potential with Skechers <br />
            Explore our latest collection and step into comfort <br />
            Feel the difference with every step you take</p> 
        </div>
        



        <div className=" flex-row-reverse flex  items-center w-[60vw]  bg green-200 justify-center ">
        <img src={shoeImage} alt="shoe" className="hero-img" /> 



<div
className="left-side-container relative top-18">


<div className="mb-6 pb-4 top-1 text-2xl font-extrabold text-gray-700">
SKECHERS SLIP-INS: ULTRA FLEX 3.0 - BRILLIANT

    </div >


    <div className="flex items-start space-y-4 flex-col">
        <ColorSelector onColorChange={handleColorChange} /> {/* Integrate ColorSelector component */}
        <SizeSelector setQuantity={setQuantity} quantity={quantity} />
    </div>

<div className="product-price mt-4">
    {/* Discount and final price */}
    <div className="flex items-center space-x-2">
        {/* Discount percentage */}
        <span className="text-red-600 font-bold">-41%</span>

        {/* Final price */}
        <span className="text-lg font-bold text-gray-800">₹4,160    (incl. of all taxes)</span>
    </div>

    {/* Original price with strikethrough */}
    <div className="text-gray-500 line-through">
        M.R.P: ₹6,000  
    </div>
</div>


<div className="flex gap-8 mb-8 mt-8">
          <button className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600">Shop Now</button>
          <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600" onClick={handleCart}>Add To Cart</button>
        </div>

<div className="shopping mt-8">
          <p className="mb-2">Also Available On</p>

          <div className="brand-icons flex gap-4">
            <img src={amazon} alt="amazon-logo" onClick={handleAmazonClick} style={{ cursor: 'pointer' }} />
            <img src={flipkart} alt="flipkart-logo" onClick={handleFlipkartClick} style={{ cursor: 'pointer' }} />
          </div>
        </div>


        
      </div>
     

</div>

      </div>



      {/* Confirmation modals */}
      <ConfirmationModal
        isOpen={showAmazonModal}
        onConfirm={() => window.location.href = 'https://www.amazon.com'}
        onCancel={() => setShowAmazonModal(false)}
      />
      <ConfirmationModal
        isOpen={showFlipkartModal}
        onConfirm={() => window.location.href = 'https://www.flipkart.com'}
        onCancel={() => setShowFlipkartModal(false)}
      />
    </main>
  );
};

export default HeroSection;
