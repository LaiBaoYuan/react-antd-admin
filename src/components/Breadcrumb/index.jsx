import React, { PureComponent } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import routes from '@/router';
console.log(routes,'router')

class BreadCrumb extends PureComponent {

  // getBread(array,parentPath = ''){
  //   console.log(array)
  //   let breadArr = []
  //   let pathArr = this.props.location.pathname.slice(1).split('/')
  //   let item = array.find(v=>pathArr.includes(v.key))
  //   breadArr.push({ path:`${parentPath}/${item.key}` , label:item.label })
  //   if(item.children && item.children.length){
  //     breadArr.push(...this.getBread(item.children,`${parentPath}/${item.key}`))
  //   }
  //   return breadArr
  // }
  itemRender(route, params, routes, paths){
    console.log(route, params, routes, paths)
    return (<div>123</div>)
  }

  render() {
    console.log(this.props)
    const { history: { push } } = this.props
    return (
        // <Breadcrumb>
        //     {this.getBread(routes).map((v,i)=>(
        //       <Breadcrumb.Item key={i}><span onClick={()=>push(v.path)}>{v.label}</span></Breadcrumb.Item>
        //     ))}
        // </Breadcrumb>
        <Breadcrumb itemRender={this.itemRender} routes={routes}></Breadcrumb>
    );
  }
}

export default withRouter(BreadCrumb)