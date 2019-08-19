import React, {Fragment, lazy} from 'react';
import { Route } from 'react-router-dom'

function Bootstrap () {
  return (
    <Fragment>
      <Route path = {'/login'} component = {lazy(() => import('./login/Bootstrap'))} />
      <Route path = {'/user'} component = {lazy(() => import('./user/Bootstrap'))} />
      <Route path = {'/investigation'} component = {lazy(() => import('./investigation/Bootstrap'))} />
    </Fragment>
  );
}

export default Bootstrap;
