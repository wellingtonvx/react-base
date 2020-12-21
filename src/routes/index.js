import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/" exact component={Login} />
      <MyRoute path="*" exact component={Page404} />
    </Switch>
  );
}
