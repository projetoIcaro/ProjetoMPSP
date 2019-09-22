import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * @return {null}
 */
function GlobalRouter (props) {
  return null;
}

function mapStateToProps (state) {
  return {
    user: state.getIn(['config', 'user']),
  };
}

export default withRouter(
  connect(mapStateToProps)(GlobalRouter)
);
