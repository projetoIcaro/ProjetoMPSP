import styles from './Body.module.css';

import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import NavigationBar from './NavigationBar';

function Body (props) {
	const isInvestigation = useRouteMatch('/investigation');
	return (
		<div className = {styles.wrapper}>
			{isInvestigation ? <NavigationBar/> : null}
			{props.children}
		</div>
	);
}

export default Body;
