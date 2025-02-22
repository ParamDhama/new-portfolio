import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setSuccess("Failed to send message.");
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
          Let&apos;s connect! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
        </motion.p>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left - Contact Details */}
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
              <FaPhone className="text-purple-600 text-2xl" />
              <a href="tel:+917011403127" className="text-lg text-gray-700 hover:text-purple-600">
                +91 7011403127
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-purple-600 text-2xl" />
              <p className="text-lg text-gray-700">Ward 05, Khekra, Baghpat, 250101</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-600">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-600">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-600">
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="p-3 border border-gray-300 rounded-lg" required />
            <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="p-3 border border-gray-300 rounded-lg" required />
            <textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="p-3 border border-gray-300 rounded-lg" required></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-3 rounded-lg">Send</button>
            {success && <p className="text-green-600">{success}</p>}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
