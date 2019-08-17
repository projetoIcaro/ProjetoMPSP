import React, { Component } from 'react'
import { Button, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import { Link } from "react-router-dom";
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
