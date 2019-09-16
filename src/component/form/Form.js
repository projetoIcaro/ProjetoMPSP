import React from 'react';
import {Form as FormSemantic} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postFormData} from 'utils/redux/actions/app';

function Form (props) {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.actions.submitForm(props.location.pathname)
	};
	return (
		<FormSemantic
			onSubmit={handleSubmit}
		>
			{props.children}
		</FormSemantic>
	);
}

const mapDispatchToProps = (dispatch) => ({
	actions: {
		submitForm: (pathname) => dispatch(postFormData(pathname)),
	}
});

export default withRouter(
	connect(null, mapDispatchToProps)(Form)
);
