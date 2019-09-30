import styles from './Cards.module.css';

import React from 'react';
import Card from './Card';

function Cards () {
	return (
		<div className = {styles.wrapper}>
			<div className = {styles.title}>RESULTADO DE BUSCA</div>
			<div className = {styles.cards}>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	);
}

export default Cards;
