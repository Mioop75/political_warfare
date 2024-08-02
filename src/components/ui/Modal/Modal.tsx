import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { IModalComponent } from './Modal.interface';
import styles from './Modal.module.css';

const Modal = ({ className, children }: IModalComponent) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				className={clsx(className, styles.modal)}
			>
				<div className={styles.box}>
					<div className={styles.content}>{children}</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Modal;
