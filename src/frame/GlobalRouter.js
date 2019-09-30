import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * @return {null}
 */
function GlobalRouter (props) {
	return null;
  const isUserLogged = !!props.user;
  if (props.location.pathname === '/login' && isUserLogged) {
    return <Redirect to = "/investigation/workspace"/>;
  }
  return isUserLogged ? null : (<Redirect to = "/login"/>);
}

function mapStateToProps (state) {
  return {
    user: state.getIn(['config', 'user']),
  };
}

export default withRouter(
  connect(mapStateToProps)(GlobalRouter)
);
