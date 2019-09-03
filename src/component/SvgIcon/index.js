import './SvgIcon.css';

import React from 'react';

function SvgIcon(props) {
  return (
    <div className='svg-icon'>
      <svg className={'icon-' + props.name}>
        <use href={'#icon-' + props.name}/>
      </svg>
    </div>
  );
}

export default SvgIcon;
