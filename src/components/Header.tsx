import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Terminal, Award, Briefcase, FolderGit2, User, Home, Mail } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Header({ currentPage, setCurrentPage, darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor page scroll to update progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 backdrop-blur-md bg-white/70 dark:bg-zinc-950/75 border-b border-zinc-200/50 dark:border-zinc-900/50">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        id="scroll-progress"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="brand-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/10 dark:shadow-cyan-500/5 group-hover:scale-105 transition-transform">
              <Terminal size={18} className="animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Sharanya
              </span>
              <span className="text-xs block font-mono text-zinc-500 dark:text-zinc-400 -mt-1 leading-none">
                .dev
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                    isActive 
                      ? 'text-cyan-600 dark:text-cyan-400' 
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-cyan-50 dark:bg-cyan-950/30 rounded-full -z-10 border border-cyan-100/30 dark:border-cyan-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls (Theme + CTA Button) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              id="theme-toggle-desktop"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-medium shadow-md shadow-cyan-600/10 hover:shadow-cyan-600/20 hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
              id="hire-me-btn"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              id="theme-toggle-mobile"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                      isActive
                        ? 'bg-cyan-50 text-cyan-600 dark:bg-cyan-950/20 dark:text-cyan-400 border-l-2 border-cyan-500'
                        : 'text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-900/50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center text-sm font-medium shadow-md transition-all cursor-pointer block"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
