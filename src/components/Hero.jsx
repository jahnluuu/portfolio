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
    <section id="hero" className="relative flex min-h-[calc(100vh-4.5rem)] w-full items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.35),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(245,158,11,0.18),transparent_24%),linear-gradient(135deg,#0f172a,#111827_55%,#172554)]"></div>

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-14 px-6 py-24 md:flex-row md:gap-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Hello, I’m</p>
          <h1 className="mb-5 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            John Luis Pepito
          </h1>
          <p className="mb-5 text-xl font-semibold text-blue-300">Software Engineer</p>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300">
            Software engineer focused on building reliable, scalable, and user-friendly web applications.
            I worked with Java, Spring Boot, React, and modern full-stack tools to develop solutions that improve
            business processes and deliver a strong user experience.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary bg-blue-500 hover:bg-blue-600"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative shrink-0"
        >
          <div className="absolute inset-0 bg-blue-400/40 blur-3xl rounded-full scale-150"></div>

          {/* Image */}
          <img
            src="images/profile.png"
            alt="Profile"
            className="relative h-52 w-52 rounded-full border-4 border-white/20 object-cover shadow-2xl shadow-blue-950/60 sm:h-60 sm:w-60"
          />
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-amber-300"
          >
            <span>Scroll Down</span>
            <FiArrowDown size={20} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
