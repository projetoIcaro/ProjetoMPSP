import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './index.css'

export default class SidebarCompass extends Component {
    render (){
        return (
            <Menu icon='labeled' vertical>
                <Menu.Item name='home' >
                <Icon name='home' />
                </Menu.Item>

                <Menu.Item name='history'>
                <Icon name='history' />
                </Menu.Item>

                <Menu.Item name='video play'>
                <Icon name='video play' />
                </Menu.Item>
            </Menu>
        );
    }
}
