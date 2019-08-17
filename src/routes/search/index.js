import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment, Item, Label, ItemHeader } from 'semantic-ui-react';
import logo from './utils/images/logo2.jpeg';
import bolinhas from './utils/images/bolinhas.png';
import 'semantic-ui-css/semantic.min.css';
import './index.css'
import HeaderUserCompass from '../../utils/component/HeaderUserCompass/index'
import SituationalInputs from "./SituationalInputs";


function index () {
  return (
    
<Fragment>
  <Grid columns={3}>
    <Grid.Column>
      <img src={bolinhas}  class = "ui medium image" style={{width: 450, height: 240, padding: 0}} />
    </Grid.Column>
    <Grid.Column floated='right'>      
      <HeaderUserCompass />
    </Grid.Column>
  </Grid>
      
  <Container> 
    <Grid>
      <img src={logo} class="ui small image" style={{width: 220, height: 190, marginLeft: 430}} />  
    </Grid>
    
    <Grid style={{marginTop: 30, marginLeft: 370}}>
      <SituationalInputs/>
    </Grid>

    <Grid style={{marginTop: 50, marginLeft: 480}} >
      <Button circular color='red' size='big' style={{marginRight: 10}}>BUSCAR</Button>
    </Grid>

    <Grid style={{marginTop: 50, marginLeft: 440}}>
      <Item.Group link>
        <Item>
          <Link to="/history/index"> <Item.Header><h3>Histórico de busca</h3></Item.Header> </Link>
        </Item>   
      </Item.Group>      
    </Grid>  
  </Container>
</Fragment>     
  );
}

export default index;