import React from 'react';
import { User, Code, Heart } from 'lucide-react';
import { Layout } from '../components/layout/Layout';

export const Author = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Hélio Sales Jr.
            </h1>
            <div className="flex items-center justify-center gap-2 text-purple-600 mb-4">
              <Code className="w-5 h-5" />
              <span className="text-lg font-medium">Desenvolvedor</span>
            </div>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              Criador do Contópolis
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <Heart className="w-5 h-5 text-red-500" />
            <p className="text-lg">
              Desenvolvido com carinho para criar momentos mágicos entre pais e filhos
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Author;