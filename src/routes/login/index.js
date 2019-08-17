import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment, Item, Label, ItemHeader } from 'semantic-ui-react';
import bolinhas from './bolinhas.png';
import 'semantic-ui-css/semantic.min.css';
import RightMenu from '../Component/RightMenu/index'
import compassIcon from './compassMenor.png'

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
          <h2 class="ui header">
            <img src ={compassIcon} style={{padding: 0}} /> 
            <div class="content" style={{color: 'red'}}>
              COMPASS
            </div>
          </h2>
          </Menu.Item>            
        </Menu.Menu>
      </Menu>
    </Grid.Column>
  </Grid>
      
  <Container> 
    <Grid>
    
    </Grid>
  </Container>
</Fragment> 
  );
}

export default index;