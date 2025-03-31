import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://admin-portfolio-cj8u.onrender.com/api/contact", form);
      setForm({ name: "", email: "", message: "" });
      toast("Message sent successfully!");

    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-100 py-16 px-6 md:px-12 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-purple-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you have an idea to discuss, a project to collaborate on, or just want to say hello, feel free to reach out!
        </motion.p>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div 
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-purple-600 text-2xl" />
              <a href="mailto:dhamaparam@gmail.com" className="text-lg text-gray-700 hover:text-purple-600">
                dhamaparam@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-purple-600 text-2xl -scale-x-100" />
              <a href="tel:+917011403127" className="text-lg text-gray-700 hover:text-purple-600">
                +91 7011403127
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-purple-600 text-2xl" />
              <p className="text-lg text-gray-700">Baghpat, Uttar Pradesh, India, 250101</p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="https://github.com/ParamDhama" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/paramdhama/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/dhama_param" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-400">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white p-4 py-8 md:p-8 rounded-lg shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={(e) => setForm({ ...form, name: e.target.value })} 
              className="p-4 border border-gray-300 rounded-lg" 
              required 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={(e) => setForm({ ...form, email: e.target.value })} 
              className="p-4 border border-gray-300 rounded-lg" 
              required 
            />
            <textarea 
              placeholder="Your Message" 
              value={form.message} 
              onChange={(e) => setForm({ ...form, message: e.target.value })} 
              className="p-4 border border-gray-300 rounded-lg min-h-[150px]" 
              required 
            />
            <button type="submit" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
              Send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
