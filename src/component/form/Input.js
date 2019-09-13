import React from 'react';
import {Icon as IconSemantic, Input as InputSemantic} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function Input (props) {
	return (
		<div>
			<InputSemantic
				icon={true}
				placeholder={props.placeholder}
				size={props.size}
			>
				<input/>
				<IconSemantic name={props.icon}/>
			</InputSemantic>
		</div>
	);
}

export default Input;
