import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PokemonInfo } from './PokemonInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:'/pokemon/:name',
    element:<PokemonInfo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
