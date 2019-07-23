import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

function index () {
  return (
    <Fragment>
      <div>teste</div>
      <Link to={'/users/index'}>Eu sla state</Link>
    </Fragment>
  );
}

export default index;