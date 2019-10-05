import styles from './Modal.module.css';

import React from 'react';
import ReactDOM from 'react-dom';
import SvgIcon from 'component/SvgIcon';

function Modal (props) {
	const {handleClose, isOpen} = props;
	const componentToRender = (
		<div className={styles.wrapper}>
			<div className={styles.modalBody}>
				<div className={styles.modalHeader}>
					<div className={styles.closeIcon} onClick={handleClose}><SvgIcon icon = "close"/></div>
				</div>
				<div className={styles.modalChildren}>{props.children}</div>
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
