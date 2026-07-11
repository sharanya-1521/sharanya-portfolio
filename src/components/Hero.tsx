import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Code, ArrowRight, Download, FileText, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const [subRoleIndex, setSubRoleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotate subtitles
  useEffect(() => {
    const timer = setInterval(() => {
      setSubRoleIndex((prev) => (prev + 1) % personalInfo.subRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Floating background particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };

    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Gentle grid lines for tech vibe
      ctx.strokeStyle = document.documentElement.classList.contains('dark') 
        ? 'rgba(6, 182, 212, 0.03)' 
        : 'rgba(6, 182, 212, 0.04)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = document.documentElement.classList.contains('dark')
              ? `rgba(6, 182, 212, ${(1 - dist / 100) * 0.06})`
              : `rgba(6, 182, 212, ${(1 - dist / 100) * 0.08})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16" id="hero-section">
      {/* Background Canvas for interactive nodes */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-zinc-950 transition-colors duration-300">
        <canvas ref={canvasRef} className="w-full h-full opacity-70" />
      </div>

      {/* Decorative Blur Flares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Grid: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-700 dark:text-cyan-400 text-xs font-medium font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
            Available for Internships & Placement Offers
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <span className="text-zinc-500 dark:text-zinc-400 font-mono text-sm tracking-wider uppercase block">
              Hi, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 dark:from-zinc-100 dark:via-zinc-50 dark:to-zinc-400">
                Dyavanandi Sharanya
              </span>
            </h1>
            
            {/* Dynamic Sliding Subtitles */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={subRoleIndex}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -24, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                  className="text-lg sm:text-xl md:text-2xl font-semibold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500 flex items-center gap-2"
                >
                  <Sparkles size={18} className="text-cyan-500" />
                  {personalInfo.subRoles[subRoleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Brief Abstract */}
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
            {personalInfo.about}
          </p>

          {/* Location info */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <MapPin size={14} className="text-cyan-500" />
            <span>{personalInfo.location}</span>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <span>CMR College of Engineering & Technology (CGPA: 8.89)</span>
          </div>

          {/* Action Call To Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 w-full sm:w-auto">
            <button
              onClick={() => setCurrentPage('projects')}
              className="px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-medium text-sm transition-all shadow-md shadow-zinc-950/10 flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://drive.google.com/file/d/1TYufY54Jmvp5OCZ9H7-QJ68aR2qOlKJx/preview"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-cyan-500/20 dark:border-cyan-400/10 hover:border-cyan-500/50 bg-cyan-500/5 dark:bg-cyan-950/20 text-cyan-600 dark:text-cyan-400 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText size={15} />
              View Resume
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1TYufY54Jmvp5OCZ9H7-QJ68aR2qOlKJx"
              target="_blank"
              rel="noopener noreferrer"
              download="Sharanya_Resume.pdf"
              className="px-5 py-3 rounded-lg border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-white/50 dark:bg-zinc-900/40 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 font-medium text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          {/* Social Icons with Tooltips */}
          <div className="pt-4 flex items-center gap-4 border-t border-zinc-100 dark:border-zinc-900 w-full">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">Connect:</span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200/60 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200/60 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-zinc-200/60 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                title="LeetCode"
              >
                <Code size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Grid: Visual Profile Picture / Interactive Logo Wrapper */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', duration: 1.2 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            id="profile-picture-container"
          >
            {/* Soft decorative background shadow elements */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-30 dark:opacity-20 blur-md" />
            
            {/* Visual Glassmorphic Frame containing SVG Representation */}
            <div className="relative w-full h-full rounded-[2.5rem] bg-white/80 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl p-6 sm:p-8 flex flex-col justify-between items-center overflow-hidden">
              
              {/* Geometric pattern background */}
              <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect width="20" height="20" fill="none" />
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Coding Terminal Mock Accent */}
              <div className="w-full flex items-center justify-between font-mono text-zinc-400 dark:text-zinc-500 text-xs border-b border-zinc-100 dark:border-zinc-800 pb-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <span>sharanya.sh</span>
              </div>

              {/* Large Premium Avatar Graphic */}
              <div className="my-auto relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 dark:border-cyan-500/10 animate-spin" style={{ animationDuration: '20s' }} />
                
                {/* SVG Avatar Representation - Elegant profile wireframe silhouette */}
                <svg viewBox="0 0 100 100" className="w-32 h-32 text-cyan-600 dark:text-cyan-400 z-10 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle glowing halo */}
                  <circle cx="50" cy="40" r="24" fill="url(#avatarGlow)" opacity="0.15" />
                  
                  {/* Stylized Node structure of AI/ML Enthusiast */}
                  <g stroke="currentColor" strokeWidth="1.5">
                    {/* Neck and Shoulders */}
                    <path d="M22,82 C22,70 34,64 50,64 C66,64 78,70 78,82" strokeLinecap="round" opacity="0.8" />
                    {/* Head */}
                    <circle cx="50" cy="40" r="18" strokeDasharray="1,2" />
                    {/* Dynamic AI Interconnected Points */}
                    <circle cx="50" cy="40" r="14" />
                    <line x1="50" y1="26" x2="50" y2="54" />
                    <line x1="36" y1="40" x2="64" y2="40" />
                    
                    {/* Goggles / Tech glasses styling */}
                    <rect x="42" y="34" width="16" height="5" rx="1.5" />
                    
                    {/* Highlight key node synapses */}
                    <circle cx="50" cy="26" r="3" fill="#06b6d4" stroke="#06b6d4" />
                    <circle cx="50" cy="54" r="3" fill="#06b6d4" stroke="#06b6d4" />
                    <circle cx="36" cy="40" r="3" fill="#3b82f6" stroke="#3b82f6" />
                    <circle cx="64" cy="40" r="3" fill="#3b82f6" stroke="#3b82f6" />
                  </g>

                  <defs>
                    <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>

              {/* Decorative Console Log Print */}
              <div className="w-full text-left font-mono text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 space-y-0.5 bg-zinc-50 dark:bg-zinc-950/40 p-2.5 rounded-lg border border-zinc-200/50 dark:border-zinc-900/50">
                <p className="text-cyan-600 dark:text-cyan-400 font-bold">&gt; sh setup_profile.sh</p>
                <p className="text-zinc-400 dark:text-zinc-500">Status: Ready to engineer</p>
                <p className="text-green-600 dark:text-green-500">✓ CGPA: 8.89 verified</p>
              </div>
            </div>

            {/* Float details indicator */}
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-2 shadow-xl flex items-center gap-1.5 font-mono text-xs text-zinc-700 dark:text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span>CMR CET 2023–27</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
