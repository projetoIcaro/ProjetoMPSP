import style from './index.module.css';
import 'semantic-ui-css/semantic.min.css'

import React from 'react';
import compassMenu from './images/compass-menu.png'

function Header (props) {
	return (
		<div className = {style.wrapper}>
			{!props.isLogin ? (
				<img alt="compass" src={compassMenu}/>
			) : (
				<div>
					<img alt="compass" src={compassMenu}/>
					<div>INPUT</div>
					<div>TROSSO DO USUARIO</div>
				</div>
			)}
		</div>
	);
}

export default Header;
