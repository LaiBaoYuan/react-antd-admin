import React, { Component } from 'react';
import logo from '@/assets/logo.png'
import './index.less'

export default class Logo extends Component {
  render() {
    return (
      <div className='logo-wrap'>
        <img className='logo' src={logo}></img>
      </div>
    );
  }
}
