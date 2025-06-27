import { createBrowserRouter } from 'react-router-dom';
import Root from '../routes/root';
import Welcome from '../routes/_index';
import Character from '../routes/character';
import Setting from '../routes/setting';
import Theme from '../routes/theme';
import Story from '../routes/story';
import Library from '../routes/library';
import { ErrorPage } from '../pages/ErrorPage';
import About from '../pages/About';
import Author from '../pages/Author';

// Importar os componentes de rota protegida/pública
import ProtectedRoute from '../components/ProtectedRoute';
import PublicRoute from '../components/PublicRoute';
import Dashboard from '../components/Dashboard';

// Importar páginas de auth (você pode criar depois)
import Login from '../pages/Login';
import Register from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // Rotas públicas (só acessíveis quando NÃO logado)
      {
        path: 'login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      
      // Rotas que podem ser acessadas por todos (logado ou não)
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author',
        element: <Author />,
      },
      
      // Rotas protegidas (só acessíveis quando logado)
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'character',
        element: (
          <ProtectedRoute>
            <Character />
          </ProtectedRoute>
        ),
      },
      {
        path: 'setting',
        element: (
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
        ),
      },
      {
        path: 'theme',
        element: (
          <ProtectedRoute>
            <Theme />
          </ProtectedRoute>
        ),
      },
      {
        path: 'story',
        element: (
          <ProtectedRoute>
            <Story />
          </ProtectedRoute>
        ),
      },
      {
        path: 'library',
        element: (
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        ),
      },
      
      // Rota de erro
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);