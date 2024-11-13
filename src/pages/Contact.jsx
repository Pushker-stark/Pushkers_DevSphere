import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here, such as sending to an email service.
    console.log('Form Submitted:', formData);
  };

  return (
    <motion.div
      className="p-8 text-center max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="mb-8 text-lg">Feel free to reach out with any questions or opportunities!</p>
      
      <motion.form
        className="space-y-4"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Name Field */}
        <motion.div
          className="flex flex-col text-left"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="name" className="mb-1 text-lg">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </motion.div>
        
        {/* Email Field */}
        <motion.div
          className="flex flex-col text-left"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="email" className="mb-1 text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </motion.div>
        
        {/* Message Field */}
        <motion.div
          className="flex flex-col text-left"
          whileFocus={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="message" className="mb-1 text-lg">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 h-24 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full mt-4 p-2 text-lg font-semibold bg-teal-500 text-white rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
