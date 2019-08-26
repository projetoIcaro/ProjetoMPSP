import React, { Component, Fragment} from 'react';
import { Button, Container, Grid, Menu, Icon, Input, Segment, Item, Modal, Form, Header } from 'semantic-ui-react';
import bolinhas from './images/bolinhas.png';
import 'semantic-ui-css/semantic.min.css';
import compassIcon from './images/compass-menu.png';
//import { Form, Icon, Input, Button, Checkbox } from 'antd';

export default class login extends Component {

    state = {
      login: "12345",
      senha: "",
    };

    constructor(props){
      super(props);
      this.login = React.createRef();
      this.senha = React.createRef();
    }

    validaCampos = () => {
      return true
    };

    submitLogin = () => {
      let validado = this.validaCampos();
      if(!validado){
          return
      }

      this.props.history.push('/search/index');
    };

    render(){
      return (
        <Fragment>
        <Grid columns={3}>
          <Grid.Column>
            <img alt = "bolinhas" src={bolinhas}  className = "ui medium image" style={{width: 450, height: 240, padding: 0}} />
          </Grid.Column>
          <Grid.Column floated='right'>
            <Menu secondary>
              <Menu.Menu position='right'>
                <Menu.Item>
                <h2 className = "ui header">
                  <img alt = "compass" src ={compassIcon} style={{padding: 0, height: 65, width: 195}} />
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
                    <Header>Digite seu e-masil:</Header>
                    <Input  icon placeholder='E-mail' size='medium' fluid>
                      <input ref={this.login} />
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

              <Button circular color='red' floated='right' onClick={this.submitLogin}>LOG IN</Button>
            </Segment>

          </Grid>
        </Container>
      </Fragment>
    );
  }
  }
