import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';



import Layout from './componentes/Layout/Layout.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import NuestraMutual from './Pages/NuestraMutual/NuestraMutual.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout/>,
  children:[
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: 'nuestra-mutual',
      element: <NuestraMutual/>
    }
  ]
}
]);


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>,
);
