import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { characters, settings, themes, storyTemplates, generateCustomStory } from '../data';

const useStoryStore = create(
  persist(
    (set, get) => ({
      // Estado da criação da história
      selectedElements: {
        character: '',
        setting: '',
        theme: ''
      },
      
      // História atual gerada
      currentStory: '',
      
      // Histórias salvas pelo usuário
      savedStories: [],
      
      // Passo atual no processo de criação
      currentStep: 'welcome', // welcome, character, setting, theme, story, library
      
      // Loading state
      isGenerating: false,

      // Actions para navegação
      setCurrentStep: (step) => set({ currentStep: step }),
      
      // Actions para seleção de elementos
      selectCharacter: (characterId) => 
        set((state) => ({
          selectedElements: { ...state.selectedElements, character: characterId }
        })),
      
      selectSetting: (settingId) => 
        set((state) => ({
          selectedElements: { ...state.selectedElements, setting: settingId }
        })),
      
      selectTheme: (themeId) => 
        set((state) => ({
          selectedElements: { ...state.selectedElements, theme: themeId }
        })),

      // Action para gerar história
      generateStory: () => {
        const { selectedElements } = get();
        set({ isGenerating: true });
        
        // Simula um pequeno delay para melhor UX
        setTimeout(() => {
          const key = `${selectedElements.character}-${selectedElements.setting}-${selectedElements.theme}`;
          
          let story;
          if (storyTemplates[key]) {
            story = storyTemplates[key];
          } else {
            // Busca os objetos completos para gerar história customizada
            const character = characters.find(c => c.id === selectedElements.character);
            const setting = settings.find(s => s.id === selectedElements.setting);
            const theme = themes.find(t => t.id === selectedElements.theme);
            
            story = generateCustomStory(character, setting, theme);
          }
          
          set({ 
            currentStory: story,
            isGenerating: false,
            currentStep: 'story'
          });
        }, 800);
      },

      // Action para salvar história
      saveStory: () => {
        const { currentStory, selectedElements, savedStories } = get();
        
        if (!currentStory) return;
        
        const character = characters.find(c => c.id === selectedElements.character);
        const setting = settings.find(s => s.id === selectedElements.setting);
        const theme = themes.find(t => t.id === selectedElements.theme);
        
        const newStory = {
          id: Date.now(),
          title: `${character?.name} e ${setting?.name}`,
          story: currentStory,
          elements: selectedElements,
          theme: theme?.name,
          date: new Date().toLocaleDateString('pt-BR'),
          createdAt: new Date().toISOString()
        };
        
        set({ 
          savedStories: [newStory, ...savedStories] // Mais recente primeiro
        });
      },

      // Action para deletar história salva
      deleteStory: (storyId) => {
        set((state) => ({
          savedStories: state.savedStories.filter(story => story.id !== storyId)
        }));
      },

      // Action para resetar criação de história
      resetStoryCreation: () => {
        set({
          selectedElements: {
            character: '',
            setting: '',
            theme: ''
          },
          currentStory: '',
          currentStep: 'character',
          isGenerating: false
        });
      },

      // Action para voltar ao início
      goToWelcome: () => {
        set({
          currentStep: 'welcome'
        });
      },

      // Action para visualizar história salva
      viewSavedStory: (story) => {
        set({
          currentStory: story.story,
          selectedElements: story.elements,
          currentStep: 'story'
        });
      },

      // Getters computados
      isSelectionComplete: () => {
        const { selectedElements } = get();
        return selectedElements.character && 
               selectedElements.setting && 
               selectedElements.theme;
      },

      getCurrentCharacter: () => {
        const { selectedElements } = get();
        return characters.find(c => c.id === selectedElements.character);
      },

      getCurrentSetting: () => {
        const { selectedElements } = get();
        return settings.find(s => s.id === selectedElements.setting);
      },

      getCurrentTheme: () => {
        const { selectedElements } = get();
        return themes.find(t => t.id === selectedElements.theme);
      },

      // Stats para mostrar na biblioteca
      getStats: () => {
        const { savedStories } = get();
        const favoriteCharacter = savedStories.reduce((acc, story) => {
          acc[story.elements.character] = (acc[story.elements.character] || 0) + 1;
          return acc;
        }, {});
        
        const mostUsedCharacter = Object.keys(favoriteCharacter).reduce((a, b) => 
          favoriteCharacter[a] > favoriteCharacter[b] ? a : b, ''
        );

        return {
          totalStories: savedStories.length,
          favoriteCharacter: mostUsedCharacter ? 
            characters.find(c => c.id === mostUsedCharacter)?.name : null
        };
      }
    }),
    {
      name: 'sleep-story-storage', // Nome da key no localStorage
      partialize: (state) => ({ 
        savedStories: state.savedStories // Só persiste as histórias salvas
      })
    }
  )
);

export default useStoryStore;