import styles from './Cards.module.css';

import React from 'react';
import ApiMap from 'utils/apisMap.json';
import Card from './Card';

function Cards () {
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

export default Cards;
