import style from './SvgIcon.module.css';

import cn from 'classnames';
import React from 'react';

function SvgIcon(props) {
  return (
		<svg className={cn(style.wrapper, 'svg-icon')}>
			<use href={'#icon-' + props.name}/>
		</svg>
  );
}

export default SvgIcon;
