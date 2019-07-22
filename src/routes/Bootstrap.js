import React from 'react';
import { Route } from 'react-router-dom'
import controllerBootstrap from './main/Bootstrap';

function Bootstrap () {
  return (
    <Route path = "/main" component = {controllerBootstrap} />
  );
}

export default Bootstrap;