/* eslint-disable no-undef */
import { useNavigate, useRouteError } from 'react-router-dom';
import { Home, RefreshCw, AlertTriangle, Moon, Star } from 'lucide-react';
import { Layout, Container } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  
  // Determina o tipo de erro e mensagens apropriadas
  const getErrorInfo = () => {
    if (error?.status === 404) {
      return {
        title: "Oops! História não encontrada",
        message: "Parece que esta página se perdeu no mundo dos sonhos...",
        emoji: "🌙"
      };
    }
    
    return {
      title: "Algo deu errado...",
      message: "Nossos contadores de histórias estão com um pequeno problema, mas já estamos resolvendo!",
      emoji: "✨"
    };
  };

  const { title, message, emoji } = getErrorInfo();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Layout showNavbar={true}>
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Container maxWidth="md">
          <div className="text-center">
            {/* Animated Error Icon */}
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <Moon className="w-20 h-20 text-yellow-200/50 mx-auto mb-4 animate-pulse" />
                <AlertTriangle className="w-16 h-16 text-orange-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                <div className="absolute -top-2 -right-2">
                  <Star className="w-6 h-6 text-yellow-300/70 animate-ping" />
                </div>
              </div>
            </div>
            
            {/* Error Message */}
            <div className="mb-8">
              <div className="text-6xl mb-4">{emoji}</div>
              <h1 className="text-4xl font-bold text-white mb-4 font-serif">
                {title}
              </h1>
              <p className="text-purple-200 text-lg leading-relaxed mb-2">
                {message}
              </p>
              
              {/* Technical Error Info (only in development) */}
              {process.env.NODE_ENV === 'development' && error && (
                <details className="mt-4 p-4 bg-purple-900/30 rounded-lg text-left">
                  <summary className="text-purple-300 cursor-pointer mb-2">
                    Detalhes técnicos (desenvolvimento)
                  </summary>
                  <pre className="text-xs text-purple-200 overflow-auto">
                    {error.status && <div>Status: {error.status}</div>}
                    {error.statusText && <div>Status Text: {error.statusText}</div>}
                    {error.message && <div>Message: {error.message}</div>}
                    {error.stack && <div>Stack: {error.stack}</div>}
                  </pre>
                </details>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => navigate('/')}
                size="large"
                className="flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Voltar ao Início
              </Button>
              
              <button
                onClick={handleRefresh}
                className="flex items-center gap-2 px-6 py-3 text-purple-300 hover:text-white border border-purple-400/30 hover:border-purple-300 rounded-lg transition-all duration-200"
              >
                <RefreshCw className="w-5 h-5" />
                Tentar Novamente
              </button>
            </div>
            
            {/* Helpful Links */}
            <div className="mt-8 pt-6 border-t border-purple-500/20">
              <p className="text-purple-300 text-sm mb-3">
                Enquanto isso, que tal explorar:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <button
                  onClick={() => navigate('/library')}
                  className="text-purple-400 hover:text-white transition-colors duration-200"
                >
                  📚 Suas Histórias Salvas
                </button>
                <button
                  onClick={() => navigate('/character')}
                  className="text-purple-400 hover:text-white transition-colors duration-200"
                >
                  ✨ Criar Nova História
                </button>
                <button
                  onClick={() => navigate('/sobre')}
                  className="text-purple-400 hover:text-white transition-colors duration-200"
                >
                  ℹ️ Sobre o Contópolis
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};