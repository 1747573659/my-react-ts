import React from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import { Outlet } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

const HomeLayout =  () => {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <LeftMenu></LeftMenu>
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default HomeLayout