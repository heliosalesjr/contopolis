import React from 'react';
import { Moon, Star, Sparkles } from 'lucide-react';
import { useStoryStore } from '../stores/storyStore';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { useAnimations } from '../hooks/useAnimations';

export const WelcomePage = () => {
  const { savedStories } = useStoryStore();
  const { navigateToStep } = useStoryNavigation();
  const { isVisible } = useAnimations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className={`text-center max-w-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 relative">
          <Moon className="w-20 h-20 text-yellow-200 mx-auto mb-4 animate-pulse" />
          <div className="absolute -top-2 -right-2">
            <Star className="w-6 h-6 text-yellow-300 animate-ping" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Sparkles className="w-5 h-5 text-pink-300 animate-bounce" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 font-serif">
          Histórias dos Sonhos
        </h1>
        <p className="text-purple-200 mb-8 text-lg leading-relaxed">
          Crie histórias mágicas personalizadas para uma noite de sono tranquila e cheia de sonhos bonitos
        </p>
        
        <button
          onClick={() => navigateToStep('character')}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          ✨ Criar Minha História
        </button>
        
        {savedStories.length > 0 && (
          <button
            onClick={() => navigateToStep('library')}
            className="mt-4 block mx-auto text-purple-300 hover:text-white transition-colors duration-200"
          >
            📚 Ver Histórias Salvas ({savedStories.length})
          </button>
        )}
      </div>
    </div>
  );
};