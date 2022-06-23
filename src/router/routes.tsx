import { RouteObject, Navigate } from 'react-router-dom'
import Layout from '../views/Layout/Layout'
import Login from '../views/Login/Login'
import NewBlog from '../views/NewBlog/NewBlog'
import Home from '../views/Home/Home'
import UserList from '../views/User/UserList'
import RoleList from '../views/User/RoleList'

export interface MyRouteObject {
  caseSensitive?: boolean;
  children?: MyRouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  name?: string;
}

export const asyncRoutes: MyRouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/blog',
        index: true,
        name: '博客',
        element: <Home />
      },
      {
        path: '/newBlog',
        name: '写博客',
        element: <NewBlog />
      },
      {
        path: '/setting',
        name: '设置',
        children: [
          {
            path: '/setting/user',
            name: '用户',
            children: [
              {
                path: '/setting/user/userList',
                name: '用户列表',
                element: <UserList />
              },
              {
                path: '/setting/user/roleList',
                name: '角色列表',
                element: <RoleList />
              }
            ]
          },
        ]
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
    element: <Navigate to="/blog"/>
  }
]
export default routes
