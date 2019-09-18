import style from './Button.module.css';

import React from 'react';

function Button (props) {
	return (
		<div className={style.wrapper}>
			<button>
				{props.children}
			</button>
		</div>
	);
}

export default Button;
