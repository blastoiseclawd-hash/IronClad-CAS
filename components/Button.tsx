import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ai';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  disabled = false 
}) => {
  let variantStyles = "";
  
  if (variant === 'primary') {
    variantStyles = `bg-[#C47F2A] hover:bg-[#A86B22] text-white shadow-[#C47F2A]/20`;
  } else if (variant === 'secondary') {
    variantStyles = `bg-[#0B1F3A] hover:bg-[#102A4C] text-white border border-[#D4DBE2]`;
  } else if (variant === 'outline') {
    variantStyles = `bg-transparent border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A]`;
  } else if (variant === 'ai') {
    variantStyles = `bg-gradient-to-r from-[#C47F2A] to-[#8c5719] text-white shadow-[#C47F2A]/20`;
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`font-bold py-4 px-8 rounded-lg transition-all duration-200 uppercase tracking-wide text-sm md:text-base flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;