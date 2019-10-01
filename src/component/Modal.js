import styles from './Modal.module.css';

import React from 'react';
import ReactDOM from 'react-dom';

function Modal (props) {
	const {handleClose, isOpen} = props;
	const componentToRender = (
		<div className={styles.wrapper}>
			<div className={styles.modalBody}>
				<button onClick={handleClose}>Fechar</button>
				{props.children}
			</div>
		</div>
	);
	return isOpen ?
		ReactDOM.createPortal(
			componentToRender,
			document.getElementById('modal-root')
		) : null;
}

export default Modal;
