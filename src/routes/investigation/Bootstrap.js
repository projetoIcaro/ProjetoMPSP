import React, { Fragment , lazy} from 'react';
import { Route } from 'react-router-dom'

function Bootstrap (props) {
  return (
    <Fragment>
      <Route path = {props.match.path + '/history'} component = {lazy(() => import('./history/Bootstrap'))} />
      <Route path = {props.match.path + '/result'} component = {lazy(() => import('./result/Bootstrap'))} />
      <Route path = {props.match.path + '/search'} component = {lazy(() => import('./search/Bootstrap'))} />
      <Route path = {props.match.path + '/dashboard'} component = {lazy(() => import('./dashboard/Bootstrap'))} />
    </Fragment>
  );
}

export default Bootstrap;
