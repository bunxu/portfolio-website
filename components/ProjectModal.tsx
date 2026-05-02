
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, Calendar, User, Briefcase } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md pointer-events-auto"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-10 pointer-events-auto h-full max-h-[90vh]"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 relative h-64 md:h-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent md:bg-gradient-to-r"></div>
              
              <button 
                onClick={onClose}
                className="absolute top-6 left-6 glass-dark text-white p-3 rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2 font-bold text-xs uppercase tracking-widest shadow-xl"
              >
                <X size={18} /> Close
              </button>
            </div>
            
            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-600 glass px-3 py-1 rounded-full border-blue-200/30">
                  {project.category}
                </span>
                <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <Calendar size={12} /> {project.year}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif mb-12 tracking-tight leading-tight">{project.title}</h2>
              
              <div className="grid gap-12">
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                    <Briefcase size={14} className="text-blue-500" /> Project Brief
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {project.longDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                    <ArrowUpRight size={14} className="text-blue-500" /> Key Outcome
                  </h3>
                  <div className="glass p-6 rounded-2xl border-blue-100/50">
                    <p className="text-slate-700 leading-relaxed font-bold">
                      {project.outcome}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                      <User size={12} className="text-blue-500" /> Role
                    </h4>
                    <p className="font-bold text-slate-800">{project.role}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                      <Zap size={12} className="text-blue-500" /> Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-wider glass px-2 py-1 rounded-lg text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <button 
                  onClick={onClose}
                  className="w-full py-5 bg-slate-900 text-white rounded-[24px] font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200"
                >
                  Back to Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
