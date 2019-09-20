import styles from './Dropdown.module.css';

import React, {useRef, useState} from 'react';
import {setAttrProps} from 'utils/redux/actions/app';
import {connect} from 'react-redux';

function Index (props) {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(false);
	// CLOSE DROPDOWN ON OUTSIDE CLICK LOGIC
	const handleClickOutside = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsOpen(false);
		}
	};
	if (isOpen) {
		document.addEventListener('mousedown', handleClickOutside);
	} else {
		document.removeEventListener('mousedown', handleClickOutside);
	}
	// END CLOSE DROPDOWN ON OUTSIDE CLICK LOGIC
	const renderList = () => {
		return props.options.map((data, index) => {
			const handleItemClick = () => {
				setIsOpen(false);
				props.actions.setAttrValue(data);
			};
			return (
				<div key={data.id} onClick={handleItemClick}>{data.label}</div>
			);
		});
	};
	return (
		<div className={styles.wrapper} ref={ref}>
			<div onClick={() => setIsOpen(!isOpen)}>
				{props.children}
			</div>
			{isOpen ? (
				<div>{renderList()}</div>
			) : null}
		</div>
	);
}

const mapDispatchToProps = (dispatch, {attribute}) => ({
	actions: {
		setAttrValue: (value) => dispatch(setAttrProps(attribute, value)),
	}
});

export default connect(null, mapDispatchToProps)(Index);
