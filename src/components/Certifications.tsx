import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, ChevronDown, Award, ShieldCheck, Cloud, Brain, 
  Laptop, Layers, Compass, Eye, Download, X, ExternalLink 
} from 'lucide-react';
import { certificationsList } from '../data';
import { Certification } from '../types';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Exact requested order of organizations
  const organizationsOrder = [
    'Cisco Networking Academy',
    'Infosys Springboard',
    'AWS',
    'Tata iQ',
    'Deloitte',
    'Salesforce',
    'Hexart AI'
  ];

  // Collapsible state for each organization
  const [expandedOrgs, setExpandedOrgs] = useState<Record<string, boolean>>({
    'Cisco Networking Academy': true,
    'Infosys Springboard': true,
    'AWS': true,
    'Tata iQ': true,
    'Deloitte': true,
    'Salesforce': true,
    'Hexart AI': true
  });

  const toggleOrg = (org: string) => {
    setExpandedOrgs(prev => ({
      ...prev,
      [org]: !prev[org]
    }));
  };

  // Group certificates by issuer dynamically matching requested order
  const groupedCertifications = useMemo(() => {
    const groups: Record<string, Certification[]> = {};
    
    organizationsOrder.forEach(org => {
      groups[org] = [];
    });

    certificationsList.forEach(cert => {
      const issuer = cert.issuer;
      if (groups[issuer]) {
        groups[issuer].push(cert);
      } else {
        // Fallback for case matching or partial names
        const matchedOrg = organizationsOrder.find(org => org.toLowerCase() === issuer.toLowerCase());
        if (matchedOrg) {
          groups[matchedOrg].push(cert);
        } else {
          if (!groups[issuer]) {
            groups[issuer] = [];
          }
          groups[issuer].push(cert);
        }
      }
    });

    return groups;
  }, []);

  const getIssuerLogo = (issuer: string) => {
    let initials = issuer.substring(0, 2).toUpperCase();
    let bg = 'bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400';
    if (issuer === 'Google Cloud') {
      bg = 'bg-blue-500/10 text-blue-600 dark:text-blue-400';
      initials = 'G';
    } else if (issuer === 'AWS') {
      bg = 'bg-amber-500/10 text-amber-600 dark:text-amber-500';
      initials = 'A';
    } else if (issuer === 'Salesforce') {
      bg = 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400';
      initials = 'SF';
    } else if (issuer === 'Cisco' || issuer === 'Cisco Networking Academy') {
      bg = 'bg-teal-500/10 text-teal-600 dark:text-teal-400';
      initials = 'CS';
    } else if (issuer === 'Infosys Springboard') {
      bg = 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400';
      initials = 'I';
    }
    return (
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-xs shrink-0 ${bg}`}>
        {initials}
      </div>
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud':
        return <Cloud size={14} className="text-blue-500" />;
      case 'AI & ML':
        return <Brain size={14} className="text-purple-500" />;
      case 'Software Engineering':
        return <Laptop size={14} className="text-green-500" />;
      case 'Networking':
        return <ShieldCheck size={14} className="text-teal-500" />;
      case 'Professional':
        return <Layers size={14} className="text-amber-500" />;
      default:
        return <Compass size={14} className="text-zinc-500" />;
    }
  };

  const handleDownload = (pdfUrl: string | undefined, title: string) => {
    const url = pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const link = document.createElement('a');
    link.href = url;
    const cleanTitle = title.replace(/[^a-zA-Z0-9]/g, '_');
    link.setAttribute('download', `${cleanTitle}_Certificate.pdf`);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Custom configuration for each organization header
  const orgConfig: Record<string, { icon: React.ReactNode; color: string; badge: string }> = {
    'Cisco Networking Academy': {
      icon: <ShieldCheck className="text-teal-600 dark:text-teal-400" size={20} />,
      color: 'border-teal-500/10 dark:border-teal-500/5 bg-teal-50/40 dark:bg-teal-950/5 hover:bg-teal-50/70 dark:hover:bg-teal-950/10 text-teal-950 dark:text-teal-50',
      badge: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/10'
    },
    'Infosys Springboard': {
      icon: <Laptop className="text-indigo-600 dark:text-indigo-400" size={20} />,
      color: 'border-indigo-500/10 dark:border-indigo-500/5 bg-indigo-50/40 dark:bg-indigo-950/5 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/10 text-indigo-950 dark:text-indigo-50',
      badge: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/10'
    },
    'AWS': {
      icon: <Cloud className="text-amber-600 dark:text-amber-500" size={20} />,
      color: 'border-amber-500/10 dark:border-amber-500/5 bg-amber-50/40 dark:bg-amber-950/5 hover:bg-amber-50/70 dark:hover:bg-amber-950/10 text-amber-950 dark:text-amber-50',
      badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-500 border-amber-500/10'
    },
    'Tata iQ': {
      icon: <Layers className="text-blue-600 dark:text-blue-400" size={20} />,
      color: 'border-blue-500/10 dark:border-blue-500/5 bg-blue-50/40 dark:bg-blue-950/5 hover:bg-blue-50/70 dark:hover:bg-blue-950/10 text-blue-950 dark:text-blue-50',
      badge: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/10'
    },
    'Deloitte': {
      icon: <Compass className="text-emerald-600 dark:text-emerald-400" size={20} />,
      color: 'border-emerald-500/10 dark:border-emerald-500/5 bg-emerald-50/40 dark:bg-emerald-950/5 hover:bg-emerald-50/70 dark:hover:bg-emerald-950/10 text-emerald-950 dark:text-emerald-50',
      badge: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/10'
    },
    'Salesforce': {
      icon: <Award className="text-cyan-600 dark:text-cyan-400" size={20} />,
      color: 'border-cyan-500/10 dark:border-cyan-500/5 bg-cyan-50/40 dark:bg-cyan-950/5 hover:bg-cyan-50/70 dark:hover:bg-cyan-950/10 text-cyan-950 dark:text-cyan-50',
      badge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/10'
    },
    'Hexart AI': {
      icon: <Brain className="text-purple-600 dark:text-purple-400" size={20} />,
      color: 'border-purple-500/10 dark:border-purple-500/5 bg-purple-50/40 dark:bg-purple-950/5 hover:bg-purple-50/70 dark:hover:bg-purple-950/10 text-purple-950 dark:text-purple-50',
      badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/10'
    }
  };

  return (
    <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950/20 transition-colors duration-300 relative" id="certifications-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Industry <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Certifications</span>
          </h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-mono text-xs uppercase tracking-wider">
            Verified credentials organized by issuing organizations
          </p>
        </div>

        {/* Expandable Organization Accordions */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {organizationsOrder.map((org) => {
            const certs = groupedCertifications[org] || [];
            const isExpanded = !!expandedOrgs[org];
            const config = orgConfig[org] || {
              icon: <Trophy className="text-cyan-600" size={20} />,
              color: 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50',
              badge: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/10'
            };

            return (
              <div 
                key={org}
                className="border border-zinc-200/80 dark:border-zinc-900 rounded-3xl bg-white dark:bg-zinc-900/10 overflow-hidden shadow-sm transition-all"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleOrg(org)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left transition-all border-b border-zinc-150 dark:border-zinc-900/65 cursor-pointer ${config.color}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-white dark:bg-zinc-900 shadow-sm shrink-0 border border-zinc-200/45 dark:border-zinc-800/60">
                      {config.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base sm:text-lg tracking-tight">
                        {org}
                      </h3>
                      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                        ({certs.length} {certs.length === 1 ? 'Certification' : 'Certifications'})
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`hidden sm:inline-flex px-3 py-1 rounded-full text-[11px] font-bold border ${config.badge}`}>
                      {certs.length} Credentials
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-zinc-400 dark:text-zinc-500"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                </button>

                {/* Accordion Content with Dynamic Height Motion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/10"
                    >
                      <div className="p-5 md:p-6">
                        {certs.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                            {certs.map((cert) => (
                              <div
                                key={cert.title}
                                className="group p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-900 bg-white dark:bg-zinc-900/40 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/5 to-transparent blur-xl pointer-events-none" />

                                <div className="space-y-3.5">
                                  {/* Card Top */}
                                  <div className="flex items-start justify-between gap-3">
                                    {getIssuerLogo(cert.issuer)}
                                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-950 font-mono text-[10px] text-zinc-500 dark:text-zinc-400 border border-zinc-200/25">
                                      {getCategoryIcon(cert.category)}
                                      {cert.category}
                                    </span>
                                  </div>

                                  {/* Title & Issuer */}
                                  <div className="space-y-1">
                                    <h4 className="font-display font-extrabold text-sm sm:text-base text-zinc-900 dark:text-zinc-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                                      {cert.title}
                                    </h4>
                                    <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                                      {cert.issuer}
                                    </p>
                                  </div>
                                </div>

                                {/* Bottom Metadata info */}
                                <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/40 pt-4 mt-4 font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                                  <span>Verified: {cert.date}</span>
                                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                                    <a
                                      href={cert.credentialUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-bold transition-colors cursor-pointer"
                                    >
                                      verify
                                      <ExternalLink size={10} />
                                    </a>
                                  )}
                                </div>

                                {/* Custom Responsive Action Buttons */}
                                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
                                  <a
                                    href={cert.viewUrl || cert.pdfUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-700 dark:text-cyan-400 border border-cyan-500/10 hover:border-cyan-500/30 transition-all cursor-pointer shadow-sm hover:shadow-md text-center"
                                    title="View Certificate in New Tab"
                                  >
                                    <Eye size={13} />
                                    View Certificate
                                  </a>
                                  <button
                                    onClick={() => handleDownload(cert.pdfUrl, cert.title)}
                                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-transparent hover:border-zinc-200/20 transition-all cursor-pointer shadow-sm hover:shadow-md"
                                    title="Download Certificate PDF"
                                  >
                                    <Download size={13} />
                                    Download Certificate
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-8">
                            <p className="text-zinc-400 dark:text-zinc-500 text-sm font-mono">
                              No credentials listed for this organization.
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Lightbox/Modal Portal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 shadow-2xl overflow-hidden my-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-950/40">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Credential Explorer
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-850 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Container */}
              <div className="p-6 overflow-y-auto space-y-6 max-h-[70vh]">
                
                {/* Large Preview Area */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 aspect-[16/10] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center group shadow-inner">
                  {selectedCert.previewImage ? (
                    <img
                      src={selectedCert.previewImage}
                      alt={`${selectedCert.title} Certificate Preview`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-zinc-400 space-y-2">
                      <Award size={48} className="text-zinc-300 dark:text-zinc-700 animate-bounce" />
                      <span className="font-mono text-xs">No preview image available</span>
                    </div>
                  )}
                  {/* Subtle dark glass vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 backdrop-blur-md text-white font-mono text-[10px] border border-zinc-850">
                    {getCategoryIcon(selectedCert.category)}
                    <span>{selectedCert.category}</span>
                  </div>
                </div>

                {/* Content Metadata */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50 leading-snug">
                      {selectedCert.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                      <p className="font-display">
                        Issued by: <span className="font-bold text-zinc-800 dark:text-zinc-200">{selectedCert.issuer}</span>
                      </p>
                      <span className="text-zinc-300 dark:text-zinc-700">•</span>
                      <p className="font-mono text-[11px]">
                        Completion: <span className="text-zinc-700 dark:text-zinc-300">{selectedCert.date}</span>
                      </p>
                    </div>
                  </div>

                  {/* Skills Gained Section */}
                  {selectedCert.skillsGained && selectedCert.skillsGained.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        Skills Gained & Verified:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCert.skillsGained.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-cyan-500/10 dark:bg-cyan-500/5 text-cyan-700 dark:text-cyan-400 border border-cyan-500/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 px-6 py-5 border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950/40 shrink-0">
                <a
                  href={selectedCert.viewUrl || selectedCert.pdfUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all cursor-pointer shadow-md shadow-cyan-500/10 text-center"
                >
                  <ExternalLink size={14} />
                  Open Original Certificate
                </a>
                
                <button
                  onClick={() => handleDownload(selectedCert.pdfUrl, selectedCert.title)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-transparent hover:border-zinc-200/20 transition-all cursor-pointer shadow-sm text-center"
                >
                  <Download size={14} />
                  Download Certificate
                </button>
                
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-all cursor-pointer text-center"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
