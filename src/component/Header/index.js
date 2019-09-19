import style from './index.module.css';

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Input} from 'component/form/FormWrapper';
import compassMenu from './images/compass-menu.png';
import User from './UserHeader';

function Header (props) {
	return (
		<div className = {style.wrapper}>
			{props.location.pathname === '/login' ? (
				<img alt="compass" src={compassMenu}/>
			) : (
				<div>
					<img alt="compass" src={compassMenu}/>
					<Input attribute={['search']} placeholder="Buscar"/>
					<User/>
				</div>
			)}
		</div>
	);
}

export default withRouter(Header);
