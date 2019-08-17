import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment, Item, Label, ItemHeader } from 'semantic-ui-react';
import logo from './logo2.jpeg';
import bolinhas from './bolinhas.png';
import avatar from './avatar.jpg';
import 'semantic-ui-css/semantic.min.css';
import RightMenu from '../Component/RightMenu/index'

function index () {
  return (
    <Fragment>
  <Grid columns={3}>
    <Grid.Column>
      <img src={bolinhas}  class = "ui medium image" style={{width: 450, height: 240, padding: 0}} />
    </Grid.Column>
    <Grid.Column floated='right'>      
      <Menu secondary>
        <Menu.Menu position='right'>
          <Menu.Item>
            <RightMenu/>
          </Menu.Item>            
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  </Grid>
      
  <Container> 
    <Grid>
      <img src={logo} class="ui small image" style={{width: 220, height: 190, marginLeft: 430}} />  
    </Grid>
  </Container>
</Fragment> 
  );
}

export default index;