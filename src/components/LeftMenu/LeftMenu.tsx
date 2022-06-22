import { Menu, MenuProps } from 'antd';
import { useNavigate, NavigateFunction, useLocation } from 'react-router-dom';

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

const items: MenuProps['items'] = [
  getItem('用户', 'user', null, [
    getItem('用户列表', 'userList'),
    getItem('角色列表', 'roleList')
  ])
];

const LeftMenu = ({ leftMenuData }) => {
  console.log('11')
  const navigate: NavigateFunction = useNavigate()

  const location = useLocation()

  console.log(location)

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e.keyPath);
    let url = '/setting'
    for (let item; item = e.keyPath.pop();) {
      url += '/' + item
    }
    navigate(url)
  };

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
