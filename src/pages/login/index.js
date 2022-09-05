import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.less'
import { setToken } from '@/redux/user'
import { connect } from 'react-redux';
import { login } from '@/apis'
import { userActions } from '../../redux/user';

class Login extends Component {
  onFinish = (values) => {
    const { handleLogin } = this.props
    handleLogin(values)
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <div className='login-wrap'>
        <Form 
          className="login-form" 
          name="basic" 
          layout="vertical"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}>
          <Typography.Title level={3} style={{color:'white',textAlign:'center',marginBottom:'40px'}}>System Login</Typography.Title>
          <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"/>
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default connect(
  (state)=>({...state}),
  (dispatch)=>({
    handleLogin:async (data)=>{
      await login(data).then(res=>{
        dispatch(setToken(res))
      })
    }})
)(Login)