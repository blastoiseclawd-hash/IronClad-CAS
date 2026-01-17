import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Updated with your specific link
const CALENDLY_URL = "https://calendly.com/leeserel/30min"; 

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      script.setAttribute('async', 'true');
      head?.appendChild(script);

      return () => {
        head?.removeChild(script);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/90 backdrop-blur-sm">
      <div className="bg-[#D4DBE2] rounded-xl shadow-2xl border border-[#0B1F3A] w-full max-w-4xl h-[85vh] overflow-hidden relative flex flex-col">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 bg-white border-b border-[#0B1F3A]/10">
            <h3 className="text-[#0B1F3A] font-bold text-lg">Schedule Your Strategy Session</h3>
            <button 
            onClick={onClose} 
            className="bg-[#0B1F3A] text-white p-2 rounded-full hover:bg-[#C47F2A] transition-colors"
            >
            <X size={20} />
            </button>
        </div>

        {/* Calendly Widget Container */}
        <div className="w-full h-full bg-white relative">
            <div 
                className="calendly-inline-widget" 
                data-url={CALENDLY_URL} 
                style={{ minWidth: '320px', height: '100%' }} 
            />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;