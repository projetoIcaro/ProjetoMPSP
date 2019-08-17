import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'
import SidebarExampleVisible from '../Component/Sidebar/index'
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
      <HeaderCompass />
      <SidebarExampleVisible />
    </Fragment>
  );
}

export default index;