import styles from './ItemButton.module.css';

import React from 'react';
import SvgIcon from 'component/SvgIcon';

function ItemButton (props) {
    return (
        <div className = {styles.wrapper} onClick = {props.handleClick}>
            <div className = {styles.icon}><SvgIcon icon = {props.icon}/></div>
            <div className = {styles.label}>{props.children}</div>
        </div>
    );
}

export default ItemButton;
