import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: 'profile/:id',
      //   element: <ProfilePage />,
      // },
      // {
      //   path: 'about',
      //   element: <AboutPage />,
      // },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);