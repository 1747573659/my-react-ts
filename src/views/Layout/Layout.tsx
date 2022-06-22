import React, { useState } from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import { Outlet, Navigate } from 'react-router-dom'
import routes, { MyRouteObject } from '../../router/routes'

const { Sider, Content } = Layout;

type topMenuObejct = {
  path: string,
  name: string
}

const HomeLayout =  () => {


  const topMenuData: topMenuObejct[] | undefined = (routes[1] as MyRouteObject).children?.map(item => ({path: item.path as string, name: item.name as string}))

  const [leftMenuData, setLeftMenuData] = useState()

  return (
    <>
      <Layout>
        <HeaderNav topMenuData={topMenuData}></HeaderNav>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <LeftMenu leftMenuData={leftMenuData}></LeftMenu>
          </Sider>
          <Content>
            { localStorage.getItem('token') ? 
              <Outlet /> :
              <Navigate to="/login" />
            }
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default HomeLayout