import './Cards.css';

import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { apiExtractor } from 'utils/axiosconfig';

function Card (props) {
	const { apiName, properties } = props;
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		apiExtractor.get(apiName, {
			params: { ...properties }
		})
			.then( res => setData(res) )
			.finally(() => setLoading(false));
	}, []);
	return (
		<div className="ui card">
			<div className="content">
				<div className="header">{apiName}</div>
				<div className="description ui segment">
					{loading ? (
						<div className="ui active dimmer">
							<div className="ui text loader">Loading</div>
						</div>
					) : (
						<div>INFORMACOES LEGAIS</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
