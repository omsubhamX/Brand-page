import "./App.css";
import HeroSection from "./components/Hero"
import Navigation from "./components/Navigation"
// import SizeSelector from "./components/SizeSelector"
import { CartProvider } from './components/CartContext';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
const App = () => {
  return (
   <>   
    
    <Navigation/>

<HeroSection/>


  
   </>
  );
};

export default App;