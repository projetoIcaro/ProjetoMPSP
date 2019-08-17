import React, {Fragment, lazy} from 'react';
import { Route } from 'react-router-dom'

function Bootstrap () {
  return (
    <Fragment>
      <Route path = {'/login'} component = {lazy(() => import('./login/Bootstrap'))} />
      <Route path = {'/search'} component = {lazy(() => import('./search/Bootstrap'))} />
      <Route path = {'/info'} component = {lazy(() => import('./info/Bootstrap'))} />
    </Fragment>
  );
}

export default Bootstrap;