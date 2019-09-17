import style from './index.module.css';
import 'semantic-ui-css/semantic.min.css'

import React, {Fragment} from 'react'
import {Header as HeaderSemantic, Input, Menu} from 'semantic-ui-react'
import RightMenu from 'component/RightMenu';
import compassIcon from './images/compassMenor.png'
import compassMenu from './images/compass-menu.png'

function Header (props) {
	return (
		<div className = {style.wrapper}>
			{!props.isLogin ? (
				<img alt="compass" src = {compassMenu}/>
			) : (
				<div>
					<img alt="compass" src = {compassMenu}/>
					<p>INPUT</p>
					<p>TROSSO DO USUARIO</p>
				</div>
			)}
		</div>
	);
}

export default Header;
