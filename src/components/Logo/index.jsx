import React, { Component } from 'react';
import logo from '@/assets/logo.png'
import './index.less'

export default class Logo extends Component {
  render() {
    return (
      <div className='text-center logo-wrap'>
        <img className='logo inline-block w-11 h-11' src={logo}></img>
      </div>
    );
  }
}
