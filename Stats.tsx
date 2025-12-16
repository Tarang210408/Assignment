import React from 'react';
import { Sparkles } from 'lucide-react';

const stats = [
  {
    value: '90%',
    label: 'Job Success Score on Upwork',
  },
  {
    value: '>25.000',
    label: 'Duplicates on Figma Community',
  },
  {
    value: '>2K',
    label: 'In Finished Works',
  },
];

const Stats: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-12 py-12">
      <div className="bg-brand-card rounded-3xl p-8 flex flex-col gap-6 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <span className="text-4xl md:text-5xl font-black text-brand-green drop-shadow-[0_0_18px_rgba(163,230,53,0.35)]">
                {stat.value}
              </span>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide max-w-[180px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;