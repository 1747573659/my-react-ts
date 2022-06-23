import { Menu, MenuProps } from 'antd';
import { useNavigate, NavigateFunction, useLocation } from 'react-router-dom';
import { routesMapType } from '../../views/Layout/Layout';

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

// const items: MenuProps['items'] = [
//   getItem('用户', 'user', null, [
//     getItem('用户列表', 'userList'),
//     getItem('角色列表', 'roleList')
//   ])
// ];

const getItems = (data: routesMapType[] | undefined) => {
  if (!data) {
    return []
  } else {
    data.map(item => getItem(item.name, item.path, null, item.children && item.children.map(itemInner => getItem(itemInner.name, itemInner.path, null, undefined))))
  }
}

const LeftMenu = ({leftMenuData}: {leftMenuData: routesMapType[] | undefined}) => {
  const navigate: NavigateFunction = useNavigate()

  const location = useLocation()

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e.keyPath);
    let url = '/setting'
    for (let item; item = e.keyPath.pop();) {
      url += '/' + item
    }
    navigate(url)
  };

  const items = getItems(leftMenuData)

  return (
    <Menu
      onClick={onClick}
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default LeftMenu;
