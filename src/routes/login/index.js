import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Image, Button, Container, Grid, Menu, Icon, Input, Segment, Item, Label, Modal, Form, Header } from 'semantic-ui-react';
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
    <Grid style={{marginLeft:350}}>
      <Segment>
        <Form>
          <Header color='red'><h2>LOG IN</h2></Header>
          <Form.Field>
            <Input icon placeholder='E-mail' size='huge'>
              <input />
              <Icon name='envelope'/>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input icon placeholder='Senha' size='huge'>
              <input />
              <Icon name='lock'/>
            </Input>
          </Form.Field>
        </Form>

        <Modal trigger={<Item.Group link>
          <Item>
            <Item.Header><h5>Esqueci a senha</h5></Item.Header>
          </Item>   
        </Item.Group>}>
          <Modal.Header>Recuperação de Senha</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Digite seu e-mail:</Header>
              <Input icon placeholder='E-mail' size='medium' fluid>
                <input />
                <Icon name='envelope'/>
              </Input>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted>
              <Icon name='remove' /> Cancelar
            </Button>
            <Button color='green' inverted>
              <Icon name='checkmark' /> Enviar
            </Button>
          </Modal.Actions>
        </Modal>

        <Button circular color='red' floated='right' href="/search/index">LOG IN</Button> 
      </Segment>
      
    </Grid>
  </Container>
</Fragment> 
  );
}

export default index;