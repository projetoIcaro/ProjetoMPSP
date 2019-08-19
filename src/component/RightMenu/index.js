import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class RightMenu extends Component {
    render (){
        return (
        <div className="ui simple dropdown item">
            <Icon name='bars' size='big'/>
            <div className = "menu">
                <Link to="/user/settings/index"><a className = "item"><i className = "settings icon"/> Settings</a> </Link>
                <Link to="/login/index"> <a href='/' className = "item"><i className = "logout icon"/> Logout</a> </Link>
            </div>
        </div>
        );
    }
}
