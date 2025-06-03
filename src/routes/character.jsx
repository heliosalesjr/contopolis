import { useOutletContext } from 'react-router-dom';
import { SelectionScreen } from '../components/story/SelectionScreen';
import { characters } from '../data/characters';

export default function Character() {
  const { selectedElements, updateSelectedElement } = useOutletContext();

  const handleSelect = (characterId) => {
    updateSelectedElement('character', characterId);
  };

  return (
    <SelectionScreen
      title="Escolha seu Personagem"
      subtitle="Quem será o herói da sua história?"
      options={characters}
      selectedKey={selectedElements.character}
      onSelect={handleSelect}
      nextStep="/setting"
    />
  );
}