import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDataFromApi } from 'utils/redux/actions/app';

function GlobalContext (props) {
  const {actions, children, location} = props;
  useEffect(() => {
    // actions.fetchConfigData();
  }, [actions]);

  useEffect(() => {
    // actions.fetchRouteData(location.pathname);
  }, [actions, location.pathname]);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    fetchConfigData: () => dispatch(fetchDataFromApi('/config')),
    fetchRouteData: (pathname) => dispatch(fetchDataFromApi(pathname)),
  }
});

export default withRouter(
  connect(null, mapDispatchToProps)(GlobalContext)
);
