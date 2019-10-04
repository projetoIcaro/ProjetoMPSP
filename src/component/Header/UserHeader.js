import styles from './UserHeader.module.css';

import React from 'react';
import {connect} from 'react-redux';
import SvgIcon from 'component/SvgIcon';

function UserHeader (props) {
	return (
		<div className={styles.wrapper}>
			{/*<div>Sino (WebSockets)</div>*/}
			<div className={styles.userIcon}>A</div>
			<div>{props.user_name ? props.user_name : 'Admin'}</div>
			<div className={styles.menu}><SvgIcon icon = "menu"/></div>
		</div>
	);
}

function mapStateToProps (state) {
	return {
		user_name: state.getIn(['config', 'user', 'user_name']),
	};
}

export default connect(mapStateToProps)(UserHeader);
