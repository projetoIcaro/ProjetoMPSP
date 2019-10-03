import React, {Fragment, lazy} from 'react';
import {Route} from 'react-router-dom';
import RenderComponentsForRoute from './RenderComponentsForRoute';

function Bootstrap (props) {
  return (
    <Fragment>
      <RenderComponentsForRoute/>
      <Route path = {props.match.path + '/history'} component = {lazy(() => import('./history/Bootstrap'))}/>
      <Route path = {props.match.path + '/result'} component = {lazy(() => import('./result/Bootstrap'))}/>
      <Route path = {props.match.path + '/search'} component = {lazy(() => import('./search/Bootstrap'))}/>
      <Route path = {props.match.path + '/workspace'} component = {lazy(() => import('./workspace/Bootstrap'))}/>
    </Fragment>
  );
}

export default Bootstrap;
