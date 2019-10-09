import styles from './index.module.css';

import React from 'react';
import {withRouter} from 'react-router-dom';
// import {Input} from 'component/form/FormWrapper';
import compassMenu from './images/MP1.png';
import User from './UserHeader';

function Header (props) {
	return (
		<div className = {styles.wrapper}>
			{props.location.pathname === '/login' ? (
				<img alt="compass" src={compassMenu}/>
			) : (
				<div>
					<img alt="compass" src={compassMenu}/>
					<div className = {styles.searchInput}>
						{/*<Input attribute={['searchResult']} placeholder="Buscar"/>*/}
					</div>
					<User/>
				</div>
			)}
		</div>
	);
}

export default withRouter(Header);
