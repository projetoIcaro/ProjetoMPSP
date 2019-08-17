import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import SidebarExampleVisible from '../Component/Sidebar'
import HeaderCompass from '../Component/Header/index'


function index () {
  return (
    <Fragment>
      <HeaderCompass />
      <SidebarExampleVisible />
      <div>Famosa Página de Histórico   </div>
    </Fragment>
  );
}

export default index;