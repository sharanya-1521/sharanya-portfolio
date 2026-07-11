import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, BrainCircuit, Code2, Cloud, Database, Terminal, Settings, Palette } from 'lucide-react';
import { skillsList } from '../data';
import { Skill } from '../types';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'AI & Machine Learning', 'Cloud', 'Database', 'Core CS', 'Tools'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 size={16} />;
      case 'Web':
        return <Palette size={16} />;
      case 'AI & Machine Learning':
        return <BrainCircuit size={16} />;
      case 'Cloud':
        return <Cloud size={16} />;
      case 'Database':
        return <Database size={16} />;
      case 'Core CS':
        return <Terminal size={16} />;
      default:
        return <Settings size={16} />;
    }
  };

  const filteredSkills = useMemo(() => {
    return skillsList.filter((skill) => {
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950/20 transition-colors duration-300 relative" id="skills-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Skills</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
            My engineering stack, methodologies, & toolkit
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="space-y-6 max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" size={16} />
              <input
                type="text"
                placeholder="Search skill (e.g. Java)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-800 dark:text-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-colors"
                id="skill-search"
              />
            </div>

            {/* Scrollable Category Tags */}
            <div className="flex items-center gap-2 overflow-x-auto w-full no-scrollbar pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer whitespace-nowrap transition-all border ${
                    selectedCategory === cat
                      ? 'bg-cyan-600 border-cyan-600 text-white shadow-md shadow-cyan-500/15'
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Bento/Grid display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.4) }}
                className="p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-900/60 bg-white/70 dark:bg-zinc-900/45 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Visual Glassmorphic Border Highlight */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-colors" />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                        {skill.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Level metrics */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                    <span>Proficiency</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      {skill.level === 5 ? 'Expert' : skill.level === 4 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                  {/* Visual Dot level indicator */}
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition-all ${
                          level <= skill.level
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : 'bg-zinc-200 dark:bg-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white dark:bg-zinc-900/20 border border-zinc-200/50 dark:border-zinc-900/50 rounded-2xl">
              <p className="text-zinc-400 dark:text-zinc-500 text-sm font-mono">
                No matching skills found. Try another search.
              </p>
            </div>
          )}
        </div>

        {/* Developer Framework Summary Pill */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3.5 px-6 py-3 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900/50 max-w-4xl mx-auto">
            <span className="text-xs font-mono font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              Quick Highlights:
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              OOP Concept Master
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              GCP Certified Candidate
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
              Deep Learning Modeler
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
