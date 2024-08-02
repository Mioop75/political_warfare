import testImg from '@/assets/images/trump/character_model_01.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import ArrowIcon from '../../../ArrowIcon/ArrowIcon';
import styles from './Slider.module.css';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const Slider = () => {
	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<div className={styles.slider}>
			<button className={styles.btn} onClick={() => paginate(-1)}>
				<ArrowIcon className={styles.btn_icon} direction="left" />
			</button>
			<AnimatePresence>
				<motion.img
					className={styles.img}
					key={page}
					src={testImg}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(_, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				></motion.img>
			</AnimatePresence>
			<button className={styles.btn} onClick={() => paginate(1)}>
				<ArrowIcon className={styles.btn_icon} />
			</button>
		</div>
	);
};

export default Slider;
