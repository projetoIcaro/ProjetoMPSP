import style from './FormField.module.css';

import React from 'react';
import {Segment as SegmentSemantic} from 'semantic-ui-react';

function FormField (props) {
	return (
		<SegmentSemantic
			className={style.wrapper}
		>
			{props.children}
		</SegmentSemantic>
	);
}

export default FormField;
