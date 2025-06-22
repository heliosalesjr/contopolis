import React from 'react';
import { Heart, BookOpen, Star, Sparkles, Moon, Users } from 'lucide-react';

export const About = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="mb-8 relative">
            <BookOpen className="w-20 h-20 text-yellow-200 mx-auto mb-4 animate-pulse" />
            <div className="absolute -top-2 -right-2">
              <Star className="w-6 h-6 text-yellow-300 animate-ping" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Sparkles className="w-5 h-5 text-pink-300 animate-bounce" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4 font-serif">
            Sobre o Contópolis
          </h1>
          <p className="text-purple-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Onde a imaginação ganha vida e cada noite se torna uma aventura especial
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          {/* Nossa Missão */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-pink-400 mr-3" />
              <h2 className="text-2xl font-bold text-white font-serif">Nossa Missão</h2>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              O Contópolis foi criado com amor para transformar a hora de dormir em um momento mágico e especial. 
              Acreditamos que cada criança merece adormecer com histórias que alimentem sua imaginação e proporcionem 
              sonhos tranquilos e cheios de aventuras encantadoras.
            </p>
          </div>

          {/* Como Funciona */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white font-serif">Como Funciona</h2>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed mb-6">
              Com apenas alguns cliques, você pode criar histórias personalizadas que capturam a personalidade 
              e os interesses únicos da sua criança. Nosso sistema inteligente combina elementos escolhidos 
              por você para criar narrativas únicas a cada vez.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Personalize</h3>
                <p className="text-purple-200 text-sm">Escolha o personagem principal da história</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Configure</h3>
                <p className="text-purple-200 text-sm">Selecione tema, ambiente e elementos da aventura</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Desfrute</h3>
                <p className="text-purple-200 text-sm">Leia e salve suas histórias favoritas</p>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Moon className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white font-serif">Nossos Valores</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Imaginação Sem Limites
                </h3>
                <p className="text-purple-100">
                  Cada história é uma porta para mundos infinitos onde tudo é possível e a criatividade não tem fronteiras.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-pink-400 mr-2" />
                  Momentos Especiais
                </h3>
                <p className="text-purple-100">
                  Valorizamos os momentos únicos entre pais e filhos, criando memórias afetivas que durarão para sempre.
                </p>
              </div>
            </div>
          </div>

          {/* Para Quem */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-white font-serif">Para Quem É o Contópolis</h2>
            </div>
            <p className="text-purple-100 text-lg leading-relaxed">
              O Contópolis é perfeito para pais, avós, cuidadores e todos que desejam proporcionar momentos mágicos 
              para as crianças. Seja para a hora de dormir, momentos de relaxamento ou simplesmente para despertar 
              o amor pela leitura, nossas histórias são criadas para encantar e inspirar.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <div className="flex items-center justify-center space-x-2 text-purple-300">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-lg">Feito com muito carinho para despertar sonhos mágicos</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;