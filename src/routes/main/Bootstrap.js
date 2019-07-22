import React, { lazy } from 'react';
import { Route } from 'react-router-dom'

function Bootstrap (props) {
  return (
    <Route path = {props.match.path + '/teste'} component = {lazy(() => import('./teste/Bootstrap'))} />
  );
}

export default Bootstrap;