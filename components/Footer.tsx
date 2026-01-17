import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051120] py-12 border-t border-[#D4DBE2]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <ShieldCheck className="text-[#C47F2A] h-6 w-6" />
           <span className="text-[#D4DBE2] font-bold tracking-tight">IRONCLAD <span className="text-white">CAS</span></span>
        </div>
        <div className="text-[#D4DBE2] text-sm">
          &copy; {new Date().getFullYear()} IronClad CAS. All rights reserved.
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