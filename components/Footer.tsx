import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051120] py-12 border-t border-[#D4DBE2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           {/* Replaced icon with logo image. Assumes logo.png is in the public folder. */}
           <img src="/logo.png" alt="IronClad CAS" className="h-10 w-auto" />
           <span className="text-[#D4DBE2] font-bold tracking-tight sr-only">IRONCLAD CAS</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-[#D4DBE2] text-sm">
          <span>&copy; {new Date().getFullYear()} IronClad CAS. All rights reserved.</span>
          <a href="mailto:Lee@ironcladcas.com" className="flex items-center gap-2 hover:text-[#C47F2A] transition-colors">
            <Mail size={14} /> Lee@ironcladcas.com
          </a>
        </div>
        <div className="flex gap-6 text-sm font-semibold text-[#D4DBE2]">
          <button className="hover:text-white transition-colors">Privacy</button>
          <button className="hover:text-white transition-colors">Terms</button>
          <span className="text-[#C47F2A]">Specializing in SMB Profitability</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;