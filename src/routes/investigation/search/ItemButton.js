import styles from './ItemButton.module.css';

import React from 'react';

function ItemButton (props) {
    return (
        <div className = {styles.wrapper} onClick = {props.handleClick}>
            <div className = {styles.icon}>icon</div>
            <div className = {styles.label}>{props.children}</div>
        </div>
    );
}

export default ItemButton;
