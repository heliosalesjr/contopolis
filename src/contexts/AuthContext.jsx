// src/contexts/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getUserProfile, saveUserProfile } from '../lib/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        
        // Buscar ou criar perfil do usuário
        try {
          let profile = await getUserProfile(firebaseUser.uid);
          
          if (!profile) {
            // Criar perfil inicial
            profile = {
              email: firebaseUser.email,
              displayName: firebaseUser.displayName || '',
              photoURL: firebaseUser.photoURL || '',
              createdAt: new Date(),
              preferences: {
                language: 'pt',
                theme: 'light'
              }
            };
            await saveUserProfile(firebaseUser.uid, profile);
          }
          
          setUserProfile(profile);
        } catch (error) {
          console.error('Erro ao carregar perfil:', error);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const updateUserProfile = async (updates) => {
    if (!user) return;
    
    try {
      const updatedProfile = { ...userProfile, ...updates };
      await saveUserProfile(user.uid, updatedProfile);
      setUserProfile(updatedProfile);
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      throw error;
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    updateUserProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};