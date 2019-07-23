import React, {Fragment, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

function GlobalContext ({children, location}) {
  useEffect(() => {
    fetchByRoute(location);
  });

  function fetchByRoute() {
    fetch('http://localhost:5000' + location.pathname)
      .then( res => res.json() )
      .then(res => console.log(res));
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default withRouter(GlobalContext);