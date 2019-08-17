import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const SidebarExampleVisible = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
      <Link to="/info/index">
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
      </Link>
      <Link to="/history/index">
        <Menu.Item as='a'>
          <Icon name='clock' />
          History
        </Menu.Item>
      </Link>
      <Link to="/search/index">
        <Menu.Item as='a'>
          <Icon name='search' />
          Search
        </Menu.Item>
      </Link>
    </Sidebar>
    
    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SidebarExampleVisible