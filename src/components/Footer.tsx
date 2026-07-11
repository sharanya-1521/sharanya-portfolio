import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="relative bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900/50 transition-colors duration-300 py-12" id="portfolio-footer">
      {/* Decorative accent background flare */}
      <div className="absolute inset-0 bg-radial-gradient from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <span className="font-display font-black text-sm">DS</span>
              </div>
              <span className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Sharanya <span className="text-cyan-500 font-mono text-sm">.dev</span>
              </span>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm leading-relaxed">
              Aspiring Software Engineer & AI/ML Specialist building production-ready solutions with elegant code and beautiful user experiences.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all shadow-sm"
                aria-label="LeetCode Profile"
              >
                <Code size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h4 className="text-zinc-900 dark:text-zinc-100 font-display font-semibold text-sm tracking-wider uppercase mb-4">
              Explore Portfolio
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setCurrentPage(link.id)}
                    className="text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm transition-colors cursor-pointer text-left py-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Back to Top */}
          <div className="flex flex-col items-start md:items-end md:text-right gap-6 justify-between h-full">
            <div>
              <h4 className="text-zinc-900 dark:text-zinc-100 font-display font-semibold text-sm tracking-wider uppercase mb-3">
                Get In Touch
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 text-sm flex items-center gap-1.5 justify-start md:justify-end transition-colors"
              >
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                {personalInfo.location}
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 dark:hover:bg-zinc-900/80 transition-all hover:shadow-md cursor-pointer self-start md:self-auto"
              id="back-to-top"
            >
              Back to Top
              <ArrowUp size={12} className="animate-bounce" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200/50 dark:border-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Dyavanandi Sharanya. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with React, Vite & Tailwind
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
