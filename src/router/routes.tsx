import { RouteObject, Navigate } from 'react-router-dom'
import Layout from '../views/Layout/Layout'
import Login from '../views/Login/Login'
import Shop from '../views/Shop/Shop'
import Home from '../views/Home/Home'
import UserList from '../views/User/UserList'
import RoleList from '../views/User/RoleList'
const asyncRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        index: true,
        element: <Home />
      },
      {
        path: '/user',
        children: [
          {
            path: '/user/userList',
            element: <UserList />
          },
          {
            path: '/user/roleList',
            element: <RoleList />
          }
        ]
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
    element: localStorage.getItem('token') ? <Navigate to="/"/> : <Login/>
  },
  ...asyncRoutes,
  {
    path: '*',
    element: <Navigate to="/home"/>
  }
]
export default routes
