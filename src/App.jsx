import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { About, Cocktail, Error, HomeLayout, Newsletter, Landing } from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleLandingLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/NewsLetter';
import SingleErrorPage from './pages/SingleErrorPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SingleErrorPage />,
        element: <Landing />
      },
      {
        path: 'cocktail/:id',
        loader: singleLandingLoader(queryClient),
        errorElement: <SingleErrorPage />,
        element: <Cocktail />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
        errorElement: <SingleErrorPage />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
