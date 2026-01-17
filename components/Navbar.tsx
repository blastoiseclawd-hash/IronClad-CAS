import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Button from './Button';
import { ViewState } from '../types';

interface NavbarProps {
  onCtaClick: () => void;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick, currentView, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setView('landing');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleViewChange = (view: ViewState) => {
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#D4DBE2]/95 backdrop-blur-md border-b border-[#0B1F3A]/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('top')}>
             {/* Replaced icon with logo image. Assumes logo.png is in the public folder. */}
             <img src="/logo.png" alt="IronClad CAS" className="h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('symptoms')} className="text-[#0B1F3A] hover:text-[#C47F2A] font-semibold transition-colors">The Problems</button>
            <button onClick={() => handleNavClick('solution')} className="text-[#0B1F3A] hover:text-[#C47F2A] font-semibold transition-colors">The System</button>
            <button onClick={() => handleNavClick('services')} className="text-[#0B1F3A] hover:text-[#C47F2A] font-semibold transition-colors">Services</button>
            <button onClick={() => handleViewChange('articles')} className="text-[#0B1F3A] hover:text-[#C47F2A] font-semibold transition-colors">Insights</button>
            <button onClick={() => handleViewChange('about')} className="text-[#0B1F3A] hover:text-[#C47F2A] font-semibold transition-colors">Our Firm</button>
            <button onClick={() => handleNavClick('contact')} className="text-[#0B1F3A] hover:text-[#C47F2A] font-semibold transition-colors">Contact</button>
            <Button onClick={onCtaClick} variant="secondary" className="py-2 px-6 text-xs shadow-none">Book Strategy Call</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-[#0B1F3A]">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D4DBE2] border-t border-[#0B1F3A]/10 px-4 pt-4 pb-6 space-y-4 shadow-xl">
             <button onClick={() => handleNavClick('symptoms')} className="block w-full text-left text-[#0B1F3A] font-semibold py-2">The Problems</button>
            <button onClick={() => handleNavClick('solution')} className="block w-full text-left text-[#0B1F3A] font-semibold py-2">The System</button>
            <button onClick={() => handleNavClick('services')} className="block w-full text-left text-[#0B1F3A] font-semibold py-2">Services</button>
            <button onClick={() => handleViewChange('articles')} className="block w-full text-left text-[#0B1F3A] font-semibold py-2">Insights</button>
            <button onClick={() => handleViewChange('about')} className="block w-full text-left text-[#0B1F3A] font-semibold py-2">Our Firm</button>
             <button onClick={() => handleNavClick('contact')} className="block w-full text-left text-[#0B1F3A] font-semibold py-2">Contact</button>
            <Button onClick={onCtaClick} variant="primary" className="w-full text-center mt-4">Book Strategy Call</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;