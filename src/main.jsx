import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import Orders from './components/Orders/Orders.jsx'
import Profile from './components/Profile/Profile.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Main></Main>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path:'orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:'profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
