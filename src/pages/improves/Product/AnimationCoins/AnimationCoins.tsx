import coinsImg from '@/assets/images/improves/animations.png';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './AnimationCoins.module.css';

const AnimationCoins = () => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ y: '-60%', height: 0, opacity: 0 }}
				animate={{ y: '-68%', height: '314px', opacity: 1 }}
				exit={{ y: '-60%', height: 0, opacity: 0 }}
				transition={{ bounce: 3000 }}
				className={styles.coins}
			>
				<img src={coinsImg} alt="" />
			</motion.div>
		</AnimatePresence>
	);
};

export default AnimationCoins;
