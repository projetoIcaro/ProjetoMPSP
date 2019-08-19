import React, {lazy} from 'react';
import { Route } from 'react-router-dom'

function Bootstrap (props) {
  return (
    <Route path = {props.match.path + '/settings'} component = {lazy(() => import('./settings/Bootstrap'))} />
  );
}

export default Bootstrap;
