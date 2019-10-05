import React, {lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import GoTo from 'frame/GoTo';

function Bootstrap () {
  return (
    <Switch>
      <Route path = {'/login'} component = {lazy(() => import('./login/Bootstrap'))} />
      <Route path = {'/user'} component = {lazy(() => import('./user/Bootstrap'))} />
      <Route path = {'/investigation'} component = {lazy(() => import('./investigation/Bootstrap'))} />
      <Route component = {GoTo}/>
    </Switch>
  );
}

export default Bootstrap;
