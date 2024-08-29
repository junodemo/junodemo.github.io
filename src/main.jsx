import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/@juno/uikit/dist/uikit.css';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import fiddles from './fiddles/index'

const fiddlesRoutes = fiddles.map(f => ({path: f.path, element: React.createElement(f.element)}));

function Root() {
  return (
    <ul>
      {
        fiddles.map((f, i) => 
          <li key={i}><Link to={f.path}>{f.title}</Link></li>
        )
      }
    </ul>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  ...fiddlesRoutes
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

