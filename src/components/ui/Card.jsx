import React from 'react';

export const Card = ({ 
  children, 
  onClick, 
  selected = false, 
  hoverable = true,
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  const hoverClasses = hoverable ? 'cursor-pointer transform hover:scale-105' : '';
  const selectedClasses = selected 
    ? 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl scale-105' 
    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20';
  
  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${selectedClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 text-center ${className}`} {...props}>
      {children}
    </div>
  );
};