import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment } from 'semantic-ui-react'
import axios from 'axios'
import SidebarExampleVisible from './components/sidebar'
import compassIcon from './resources/compassMenor.png'
import menuButton from './resources/menuButton.png'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

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
            <div class="ui simple dropdown item">
              More
              <img scr={menuButton} />
              <div class="menu">
                <a class="item"><i class="settings icon"></i> Settings</a>
                <a class="item"><i class="logout icon"></i> Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SidebarExampleVisible />
    </Fragment>
  );
}

export default index;