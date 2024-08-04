import coinIcon from '@/assets/icons/coin-icon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './AnimationCoins.module.css';

const AnimationCoins = () => {
	const [a, seta] = useState<{ y: number; x: number }[]>([
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
	]);

	useEffect(() => {
		const time = setTimeout(() => {
			seta(prev => [
				...prev,
				{ y: 0, x: 0 },
				{ y: -20, x: 45 },
				{ y: -12, x: 82 },
				{ y: 0, x: 120 },
			]);
		}, 200);

		if (a.length > 20) clearTimeout(time);
	}, [a]);

	return (
		<AnimatePresence mode="wait">
			<div className={styles.coins}>
				{a.map((a, i) => (
					<motion.div
						key={i}
						initial={{ y: a.y, x: a.x, opacity: 1 }}
						animate={{ y: -200, x: -100, opacity: 0 }}
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
