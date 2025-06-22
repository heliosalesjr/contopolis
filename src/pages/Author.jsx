import React from 'react';
import { User, Code, Heart } from 'lucide-react';

export const Author = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <User className="w-20 h-20 text-yellow-200 mx-auto mb-4 animate-pulse" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 font-serif">
          Hélio Sales Jr.
        </h1>
        
        <div className="space-y-4 text-purple-200">
          <div className="flex items-center justify-center space-x-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-lg">Desenvolvedor</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="text-lg">Criador do Contópolis</span>
          </div>
        </div>
        
        <p className="text-purple-200 mt-6 text-lg leading-relaxed">
          Desenvolvido com carinho para criar momentos mágicos entre pais e filhos
        </p>
      </div>
    </div>
  );
};

export default Author;