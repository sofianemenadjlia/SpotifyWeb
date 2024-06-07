import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './Login';
import Signup from './Signup';
import ManualRecom from './ManualRecom';
import Release from './Release';
import PersoRecom from './PersoRecom';
import './reset.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
  {
    path: 'manualrecom',
    element: <ManualRecom />,
  },
  {
    path: 'release',
    element: <Release />,
  },
  {
    path: 'persorecom',
    element: <PersoRecom />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
