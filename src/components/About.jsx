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
        <section id="about" className="bg-white py-24 dark:bg-slate-900">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-primary">A little context</p>
                        <h2 className="mb-6 text-left font-heading text-4xl font-bold tracking-tight text-dark dark:text-light sm:text-5xl">About me</h2>
                        <div className="h-1 w-14 rounded-full bg-secondary" />
                    </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6 lg:pt-2"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                        I'm a software engineer with a strong foundation in building modern, efficient, and user-focused web applications.
                        My work centers on full-stack development using Java, Spring Boot, React, and other technologies that support scalable,
                        maintainable, and business-ready systems.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                        My journey in software development began with curiosity and grew through hands-on projects, teamwork, and continuous
                        learning. I enjoy solving technical challenges, designing practical solutions, and turning real-world requirements into
                        reliable software products.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                        I am currently focused on developing software that combines backend logic, responsive design, and strong engineering
                        practices. I am excited to contribute to teams building meaningful digital products and continue growing as a software engineer.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="border-t border-slate-200 pt-7 dark:border-slate-700"
                    >
                        <h3 className="mb-4 font-heading text-2xl font-bold text-dark dark:text-light">
                            What I bring
                        </h3>
                        <ul className="grid gap-3 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 font-bold text-secondary">+</span>
                                <span>Strong problem-solving skills and attention to detail</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 font-bold text-secondary">+</span>
                                <span>Experience building full-stack applications</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 font-bold text-secondary">+</span>
                                <span>Proficient in modern development tools and best practices</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 font-bold text-secondary">+</span>
                                <span>Excellent communication and teamwork abilities</span>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
                </div>
            </div>
        </section>
    )
}