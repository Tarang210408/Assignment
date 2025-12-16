import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Dribbble, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full px-4 md:px-12 py-12 flex flex-col md:flex-row gap-10 items-stretch justify-between"
    >
      {/* Left Content */}
      <div className="flex-1 space-y-7 text-center md:text-left min-h-[360px] md:min-h-[420px] lg:min-h-[480px] flex flex-col justify-center">
       

        <div className="space-y-3">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-[-0.06em] uppercase">
            Product <br />
            <span className="inline-block relative">
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gradient-to-r from-brand-pink/30 to-brand-orange/40 blur-md" />
              Designer
            </span>
          </h1>
          <h2 className="text-5xl md:text-6xl font-black gradient-text uppercase tracking-[0.12em]">
            Cristian Munoz
          </h2>

        
        </div>

        <div className="flex gap-3 justify-center md:justify-start text-gray-300">
          {[
            { icon: <Instagram size={18} />, label: 'Instagram' },
            { icon: <Facebook size={18} />, label: 'Facebook' },
            { icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { icon: <Twitter size={18} />, label: 'Twitter' },
            { icon: <Dribbble size={18} />, label: 'Dribbble' },
          ].map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="bg-white/5 border border-white/10 rounded-full p-2 hover:border-brand-pink hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="gradient-border-button px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] flex items-center gap-2">
            <Download size={18} className="translate-y-[1px]" />
            Download Curriculum Vitae
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex flex-1 w-full max-w-xl relative min-h-[420px] lg:min-h-[480px] items-center">
        <div className="absolute -top-10 -right-6 w-56 h-56 bg-brand-pink/25 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-12 -left-10 w-64 h-64 bg-brand-orange/25 rounded-full blur-3xl opacity-50" />

        <div className="relative rounded-[30px] overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
          <img
            src="238b3b2a524f9cface2cd139f974dd7f588178b2.jpg"
            alt="Design workspace with laptop and color palettes"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;