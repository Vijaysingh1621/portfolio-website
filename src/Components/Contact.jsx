// components/Contact.js
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-100 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        Get in Touch
      </motion.h2>
      <p className="text-gray-700 mb-6">Feel free to reach out through my social media or email!</p>
      {/* Add form or contact links */}
    </section>
  );
};

export default Contact;
