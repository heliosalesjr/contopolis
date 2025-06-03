import { Outlet } from 'react-router-dom';
import { useStoryState } from '../hooks/useStoryState';

export default function Root() {
  const storyState = useStoryState();

  return (
    <div>
      <Outlet context={storyState} />
    </div>
  );
}