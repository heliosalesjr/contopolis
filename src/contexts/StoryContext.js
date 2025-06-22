import React, { createContext, useContext } from 'react';
import { useStoryState } from '../hooks/useStoryState';

const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const storyState = useStoryState();
  
  return (
    <StoryContext.Provider value={storyState}>
      {children}
    </StoryContext.Provider>
  );
};

export const useStoryContext = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error('useStoryContext deve ser usado dentro de StoryProvider');
  }
  return context;
};