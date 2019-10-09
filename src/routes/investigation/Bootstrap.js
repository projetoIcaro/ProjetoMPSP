import React, {Fragment, lazy} from 'react';
import {Route} from 'react-router-dom';

function Bootstrap (props) {
  return (
    <Fragment>
      <Route path = {props.match.path + '/history'} component = {lazy(() => import('./history/Bootstrap'))}/>
      <Route path = {props.match.path + '/result'} component = {lazy(() => import('./result/Bootstrap'))}/>
      <Route path = {props.match.path + '/search'} component = {lazy(() => import('./search/Bootstrap'))}/>
      <Route path = {props.match.path + '/workspace'} component = {lazy(() => import('./workspace/Bootstrap'))}/>
      <Route path = {props.match.path + '/target'} component = {lazy(() => import('./target/Bootstrap'))}/>
      <Route path = {props.match.path + '/download'} component = {lazy(() => import('./download/Bootstrap'))}/>
    </Fragment>
  );
}

export default Bootstrap;
