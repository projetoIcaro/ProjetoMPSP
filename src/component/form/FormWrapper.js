import style from './FormWrapper.module.css';

import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {postFormData} from 'utils/redux/actions/app';
import Input from 'component/form/Input';
import Button from 'component/form/Button';

function FormWrapper (props) {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.actions.submitForm(props.location.pathname)
	};
	const [formKey] = useState(Date.now());
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
		submitForm: (pathname) => dispatch(postFormData(pathname)),
	}
});

export default withRouter(
	connect(null, mapDispatchToProps)(FormWrapper)
);

export {
	Button,
	Input,
};
