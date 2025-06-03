import { createBrowserRouter } from 'react-router-dom';
import Root from '../routes/root';
import Welcome from '../routes/_index';
import Character from '../routes/character';
import Setting from '../routes/setting';
import Theme from '../routes/theme';
import Story from '../routes/story';
import Library from '../routes/library';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'character',
        element: <Character />,
      },
      {
        path: 'setting',
        element: <Setting />,
      },
      {
        path: 'theme',
        element: <Theme />,
      },
      {
        path: 'story',
        element: <Story />,
      },
      {
        path: 'library',
        element: <Library />,
      },
    ],
  },
]);