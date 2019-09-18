import style from './index.module.css';

import React from 'react';
import compassMenu from './images/compass-menu.png'
import User from './UserHeader';
import {Input} from 'component/form/FormWrapper';

function Header (props) {
	return (
		<div className = {style.wrapper}>
			{!props.isLogin ? (
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

export default Header;
