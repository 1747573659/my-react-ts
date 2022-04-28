import { RouteObject, Navigate } from 'react-router-dom'
import Layout from '../views/Layout/Layout'
import Login from '../views/Login/Login'
import Shop from '../views/Shop/Shop'
import User from '../views/User/User'
const asyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <User />
      },
      {
        path: '/user',
        element: <User />
      },
      {
        path: '/shop',
        element: <Shop />
      }
    ]
  }
]
const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login/>
  },
  ...asyncRoutes,
  {
    path: '*',
    element: <Navigate to="/user"/>
  }
]
export default routes
