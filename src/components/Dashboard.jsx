// src/components/Dashboard.jsx
import { useAuth } from '../contexts/AuthContext';
import { logout, saveStory, getUserStories } from '../lib/firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const { user, userProfile } = useAuth();
  const [testResult, setTestResult] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const testFirestore = async () => {
    try {
      setTestResult('Testando Firestore...');
      
      // Salvar história de teste
      const storyId = await saveStory(user.uid, {
        title: "História de Teste",
        content: "Era uma vez uma princesa corajosa...",
        characters: ["Princesa", "Dragão"],
        scenario: "Castelo",
        theme: "Aventura",
        language: "pt"
      });
      
      console.log("História salva:", storyId);
      
      // Buscar histórias do usuário
      const stories = await getUserStories(user.uid);
      console.log("Histórias do usuário:", stories);
      
      setTestResult(`✅ Firestore funcionando! História salva com ID: ${storyId}. Total de histórias: ${stories.length}`);
    } catch (error) {
      console.error("Erro no Firestore:", error);
      setTestResult(`❌ Erro no Firestore: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Dashboard - Teste Firebase</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Sair
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Informações do Usuário */}
            <div>
              <h2 className="text-lg font-semibold mb-4">👤 Usuário Logado</h2>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  {user?.photoURL && (
                    <img 
                      src={user.photoURL} 
                      alt="Avatar" 
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium">{user?.displayName}</p>
                    <p className="text-gray-600 text-sm">{user?.email}</p>
                    <p className="text-green-600 text-sm">✅ Autenticação OK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Teste do Firestore */}
            <div>
              <h2 className="text-lg font-semibold mb-4">🔥 Teste Firestore</h2>
              <div className="space-y-3">
                <button
                  onClick={testFirestore}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Testar Salvar História
                </button>
                
                {testResult && (
                  <div className={`p-3 rounded text-sm ${
                    testResult.includes('✅') 
                      ? 'bg-green-100 text-green-800' 
                      : testResult.includes('❌')
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {testResult}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navegação para o App */}
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-4">🚀 Navegar no App</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Link
                to="/"
                className="bg-purple-100 text-purple-800 py-2 px-4 rounded text-center hover:bg-purple-200"
              >
                Home
              </Link>
              <Link
                to="/character"
                className="bg-blue-100 text-blue-800 py-2 px-4 rounded text-center hover:bg-blue-200"
              >
                Personagens
              </Link>
              <Link
                to="/setting"
                className="bg-green-100 text-green-800 py-2 px-4 rounded text-center hover:bg-green-200"
              >
                Cenários
              </Link>
              <Link
                to="/library"
                className="bg-orange-100 text-orange-800 py-2 px-4 rounded text-center hover:bg-orange-200"
              >
                Biblioteca
              </Link>
            </div>
          </div>

          {/* Debug Info */}
          <details className="mt-6">
            <summary className="cursor-pointer text-gray-600 hover:text-gray-800">
              🐛 Ver dados completos (debug)
            </summary>
            <div className="mt-3 bg-gray-50 p-4 rounded text-xs">
              <h4 className="font-semibold mb-2">User Object:</h4>
              <pre className="whitespace-pre-wrap mb-4">
                {JSON.stringify(user, null, 2)}
              </pre>
              
              <h4 className="font-semibold mb-2">User Profile:</h4>
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(userProfile, null, 2)}
              </pre>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;