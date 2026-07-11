import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calendar, Building2, MapPin, Briefcase, Filter, Sparkles, Star, Award } from 'lucide-react';
import { experiencesList } from '../data';
import { Experience } from '../types';

export default function ExperienceSection() {
  const [filterType, setFilterType] = useState<string>('All');

  const experienceTypes = ['All', 'Virtual Experience'];

  const filteredExperiences = useMemo(() => {
    if (filterType === 'All') return experiencesList;
    return experiencesList.filter((exp) => exp.type === filterType);
  }, [filterType]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Specialist':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'Training':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'Virtual Experience':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
      case 'Job Simulation':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      default:
        return 'bg-zinc-100 text-zinc-600 border-zinc-200';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 relative" id="experience-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Experience</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
            Job Simulations, Virtual Internships & Hands-on Trainings
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-10 max-w-xl mx-auto justify-start sm:justify-center">
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 flex items-center gap-1 shrink-0">
            <Filter size={12} />
            Filter:
          </span>
          {experienceTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors whitespace-nowrap border ${
                filterType === type
                  ? 'bg-cyan-600 border-cyan-600 text-white shadow-md'
                  : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-zinc-200 dark:border-zinc-800">
          
          {filteredExperiences.length > 0 ? (
            filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative mb-12 last:mb-0 group"
              >
                {/* Glowing Connector Node on the timeline */}
                <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-zinc-950 flex items-center justify-center group-hover:scale-125 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </span>

                {/* Main Card */}
                <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/35 hover:border-cyan-500/25 dark:hover:border-cyan-500/25 hover:shadow-lg transition-all space-y-4">
                  
                  {/* Card Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200/40 dark:border-zinc-800/40 pb-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        <Building2 size={13} className="text-zinc-400" />
                        <span>{exp.organization}</span>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 self-start sm:self-auto shrink-0 border border-zinc-200/20">
                      <Calendar size={12} />
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet description list */}
                  <ul className="list-none space-y-2">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2 leading-relaxed">
                        <span className="text-cyan-500 text-sm mt-0.5 select-none shrink-0">▪</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight skills capsules */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mr-1.5">Acquired Skills:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 text-cyan-700 dark:text-cyan-400 border border-cyan-500/10 dark:border-cyan-500/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  {exp.certificateUrl && (
                    <div className="pt-2">
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-cyan-500/20 dark:border-cyan-400/10 hover:border-cyan-500/40 bg-cyan-500/5 dark:bg-cyan-950/25 text-cyan-600 dark:text-cyan-400 font-semibold text-xs transition-all cursor-pointer shadow-sm hover:shadow-md"
                        title="View Internship Certificate in New Tab"
                      >
                        <Award size={13} className="text-cyan-500 shrink-0 animate-pulse" />
                        <span>View Certificate</span>
                      </a>
                    </div>
                  )}

                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 border border-zinc-200/50 dark:border-zinc-900/50 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-2xl">
              <p className="text-zinc-400 dark:text-zinc-500 text-sm font-mono">
                No matching experience records found.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
