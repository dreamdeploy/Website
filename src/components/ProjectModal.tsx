import React from 'react';
import { ProjectItem } from '../types';
import { X, Check, Code, ArrowUpRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquireSimilar }) => {
  if (!project) return null;

  const getLabelColor = (label: string) => {
    switch (label) {
      case 'Concept Design': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Demo Build': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Internal Project': return 'bg-violet-100 text-violet-800 border-violet-200';
      case 'Prototype': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Experimental Project': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-zinc-100 text-zinc-800 border-zinc-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl border border-zinc-200 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`px-2.5 py-1 text-xs font-code font-semibold rounded-full border ${getLabelColor(project.label)}`}>
              {project.label}
            </span>
            <span className="text-xs text-zinc-500 font-code">
              {project.clientType} • {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#13131A] tracking-tight">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-zinc-600 font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Full Resolution Mockup Visual */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950 aspect-video shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Metrics & Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E4DC]">
            {project.metricsOrHighlights.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-xs text-zinc-500 font-code uppercase">
                  {m.label}
                </div>
                <div className="text-xl font-bold text-violet-950">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Overview, Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 bg-[#F9F8F6] p-5 rounded-2xl border border-[#EAE6DE]">
              <div className="flex items-center gap-2 text-xs font-bold font-code text-zinc-700 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-violet-600" />
                <span>The Problem Context</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3 bg-violet-50/50 p-5 rounded-2xl border border-violet-100">
              <div className="flex items-center gap-2 text-xs font-bold font-code text-violet-900 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span>The Engineered Solution</span>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 font-code">
              Scope & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-800 bg-white p-2.5 rounded-xl border border-zinc-200">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 font-code">
              Architecture & Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 text-xs font-code font-medium text-zinc-800 border border-zinc-200"
                >
                  <Code className="w-3.5 h-3.5 text-violet-600" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Transparency Disclaimer Note */}
          <div className="flex items-start gap-3 bg-zinc-50 p-4 rounded-xl border border-zinc-200 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
            <p>
              <strong className="text-zinc-700">Studio Transparency Notice:</strong> This project is an official <span className="underline decoration-violet-400">{project.label}</span> built by DreamDeploy to demonstrate architecture, layout engineering, and user ergonomics.
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-[#FAF8F5] px-6 py-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-zinc-500 font-code">
            Interested in a similar build for your brand?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireSimilar(project.title);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#13131A] hover:bg-[#2A2A38] rounded-full transition-all cursor-pointer shadow-sm"
            >
              <span>Discuss Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
