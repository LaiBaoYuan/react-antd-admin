import React, { Component } from 'react';
import MyLayout from './layout';
import RouteGuard from './permission';
import Login from '@/pages/login';
import NoFound from '@/pages/error/404.jsx';
import { Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <RouteGuard>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<MyLayout/>}></Route>
          <Route path="*" element={<NoFound/>} />
        </Routes>
      </RouteGuard>
    );
  }
}
