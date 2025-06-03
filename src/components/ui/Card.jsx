import React from 'react';
import { clsx } from 'clsx';

const Card = ({ 
  children, 
  variant = 'default',
  interactive = false,
  selected = false,
  className,
  onClick,
  ...props 
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variants = {
    default: "bg-white/10 backdrop-blur-sm",
    glass: "bg-white/10 backdrop-blur-md shadow-2xl",
    solid: "bg-white shadow-lg",
    gradient: selected 
      ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl scale-105" 
      : "bg-white/10 backdrop-blur-sm hover:bg-white/20"
  };
  
  const interactiveClasses = interactive 
    ? "cursor-pointer hover:scale-105 hover:shadow-lg" 
    : "";

  return (
    <div
      className={clsx(
        baseClasses,
        variants[variant],
        interactiveClasses,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Subcomponentes para melhor organização
Card.Header = ({ children, className, ...props }) => (
  <div className={clsx("p-6 pb-4", className)} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className, ...props }) => (
  <div className={clsx("p-6", className)} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className, ...props }) => (
  <div className={clsx("p-6 pt-4", className)} {...props}>
    {children}
  </div>
);

export default Card;