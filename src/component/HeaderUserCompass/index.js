import React, { Component } from 'react';
import { Item, Menu, Icon } from 'semantic-ui-react'
import RightMenu from '../RightMenu'
import avatar from './images/avatar.jpg';

export default class HeaderUserCompass extends Component {
    render (){
        return (
        <div>
            <Menu secondary>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon name='bell outline' size='big'/>
                    </Menu.Item>
                    <Menu.Item>
                        <Item.Image size='tiny' src={avatar}/>
                        <span><h3>Jane Doe</h3></span>
                    </Menu.Item>
                    <Menu.Item>
                        <RightMenu/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
        );
    }
}
