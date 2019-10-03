import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * @return {null}
 */
function GlobalRouter () {
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
