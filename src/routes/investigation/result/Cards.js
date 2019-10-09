import styles from './Cards.module.css';

import React, {useEffect, useRef} from 'react';
import ApiMap from 'utils/apisMap.json';
import Card from './Card';
import {connect} from "react-redux";
import {cleanExtractionData, setAttrProps} from 'utils/redux/actions/app';

function Cards (props) {
	const {actions, hasToSearch} = props;
	const newSearch = useRef(false);
	useEffect(() => {
		if (hasToSearch) {
			actions.setHasToSearch(false);
			actions.cleanExtractionData();
			newSearch.current = true;
		}
	}, [actions, hasToSearch]);
	return (
		<div className = {styles.wrapper}>
			<div className = {styles.title}>RESULTADO DE BUSCA</div>
			<div className = {styles.cards}>
				{ApiMap.map((data) => {
					return (
						<Card
							{...data}
							newSearch = {newSearch}
							key = {data.name}
						/>
					);
				})}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	hasToSearch: state.getIn(['app', 'values', 'hasToSearch']),
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
		cleanExtractionData: () => dispatch(cleanExtractionData()),
		setHasToSearch: (value) => dispatch(setAttrProps(['hasToSearch'], value)),
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
