import React, { Component } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Route } from 'react-router-dom'
import Test1 from '@/components/test1';
import Test2 from '@/components/test2';
import Test3 from '@/components/test3';
import { routes } from '@/router';
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { toggleCollapse } from '@/redux/sider'
const { Header, Content } = Layout

class Main extends Component {

  render() {
    const { collapse, toggleCollapse } = this.props
    return (
      <Layout>
        <Header>
          {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            style:{
              color:'#000'
            },  
            onClick: () => toggleCollapse(!collapse),
          })}
        </Header>
        <Content>
            {/* <Route path="/test1" component={Test1}></Route>
            <Route path="/test2" component={Test2}></Route>
            <Route path="/test3" component={Test3}></Route> */}
            {routes}
        </Content>
      </Layout>
    );
  }
}

export default connect(
  (state)=>({collapse:state.sider.collapse}),
  (dispatch)=>({
    toggleCollapse:(val)=>dispatch(toggleCollapse(val))
  })
)(Main)

