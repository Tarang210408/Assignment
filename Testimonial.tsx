import React from 'react';
import { Shield } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-12 py-12">
      <div className="w-full rounded-3xl p-8 md:p-16 text-center relative overflow-hidden bg-gradient-to-r from-[#ff6a4a] via-[#ff4d8d] to-[#7c5dff]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          <h3 className="text-white font-bold text-lg md:text-xl mb-4 uppercase tracking-[0.18em]">
            Kaleb Lechtenberg
          </h3>
          
          <p className="text-white text-sm md:text-lg leading-relaxed font-medium mb-8">
            "Working with this freelancer has been great. His attention to detail is unparalleled and finished all work ahead of schedule. Will gladly send more work and I do not hesitate to recommend him to you on your project also."
          </p>

          <Shield className="text-white fill-white drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)]" size={40} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;