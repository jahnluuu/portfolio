import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 py-20">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Get In Touch</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="card">
            <div className="flex items-center gap-6">
              <FiMail size={40} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Email
                </h3>
                <a
                  href="mailto:luis.pepito789@gmail.com"
                  className="text-dark dark:text-light link-hover text-lg hover:text-primary"
                >
                  luis.pepito789@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="card">
            <div className="flex items-center gap-6">
              <FiPhone size={40} className="text-primary flex-shrink-0" />
              <div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+639620413098"
                  className="text-dark dark:text-light link-hover text-lg hover:text-primary"
                >
                  +63 962 041 3098
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="card">
            <h3 className="font-heading text-3xl font-bold text-primary mb-8 text-center">
              Follow Me
            </h3>
            <div className="flex gap-8 justify-center flex-wrap">
              <a
                href="https://linkedin.com/in/john-luis-083635384"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-slate-700 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FiLinkedin size={40} />
              </a>
              <a
                href="https://github.com/jahnluuu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-slate-700 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
                title="GitHub"
              >
                <FiGithub size={40} />
              </a>
              <a
                href="https://www.facebook.com/Jahnluuu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 dark:bg-slate-700 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
                title="Facebook"
              >
                <FiFacebook size={40} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}