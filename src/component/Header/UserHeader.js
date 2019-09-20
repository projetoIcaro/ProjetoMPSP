import styles from './UserHeader.module.css';

import React from 'react';
import {connect} from 'react-redux';
import Dropdown from 'component/Dropdown';

const options = [
	{id: 0, label: 'VAI A MERDA'},
	{id: 1, label: 'VAI SE FUDER'},
];

function UserHeader (props) {
	return (
		<div className={styles.wrapper}>
			{/*<div>Sino (WebSockets)</div>*/}
			{/*<div>Foto?</div>*/}
			<div>{props.user_name ? props.user_name : 'Admin'}</div>
			<Dropdown attribute={['userDropDown']} options={options}>IC. HAMB.</Dropdown>
		</div>
	);
}

function mapStateToProps (state) {
	return {
		user_name: state.getIn(['config', 'user', 'user_name']),
	};
}

export default connect(mapStateToProps)(UserHeader);
