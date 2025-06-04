import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/routes';
import './index.css'; // Certifique-se de ter o Tailwind CSS configurado


function App() {
  return <RouterProvider router={router} />;
}

export default App;