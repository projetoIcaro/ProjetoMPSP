import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

async function hardcodedSearch  () {
  await axios.get('http://localhost:3001/api/site/search', {
    params: {
      empresa: 'google',
    }
  }).then(res => console.log(res))
}

function index () {
  hardcodedSearch();
  return (
    <Fragment>
      <div>teste</div>
      <Link to={'/info/index'}>USERS/INDEX</Link>
    </Fragment>
  );
}

export default index;