import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/@juno/uikit/dist/uikit.css';
import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";
import { AppShell, Main, SidebarLink } from '@juno/uikit';
import fiddles from './fiddles/index'

const fiddlesRoutes = fiddles.map(f => ({path: f.path, element: React.createElement(f.element)}));

function Root() {
  const navigate = useNavigate();

  return (

<AppShell pageBackground="base-50">
  <Main gap="24px" width="1200" corners="md" marginX="12px" marginY="12px" paddingX="24px" paddingY="24px" textSize="base" direction="flex-col" selfAlign="center" alignItems="start" background="base-0" justifyContent="start">
    <Outlet/>
  </Main>
  <div className="flex flex-col relative flex-grow-0 z-40 flex-shrink-0 transition-all
     px-3 py-3 text-base-0 text-base bg-base-700 gap-3 items-stretch justify-start border-r " style={{ order: '-2', width: '280px', maxWidth: '280px', minWidth: '280px', borderColor: 'color-mix(in srgb, var(--base-content) 12%, transparent)', minHeight: '100%' }}>
    <SidebarLink text="Examples of apps built with JUNO" color={null} size="medium" width="full" fontWeight="auto" indentLevel="0" leftIcon="folder" displayChildren>
      {fiddles.map((f, i) => 
        <SidebarLink onClick={() => navigate(f.path)} text={f.title} color={null} size="medium" width="full" fontWeight="auto" indentLevel="1" leftIcon="none" displayChildren />
      )}
    </SidebarLink>
  </div>
</AppShell>

  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: fiddlesRoutes
  }
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

