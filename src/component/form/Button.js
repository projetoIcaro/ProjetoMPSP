import style from './button.module.css';

import React from 'react';

function Button (props) {
	return (
		<button
			className={style.wrapper}
		>
			{props.children}
		</button>
	);
}

export default Button;
