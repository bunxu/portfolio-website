
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative h-64 md:h-96 w-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all"
          >
            ✕
          </button>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
              {project.category}
            </span>
            <span className="text-sm text-gray-500">{project.year}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif mb-6">{project.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Brief</h3>
                <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Outcome</h3>
                <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Role</h4>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs border border-gray-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center">
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-black transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
