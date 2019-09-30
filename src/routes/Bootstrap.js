import React, {Fragment, lazy} from 'react';
import { Redirect, Route } from 'react-router-dom'

function Bootstrap () {
  return (
    <Fragment>
      <Route path = {'/login'} component = {lazy(() => import('./login/Bootstrap'))} />
      <Route path = {'/user'} component = {lazy(() => import('./user/Bootstrap'))} />
      <Route path = {'/investigation'} component = {lazy(() => import('./investigation/Bootstrap'))} />
      {/*<Route component = {(() => <Redirect to = "/login"/>)} />*/}
    </Fragment>
  );
}

export default Bootstrap;
