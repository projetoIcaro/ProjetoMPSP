import styles from './Cards.module.css';

import React, {useEffect} from 'react';
import ApiMap from 'utils/apisMap.json';
import Card from './Card';
import {connect} from "react-redux";
import {cleanExtractionData} from 'utils/redux/actions/app';

function Cards (props) {
	const {actions} = props;
	useEffect(() => {
		actions.cleanExtractionData();
	}, [actions]);
	return (
		<div className = {styles.wrapper}>
			<div className = {styles.title}>RESULTADO DE BUSCA</div>
			<div className = {styles.cards}>
				{ApiMap.map((data) => {
					return (
						<Card
							{...data}
							key = {data.name}
						/>
					);
				})}
			</div>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	actions: {
		cleanExtractionData: () => dispatch(cleanExtractionData()),
	}
});

export default connect(null, mapDispatchToProps)(Cards);
