import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';
import { Layout, Container } from '../layout/Layout';
import { Button } from '../ui/Button';

export const StoryScreen = ({ story, onSaveStory, onNewStory }) => {
  const navigate = useNavigate();

  const handleSaveStory = () => {
    if (onSaveStory) {
      onSaveStory();
    }
  };

  const handleNewStory = () => {
    if (onNewStory) {
      onNewStory();
    }
    navigate('/character');
  };

  return (
    <Layout>
      <Container maxWidth="3xl">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <BookOpen className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white font-serif mb-2">
              Sua História dos Sonhos
            </h2>
          </div>
          
          {/* Story Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-purple-100 leading-relaxed text-lg font-serif whitespace-pre-wrap">
              {story}
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <Button
              onClick={handleSaveStory}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Salvar História
            </Button>
            <Button
              onClick={handleNewStory}
              variant="accent"
            >
              ✨ Nova História
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};