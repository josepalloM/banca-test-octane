import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NuevoCliente, {action as nuevoClienteAction} from "./pages/NuevoCliente.jsx";
import ErrorPage from "./components/ErrorPage.jsx"
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from "./pages/EditarCliente.jsx";
import {action as eliminarClienteAction} from "./components/Cliente.jsx"

import Index from "./pages/Index.jsx"
import App from './pages/App.jsx';
import InternalSystem from './pages/InternalSystems.jsx';
import Web from './pages/Web.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Index/>,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente/>,
                action: nuevoClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: '/app',
                element: <App />,
            },
            {
                path: '/web',
                element: <Web />,
            },
            {
                path: '/internalsystem',
                element: <InternalSystem />,
            },
            {
                path: '/clientes/:clienteId/editar',
                element: <EditarCliente />,
                loader: editarClienteLoader,
                action: editarClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path:  '/clientes/:clienteId/eliminar',
                action: eliminarClienteAction
            }
        ]
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
