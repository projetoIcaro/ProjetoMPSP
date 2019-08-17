import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'
import SidebarExampleVisible from '../Component/Sidebar'
import compassIcon from './resources/compassMenor.png'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import RightMenu from '../Component/RightMenu/index'

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
      <div id="Header" class="ui top attached menu" style={{marginTop:'20px'}}>
        <div class="column item">
          <h2 class="ui header">
            <img src ={compassIcon} style={{padding: 0}} /> 
            <div class="content" style={{color: 'red'}}>
              COMPASS
            </div>
          </h2>
        </div>
        <div id="search" class="ui loading icon input item" style={{width:'20%'}}>
          <Input placeholder='Search...' />
        </div>
        <div class="ui right aligned category search item">
          <div class="right column">
            <RightMenu />
          </div>
        </div>
      </div>
      <SidebarExampleVisible />
    </Fragment>
  );
}

export default index;