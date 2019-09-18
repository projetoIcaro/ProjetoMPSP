import style from './Input.module.css';

import React, {useRef} from 'react';
import SvgIcon from 'component/SvgIcon';
import {connect} from 'react-redux';
import {setAttrProps} from 'utils/redux/actions/app';

function Input (props) {
	const inputRef = useRef();
	const {actions} = props;
	let timeout = null;
	const handleChange = (e) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			actions.setAttrValue(inputRef.current.value);
		}, 1000);
	};
	return (
		<div className={style.wrapper}>
			<input
				name={props.name}
				onChange={handleChange}
				placeholder={props.placeholder}
				ref={inputRef}
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
