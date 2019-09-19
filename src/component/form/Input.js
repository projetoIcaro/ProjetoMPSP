import style from './Input.module.css';

import React, {useRef} from 'react';
import {connect} from 'react-redux';
import SvgIcon from 'component/SvgIcon';
import {setAttrProps} from 'utils/redux/actions/app';

function Input (props) {
	const inputRef = useRef();
	const {actions} = props;
	const handleChange = () => {
		actions.setAttrValue(inputRef.current.value);
	};
	return (
		<div className={style.wrapper}>
			<input
				name = {props.name}
				onChange = {handleChange}
				placeholder = {props.placeholder}
				type = {props.type}
				ref = {inputRef}
			/>
			{props.icon ? <SvgIcon/> : null}
		</div>
	);
}

const mapDispatchToProps = (dispatch, {attribute, formKey}) => ({
	actions: {
		setAttrValue: (value) => {
			return dispatch(setAttrProps(attribute, value, formKey))
		},
	}
});

export default connect(null, mapDispatchToProps)(Input);
