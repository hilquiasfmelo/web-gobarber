import React from 'react';
import { Switch } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { SingIn } from '../pages/SingIn';
import { SingUp } from '../pages/SingUp';
import { Route } from './Route';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/signup" component={SingUp} />
    <Route path="/dash" component={Dashboard} isPrivate />
  </Switch>
);
