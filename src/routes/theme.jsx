import { useOutletContext, useNavigate } from 'react-router-dom';
import { SelectionScreen } from '../components/story/SelectionScreen';
import { themes } from '../data/themes';
import { generateStory } from '../utils/storyGenerator';

export default function Theme() {
  const { selectedElements, updateSelectedElement, setGeneratedStory } = useOutletContext();
  const navigate = useNavigate();

  const handleSelect = (themeId) => {
    updateSelectedElement('theme', themeId);
    
    // Gerar história com os elementos selecionados
    const updatedElements = { ...selectedElements, theme: themeId };
    const story = generateStory(updatedElements);
    setGeneratedStory(story);
    
    // Navegar para a tela da história após um pequeno delay
    setTimeout(() => {
      navigate('/story');
    }, 500);
  };

  return (
    <SelectionScreen
      title="Escolha o Tema"
      subtitle="Qual será a lição da história?"
      options={themes}
      selectedKey={selectedElements.theme}
      onSelect={handleSelect}
      nextStep="/story"
      canContinue={false} // Não precisa do botão continuar, vai automaticamente
    />
  );
}