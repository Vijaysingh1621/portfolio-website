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
            src="/profile.jpg"
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
          Hi, I’m Vijay Singh, a Bachelor of Technology student at Netaji Subhas University of Technology, Delhi. I’m passionate about frontend development, with hands-on experience in React.js, Next.js, Tailwind CSS, MongoDB, and working knowledge of GitHub and DevOps practices.
          </p>
          <p className="text-lg">
          I also have practical experience with RESTful APIs, enabling smooth and efficient communication between frontend and backend services. With a strong foundation in building responsive, user-friendly web applications, I’m always excited to learn, innovate, and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
