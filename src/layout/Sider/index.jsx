import React, { Component, useEffect, useState } from 'react';
import items from './menu'
import Logo from '@/components/Logo';
import { Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCollapse } from '@/redux/sider'

// class Sider extends Component {

//   state = {
//     openKeys:''
//   }

//   //实现手风琴效果
//   onOpenChange = (keys) => {
//     console.log(keys)
//     // if(keys.length > 1){
//     //   this.setState({ openKeys: keys[keys.length - 1]})
//     // }else{
//     //   this.setState({ openKeys: ''})
//     // }
//   }

//   onClick = ({keyPath}) => {
//     if(keyPath.length === 1){
//       this.setState({ openKeys: ''})
//     }
//   }

//   render() {
//     const { location,collapse,toggleCollapse } = this.props
//     let currentRoutes = location.pathname.slice(1).split('/')
//     let routesLength = currentRoutes.length
//     // console.log(currentRoutes.slice(0,routesLength-1))
//     // console.log(currentRoutes.slice(routesLength-1))
//     return (
//       <Layout.Sider
//         id="sider" 
//         collapsible 
//         collapsed={collapse}
//         trigger={null}
//         collapsedWidth={50}
//         onCollapse={(value) => {
//           toggleCollapse(value)
//         }}> 
//         <Logo/>
//         <Menu 
//           defaultOpenKeys={currentRoutes.slice(0,routesLength-1)}
//           defaultSelectedKeys={currentRoutes.slice(routesLength-1)}
//           openKeys={this.state.openKeys ? [this.state.openKeys] : undefined}
//           items={items} 
//           mode="inline" 
//           theme='dark'
//           onOpenChange={this.onOpenChange}
//           onClick={this.onClick}
//           ></Menu>
//       </Layout.Sider>
//     );
//   }
// }

// export default connect(
//   (state)=>({collapse:state.sider.collapse}),
//   (dispatch)=>({
//     toggleCollapse:(val)=>dispatch(toggleCollapse(val))
//   })
// )(withRouter(Sider))

export default function Sider(){
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { collapse } = useSelector(state => state.sider)
  const toggleCollapse = (val) => dispatch(toggleCollapse(val))
  const [currentRoutes,setCurrentRoutes] = useState(pathname.slice(1).split('/'))
  const [openKeys,setOpenKeys] = useState('')
  let routesLength = currentRoutes.length
  const onOpenChange = (keys) => {
    console.log(keys)
    if(keys.length > 1){
      setOpenKeys(keys[keys.length - 1])
    }else{
      setOpenKeys('')
    }
  }
  const onClick = ({keyPath}) => {
    if(keyPath.length === 1){
      setOpenKeys()
    }
  }

  useEffect(()=>{
    // setCurrentRoutes(pathname.slice(1).split('/'))
  },[pathname])
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
        openKeys={openKeys ? [openKeys] : undefined}
        items={items} 
        mode="inline" 
        theme='dark'
        onOpenChange={onOpenChange}
        ></Menu>
    </Layout.Sider>
  );
}