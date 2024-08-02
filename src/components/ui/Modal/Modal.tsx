import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { useAppDispatch } from '../../../hooks/useSelector';
import { closeAllModals } from '../../../store/modal/modal.slice';
import { IModalComponent } from './Modal.interface';
import styles from './Modal.module.css';

const Modal = ({ className, children }: IModalComponent) => {
	const dispatch = useAppDispatch();
	const rootRef = useRef<HTMLDivElement>(null);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				className={clsx(className, styles.modal)}
				onClick={event => {
					const { target } = event;

					if (target instanceof Node && !rootRef.current?.contains(target)) {
						dispatch(closeAllModals());
					}
				}}
			>
				<div className={styles.box} ref={rootRef}>
					<div className={styles.content}>{children}</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Modal;
