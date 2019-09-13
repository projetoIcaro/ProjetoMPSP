import React from 'react';
import {Form as FormSemantic} from 'semantic-ui-react';

function Form (props) {
	return (
		<FormSemantic
			action="post"
		>
			{props.children}
		</FormSemantic>
	);
}

export default Form;
