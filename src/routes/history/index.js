import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import SidebarExampleVisible from '../../utils/component/Sidebar'
import HeaderCompass from '../../utils/component/Header'


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