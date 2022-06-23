import React, { useState } from 'react'
import { Layout } from 'antd'
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import { Outlet, Navigate } from 'react-router-dom'
import { asyncRoutes, MyRouteObject } from '../../router/routes'

const { Sider, Content } = Layout

export interface routesMapType {
  path: string,
  name: string
  children?: routesMapType[]
}

const getRoutesMap = (reactRoutes: MyRouteObject[]) => {
  let routesMap: routesMapType[] = []
  function innerFormat(curItem: MyRouteObject) {
    let formatItem: routesMapType = {
      name: curItem.name as string,
      path: curItem.path as string
    }
    if (curItem.children) {
      formatItem.children = curItem.children.map(innerFormat)
    }
    return formatItem
  }
  reactRoutes.forEach(item => routesMap.push(innerFormat(item)))
  return routesMap
}

const HomeLayout = () => {
  const routesMap = getRoutesMap(asyncRoutes[0].children as MyRouteObject[])
  const [leftMenuData, setLeftMenuData] = useState<routesMapType[] | undefined>()
  const handleSetleftMenuData = (firstLevel: string): void => {
    routesMap.forEach(item => {
      if (item.path === firstLevel) {
        setLeftMenuData(item.children)
      }
    })
  }

  return (
    <>
      <Layout>
        <HeaderNav routesMap={routesMap} handleSetleftMenuData={handleSetleftMenuData}></HeaderNav>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <LeftMenu leftMenuData={leftMenuData}></LeftMenu>
          </Sider>
          <Content>{localStorage.getItem('token') ? <Outlet /> : <Navigate to='/login' />}</Content>
        </Layout>
      </Layout>
    </>
  )
}

export default HomeLayout
