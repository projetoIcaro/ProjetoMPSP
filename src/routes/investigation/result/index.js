import styles from './Result.module.css';

import React from 'react'
import NavigationBar from './NavigationBar';
import Cards from './Cards';

function index () {
  return (
    <div className = {styles.wrapper}>
      <NavigationBar/>
      <Cards/>
    </div>
  );
}

export default index;
