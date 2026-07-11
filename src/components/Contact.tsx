import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Code, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Please provide your full name.';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'An email address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please type a brief message first.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate sending progress
    setTimeout(() => {
      setStatus('success');
      // Reset inputs
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 relative" id="contact-section">
      {/* Decorative Blur flares */}
      <div className="absolute bottom-12 left-10 w-80 h-80 rounded-full bg-cyan-500/5 dark:bg-cyan-500/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
            Let's discuss internship opportunities or collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct info cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/35 space-y-6">
              
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-lg text-zinc-900 dark:text-zinc-100">
                  Direct Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-normal">
                  Recruiters, hiring managers, and academic researchers can connect directly via email or scheduled portals.
                </p>
              </div>

              {/* Direct links list */}
              <div className="space-y-4 pt-1 font-mono text-xs">
                {/* Email link */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/20 transition-all cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-zinc-400 block -mb-0.5">Primary Email</span>
                    {personalInfo.email}
                  </div>
                </a>

                {/* Location card */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 text-zinc-700 dark:text-zinc-300">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block -mb-0.5">Location</span>
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              {/* Quick social grids */}
              <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                <h4 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                  Professional Anchors
                </h4>
                
                <div className="grid grid-cols-3 gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 text-center text-xs flex flex-col items-center gap-1 transition-all"
                  >
                    <Github size={15} />
                    <span className="text-[10px] font-mono">GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 text-center text-xs flex flex-col items-center gap-1 transition-all"
                  >
                    <Linkedin size={15} />
                    <span className="text-[10px] font-mono">LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 text-center text-xs flex flex-col items-center gap-1 transition-all"
                  >
                    <Code size={15} />
                    <span className="text-[10px] font-mono">LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact form box (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/35 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* Success Feedback Card */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                    id="contact-success-alert"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center animate-bounce">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="space-y-1.5 max-w-sm">
                      <h3 className="font-display font-extrabold text-lg text-zinc-900 dark:text-zinc-100">
                        Message Dispatched!
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        Thank you for reaching out. A copy of this message transaction has been simulated in-app. I will respond to your registered email shortly!
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-4.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-cyan-500 transition-colors cursor-pointer"
                    >
                      send another
                    </button>
                  </motion.div>
                ) : (
                  /* Standard contact form fields */
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    id="contact-form"
                  >
                    {/* Grid Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                          className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all ${
                            errors.name ? 'border-red-500/60 focus:ring-red-500/20' : 'border-zinc-200 dark:border-zinc-800/80'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle size={10} />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="recruiter@company.com"
                          className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all ${
                            errors.email ? 'border-red-500/60 focus:ring-red-500/20' : 'border-zinc-200 dark:border-zinc-800/80'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-1">
                            <AlertCircle size={10} />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Internship / Placement Opportunities"
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
                      />
                    </div>

                    {/* Message body input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Hi Sharanya, I reviewed your stock price LSTM deep learning model and want to schedule a brief call..."
                        className={`w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-zinc-900/50 text-sm text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all resize-none ${
                          errors.message ? 'border-red-500/60 focus:ring-red-500/20' : 'border-zinc-200 dark:border-zinc-800/80'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[10px] font-mono text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle size={10} />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit action button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-600/10 hover:shadow-cyan-600/20 cursor-pointer disabled:opacity-85"
                    >
                      {status === 'submitting' ? (
                        <>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Inquiry Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
