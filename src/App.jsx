import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Cocktail, Error, Home, Newsletter, Landing } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
