import style from './FormWrapper.module.css';

import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from 'component/form/Input';
import Button from 'component/form/Button';
import {postFormData} from 'utils/redux/actions/app';

function FormWrapper (props) {
	const [formKey] = useState(Date.now());
	const handleSubmit = (e) => {
		e.preventDefault();
		props.actions.submitForm(props.location.pathname, formKey)
	};
	return (
		<form
			autoComplete="off"
			className={style.wrapper}
			onSubmit={handleSubmit}
		>
			<h2>{props.title}</h2>
			{props.children.map((Component, key) => {
				return React.cloneElement(Component, {formKey, key})
			})}
		</form>
	);
}

const mapDispatchToProps = (dispatch) => ({
	actions: {
		submitForm: (pathname, formKey) => dispatch(postFormData(pathname, formKey)),
	}
});

export default withRouter(
	connect(null, mapDispatchToProps)(FormWrapper)
);

export {
	Button,
	Input,
};
