import React, { Component } from 'react';
import items from './menu'
import Logo from '../../components/Logo';
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { toggleCollapse } from '@/redux/sider'

class Sider extends Component {

  state = {
    openKeys:''
  }

  //实现手风琴效果
  onOpenChange = (keys) => {
    if(keys.length > 1){
      this.setState({ openKeys: keys[keys.length - 1]})
    }else{
      this.setState({ openKeys: ''})
    }
  }

  render() {
    const { location,collapse,toggleCollapse } = this.props
    let currentRoutes = location.pathname.slice(1).split('/')
    let routesLength = currentRoutes.length
    return (
      <Layout.Sider
        id="sider" 
        collapsible 
        collapsed={collapse}
        trigger={null}
        collapsedWidth={50}
        onCollapse={(value) => {
          toggleCollapse(value)
        }}> 
        <Logo/>
        <Menu 
          defaultOpenKeys={currentRoutes.slice(0,routesLength-1)}
          defaultSelectedKeys={currentRoutes.slice(routesLength-1)}
          openKeys={this.state.openKeys ? [this.state.openKeys] : undefined}
          items={items} 
          mode="inline" 
          theme='dark'
          onOpenChange={this.onOpenChange}
          ></Menu>
      </Layout.Sider>
    );
  }
}

export default connect(
  (state)=>({collapse:state.sider.collapse}),
  (dispatch)=>({
    toggleCollapse:(val)=>dispatch(toggleCollapse(val))
  })
)(withRouter(Sider))
