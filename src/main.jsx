import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "*",  // ✅ ADD "*"
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
