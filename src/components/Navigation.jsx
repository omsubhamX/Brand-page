import React from "react";
import logo from '../assets/logo.png';
// import {Link} from "react-router-dom";

import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton  } from '@mui/base/MenuButton';
import { MenuItem  } from '@mui/base/MenuItem';

import { IoCartOutline } from "react-icons/io5";
import { Modal } from '@mui/base/Modal';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '1px solid #ddd',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const headerStyle = {
  color: '#FF9900', // Amazon orange color
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const descriptionStyle = {
  color: '#333333', // Dark grey color
  fontSize: '1rem',
  marginBottom: '16px',
};

const buttonStyle = {
  backgroundColor: '#FF0000', // Amazon orange color
  color: 'white',
  borderRadius: '4px',
  padding: '10px 16px',
  textTransform: 'none',
};

const Navigation = () => {

  const handleLogoClick = () => {
    window.location.href ="https://www.skechers.in/men"; 
  }
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {setOpen(true)};
  const handleClose = () => setOpen(false);

  const finalValue =localStorage.getItem('Quantity');
  
  return (
    <> 
    <nav className="bg-gray-800 py-4">
      <div className="container flex justify-between items-center">
      <a href="https://www.skechers.in/men" target="_blank" rel="noopener noreferrer">
  <img src={logo} alt="Logo" className="h-8" />
</a>

        
        <ul className="flex space-x-6  items-center ml-auto   ">
          
        <Dropdown className="relative inline-block text-left">
  <MenuButton className="px-4 py-2 text-white hover:text-red-500 hover:transition-colors duration-300 ">
    About Skechers 
  </MenuButton>
  <Menu className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Corporate Info</MenuItem>
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Corporate Governance</MenuItem>
    {/* <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Log out</MenuItem> */}
  </Menu>
</Dropdown>

    <Dropdown className="relative inline-block text-left">
  <MenuButton className="px-4 py-2 text-white hover:text-red-500 hover:transition-colors duration-300 ">
    Customer Service
  </MenuButton>
  <Menu className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Return policy</MenuItem>
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Product Information</MenuItem>
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Sitemap</MenuItem>
  </Menu>
</Dropdown>


<Dropdown className="relative inline-block text-left">
  <MenuButton className="px-4 py-2 text-white hover:text-red-500 hover:transition-colors duration-300 ">
My Account  </MenuButton>
  <Menu className="absolute mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Profile</MenuItem>
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Language settings</MenuItem>
    <MenuItem className="px-4 py-2 text-gray-800 hover:text-red-500 hover:bg-gray-100">Log out</MenuItem>
  </Menu>
</Dropdown>

<IoCartOutline  onClick={handleOpen}   className="text-4xl text-white cursor-pointer hover:text-red-500"/>




        </ul>
      </div> 
      </nav>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={headerStyle}>
         Your Shopping Cart
        </Typography>
        <div>
  <Typography id="modal-modal-description" sx={descriptionStyle}>
    <span className="bg-red-500 text-white px-2 py-1 rounded-lg">
      20% off Limited time deal
    </span>
  </Typography>
  <Typography id="modal-modal-description" sx={descriptionStyle}>
    <span className="mt-2 text-gray-800">Subtotal: ₹{finalValue * 4160}</span>
  </Typography>
</div>


        <Button onClick={handleClose} sx={buttonStyle}>
          Close
        </Button>
        <button onClick={handleOpen} className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 ml-20"> proceed to pay </button>
      </Box>
    </Modal>
     </>

  );
};

export default Navigation;
