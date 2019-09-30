import styles from './Result.module.css';

import React from 'react'
import ToolBar from './ToolBar';
import Cards from './Cards';

function index () {
  return (
    <div className = {styles.wrapper}>
      <ToolBar/>
      <Cards/>
    </div>
  );
}

export default index;
