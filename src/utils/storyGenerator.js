import { storyTemplates } from '../data/storyTemplates';
import { characters } from '../data/characters';
import { settings } from '../data/settings';
import { themes } from '../data/themes';

export const generateStory = (selectedElements) => {
  const key = `${selectedElements.character}-${selectedElements.setting}-${selectedElements.theme}`;
  
  if (storyTemplates[key]) {
    return storyTemplates[key];
  }
  
  return createCustomStory(selectedElements);
};

const createCustomStory = (selectedElements) => {
  const character = characters.find(c => c.id === selectedElements.character);
  const setting = settings.find(s => s.id === selectedElements.setting);
  const theme = themes.find(t => t.id === selectedElements.theme);
  
  return `Era uma vez ${character?.name} que vivia em ${setting?.name}. Esta é uma história sobre ${theme?.name.toLowerCase()}, cheia de magia e aprendizado. Em uma noite especial, nosso amiguinho descobriu que os sonhos mais bonitos nascem quando temos um coração bondoso e corajoso. E assim, com o coração aquecido por essa descoberta, ele adormeceu tranquilo, sabendo que cada novo dia traria aventuras maravilhosas.`;
};