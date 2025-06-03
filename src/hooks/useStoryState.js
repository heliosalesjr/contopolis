import { useState, useEffect } from 'react';

export const useStoryState = () => {
  const [selectedElements, setSelectedElements] = useState({
    character: '',
    setting: '',
    theme: '',
    mood: ''
  });
  
  const [generatedStory, setGeneratedStory] = useState('');
  const [savedStories, setSavedStories] = useState([]);

  // Carregar histórias salvas do localStorage na inicialização
  useEffect(() => {
    const saved = localStorage.getItem('savedStories');
    if (saved) {
      setSavedStories(JSON.parse(saved));
    }
  }, []);

  // Salvar no localStorage sempre que savedStories mudar
  useEffect(() => {
    localStorage.setItem('savedStories', JSON.stringify(savedStories));
  }, [savedStories]);

  const updateSelectedElement = (key, value) => {
    setSelectedElements(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetStory = () => {
    setSelectedElements({ character: '', setting: '', theme: '', mood: '' });
    setGeneratedStory('');
  };

  const saveStory = (title) => {
    const newStory = {
      id: Date.now(),
      title,
      story: generatedStory,
      elements: selectedElements,
      date: new Date().toLocaleDateString()
    };
    setSavedStories(prev => [...prev, newStory]);
  };

  return {
    selectedElements,
    generatedStory,
    savedStories,
    updateSelectedElement,
    setGeneratedStory,
    resetStory,
    saveStory
  };
};