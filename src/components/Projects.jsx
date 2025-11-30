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
        <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Projects</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-secondary">
                      {project.role}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    {project.title}
                  </h3>
                  <p className="text-dark dark:text-light mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn-primary"
                    >
                      <FiGithub size={18} />
                      GitHub
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