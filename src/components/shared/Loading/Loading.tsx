import logo from '@/assets/icons/logo.svg';
import { AnimatePresence, motion } from 'framer-motion';
import Text from '../../ui/Text/Text';
import styles from './Loading.module.css';

const Loading = () => {
	return (
		<div className={styles.loading}>
			<img src={logo} alt="" className={styles.logo} />
			<div className={styles.progress}>
				<Text className={styles.progress_info}>Загрузка</Text>
				<div className={styles.bar}>
					<div className={styles.bar_wrapper}>
						<div className={styles.box}>
							<AnimatePresence mode="sync">
								<motion.div
									initial={{ width: '0%' }}
									animate={{ width: '100%' }}
									transition={{ duration: 5 }}
									className={styles.line}
								></motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
