import React from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Blurred spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-400/30 blur-[120px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">

        {/* Left Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            John Luis Pepito
          </h1>
          <p className="text-xl text-blue-300 mb-4">IT Student</p>

          <p className="text-slate-300 leading-relaxed max-w-xl">
            IT student who has developed web applications and solved programming
            problems. Comfortable with Java, Python and React, and always eager
            to learn new tools while working on real projects and collaborations.
          </p>

          <div className="mt-8">
            <a
              href="/mnt/data/JohnLuis_Pepito_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Profile Image with Spotlight Glow */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow behind photo */}
          <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full scale-150"></div>

          {/* Image */}
          <img
            src="images/profile.png"
            alt="Profile"
            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-xl border-4 border-white/20"
          />
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 cursor-pointer"
          >
            <span>Scroll Down</span>
            <FiArrowDown size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
