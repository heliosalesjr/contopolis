import { useOutletContext } from 'react-router-dom';
import { LibraryScreen } from '../components/story/LibraryScreen';

export default function Library() {
  const { savedStories, setGeneratedStory } = useOutletContext();

  const handleReadStory = (story) => {
    setGeneratedStory(story);
  };

  return (
    <LibraryScreen
      savedStories={savedStories}
      onReadStory={handleReadStory}
    />
  );
}