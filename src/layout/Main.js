import React, { Component } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { routes } from '@/router';
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { toggleCollapse } from '@/redux/sider'
import Breadcrumb from '@/components/Breadcrumb';
const { Header, Content } = Layout

class Main extends Component {

  render() {
    const { collapse, toggleCollapse } = this.props
    return (
      <Layout>
        <Header>
          <div className='df aic'>
            {React.createElement(collapse ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style:{
                color:'#000',
                marginRight:10
              },  
              onClick: () => toggleCollapse(!collapse),
            })}
            <Breadcrumb />
          </div>
          <div>
            login
          </div>
        </Header>
        <Content>{routes}</Content>
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

