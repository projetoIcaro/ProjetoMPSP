import styles from './NavigationBar.module.css';

import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import SvgIcon from 'component/SvgIcon';

const urlLocations = [
	{iconName: 'home', pathname: '/investigation/result'},
	{iconName: 'search', pathname: '/investigation/search'},
	// {iconName: 'history', pathname: '/investigation/history'},
	// {iconName: 'target', pathname: '/investigation/target'},
	{iconName: 'download', pathname: '/investigation/download'},
];

function NavigationBar () {
	const {pathname} = useLocation();
	const renderNavigationBar = () => {
		return urlLocations.map((data) => {
			const classSet = pathname === data.pathname ? styles.currentLocation : null;
			if (pathname === data.pathname) {
				return (
					<div className = {classSet} key = {data.iconName}>
						<SvgIcon icon = {data.iconName}/>
					</div>
				)
			}
			return (
				<div className = {classSet} key = {data.iconName}>
					<Link to = {data.pathname}>
						<SvgIcon icon = {data.iconName}/>
					</Link>
				</div>
			)
		});
	};
	return (
		<div className = {styles.wrapper}>
			{renderNavigationBar()}
		</div>
	);
}

export default NavigationBar;
