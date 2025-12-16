import React from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="w-full px-4 md:px-12 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-gray-400 font-bold uppercase tracking-[0.32em] text-sm">
          Portfolio
        </h3>
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-[0.18em]">
          <span className="w-2 h-2 rounded-full bg-brand-pink" />
          Selected Works
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className={`bg-brand-card rounded-2xl p-4 border border-white/5 hover:border-white/15 transition-colors group shadow-[0_20px_50px_rgba(0,0,0,0.35)] ${
              index >= 2 ? 'hidden md:block' : ''
            }`}
          >
            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </div>

            <h4 className="font-bold text-white text-lg mb-1">{project.title}</h4>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gray-400 mb-3">
              {project.category}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold uppercase px-2 py-1 bg-white/5 text-gray-200 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full py-2 rounded-full border border-white/10 text-gray-200 text-xs font-bold uppercase tracking-[0.16em] hover:bg-white hover:text-black transition-all">
              View Project Detail
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;