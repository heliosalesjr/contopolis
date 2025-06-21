import { useNavigate } from 'react-router-dom';
import { Moon, Star } from 'lucide-react';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gradient-to-r from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="relative mr-2">
              <Moon className="w-8 h-8 text-yellow-200 group-hover:text-yellow-100 transition-colors duration-200" />
              <Star className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 group-hover:animate-pulse" />
            </div>
            <h1 className="text-2xl font-bold text-white font-serif group-hover:text-purple-100 transition-colors duration-200">
              Contópolis
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/about')}
              className="text-purple-200 hover:text-white transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => navigate('/author')}
              className="text-purple-200 hover:text-white transition-colors duration-200 font-medium"
            >
              Autor
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};