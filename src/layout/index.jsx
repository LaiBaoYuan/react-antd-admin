import React, { Component } from 'react';
import Sider from './Sider'
import Main from './Main';
import { Layout } from 'antd'

export default class MyLayout extends Component {
  render() {
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider/>
        <Main/>
      </Layout>
    );
  }
}
