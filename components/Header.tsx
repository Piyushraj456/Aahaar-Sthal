"use client"; 
import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'; // Hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for mobile menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between p-5 shadow-md px-3 h-24 items-center">
      <div className="logo font-bold flex items-center text-xl">
        <img src="./logo-hotel.png" alt="logo" className="w-24 h-24" />
        Aahaar<span className="text-orange-500 font-bold">Sthal</span>
      </div>
      
      
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuOutlinedIcon />} 
      </div>

      
      <ul className="hidden md:flex gap-8 items-center">
        <li className="text-[18px] hover:text-orange-400 cursor-pointer">Home</li>
        <li className="text-[18px] hover:text-orange-400 cursor-pointer">About Us</li>
        <li className="text-[18px] hover:text-orange-400 cursor-pointer">Contact Us</li>
      </ul>

      
      {isOpen && (
       <ul className="absolute top-20 left-0 w-full bg-orange-500 text-white text-center shadow-md md:hidden">
          <li className="p-4 border-b hover:text-orange-400 cursor-pointer">Home</li>
          <li className="p-4 border-b hover:text-orange-400 cursor-pointer">About Us</li>
          <li className="p-4 hover:text-orange-400 cursor-pointer">Contact Us</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
