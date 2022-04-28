import { Menu, MenuProps } from 'antd';

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
  getItem('享钱支付', 'userPay', null, [
    getItem('商户管理', 'shopManagement', null, [getItem('享钱商户管理', 'management'), getItem('享钱商户品牌', 'brandManagement')]),
    getItem('进件管理', 'entryManager', null, [getItem('普通进件管理', 'ordinaryManager'), getItem('享付通进件管理', 'index')]),
  ]),

  getItem('运营管理', 'marketingIndex', null, [
    getItem('微信营销活动', 'marketingManger', null, [getItem('商户交易查询', 'merchantTransaction'), getItem('门店交易查询', 'storeTransaction')]),
    getItem('公共资讯管理', 'information', null, [getItem('培训资料管理', 'materials'), getItem('公共消息管理', 'materials')]),
  ])
];

const LeftMenu = () => {
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e.keyPath.toString().replace(/,/g, '/'));
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default LeftMenu;
