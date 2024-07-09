import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  RouterProvider} from "react-router-dom";

import App from './App.tsx'
import './index.css'

//pages
import Nav from './components/Nav/index.tsx';
import ErrorPage from './pages/Error/index.tsx';
import Campaign from './pages/Campaign/index.tsx';
import Home from './pages/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
