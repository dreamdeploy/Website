import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectCategory, ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface SelectedWorkProps {
  onInquireProject: (projectTitle: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'applications', label: 'Applications' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'branding', label: 'Branding' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  const getLabelBadge = (label: string) => {
    switch (label) {
      case 'Concept Design':
        return 'bg-amber-100/80 text-amber-900 border-amber-200';
      case 'Demo Build':
        return 'bg-emerald-100/80 text-emerald-900 border-emerald-200';
      case 'Internal Project':
        return 'bg-violet-100/80 text-violet-900 border-violet-200';
      case 'Prototype':
        return 'bg-blue-100/80 text-blue-900 border-blue-200';
      case 'Experimental Project':
        return 'bg-purple-100/80 text-purple-900 border-purple-200';
      default:
        return 'bg-zinc-100 text-zinc-800 border-zinc-200';
    }
  };

  return (
    <section id="work" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#E8E4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD8CD] text-xs font-semibold text-zinc-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E57C2]" />
              <span>Studio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#13131A]">
              Selected work,{' '}
              <span className="font-editorial italic font-normal text-[#6D28D9]">
                concepts, and experiments.
              </span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg">
              Explore our recent prototypes, internal frameworks, and client-ready digital concepts. Every project highlights our focus on speed, typography, and purposeful UX.
            </p>
          </div>

          {/* Authenticity Notice */}
          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border border-[#E2DDD3] max-w-xs text-xs text-zinc-600 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-zinc-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
              <span>Transparent Portfolio</span>
            </div>
            <p className="text-[11px] text-zinc-500 leading-tight">
              All concepts are authentically built in-house with real code, not generic stock mockups.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 mr-2 font-code">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#13131A] text-white shadow-xs font-semibold'
                  : 'bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-[#E2DDD3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl border border-[#E8E4DC] overflow-hidden shadow-xs hover:shadow-premium hover:border-violet-300 transition-all duration-400 flex flex-col justify-between cursor-pointer"
            >
              {/* Project Mockup Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Floating Transparent Label */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`px-2.5 py-1 text-[11px] font-code font-semibold rounded-full border shadow-xs backdrop-blur-md ${getLabelBadge(project.label)}`}>
                    {project.label}
                  </span>
                </div>

                {/* Client / Industry Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-code uppercase bg-black/60 text-zinc-200 rounded-full backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-xs font-semibold text-zinc-900 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Case Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-violet-600" />
                  </span>
                </div>
              </div>

              {/* Project Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-code text-zinc-400 uppercase tracking-wider">
                    {project.clientType}
                  </div>
                  <h3 className="text-xl font-bold text-[#13131A] group-hover:text-violet-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Pills & Action */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-[10px] font-code bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-[10px] font-code text-zinc-400">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <span className="text-violet-700 font-semibold inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-[#13131A] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute right-0 top-0 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 max-w-xl z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-code text-violet-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Builds for Jammu & Beyond</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold">
              Have a custom project requirement in mind?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              From boutique storefronts to custom web dashboards, we construct exactly what your business operations demand.
            </p>
          </div>

          <button
            onClick={() => onInquireProject('Custom Solution')}
            className="z-10 px-6 py-3.5 text-xs font-semibold text-[#13131A] bg-white hover:bg-zinc-100 rounded-full transition-all duration-200 whitespace-nowrap shadow-md cursor-pointer inline-flex items-center gap-2"
          >
            <span>Request Custom Scope</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(title) => {
          setSelectedProject(null);
          onInquireProject(title);
        }}
      />
    </section>
  );
};
