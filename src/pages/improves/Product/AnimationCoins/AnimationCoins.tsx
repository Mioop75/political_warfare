import coinIcon from '@/assets/icons/coin-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './AnimationCoins.module.css';

const AnimationCoins = () => {
	return (
		<AnimatePresence mode="wait">
			<div className={styles.coins}>
				<motion.div
					initial={{ y: 20, x: 0, opacity: 1 }}
					animate={{ y: -50, opacity: 0 }}
					transition={{
						type: 'spring',
						duration: 0.3,
						damping: 30,
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 15, x: 30, opacity: 1 }}
					animate={{ y: -50, opacity: 0 }}
					transition={{
						type: 'spring',
						duration: 0.3,
						damping: 30,
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 15, x: 65, opacity: 1 }}
					animate={{ y: -50, opacity: 0 }}
					transition={{
						type: 'spring',
						duration: 0.3,
						damping: 30,
					}}
					className={styles.img}
				>
					<img src={coinIcon} alt="" />
				</motion.div>
				<motion.div
					initial={{ y: 10, x: 100, opacity: 1 }}
					animate={{ y: -50, opacity: 0 }}
					transition={{
						type: 'spring',
						duration: 0.3,
						damping: 30,
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
