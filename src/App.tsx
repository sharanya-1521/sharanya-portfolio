import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, ShieldAlert } from 'lucide-react';

// Custom components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [loaderProgress, setLoaderProgress] = useState<number>(0);
  const [loaderText, setLoaderText] = useState<string>('Booting core terminal modules...');

  // Sync dark mode class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Loading animation typing tracker simulation
  useEffect(() => {
    const textStates = [
      'Booting core terminal modules...',
      'Mapping neural network layers...',
      'Establishing Google Cloud connections...',
      'Fetching GitHub contributions density...',
      'Loading portfolio assets... Done!'
    ];

    let timer: NodeJS.Timeout;
    let idx = 0;

    const progressInterval = setInterval(() => {
      setLoaderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        
        // Update helper status text
        const step = Math.floor(prev / 25);
        if (step !== idx && textStates[step]) {
          idx = step;
          setLoaderText(textStates[step]);
        }
        
        return prev + 2.5;
      });
    }, 45);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  // Back to top helper when switching virtual pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Return the correct view component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Hero 
            setCurrentPage={setCurrentPage} 
          />
        );
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <Hero 
            setCurrentPage={setCurrentPage} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-300 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-100">
      
      <AnimatePresence mode="wait">
        {loading ? (
          /* Loading terminal boot animation screen */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-zinc-950 flex flex-col items-center justify-center p-6 text-zinc-50"
            id="app-preloader"
          >
            <div className="w-full max-w-sm space-y-5">
              {/* Terminal Title block */}
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3">
                <Terminal size={18} className="text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-zinc-400">dyavanandi_sharanya_kernel ~ setup</span>
              </div>

              {/* Progress metrics */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-cyan-400 animate-pulse">{loaderText}</span>
                  <span className="text-zinc-500">{Math.floor(loaderProgress)}%</span>
                </div>
                {/* Horizontal Progress Track */}
                <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-75"
                    style={{ width: `${loaderProgress}%` }}
                  />
                </div>
              </div>

              {/* Console diagnostics footer */}
              <div className="text-[10px] font-mono text-zinc-600 dark:text-zinc-500 leading-normal space-y-0.5">
                <p>&gt; loading profile.data: OK</p>
                <p>&gt; load index.css: TailwindCSS v4 active</p>
                <p>&gt; system architecture: clean SPA layout active</p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main Application Grid */
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex-grow flex flex-col"
          >
            {/* Header / Sticky Nav */}
            <Header 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
            />

            {/* Main Interactive Stage Container with Virtual transitions */}
            <main className="flex-grow relative" id="main-content-stage">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Professional Footer */}
            <Footer setCurrentPage={setCurrentPage} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
