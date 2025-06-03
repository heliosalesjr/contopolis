import { useOutletContext } from 'react-router-dom';
import { StoryScreen } from '../components/story/StoryScreen';
import { characters } from '../data/characters';
import { settings } from '../data/settings';

export default function Story() {
  const { 
    generatedStory, 
    selectedElements, 
    saveStory, 
    resetStory 
  } = useOutletContext();

  const handleSaveStory = () => {
    const character = characters.find(c => c.id === selectedElements.character);
    const setting = settings.find(s => s.id === selectedElements.setting);
    const title = `${character?.name} e ${setting?.name}`;
    
    saveStory(title);
  };

  const handleNewStory = () => {
    resetStory();
  };

  return (
    <StoryScreen
      story={generatedStory}
      onSaveStory={handleSaveStory}
      onNewStory={handleNewStory}
    />
  );
}