import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Container } from '../layout/Layout';
import { Button } from '../ui/Button';

export const LibraryScreen = ({ savedStories, onReadStory }) => {
  const navigate = useNavigate();

  const handleReadStory = (story) => {
    if (onReadStory) {
      onReadStory(story.story);
    }
    navigate('/story');
  };

  return (
    <Layout>
      <Container>
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">
            📚 Biblioteca dos Sonhos
          </h2>
          <p className="text-purple-200">Suas histórias salvas</p>
        </div>
        
        {/* Stories List */}
        {savedStories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-purple-200 mb-6 text-lg">
              Você ainda não tem histórias salvas.
            </p>
            <Button onClick={() => navigate('/character')}>
              ✨ Criar Primeira História
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 mb-8">
            {savedStories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{story.title}</h3>
                  <span className="text-purple-300 text-sm">{story.date}</span>
                </div>
                <p className="text-purple-100 line-clamp-3 mb-4">
                  {story.story.substring(0, 150)}...
                </p>
                <button
                  onClick={() => handleReadStory(story)}
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-200"
                >
                  Ler História Completa →
                </button>
              </div>
            ))}
          </div>
        )}
        
        {/* Back Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/')}
            variant="accent"
          >
            ← Voltar ao Início
          </Button>
        </div>
      </Container>
    </Layout>
  );
};