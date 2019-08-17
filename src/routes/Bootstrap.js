import React, {Fragment, lazy} from 'react';
import { Route } from 'react-router-dom'

function Bootstrap () {
  return (
    <Fragment>
      <Route path = {'/login'} component = {lazy(() => import('./login/Bootstrap'))} />
      <Route path = {'/search'} component = {lazy(() => import('./search/Bootstrap'))} />
      <Route path = {'/info'} component = {lazy(() => import('./info/Bootstrap'))} />
      <Route path = {'/settings'} component = {lazy(() => import('./settings/Bootstrap'))} />
      <Route path = {'/history'} component = {lazy(() => import('./history/Bootstrap'))} />
    </Fragment>
  );
}

export default Bootstrap;