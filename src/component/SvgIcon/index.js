import style from './SvgIcon.module.css';

import React from 'react';

function SvgIcon(props) {
  return (
		<svg className = {style.wrapper}>
			<use href = {'#icon-' + props.icon}/>
		</svg>
  );
}

export default SvgIcon;
