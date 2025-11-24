import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Cocktail, Error, HomeLayout, Newsletter, Landing } from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleLandingLoader } from './pages/Cocktail';
import SingleErrorPage from './pages/SingleErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SingleErrorPage />,
        element: <Landing />
      },
      {
        path: 'cocktail/:id',
        loader: singleLandingLoader,
        errorElement: <SingleErrorPage />,
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
