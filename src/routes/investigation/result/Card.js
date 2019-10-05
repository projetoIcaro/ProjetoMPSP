import styles from './Card.module.css';

import React, {Fragment, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {isImmutable} from 'immutable';
import Modal from 'component/Modal';
import Spinner from "component/useless/Spinner";
import {cleanExtractionData, fetchExtractionData} from 'utils/redux/actions/app';

function Card (props) {
	const [isModalOpen, setModalOpen] = useState(false);
	const {actions, extractionData, name, searchValues, previewData} = props;
	useEffect(() => {
		actions.getExtractionData(searchValues);
	}, [actions, searchValues]);
	const handleClick = () => {
		setModalOpen(true);
	};
	const handleCloseModal = () => {
		setModalOpen(false);
	};
	const renderExtractionDataRecursively = (data = null, isPreview = false) => {
		const dataToRender = [];
		data.forEach((value, key) => {
			if (!isPreview || previewData === '*' || previewData.includes(key)) {
				dataToRender.push(
					<div className = {styles.itemData} key = {key}>
						<div className = {styles.itemDataKey}>{key + ': '}</div>
						{!isImmutable(value) ? <span>{value}</span> : renderExtractionDataRecursively(value, isPreview)}
					</div>
				);
			}
		});
		return dataToRender;
	};
	const renderExtractionData = (isPreview = false) => {
		if (!extractionData) {
			return <Spinner/>;
		}
		const dataToRender = [];
		const error = extractionData.get('error');
		if (error) {
			dataToRender.push(
				<div className = {styles.itemData} key = "error">
					<div className = {styles.itemDataKey}>{'error: '}</div> {error}
				</div>
			);
			return dataToRender;
		}
		dataToRender.push(renderExtractionDataRecursively(extractionData, isPreview));
		return dataToRender;
	};
	return (
		<Fragment>
			<div className = {styles.wrapper}>
				<div className = {styles.title}>{name}</div>
				<div className = {styles.previewInfo}>{renderExtractionData(true)}</div>
				<div className = {styles.buttonModal} onClick={handleClick}>+</div>
			</div>
			<Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
				{renderExtractionData()}
			</Modal>
		</Fragment>
	);
}

const mapStateToProps = (state, {name}) => ({
	searchValues: state.getIn(['app', 'values', 'search']),
	extractionData: state.getIn(['extraction', name]),
});

const mapDispatchToProps = (dispatch, {name, properties, port}) => ({
	actions: {
		cleanExtractionData: () => dispatch(cleanExtractionData()),
		getExtractionData: (searchValues) => dispatch(fetchExtractionData(searchValues, name, properties, port)),
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
