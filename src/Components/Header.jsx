// components/Header.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between rounded-md items-center p-5 bg-white bg-opacity-70 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <h1 className="text-2xl font-bold text-[2rem] text-gray-600">Vijay</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:block md:text-[19px] font-normal">
        <ul className="flex space-x-6 justify-center items-center md:pr-[500px] ">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-2xl">
            {isOpen?"":<FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3  shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-2xl">
            {isOpen?<FaTimes />:""}
          </button>
        </div>
        
        <ul className="flex flex-col items-center justify-center space-y-6 pb-10 pt-10 mt-4 bg-white bg-opacity-70 backdrop-blur-md shadow-md">
          <li><a href="#home" className="text-lg hover:text-blue-500" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#about" className="text-lg hover:text-blue-500" onClick={toggleSidebar}>About</a></li>
          <li><a href="#projects" className="text-lg hover:text-blue-500" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="#contact" className="text-lg hover:text-blue-500" onClick={toggleSidebar}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
