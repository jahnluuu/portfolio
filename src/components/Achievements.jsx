import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp } from 'react-icons/fi';

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Java CodeChum Certification',
      issuer: 'ChodeChum',
      date: 'June 2024',
      description: 'Advanced Java patterns and best practices',
      type: 'Certification',
    },
    {
      id: 2,
      
      title: '6th International Congress on e-Learning',
      issuer: 'Philippine E-Learning Society',
      date: 'September 2025',
      description: 'Presented innovative research papers on e-learning platforms',
      type: 'Certification',
    },
    {
      id: 3,
      title: 'AWS Academy - Cloud Foundations',
      issuer: 'Amazon Web Services',
      date: 'September 2025',
      description: 'Web Services Training and Certification',
      type: 'Certification',
    },
    {
      id: 4,
      title: 'AWS Academy - Cloud Architecting',
      issuer: 'Amazon Web Services',
      date: 'Ongoing',
      description: 'Cloud Architecture training and design principles',
      type: 'Certification',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-20 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Achievements</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="card border-l-4 border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {achievement.type === 'Certification' ? (
                    <FiAward size={32} className="text-primary" />
                  ) : (
                    <FiTrendingUp size={32} className="text-secondary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-primary mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-2">
                    {achievement.issuer} • {achievement.date}
                  </p>
                  <p className="text-dark dark:text-light mb-3">
                    {achievement.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                    {achievement.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;