import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDataFromApi } from 'utils/redux/actions/app';

function GlobalContext ({actions, children, location}) {
  useEffect(() => {
    // run on mount
    // TODO: QUANDO ARRUMAR A API, ARRUMAR ESSAS ACTIONS TB
    // actions.setPropsByRoute('/');
  }, [actions]);

  useEffect(() => {
    // run on pahname changes
    // TODO: QUANDO ARRUMAR A API, ARRUMAR ESSAS ACTIONS TB
    actions.setPropsByRoute(location.pathname);
  }, [actions, location.pathname]);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setPropsByRoute: (pathname) => dispatch(fetchDataFromApi(pathname)),
  }
});

export default withRouter(
  connect(null, mapDispatchToProps)(GlobalContext)
);
