import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Timeline', to: 'timeline' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/90 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="cursor-pointer font-heading text-2xl font-bold tracking-tight text-dark transition-colors duration-300 hover:text-primary dark:text-light"
          >
            Luis Portfolio
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-primary border-b-2 border-primary"
                className="cursor-pointer border-b-2 border-transparent pb-1.5 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:border-secondary hover:text-primary dark:text-slate-300 dark:hover:text-secondary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-300 text-dark dark:text-light"
              aria-label="Toggle dark mode"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button> */}
            <a
              href="/resume.pdf"
              download
              className="btn-primary text-sm"
            >
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              className="rounded-lg p-2 text-slate-600 transition-colors duration-300 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-600 transition-colors duration-300 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideUp bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-dark dark:text-light hover:text-primary dark:hover:text-secondary hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer font-medium rounded"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block px-4 py-3 btn-primary text-center m-2"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;