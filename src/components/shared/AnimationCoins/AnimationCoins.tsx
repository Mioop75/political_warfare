import coinIcon from '@/assets/icons/coin-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './AnimationCoins.module.css';

const AnimationCoins = () => {
	const [a] = useState<{ y: number; x: number }[]>([
		{
			y: 0,
			x: 0,
		},
		{
			y: 0,
			x: 45,
		},
		{
			y: 0,
			x: 85,
		},
		{
			y: 0,
			x: 100,
		},
		{
			y: 0,
			x: 150,
		},
		{
			y: 0,
			x: 200,
		},
		{
			y: 0,
			x: 250,
		},
		{
			y: 0,
			x: 300,
		},
		{
			y: 0,
			x: 350,
		},
	]);

	return (
		<AnimatePresence mode="wait">
			<div className={styles.coins}>
				{a.map((a, i) => (
					<motion.div
						key={i}
						initial={{ y: a.y, x: a.x, opacity: 1 }}
						animate={{ y: -500, x: 400, opacity: 0 }}
						transition={{
							type: 'spring',
							duration: 5,
							damping: 30,
						}}
						className={styles.img}
					>
						<img src={coinIcon} alt="" />
					</motion.div>
				))}
			</div>
		</AnimatePresence>
	);
};

export default AnimationCoins;
