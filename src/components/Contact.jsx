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
    <section id="contact" className="flex min-h-[80vh] w-full items-center justify-center bg-slate-950 py-24">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Get In Touch</p>
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">Let’s build something useful.</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl space-y-5"
        >
          <motion.div variants={itemVariants} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
            <div className="flex items-center gap-5">
              <FiMail size={30} className="flex-shrink-0 text-amber-300" />
              <div>
                <h3 className="mb-2 font-heading text-xl font-bold text-white">
                  Email
                </h3>
                <a
                  href="mailto:luis.pepito789@gmail.com"
                  className="text-lg text-slate-300 transition-colors hover:text-amber-300"
                >
                  luis.pepito789@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
            <div className="flex items-center gap-5">
              <FiPhone size={30} className="flex-shrink-0 text-amber-300" />
              <div>
                <h3 className="mb-2 font-heading text-xl font-bold text-white">
                  Phone
                </h3>
                <a
                  href="tel:+639620413098"
                  className="text-lg text-slate-300 transition-colors hover:text-amber-300"
                >
                  +63 962 041 3098
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
            <h3 className="mb-7 text-center font-heading text-2xl font-bold text-white">
              Follow Me
            </h3>
            <div className="flex gap-8 justify-center flex-wrap">
              <a
                href="https://linkedin.com/in/john-luis-083635384"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-300"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FiLinkedin size={40} />
              </a>
              <a
                href="https://github.com/jahnluuu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-300"
                aria-label="GitHub"
                title="GitHub"
              >
                <FiGithub size={40} />
              </a>
              <a
                href="https://www.facebook.com/Jahnluuu/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:text-amber-300"
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