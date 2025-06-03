import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const Background = ({ children, showStars = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Estrelas animadas de fundo */}
      {showStars && (
        <>
          {/* Estrelas grandes */}
          <div className="absolute top-20 left-20 animate-pulse">
            <Star className="w-6 h-6 text-yellow-300 opacity-70" />
          </div>
          <div className="absolute top-32 right-32 animate-ping">
            <Star className="w-4 h-4 text-yellow-200 opacity-60" />
          </div>
          <div className="absolute top-40 left-1/3 animate-pulse delay-1000">
            <Sparkles className="w-5 h-5 text-pink-300 opacity-50" />
          </div>
          <div className="absolute top-60 right-20 animate-bounce">
            <Star className="w-3 h-3 text-blue-200 opacity-40" />
          </div>
          
          {/* Estrelas médias */}
          <div className="absolute top-80 left-1/4 animate-pulse delay-500">
            <Star className="w-4 h-4 text-purple-300 opacity-60" />
          </div>
          <div className="absolute top-96 right-1/3 animate-ping delay-700">
            <Sparkles className="w-3 h-3 text-yellow-300 opacity-50" />
          </div>
          
          {/* Estrelas pequenas */}
          <div className="absolute bottom-40 left-10 animate-pulse delay-300">
            <Star className="w-2 h-2 text-white opacity-40" />
          </div>
          <div className="absolute bottom-60 right-10 animate-bounce delay-1200">
            <Star className="w-2 h-2 text-pink-200 opacity-30" />
          </div>
          <div className="absolute bottom-80 left-1/2 animate-ping delay-900">
            <Sparkles className="w-3 h-3 text-purple-200 opacity-40" />
          </div>
        </>
      )}
      
      {/* Gradiente sutil overlay para suavizar */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;