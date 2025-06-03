import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Star, Sparkles } from 'lucide-react';
import { Layout, Container } from '../layout/Layout';
import { Button } from '../ui/Button';

export const WelcomeScreen = ({ savedStoriesCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <Layout className="flex items-center justify-center">
      <Container maxWidth="md">
        <div className="text-center">
          {/* Animated Icons */}
          <div className="mb-8 relative">
            <Moon className="w-20 h-20 text-yellow-200 mx-auto mb-4 animate-pulse" />
            <div className="absolute -top-2 -right-2">
              <Star className="w-6 h-6 text-yellow-300 animate-ping" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="w-5 h-5 text-pink-300 animate-bounce" />
            </div>
          </div>
          
          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-white mb-4 font-serif">
            Contópolis
          </h1>
          <p className="text-purple-200 mb-8 text-lg leading-relaxed">
            Crie histórias mágicas personalizadas para uma noite de sono tranquila e cheia de sonhos bonitos
          </p>
          
          {/* Main CTA Button */}
          <Button
            onClick={() => navigate('/character')}
            size="large"
            className="mb-4"
          >
            ✨ Criar Minha História
          </Button>
          
          {/* Library Button */}
          {savedStoriesCount > 0 && (
            <button
              onClick={() => navigate('/library')}
              className="block mx-auto text-purple-300 hover:text-white transition-colors duration-200"
            >
              📚 Ver Histórias Salvas ({savedStoriesCount})
            </button>
          )}
        </div>
      </Container>
    </Layout>
  );
};