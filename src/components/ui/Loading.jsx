import React from 'react';
import { Moon, Star } from 'lucide-react';

const Loading = ({ message = "Criando sua história mágica..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Animação da lua e estrelas */}
      <div className="relative mb-6">
        {/* Luna central */}
        <Moon className="w-16 h-16 text-yellow-200 animate-pulse" />
        
        {/* Estrelas orbitando */}
        <div className="absolute -top-2 -right-2 animate-bounce">
          <Star className="w-4 h-4 text-yellow-300" />
        </div>
        <div className="absolute -bottom-2 -left-2 animate-bounce delay-300">
          <Star className="w-3 h-3 text-pink-300" />
        </div>
        <div className="absolute top-1/2 -left-4 animate-bounce delay-500">
          <Star className="w-2 h-2 text-purple-300" />
        </div>
      </div>
      
      {/* Texto de loading */}
      <p className="text-purple-200 text-lg font-medium text-center max-w-xs">
        {message}
      </p>
      
      {/* Barra de progresso animada */}
      <div className="mt-4 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse" 
             style={{
               animation: 'loading-progress 2s ease-in-out infinite'
             }}
        />
      </div>
      
      {/* Pontinhos animados */}
      <div className="flex gap-1 mt-4">
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100" />
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200" />
      </div>
      
      <style jsx>{`
        @keyframes loading-progress {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;