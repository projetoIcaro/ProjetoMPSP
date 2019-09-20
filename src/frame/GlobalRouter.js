import React, {useEffect, useRef} from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * @return {null}
 */
function GlobalRouter (props) {
  const {isLogged} = props;
  let redirectTo = useRef('not');
  console.log(redirectTo.current);
  useEffect(() => {
    if (isLogged && props.location.pathname === '/login') {
      redirectTo.current = '/investigation/workspace';
    } else {
      if (props.location.pathname !== '/login') {
        redirectTo.current = '/login';
      }
    }
  }, [props.location.pathname, isLogged]);
  if (typeof isLogged === 'undefined') return null;
  return redirectTo.current !== 'not' ? <Redirect to = {redirectTo.current}/> : props.children;
}

function mapStateToProps (state) {
  return {
    isLogged: state.get('isLogged'),
  };
}

export default withRouter(
  connect(mapStateToProps)(GlobalRouter)
);
