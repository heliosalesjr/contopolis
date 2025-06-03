import React, { useState } from 'react';
import { BookOpen, Trash2, Eye } from 'lucide-react';
import { useStoryStore } from '../stores/storyStore';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { useStaggeredAnimation } from '../hooks/useAnimations';

export const LibraryPage = () => {
  const { savedStories, removeStory, setCurrentStory } = useStoryStore();
  const { goHome, navigateToStep } = useStoryNavigation();
  const [selectedStory, setSelectedStory] = useState(null);
  const {  isItemVisible } = useStaggeredAnimation(savedStories, 100);

  const handleReadStory = (story) => {
    setCurrentStory(story.story);
    navigateToStep('story');
  };

  const handleDeleteStory = (storyId) => {
    if (window.confirm('Tem certeza que deseja excluir esta história?')) {
      removeStory(storyId);
    }
  };

  const StoryModal = ({ story, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{story.title}</h3>
          <button
            onClick={onClose}
            className="text-purple-300 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>
        <p className="text-purple-100 leading-relaxed font-serif whitespace-pre-wrap">
          {story.story}
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => handleReadStory(story)}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
            Ler com Animação
          </button>
        </div>
      </div>
    </div>
  );

  if (savedStories.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <BookOpen className="w-20 h-20 text-purple-300 mx-auto mb-6 opacity-50" />
          <h2 className="text-2xl font-bold text-white mb-4 font-serif">
            Biblioteca Vazia
          </h2>
          <p className="text-purple-200 mb-8">
            Você ainda não salvou nenhuma história. Que tal criar sua primeira história mágica?
          </p>
          <button
            onClick={goHome}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            ✨ Criar Primeira História
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">
            📚 Biblioteca dos Sonhos
          </h2>
          <p className="text-purple-200">
            Suas histórias salvas ({savedStories.length})
          </p>
        </div>
        
        <div className="grid gap-4 mb-8">
          {savedStories.map((story, index) => (
            <div 
              key={story.id} 
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:bg-white/20 ${
                isItemVisible(index) ? 'animate-slideUp' : 'opacity-0'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {story.title}
                  </h3>
                  <span className="text-purple-300 text-sm">
                    {story.date}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 hover:text-white transition-all duration-200"
                    title="Visualizar"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteStory(story.id)}
                    className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-300 hover:text-white transition-all duration-200"
                    title="Excluir"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-purple-100 line-clamp-3 mb-4">
                {story.story.substring(0, 150)}...
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2 text-sm">
                  <span className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full">
                    {story.elements?.character || 'Personagem'}
                  </span>
                  <span className="bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full">
                    {story.elements?.setting || 'Cenário'}
                  </span>
                  <span className="bg-green-500/20 text-green-200 px-2 py-1 rounded-full">
                    {story.elements?.theme || 'Tema'}
                  </span>
                </div>
                
                <button
                  onClick={() => handleReadStory(story)}
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-200"
                >
                  Ler História →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={goHome}
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 mr-4"
          >
            ← Voltar ao Início
          </button>
          
          <button
            onClick={() => navigateToStep('character')}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            ✨ Nova História
          </button>
        </div>
      </div>

      {selectedStory && (
        <StoryModal 
          story={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </div>
  );
};