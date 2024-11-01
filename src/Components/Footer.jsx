// components/Footer.js
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon
import { Link } from "react-scroll"; // To allow smooth scrolling for anchor links

const Footer = ({
  githubLink = "https://github.com/Vijaysingh1621/portfolio-website",
  linkedinLink = "https://www.linkedin.com/in/vijay-singh-b25483288/",
  twitterLink = "empty link",
  instagramLink = "empty link", //If there is no link element wont be appear 
  leetcodeLink = "empty link",
}) => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 ">
        {/* Footer Navigation Links */}
        <div className="flex flex-col md:gap-[100px] gap-8 items-center justify-between space-y-4 md:space-y-0">
          

          {/* Footer Menu Links */}
          <nav className="flex space-x-6 text-gray-300">
            <Link
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white cursor-pointer transition duration-200"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white cursor-pointer transition duration-200"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white cursor-pointer transition duration-200"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-white cursor-pointer transition duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-gray-300">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-200"
              >
                <FaGithub size={24} />
              </a>
            )}
            {linkedinLink && (
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedin size={24} />
              </a>
            )}
            {twitterLink && (
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaTwitter size={24} />
              </a>
            )}
            {instagramLink && (
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram size={24} />
              </a>
            )}
            {leetcodeLink && (
              <a
                href={leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition-colors duration-200"
              >
                <SiLeetcode size={24} />
              </a>
            )}
          </div>
          <div className="text-center md:text-left">
            {/* Copyright */}
            <p className="text-gray-400 text-[18px] mt-5">&copy; {new Date().getFullYear()} Vijay Singh. All rights reserved.</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
