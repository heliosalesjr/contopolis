import { useStoryState } from './useStoryState'; // ou useStoryStore
import { useNavigate } from 'react-router-dom';

export const useStoryReset = () => {
  const navigate = useNavigate();
  const { resetAllSelections } = useStoryState(); // ou useStoryStore

  const startNewStory = () => {
    // Garantir que o reset aconteça
    resetAllSelections();
    
    // Pequeno delay para garantir que o estado foi limpo
    setTimeout(() => {
      navigate('/character');
    }, 50);
  };

  return { startNewStory };
};