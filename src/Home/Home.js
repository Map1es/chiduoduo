import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './Home.css'
import React from 'react'
import Sider from './components/Sider'
import User from '../User/user'
import Order from '../Order/order'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
const { Header, Content } = Layout

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider></Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <Route exact path="/">
                  <Order />
                </Route>
                <Route exact path="/user">
                  <User />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default Home
