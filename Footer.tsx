import React from 'react';
import ThankyouImage from '../238b3b2a524f9cface2cd139f974dd7f588178b2.jpg';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="w-full px-4 md:px-12 pb-10 pt-4">
      {/* Thank You Card */}
      <div className="bg-gradient-to-r from-[#9b66ff] via-[#7c5dff] to-[#f472b6] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 mb-12 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />

        <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-900 rounded-2xl overflow-hidden border-4 border-white/20 shrink-0 transform -rotate-3 shadow-2xl">
          <img
            src={ThankyouImage}
            alt="Thank you illustration"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center md:text-left">
          <p className="text-white/80 text-xs font-semibold uppercase mb-1 tracking-[0.18em]">
            Thanks for visit my website
          </p>
          <p className="text-white text-sm md:text-base font-medium max-w-lg leading-relaxed">
            If you have any questions you can write me to any of my social networks. I am sure I will answer you.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-6 mt-4 text-center">
        <p className="text-xs md:text-sm text-gray-500">
          © 2025 <span className="font-semibold text-white">Web</span>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;