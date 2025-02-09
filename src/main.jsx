import ReactDOM from 'react-dom/client';
// import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';
import HeroSection from './pages/HeroSection';

const router = createBrowserRouter([
  {
    path: "/",  // ✅ ADD "*"
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HeroSection />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact/>
      },   
      {
        path: "about",
        element: <About/>
      },
      {
        path: "resume",
        element: <Resume/>
      },
      {
          path: "*",
          element: <ErrorPage/>
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
    //  {/* </React.StrictMode> */}
);

