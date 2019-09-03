import React, { Fragment } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import SidebarCompass from 'component/SidebarCompass/index'
import HeaderCompass from 'component/Header'

function index () {
  return (
    <Fragment>
      <Grid.Row>
      <HeaderCompass />
      </Grid.Row>
      <Grid.Row>
      <SidebarCompass />
      </Grid.Row>
    </Fragment>
  );
}

export default index;
