import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen, Lightbulb, Users, Target, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationList } from '../data';

export default function About() {
  const softSkills = [
    { name: 'Problem Solving', icon: Lightbulb, desc: 'Breaking down complex challenges into modular, logical steps.' },
    { name: 'Team Collaboration', icon: Users, desc: 'Eager contributor in technical group projects and hackathons.' },
    { name: 'Continuous Learning', icon: Target, desc: 'Always upskilling in cutting-edge domains like Cloud & AI/ML.' },
    { name: 'Analytical Thinking', icon: BookOpen, desc: 'Grounded in mathematics, data cleaning, and statistical validation.' }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 relative" id="about-section">
      {/* Accent subtle lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/5 dark:bg-cyan-500/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
            My Background, Goals, & Education
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Bio & Objective (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Professional Summary */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900/50">
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-cyan-500" size={20} />
                Professional Summary
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Career Objective */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900/50">
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                <Target className="text-cyan-500" size={20} />
                Career Objective
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Soft Skills Section */}
            <div>
              <h3 className="text-lg font-display font-bold text-zinc-900 dark:text-zinc-50 mb-5">
                Core Strengths & Soft Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={index} 
                      className="p-5 rounded-xl border border-zinc-200/50 dark:border-zinc-900/50 bg-white/60 dark:bg-zinc-950/40 hover:border-cyan-500/20 dark:hover:border-cyan-500/20 hover:shadow-md transition-all flex gap-3.5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/5 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column Right: Education Timeline (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-900/50">
              <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
                <GraduationCap className="text-cyan-500" size={22} />
                Education Journey
              </h3>

              {/* Vertical Timeline */}
              <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3.5 pl-6 space-y-8">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    {/* Glowing Bullet Node */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border border-cyan-500/80 bg-white dark:bg-zinc-950 group-hover:scale-110 transition-transform flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    </span>

                    {/* Timeline Card */}
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                          {edu.institution}
                        </h4>
                        <span className="text-[10px] sm:text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center gap-1 self-start sm:self-auto shrink-0">
                          <Calendar size={10} />
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        {edu.degree}
                      </p>
                      
                      {/* Highlight Score Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 dark:bg-cyan-500/5 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold font-mono">
                        <Award size={13} />
                        {edu.grade}
                      </div>

                      {/* Detail points */}
                      {edu.details && (
                        <ul className="list-none space-y-1.5 pt-2">
                          {edu.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs text-zinc-500 dark:text-zinc-400 flex items-start gap-1.5 leading-relaxed">
                              <span className="text-cyan-500 shrink-0 mt-1">▪</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
