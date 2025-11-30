import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiBriefcase } from 'react-icons/fi';

function Timeline() {
  const events = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Science in Information Technology',
      institution: 'Cebu Institute of Technology - University',
      date: '2022 - Present',
      description: ' Relevant Coursework: Web Development, Data Structures, OOP, Database Management Systems, Etc.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Timeline</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {events.map((event, index) => (
            <motion.div key={event.id} variants={itemVariants}>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg z-10">
                    {event.type === 'education' ? (
                      <FiBook size={24} />
                    ) : (
                      <FiBriefcase size={24} />
                    )}
                  </div>
                  {index !== events.length - 1 && (
                    <div className="w-1 h-24 bg-primary mt-2"></div>
                  )}
                </div>

                <div className="flex-1 pt-2">
                  <div className="card">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary">
                          {event.title}
                        </h3>
                        <p className="text-secondary font-semibold">
                          {event.institution}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-dark dark:text-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;