import { useOutletContext } from 'react-router-dom';
import { SelectionScreen } from '../components/story/SelectionScreen';
import { settings } from '../data/settings';

export default function Setting() {
  const { selectedElements, updateSelectedElement } = useOutletContext();

  const handleSelect = (settingId) => {
    updateSelectedElement('setting', settingId);
  };

  return (
    <SelectionScreen
      title="Escolha o Cenário"
      subtitle="Onde acontecerá a aventura?"
      options={settings}
      selectedKey={selectedElements.setting}
      onSelect={handleSelect}
      nextStep="/theme"
    />
  );
}