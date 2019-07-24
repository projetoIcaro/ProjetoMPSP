import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function index () {
  return (
    <Fragment>
      <div>users</div>
      <Link to={'/teste/index'}>TESTE/INDEX</Link>
    </Fragment>
    );
}

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(index);