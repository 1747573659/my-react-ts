import React from 'react'
import { Layout } from 'antd';

import LeftMenu from '../LeftMenu/LeftMenu'

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
          <Content>Content</Content>
        </Layout>
      </Layout>
    </>
  )
}

export default HomeLayout