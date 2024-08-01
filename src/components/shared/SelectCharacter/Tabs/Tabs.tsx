import lockIcon from '@/assets/icons/lock.svg';
import trump from '@/assets/images/trump/character_model_01.svg';
import clsx from 'clsx';
import Sheet from '../../../ui/Sheet/Sheet';
import styles from './Tabs.module.css';

const Tabs = () => {
	return (
		<div className={styles.tabs}>
			<div className={styles.tabs_buttons}>
				<button
					className={clsx(
						styles['tabs_buttons-btn'],
						styles['tabs_buttons-btn-active']
					)}
				>
					Республиканцы
				</button>
				<button className={styles['tabs_buttons-btn']}>Демократы</button>
			</div>
			<div className={styles.tabs_items}>
				<Sheet color="lighter" className={styles.tabs_item}>
					<img src={trump} alt="" className={styles['tabs_item-img']} />
					<img src={lockIcon} alt="" className={styles['tabs_item-lock']} />
				</Sheet>
			</div>
		</div>
	);
};

export default Tabs;
