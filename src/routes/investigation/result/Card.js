import styles from './Card.module.css';

import React, {Fragment, useState} from 'react';
import Modal from 'component/Modal';

function Card (props) {
	const [isModalOpen, setModalOpen] = useState(false);
	const handleClick = () => {
		setModalOpen(true);
	};
	const handleCloseModal = () => {
		setModalOpen(false);
	};
	return (
		<Fragment>
			<div className={styles.wrapper} onClick={handleClick}>
				<span>{props.name}</span>
			</div>
			<Modal isOpen={isModalOpen} handleClose={handleCloseModal}>
				{props.name}
			</Modal>
		</Fragment>
	);
}

export default Card;
