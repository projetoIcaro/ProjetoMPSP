import styles from './ItemButton.module.css';
import React from 'react';


function DownloadButton (props) {
    return (
        <div className = {styles.wrapper} onClick = {props.handleClick}>
            <button onClick={Teste}>  </button>
        </div>
    );
}

export default ItemButton;

function GerarPDF(){
    
}
