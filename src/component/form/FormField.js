import style from './FormField.module.css';

import React from 'react';

function FormField (props) {
	return (
		<div className={style.wrapper}>
			<h2>{props.title}</h2>
			{props.children}
		</div>
	);
}

export default FormField;
