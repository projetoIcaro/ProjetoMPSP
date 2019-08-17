import React, { Component } from 'react';
import menuButton from '../RightMenu/menuButton.png'
import { Icon } from 'semantic-ui-react';

export default class RightMenu extends Component {
    render (){
        return (
        <div className="ui simple dropdown item">
            <Icon name='bars' size='big'></Icon>
            <div class="menu">
            <a class="item"><i class="settings icon"></i> Settings</a>
            <a href='/' class="item"><i class="logout icon"></i> Logout</a>
            </div>
        </div>
        );
    }
}