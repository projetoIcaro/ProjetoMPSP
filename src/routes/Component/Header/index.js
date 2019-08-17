import React from 'react'
import { Header, Input, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import RightMenu from '../RightMenu/index'
import compassIcon from './resources/compassMenor.png'
import './index.css'

const HeaderCompass = () => (
 
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
)

export default HeaderCompass