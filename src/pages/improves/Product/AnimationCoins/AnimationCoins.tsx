import coinIcon from '@/assets/icons/coin-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './AnimationCoins.module.css';

const AnimationCoins = () => {
	return (
		<AnimatePresence mode="wait">
			<div className={styles.coins}>
				<motion.div
					initial={{ y: 0, x: 0 }}
					animate={{ y: -3, x: 0 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 40 }}
					animate={{ y: -13, x: 40 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 80 }}
					animate={{ y: -7, x: 80 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 120 }}
					animate={{ y: -2, x: 120 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 0, opacity: 1 }}
					animate={{ y: -40, x: 0 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 40, opacity: 1 }}
					animate={{ y: -60, x: 40, opacity: 0.8 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 75, opacity: 1 }}
					animate={{ y: -45, x: 75 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 120, opacity: 1 }}
					animate={{ y: -54, x: 120, opacity: 0.8 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 0, opacity: 1 }}
					animate={{ y: -85, x: 5, opacity: 0.5 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 45, opacity: 1 }}
					animate={{ y: -100, x: 54, opacity: 0.5 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 0, x: 32, opacity: 1 }}
					animate={{ y: -85, x: 75, opacity: 0.5 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
			</div>
		</AnimatePresence>
	);
};

export default AnimationCoins;
