import { AnimatePresence, motion } from 'framer-motion';
import { ITappingComponent } from './Tapping.interface';
import styles from './Tapping.module.css';

const Tapping = ({ clientX, style }: ITappingComponent) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 1 }}
				animate={{
					transform: `translateX(${clientX}px) translateY(0px)`,
					opacity: 0,
				}}
				exit={{ opacity: 0 }}
				transition={{
					x: { type: 'spring', stiffness: 300, damping: 30 },
					opacity: { duration: 0.2 },
				}}
				style={style}
				className={styles.tapping}
			>
				+1
			</motion.div>
		</AnimatePresence>
	);
};

export default Tapping;
