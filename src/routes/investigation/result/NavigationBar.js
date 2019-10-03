import styles from './NavigationBar.module.css';

import React, {useState} from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import SvgIcon from 'component/SvgIcon';

const urlLocations = [
	{iconName: 'home', pathname: '/investigation/result'},
	{iconName: 'history', pathname: '/investigation/history'},
	{iconName: 'search', pathname: '/investigation/search'},
	{iconName: 'target', pathname: '/investigation/target'},
	{iconName: 'download', pathname: '/investigation/download'},
];



function NavigationBar () {
	const [redirectURL, setRedirectURL] = useState(null);
	const {pathname} = useLocation();
	const renderNavigationBar = () => {
		return urlLocations.map((data) => {
			let handleClick = () => setRedirectURL(data.pathname);
			if (pathname === data.pathname) {
				handleClick = null;
			}
			return (
				<div onClick = {handleClick}>
					<SvgIcon icon = {data.iconName}/>
				</div>
			)
		});
	};
	return (
		<div className = {styles.wrapper}>
			{renderNavigationBar()}
			{redirectURL ? <Redirect to = {redirectURL}/> : null}
		</div>
	);
}

export default NavigationBar;
