import React from 'react';

export const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 ${className}`}>
      {children}
    </div>
  );
};

export const Container = ({ children, className = '', maxWidth = '4xl' }) => {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
};