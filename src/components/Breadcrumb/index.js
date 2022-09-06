import React, { PureComponent } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';
import routes from '@/router';
console.log(routes)

class BreadCrumb extends PureComponent {

  getBread(array){
    let breadArr = []
    let pathArr = this.props.location.pathname.slice(1).split('/')
    let item = array.find(v=>pathArr.includes(v.key))
    breadArr.push({path:item.key,label:item.label})
    if(item.children && item.children.length){
      breadArr.push(...this.getBread(item.children))
    }
    return breadArr
  }

  render() {
    console.log(this.getBread(routes))
    return (
        <Breadcrumb>
            {this.getBread(routes).map((v,i)=>(
              <Breadcrumb.Item key={i}><a href={v.key}>{v.label}</a></Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
  }
}

export default withRouter(BreadCrumb)
