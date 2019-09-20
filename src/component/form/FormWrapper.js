import style from './FormWrapper.module.css';

import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from 'component/form/Input';
import Button from 'component/form/Button';
import {postFormData} from 'utils/redux/actions/app';

// aqui nesse componente tem um problema que ele se atualiza a cada alteracao do formulario,
// o motivo é pq eu preciso do formData na funcao submitForm
// eu nao tenho uma solucao pra isso agora.

function FormWrapper (props) {
	const [formKey] = useState(Date.now());
	const handleSubmit = (e) => {
		e.preventDefault();
		props.actions.submitForm(props.formData(formKey), props.location.pathname)
	};
	return (
		<form
			autoComplete="off"
			className = {style.wrapper}
			onSubmit = {handleSubmit}
		>
			<h2>{props.title}</h2>
			{props.children.map((Component, key) => {
				return React.cloneElement(Component, {formKey, key})
			})}
		</form>
	);
}

const mapStateToProps = (state) => ({
	formData: (formKey) => state.getIn(['form', formKey]),
});

const mapDispatchToProps = (dispatch) => ({
	actions: {
		submitForm: (formData, pathname) => dispatch(postFormData(formData, pathname)),
	}
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(FormWrapper)
);

export {
	Button,
	Input,
};
