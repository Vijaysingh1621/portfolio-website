// components/Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-5 bg-gray-900 text-white space-x-6">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
    </footer>
  );
};

export default Footer;
