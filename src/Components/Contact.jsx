// components/Contact.js
import mapimage from "/map.jpg"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import {  FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_s842hyj",       // replace with your EmailJS service ID
      "template_y8jvdrp",      // replace with your EmailJS template ID
      formData,
      "QkINLoBgFSgpXL08-"           // replace with your EmailJS user ID
    ).then(
      () => {
        setLoading(false);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setLoading(false);
        toast.error("Oops, something went wrong. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="p-10 relative text-center overflow-hidden">
  {/* Background Map Image */}
  <div className="absolute inset-0">
    <img
      src={mapimage} // Replace with actual path to map image
      alt="Map background"
      className="w-full h-full object-cover p-5 rounded-[40px]"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center min-h-screen">
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 max-w-md mx-auto w-full">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        Get in Touch
      </motion.h2>
      <p className="text-gray-600 mb-8">
        Feel free to reach out through my social media or email!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center mb-8 space-y-4">
        <div className="flex items-center space-x-2 text-gray-700">
          <FaEnvelope />
          <a href="mailto:itisvijaysingh@gmail.com" className="hover:underline text-lg">
            itisvijaysingh@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <FaWhatsapp />
          <a href="https://wa.me/+918209532663" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
            +91 82095 32663
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={sendEmail} className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center px-6 py-3 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold rounded-lg transition-all duration-200`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: loading ? 1 : 1.05 }}
        >
          <FaPaperPlane className="mr-2" /> {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </div>
  </div>

  {/* Toast Container */}
  <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
</section>
  );
};

export default Contact;
