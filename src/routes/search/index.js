import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment } from 'semantic-ui-react';
import compass from './compass.jpg';
import bolinhas from './bolinhas.png';
import 'semantic-ui-css/semantic.min.css';

function index () {
  return (
    
<Fragment>
  <Grid columns={3} divided>
  <Grid.Column>
  <img src={bolinhas}  class = "ui medium image" style={{width: 450, height: 240, padding: 0}} />
  </Grid.Column>
  <Grid.Column floated='right'>
    <Segment>
    <Menu secondary>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'             
          />
        </Menu.Menu>
      </Menu>
    </Segment>
</Grid.Column>
  </Grid>


     
  <Container> 

    <Grid>
      <img src={compass} class="ui small image" style={{width: 190, height: 160, marginLeft: 450}} />    
    </Grid>

    <Grid style={{marginTop: 50, marginLeft: 370}}>
      <Button color='red' style={{marginRight: 10}}>CPF</Button>
      <Button color='red' style={{marginRight: 10}}>RG</Button>
      <Button color='red' style={{marginRight: 10}}>PIS</Button>
      <Button color='red' style={{marginRight: 10}}>CNPJ</Button>
      <Button color='red' style={{marginRight: 10}}>Nome</Button>
    </Grid>

    <Grid style={{marginTop: 50, marginLeft: 480}} >
      <Button color='red' size='big' style={{marginRight: 10}}>BUSCAR</Button>
    </Grid>

    <Grid style={{marginTop: 50, marginLeft: 470}}>
      <a href="www.google.com"><h2>Histórico</h2></a>
    </Grid>  
  </Container>
</Fragment> 
    
  );
}



export default index;