import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Word, { loader as wordLoader } from './pages/Word';
import PageNotFound from './pages/PageNotFound';
import ContextsProvider from './contexts';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: '', element: <Home /> },
        { path: 'search', element: <Word />, loader: wordLoader, errorElement: <PageNotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return (
    <ContextsProvider>
      <RouterProvider router={router} />
    </ContextsProvider>
  );
}

export default App;
