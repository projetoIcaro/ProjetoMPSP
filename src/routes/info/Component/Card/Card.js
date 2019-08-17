import './Cards.css';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

async function hardcodedSearch  (properties, apiName) {
	await axios.get('http://localhost:3001/api/DataExtraction/' + apiName, {
		params: {
			...properties,
		}
	}).then(res => console.log(res))
}

function Card (props) {
	const { apiName, properties } = props;
	hardcodedSearch(properties, apiName);
	return (
		<div className="ui card">
			<div className="content">
				<div className="header">{apiName}</div>
				<div className="description ui segment">
					<div className="ui active dimmer">
						<div className="ui text loader">Loading</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;