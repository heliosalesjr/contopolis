import React from 'react';
import { themes } from '../data/storyData';
import { useStoryStore } from '../stores/storyStore';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { useStoryGeneration } from '../hooks/useStoryGeneration';
import { useStaggeredAnimation } from '../hooks/useAnimations';

export const ThemePage = () => {
  const { selectedElements, updateSelection } = useStoryStore();
  const { navigateToStep, goToPreviousStep } = useStoryNavigation();
  const { generateStory } = useStoryGeneration();
  const { isItemVisible } = useStaggeredAnimation(themes, 150);

  const handleThemeSelect = async (themeId) => {
    updateSelection('theme', themeId);
    
    // Aguarda um momento para o usuário ver a seleção
    setTimeout(async () => {
      const updatedElements = { ...selectedElements, theme: themeId };
      await generateStory(updatedElements);
      navigateToStep('story');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">
            Escolha o Tema
          </h2>
          <p className="text-purple-200 text-lg">
            Qual será a lição da história?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {themes.map((theme, index) => (
            <div
              key={theme.id}
              onClick={() => handleThemeSelect(theme.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                isItemVisible(index) ? 'animate-slideUp' : 'opacity-0'
              } ${
                selectedElements.theme === theme.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl scale-105'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{theme.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {theme.name}
                </h3>
                <p className="text-purple-200 text-sm">
                  {theme.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={goToPreviousStep}
            className="px-6 py-3 rounded-full font-semibold bg-gray-600 hover:bg-gray-700 text-white transition-all duration-300"
          >
            ← Voltar
          </button>
        </div>
        
        {selectedElements.theme && (
          <div className="text-center mt-6">
            <div className="text-purple-200 animate-pulse">
              ✨ Gerando sua história mágica...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};