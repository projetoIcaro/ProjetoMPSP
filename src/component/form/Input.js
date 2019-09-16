import style from './Input.module.css';

import React from 'react';
import SvgIcon from '../SvgIcon';

function Input (props) {
	return (
		<div className={style.wrapper}>
			<input
				name={props.name}
				placeholder={props.placeholder}
			/>
			{props.icon ? <SvgIcon/> : null}
		</div>
	);
}

export default Input;
