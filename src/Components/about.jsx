// components/About.js
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg"
        >
          <img
            src="../../public/profile.jpg"
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center md:text-left"
        >
          <p className="text-lg mb-4">
            Hello! I'm a passionate frontend developer with expertise in React, Tailwind CSS, and modern web technologies.
            I specialize in creating responsive and user-friendly interfaces that provide exceptional user experiences.
          </p>
          <p className="text-lg">
            With a keen eye for design and a love for clean, efficient code, I strive to build websites and applications
            that not only look great but also perform seamlessly across all devices.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
