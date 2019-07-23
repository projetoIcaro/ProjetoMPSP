import React, {Fragment, lazy} from 'react';
import { Route } from 'react-router-dom'

function Bootstrap () {
  return (
    <Fragment>
      <Route path = {'/teste'} component = {lazy(() => import('./teste/Bootstrap'))} />
      <Route path = {'/users'} component = {lazy(() => import('./users/Bootstrap'))} />
    </Fragment>
  );
}

export default Bootstrap;