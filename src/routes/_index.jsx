import { useOutletContext } from 'react-router-dom';
import { WelcomeScreen } from '../components/story/WelcomeScreen';

export default function Welcome() {
  const { savedStories, resetStory } = useOutletContext();

  return (
    <WelcomeScreen 
      savedStoriesCount={savedStories.length}
      onNewStory={resetStory}
    />
  );
}