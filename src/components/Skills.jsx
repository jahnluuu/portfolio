import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaNode,
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaJava,
} from 'react-icons/fa';
import { SiSpringboot, SiPhp, SiCanva } from 'react-icons/si';

function Skills() {
  const skillCategories = [
    {
      name: 'Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: 'text-red-500' },
        { name: 'Python', icon: FaPython, color: 'text-blue-400' },
        { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
        { name: 'PHP', icon: SiPhp, color: 'text-purple-600' },
        { name: 'HTML/CSS', icon: FaHtml5, color: 'text-orange-500' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      skills: [
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
        { name: 'Node.js', icon: FaNode, color: 'text-green-600' },
      ],
    },
    {
      name: 'Development Tools',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
        { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
        { name: 'Canva', icon: SiCanva, color: 'text-blue-500' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center bg-light dark:bg-dark py-20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Skills</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="card"
            >
              <h3 className="font-heading text-2xl font-bold text-primary mb-8">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-100 dark:bg-slate-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <IconComponent
                        size={48}
                        className={`${skill.color} mb-3`}
                      />
                      <p className="text-base font-semibold text-center">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;