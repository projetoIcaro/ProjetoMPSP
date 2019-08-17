import React, { Component } from 'react';
import menuButton from '../RightMenu/menuButton.png'

export default class RightMenu extends Component {
    render (){
        return (
        <div className="ui simple dropdown item">
            More
            <img scr={menuButton} />
            <div class="menu">
            <a class="item"><i class="settings icon"></i> Settings</a>
            <a class="item"><i class="logout icon"></i> Logout</a>
            </div>
        </div>
        );
    }
}