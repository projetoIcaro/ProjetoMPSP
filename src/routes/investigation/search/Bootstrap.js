import React, {lazy} from 'react';
import {Route} from 'react-router-dom';

function Bootstrap (props) {
  return (
    <Route path = {props.match.path + '/'} component = {lazy(() => import('./index'))} />
  );
}

export default Bootstrap;
