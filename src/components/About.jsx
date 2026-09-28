import React from 'react';
import { motion } from 'framer-motion';

export default function About(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-heading">About Me</h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-dark dark:text-light leading-relaxed"
                    >
                        I'm a software engineer with a strong foundation in building modern, efficient, and user-focused web applications.
                        My work centers on full-stack development using Java, Spring Boot, React, and other technologies that support scalable,
                        maintainable, and business-ready systems.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-dark dark:text-light leading-relaxed"
                    >
                        My journey in software development began with curiosity and grew through hands-on projects, teamwork, and continuous
                        learning. I enjoy solving technical challenges, designing practical solutions, and turning real-world requirements into
                        reliable software products.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-dark dark:text-light leading-relaxed"
                    >
                        I am currently focused on developing software that combines backend logic, responsive design, and strong engineering
                        practices. I am excited to contribute to teams building meaningful digital products and continue growing as a software engineer.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="pt-6"
                    >
                        <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                            Why Me?
                        </h3>
                        <ul className="space-y-3 text-dark dark:text-light">
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold mt-1">✓</span>
                                <span>Strong problem-solving skills and attention to detail</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold mt-1">✓</span>
                                <span>Experience building full-stack applications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold mt-1">✓</span>
                                <span>Proficient in modern development tools and best practices</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-secondary font-bold mt-1">✓</span>
                                <span>Excellent communication and teamwork abilities</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}