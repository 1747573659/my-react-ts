import React from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/LeftMenu/LeftMenu'
import { Outlet, Navigate } from 'react-router-dom'

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