import style from './index.module.css';
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import {Header as HeaderSemantic, Input, Menu} from 'semantic-ui-react'
import RightMenu from 'component/RightMenu';
import compassIcon from './images/compassMenor.png'
import compassMenu from './images/compass-menu.png'

function Header (props) {
	return (
		<div className={style.wrapper}>
			{props.isLogin ? (
				<img alt="compass" src={compassMenu}/>
			) : (
				<Menu>
					<HeaderSemantic>
						<h2 className="ui header">
							<img alt="compassIcon" src={compassIcon}
									 style={{padding: 0, marginTop: 20, marginLeft: 15, width: 55, height: 50}}/>
							<div className="content" style={{color: 'red', marginTop: 20}}>
								<h3>COMPASS</h3>
							</div>
						</h2>
					</HeaderSemantic>
					<Menu.Item>
						<Input icon='search' placeholder='Search...'/>
					</Menu.Item>
					<Menu.Item position='right'>
						<RightMenu/>
					</Menu.Item>
				
				</Menu>
			)}
		</div>
	);
}

export default Header;
