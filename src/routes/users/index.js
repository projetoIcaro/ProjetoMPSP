import React, {Fragment, useContext} from 'react';
import {Link} from "react-router-dom";
import {GlobalContext} from "../../GlobalContext";

function index () {
  // const context = useContext(GlobalContext);
  // console.log(context);
  return (
    <Fragment>
      <div>teste</div>
      <Link to={'/teste/index'}>Eu sla state</Link>
    </Fragment>
    );
}

export default index;