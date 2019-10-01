import style from './Button.module.css';

import React from 'react';

function Button (props) {
	const buttonType = props.type || 'button';
	return (
		<div className={style.wrapper}>
			<button
				onClick={props.handleClick}
				type={buttonType}
			>
				{props.children}
			</button>
		</div>
	);
}

export default Button;
