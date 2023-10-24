import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StartPage from './components/pages/StartPage';
import WomenClothes from './components/pages/WomenClothes';
import MenClothes from './components/pages/MenClothes';
import Jewelry from './components/pages/Jewelry';
import Electronics from './components/pages/Electronics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <StartPage />,
      },
      {
        path: "/women",
        element: <WomenClothes />,
      },
      {
        path: "/men",
        element: <MenClothes />
      },
      {
        path: "/jewelry",
        element: <Jewelry />
      },
      {
        path:"/electronics",
        element: <Electronics />
      }
    ]
  },

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
