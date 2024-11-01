// components/Hero.js
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-cover mt-10 lg:mt-0 w-full" style={{ backgroundImage: "url('/../../public/profile.jpg')"}}  >
      {/* <img src="../../public/profile.jpg" className=" rounded-full bg-cover pt-[100px] " alt="" width={400} height={400}></img> */}
      <div className="flex flex-col justify-center items-center lg:pl-[400px] pl-0 h-full bg-black bg-opacity-50">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
           <div className=" font-bold text-white flex items-center  ">
              <div className="animate-typewriter whitespace-nowrap inline-block pb-2">
              Hii I'm Vijay Singh
              </div>
             
            </div>
         
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl text-white"
        >
          Full Stack Developer | Passionate Coder
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
