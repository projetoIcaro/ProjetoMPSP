import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'
import SidebarCompass from '../Component/SidebarCompass/index'
import 'semantic-ui-css/semantic.min.css'
import HeaderCompass from '../Component/Header/index'


async function hardcodedSearch  () {
  await axios.get('http://localhost:3001/api/site/search', {
    params: {
      empresa: 'google',
    }
  }).then(res => console.log(res))
}

function index () {
  hardcodedSearch();
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