import React from 'react'
import { Menu, Layout, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return { 
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

type topMenuObejct = {
  path: string,
  name: string
}

export default function HeaderNav({ topMenuData }: {topMenuData: topMenuObejct[] | undefined}) {

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e.keyPath);
  };

  const items: MenuProps['items'] = topMenuData?.map((item: topMenuObejct) => getItem(item.name, item.path))

  return (
    <Layout.Header>
      <Menu
        onClick={onClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['blog']}
        items={items}
      />
    </Layout.Header>
  )
}
