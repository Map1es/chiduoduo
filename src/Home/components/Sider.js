import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css'
import {
  PieChartOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
const { Sider } = Layout
const { SubMenu } = Menu
function MySider() {
  const history = useHistory()
  const routeTo = (key) => {
    history.push(key.key)
  }

  return (
    <Sider collapsible>
      <div className="logo">CHI</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={['/']}
        mode="inline"
        onClick={routeTo}
      >
        <Menu.Item key="/" icon={<UnorderedListOutlined />}>
          订单
        </Menu.Item>
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="基础">
          <Menu.Item key="/good">商品信息</Menu.Item>
          <Menu.Item key="/type">分类信息</Menu.Item>
        </SubMenu>
        <Menu.Item key="/user" icon={<UserOutlined />}>
          用户
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default MySider
