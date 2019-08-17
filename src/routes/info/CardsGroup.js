import React from 'react';
import Card from "./Component/Card/Card";
import apiMap from './apis';

function getCardsList (properties) {
	const componentProperties = {};
	return apiMap.map((data) => {
		data.properties.forEach((property) => {
			if (typeof properties !== 'undefined' && typeof properties[property] !== 'undefined') {
				componentProperties[property] = properties[property];
			}
		});
		return (
			<div className = "column" key = {data.name}>
				<div className = "ui segment">
					<Card
						apiName = {data.name}
						properties = {componentProperties}
					/>
				</div>
			</div>
		);
	});
}

function CardsGroup (props) {
	const cardsList = getCardsList(props.properties);
	return (
		<div className = "ui three column grid">
			{cardsList}
		</div>
	);
}

export default CardsGroup;
