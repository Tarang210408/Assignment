import React from 'react';
import { SKILLS } from '../constants';

const CircularProgress = ({ percentage }: { percentage: number }) => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(#ff4d8d_0deg,#ff4d8d_120deg,#ff8c42_240deg,#ff4d8d_360deg)] opacity-80" />
      <div className="absolute inset-[6px] rounded-full bg-[#0c0c0c] border border-white/10" />
      <span className="relative text-lg font-black text-white">{percentage}%</span>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="w-full px-4 md:px-12 py-12">
      <div className="mb-8">
        <h3 className="text-gray-400 font-bold uppercase tracking-[0.32em] text-sm">
          Skills
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILLS.map((skill) => (
          <div
            key={skill.id}
            className="bg-brand-card rounded-3xl p-6 border border-white/5 flex flex-row items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <div className="shrink-0">
               <CircularProgress percentage={skill.percentage} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;