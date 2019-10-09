import styles from './Input.module.css';

import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {setAttrProps} from 'utils/redux/actions/app';
import SvgIcon from 'component/SvgIcon';

function Input (props) {
	const inputRef = useRef();
	const {actions} = props;
	const handleChange = () => {
		actions.setAttrValue(inputRef.current.value);
	};
	const handleCleanInput = () => {
		actions.setAttrValue('');
	};
	const handleIconClick = (e) => {
		handleCleanInput();
		props.handleIconClick(e);
	};
	const resolvedAttrValue = props.attrValue || '';
	return (
		<div className={styles.wrapper}>
			<div className = {styles.iconSearch}>
				<SvgIcon icon = "search"/>
			</div>
			<input
				name = {props.name}
				onChange = {handleChange}
				placeholder = {props.placeholder}
				ref = {inputRef}
				type = {props.type}
				value = {resolvedAttrValue}
			/>
			{props.icon ?
				<div className = {styles.iconLess} onClick={handleIconClick}>
					<SvgIcon icon={props.icon}/>
				</div>
				: null}
		</div>
	);
}

const mapStateToProps = (state, {attribute, formKey}) => {
	let resolvedAttribute = [];
	if (formKey) resolvedAttribute = ['form', formKey].concat(attribute);
	else resolvedAttribute = ['app', 'values'].concat(attribute)
	return {
		attrValue: state.getIn(resolvedAttribute),
	};
};

const mapDispatchToProps = (dispatch, {attribute, formKey}) => ({
	actions: {
		setAttrValue: (value) => {
			return dispatch(setAttrProps(attribute, value, formKey))
		},
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
