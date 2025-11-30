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
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="text-2xl font-heading font-bold text-primary cursor-pointer hover:text-blue-700 transition-colors duration-300"
          >
            Luis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-primary border-b-2 border-primary"
                className="text-dark dark:text-light hover:text-primary dark:hover:text-secondary transition-colors duration-300 cursor-pointer font-medium pb-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle & Resume Button */}
          <div className="hidden md:flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-dark dark:text-light transition-colors duration-300"
              aria-label="Toggle dark mode"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700 text-dark dark:text-light transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
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