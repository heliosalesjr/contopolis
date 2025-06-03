import React from 'react';
import { BookOpen, Heart, RefreshCw } from 'lucide-react';
import { useStoryStore } from '../stores/storyStore';
import { useStoryNavigation } from '../hooks/useStoryNavigation';
import { useStoryGeneration } from '../hooks/useStoryGeneration';
import { useTypewriter } from '../hooks/useAnimations';

export const StoryPage = () => {
  const { savedStories, saveStory, selectedElements } = useStoryStore();
  const { startNewStory, navigateToStep } = useStoryNavigation();
  const { generatedStory, isGenerating } = useStoryGeneration();
  const { displayText, isComplete } = useTypewriter(generatedStory, 30);

  const handleSaveStory = () => {
    if (generatedStory && selectedElements.character) {
      saveStory({
        story: generatedStory,
        elements: selectedElements
      });
    }
  };

  const isStorySaved = savedStories.some(story => 
    story.story === generatedStory && story.elements.character === selectedElements.character
  );

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-purple-300 border-t-pink-500 rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2 font-serif">
            Criando sua história...
          </h2>
          <p className="text-purple-200">
            A magia está acontecendo ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 p-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl animate-fadeIn">
          <div className="text-center mb-6">
            <BookOpen className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white font-serif mb-2">
              Sua História dos Sonhos
            </h2>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-purple-100 leading-relaxed text-lg font-serif whitespace-pre-wrap">
              {displayText}
              {!isComplete && <span className="typewriter"></span>}
            </p>
          </div>
          
          {isComplete && (
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-slideUp">
              <button
                onClick={handleSaveStory}
                disabled={isStorySaved}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  isStorySaved
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white'
                }`}
              >
                <Heart className="w-5 h-5" />
                {isStorySaved ? 'História Salva!' : 'Salvar História'}
              </button>
              
              <button
                onClick={startNewStory}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Nova História
              </button>
              
              <button
                onClick={() => navigateToStep('library')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                📚 Ver Biblioteca
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};