import React from 'react';
import { settings } from '../data/storyData';
import { useStoryStore } from '../stores/storyStore';
//import { useStoryNavigation } from '../hooks/useStoryNavigation';
//import { useStaggeredAnimation } from '../hooks/useAnimations';

export const SettingPage = () => {
  const { selectedElements, updateSelection } = useStoryStore();
  //const { goToNextStep, goToPreviousStep, canProceed } = useStoryNavigation();
  //const { isItemVisible } = useStaggeredAnimation(settings, 150);

  const handleSettingSelect = (settingId) => {
    updateSelection('setting', settingId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">
            Escolha o Cenário
          </h2>
          <p className="text-purple-200 text-lg">
            Onde acontecerá a aventura?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {settings.map((setting, index) => (
            <div
              key={setting.id}
              onClick={() => handleSettingSelect(setting.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                isItemVisible(index) ? 'animate-slideUp' : 'opacity-0'
              } ${
                selectedElements.setting === setting.id
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 shadow-xl scale-105'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{setting.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {setting.name}
                </h3>
                <p className="text-purple-200 text-sm">
                  {setting.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={goToPreviousStep}
            className="px-6 py-3 rounded-full font-semibold bg-gray-600 hover:bg-gray-700 text-white transition-all duration-300"
          >
            ← Voltar
          </button>
          
          <button
            onClick={goToNextStep}
            disabled={!canProceed()}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              canProceed()
                ? 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white transform hover:scale-105'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continuar ➜
          </button>
        </div>
      </div>
    </div>
  );
};