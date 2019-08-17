import React from 'react'
import { Header, Input, Image, Menu, Segment, Sidebar, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";
import compassIcon from './resources/compassMenor.png'
import './index.css'
import HeaderUserCompass from '../HeaderUserCompass/index'
import RightMenu from '../RightMenu';

const HeaderCompass = () => (
 /*
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
            <HeaderUserCompass />
          </div>
        </div>
      </div>
*/

<Menu>
  <Header>
  <h2 class="ui header">
    <img src ={compassIcon} style={{padding: 0, marginTop:20, marginLeft:15, width: 55, height: 50}} /> 
    <div class="content" style={{color: 'red', marginTop: 20}}>
      <h3>COMPASS</h3>
    </div>
  </h2>
  </Header>
  <Menu.Item fluid >
    <Input icon='search' placeholder='Search...'/>
  </Menu.Item>
  <Menu.Item position='right'>
    <RightMenu/>
  </Menu.Item>
  
</Menu>
)

export default HeaderCompass