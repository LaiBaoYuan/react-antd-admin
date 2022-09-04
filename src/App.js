import React, { Component } from 'react';
import MyLayout from './layout';
import RouteGuard from './permission';
import Login from '@/pages/login';
import NoFound from './pages/error/404';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <RouteGuard>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={MyLayout}></Route>
          <Route path="*" component={NoFound} />
        </Switch>
      </RouteGuard>
    );
  }
}
