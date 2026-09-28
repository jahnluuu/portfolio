import React from 'react'
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        id: 1,
        title: 'PortfolioX',
        dates: 'Jan 2025 - Present',
        desc: 'A digital student portfolio system designed to help students manage and showcase their personal information, skills, projects, and achievements. The system is presented in 6th-International Congress on e-Learning as Capstone Project.',
        tech: ['React', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
        image: '/images/portfoliox.png',
        github: 'https://github.com/GoinHacky/PortfolixCapstone.git',
        role: 'Backend Developer',
    },
    {
        id: 2,
        title: 'Electricity Consumption Billing (Spring Boot & React)',
        dates: 'Aug 2024 - Dec 2024',
        desc: 'A comprehensive cross-platform utility billing solution for small to medium-sized electricity companies. Features include secure authentication with biometric login for mobile users, automated billing calculations, invoice generation with email/SMS notifications, online payment processing, real-time consumption tracking with graphical analytics, and integrated customer support system. Administrators can manage customer profiles, input consumption data, and monitor system operations through a centralized web dashboard.',
        tech: ['React', 'Spring Boot'],
        image: '/images/ecb2.png',
        github: 'https://github.com/uno092102/IT342-G6-G4-ECB.git',
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        title: 'Electricity Consumption Bill (Django)',
        dates: 'Jan 2024 - May 2024',
        desc: 'A full-stack electricity billing system built with Django that automates customer record management, meter reading tracking, and billing calculations. The system provides administrators with tools to manage customer data, process consumption information, and generate accurate bills efficiently.',
        tech: ['Python', 'HTML/CSS', 'Django'],
        image: '/images/ecb1.png',
        github: 'https://github.com/jahnluuu/Electricity-Consumption-Billing.git',
        role: 'Full Stack Developer',
    },
]


export default function Projects(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      };
    
      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      };
    
    return (
        <section id="projects" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Selected work</p>
            <h2 className="mb-0 text-left font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">Projects</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400 md:text-right">
            A selection of systems I have built from idea to implementation, with a focus on useful software and thoughtful interfaces.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/10"
            >
              <div className="grid grid-cols-1 items-stretch md:grid-cols-2">
                <div className={`relative min-h-[260px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute left-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 font-heading text-sm font-bold text-amber-300 backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full min-h-[260px] w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                <div className={`flex flex-col justify-center p-7 sm:p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.14em]">
                    <span className="text-amber-300">{project.role}</span>
                    <span className="text-slate-500">{project.dates}</span>
                  </div>
                  <h3 className="mb-4 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-7 leading-relaxed text-slate-400">
                    {project.desc}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-amber-300"
                    >
                      <FiGithub size={18} />
                      View source <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    )
}